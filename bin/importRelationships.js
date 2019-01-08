#!/usr/bin/env node

/***
 * Copyright 2018 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

/**
 * @file Run a query for IGC assets and (optionally) take action against the results -- based on a JSON file which defines the query to run and the action to be taken on the results; environment variable names can be used to define variables to pass-through to the query
 * @license Apache-2.0
 * @requires ibm-igc-rest
 * @requires ibm-iis-commons
 * @requires prompt
 * @requires pretty-data
 * @requires yargs
 * @see module:ibm-iis-commons~createInfoSvrAuthFile
 * @example
 * // imports all assigned_assets relationships from the file 'all.json', mapping identity characteristics from ???, and batching REST calls in 100 objects at a time
 * ./importRelationships.js -t term -r assigned_assets -i all.json -m '???' -b 100
 */

const fs = require('fs');
const igcrest = require('ibm-igc-rest');
const commons = require('ibm-iis-commons');
const prompt = require('prompt');
prompt.colors = false;

const yargs = require('yargs');
const argv = yargs
    .usage('Usage: $0 -t <type> -r <property> -i <file> [-m \'<mapping>\' -b <integer>]')
    .example('$0 -f myQuery.json', 'queries IGC based on the contents of the file myQuery.json')
    .alias('t', 'asset_type').nargs('t', 1).describe('t', 'IGC asset type from which to retrieve relationships')
    .alias('r', 'relationship').nargs('r', 1).describe('r', 'IGC property giving the relationships that should be exported')
    .alias('i', 'input').nargs('o', 1).describe('i', 'Input file from which to read the relationships')
    .alias('m', 'mapping').nargs('m', 1).describe('m', 'JSON string giving any mapping that should be applied ???')
    .alias('b', 'batchsize').nargs('b', 1).describe('b', 'The number of objects that should be retrieved each REST call')
    .alias('a', 'authfile').nargs('a', 1).describe('a', 'Authorisation file containing environment context')
    .alias('p', 'password').nargs('p', 1).describe('p', 'Password for invoking REST API')
    .demandOption(['t', 'r', 'i'])
    .help('h')
    .alias('h', 'help')
    .wrap(yargs.terminalWidth())
    .argv;

const envCtx = new commons.EnvironmentContext(null, argv.authfile);

const checkStats = fs.statSync(argv.input);
if (!checkStats.isFile()) {
  console.error("ERROR: Unable to find file at location " + argv.input);
  process.exit(1);
}

prompt.override = argv;

const inputPrompt = {
  properties: {
    password: {
      hidden: true,
      required: true,
      message: "Please enter the password for user '" + envCtx.username + "': "
    }
  }
};
prompt.message = "";
prompt.delimiter = "";

const input = fs.readFileSync(argv.input, 'utf8');
const allAssets = JSON.parse(input);

let relnCount = 0;
let mapping = {};
const bMapping = (typeof argv.mapping !== 'undefined' && argv.mapping !== null && argv.mapping !== "");
if (bMapping) {
  mapping = JSON.parse(argv.mapping);
}

prompt.start();
prompt.get(inputPrompt, function (err, result) {

  igcrest.setConnection(envCtx.getRestConnection(result.password));
  igcrest.openSession().then(function() {

    const mapAllAssets = allAssets.map(function(asset) {
      return new Promise(function(resUpdate, rejUpdate) {

        if (asset._type === argv.asset_type) {
          //console.log("Determining mapped RID for asset: " + asset._id);
          igcrest.getRIDFromItem(asset, mapping).then(function(baseRID) {
  
            const getBaseAsset = new Promise(function(resolve, reject) {
              if (baseRID === asset._id) {
                //console.log("   unmapped, resolving original.");
                resolve(asset);
              } else {
                igcrest.getAssetPropertiesById(baseRID, argv.asset_type, ["name"], 1, true).then(function(resAsset) {
                  //console.log("   mapped to: " + resAsset._id);
                  resolve(resAsset);
                }, function(failure) {
                  reject(failure);
                });
              }
            });
            
            const aRelns = asset[argv.relationship].items;
            const mapRIDs = aRelns.map(function(reln) {
              return new Promise(function(resolve, reject) {
                //console.log("Determining mapped relationship for reln: " + reln._id);
                igcrest.getRIDFromItem(reln, mapping).then(function(relnRid) {
                  //console.log("   mapped to: " + relnRid);
                  resolve(relnRid);
                }, function(failure) {
                  reject(failure);
                });
              });
            });
            getBaseAsset.then(function(baseAsset) {
              Promise.all(mapRIDs).then(function(allRelnRIDs) {
                // TODO: take in additional parameters for mode, replacement type, conditions
                //console.log("Adding relationships...");
                relnCount += allRelnRIDs.length;
                igcrest.addRelationshipToAsset(baseAsset, allRelnRIDs, argv.relationship, "REPLACE_ALL", null, [], argv.batchsize).then(function(success) {
                  resUpdate(success);
                });
              });
            });
          });
        } else {
          resUpdate();
        }

      });
    });

    return Promise.all(mapAllAssets);

  }).then(function(mappingResults) {
    //console.log("Results: " + require('util').inspect(mappingResults));
    console.log("    ---> " + mappingResults.length + " " + argv.asset_type + " updates made.");
    console.log("    ---> " + relnCount + " " + argv.relationship + " relationships set.");
    igcrest.closeSession().then(function() {
      console.log("Relationships loaded from '" + argv.input + "'.");
    }, function(failure) {
      console.log("Relationships loaded from '" + argv.input + "', but unable to close session: " + JSON.stringify(failure));
    });
  })
  .catch(console.error);

});
