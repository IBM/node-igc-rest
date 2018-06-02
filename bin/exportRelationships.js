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
 * // Given a file 'assetsAssignedToTerms.json' with the following contents...
 * // {
 * //   "query":
 * //   {
 * //     "properties": ["assigned_assets"],
 * //     "types": ["term"],
 * //     "where":
 * //     {
 * //       "operator": "and",
 * //       "conditions": [
 * //         {
 * //           "property": "category_path._id",
 * //           "operator": "=",
 * //           "value": "6662c0f2.e1b1ec6c.svu583pvk.3sr7b7n.mq748u.ru37pccq07437ncqvhvjs"
 * //         }
 * //       ]
 * //     }
 * //   },
 * //   "limitTo":
 * //   {
 * //     
 * //   }
 * // }
 * // ... this command queries IGC for any terms under the category with RID "6662c0f2.e1b1ec6c.svu583pvk.3sr7b7n.mq748u.ru37pccq07437ncqvhvjs" and extracts full contextual details for all of their 'assigned_assets'
 * findAssets -f assignTermToMyDbTable.json
 * @example
 * // Given a file 'deleteMyDbTable.json' with the following contents...
 * // {
 * //   "query":
 * //   {
 * //     "properties": ["name"],
 * //     "types": ["database_table"],
 * //     "where":
 * //     {
 * //       "operator": "and",
 * //       "conditions": [
 * //         {
 * //           "property": "name",
 * //           "operator": "=",
 * //           "value": "$DB_NAME"
 * //         }
 * //       ]
 * //     }
 * //   },
 * //   "delete": true
 * // }
 * findAssets -f deleteMyDbTable.json
 * // ... this command queries IGC for any databsae tables whose name matches an environment variable $DB_NAME's value, and deletes them from IGC
 * @example
 * // Given a file 'findDbTables.json' with the following contents...
 * // {
 * //   "query":
 * //   {
 * //     "properties": ["name"],
 * //     "types": ["database_table"]
 * //   }
 * // }
 * findAssets -f findDbTables.json -p isadmin
 * // ... this command queries IGC for all database tables, and outputs the results into 'findDbTables.json.results', using the password 'isadmin' for the details taken from the default authorisation file (~/.infosvrauth)
 */

const fs = require('fs');
const igcrest = require('ibm-igc-rest');
const commons = require('ibm-iis-commons');
const prompt = require('prompt');
const pd = require('pretty-data').pd;
prompt.colors = false;

const yargs = require('yargs');
const argv = yargs
    .usage('Usage: $0 -t <type> -r <property> -o <file> [-c \'<conditions>\' -l <type> -b <integer>]')
    .example('$0 -f myQuery.json', 'queries IGC based on the contents of the file myQuery.json')
    .alias('t', 'asset_type').nargs('t', 1).describe('t', 'IGC asset type from which to retrieve relationships')
    .alias('r', 'relationship').nargs('r', 1).describe('r', 'IGC property giving the relationships that should be exported')
    .alias('o', 'output').nargs('o', 1).describe('o', 'Output file into which to write the results')
    .alias('c', 'conditions').nargs('c', 1).describe('c', 'JSON string giving any conditions that should limit the assets for which to export relationships')
    .alias('l', 'limit').nargs('l', 1).describe('l', 'Only include relationships to this IGC asset type')
    .alias('b', 'batchsize').nargs('b', 1).describe('b', 'The number of objects that should be retrieved each REST call')
    .alias('a', 'authfile').nargs('a', 1).describe('a', 'Authorisation file containing environment context')
    .alias('p', 'password').nargs('p', 1).describe('p', 'Password for invoking REST API')
    .demandOption(['t', 'r'])
    .help('h')
    .alias('h', 'help')
    .wrap(yargs.terminalWidth())
    .argv;

const envCtx = new commons.EnvironmentContext(null, argv.authfile);

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

const reqJSON = {
  "properties": [ argv.relationship ],
  "types": [ argv.asset_type ],
  "pageSize": argv.batchsize
};

let relnCount = 0;
const bLimit = (typeof argv.limit !== 'undefined' && argv.limit !== null && argv.limit !== "");
const bConditions = (typeof argv.conditions !== 'undefined' && argv.conditions !== null && argv.conditions !== "");
if (bConditions) {
  reqJSON.where = {
    "conditions": JSON.parse(argv.conditions),
    "operator": "and"
  }
}

prompt.start();
prompt.get(inputPrompt, function (err, result) {

  igcrest.setConnection(envCtx.getRestConnection(result.password));
  igcrest.openSession().then(function() {

    const getAllAssets = new Promise(function(resolve, reject) {
      console.log("1 - Retrieving all assets of type '" + argv.asset_type + "'...");
      if (bConditions) {
        console.log("    (limited by conditions: " + argv.conditions + " )");
      }
      igcrest.search(reqJSON).then(function(resSearch) {
        igcrest.getAllPages(resSearch.items, resSearch.paging).then(function(allAssets) {
          console.log("    ---> " + allAssets.length + " " + argv.asset_type + "s retrieved.");
          resolve(allAssets);
        });
      });
    });

    getAllAssets.then(function(allAssets) {

      console.log("2 - Retrieving full relationship details for the property '" + argv.relationship + "'...");
      if (bLimit) {
        console.log("    (limiting only to relationships to asset type '" + argv.limit + "')");
      }
      const exportResult = allAssets.map(function(asset) {
        return new Promise(function(resolve, reject) {
          igcrest.getAllPages(asset[argv.relationship].items, asset[argv.relationship].paging).then(function(allRelnForAsset) {

            const getRelationshipContext = allRelnForAsset.map(function(relnWithoutCtx) {
              return new Promise(function(resolveCtx, rejectCtx) {
                if (bLimit && argv.limit !== relnWithoutCtx._type) {
                  // Not a type we're interested in, so just resolve
                  resolveCtx({});
                } else {
                  const reqRelationship = {
                    "properties": [ "name" ],
                    "types": [ relnWithoutCtx._type ],
                    "where": {
                      "conditions": [{
                        "value": relnWithoutCtx._id,
                        "operator": "=",
                        "property": "_id"
                      }],
                      "operator": "and"
                    }
                  };
                  igcrest.search(reqRelationship).then(function(relnWithCtx) {
                    const relnRID = relnWithCtx.items[0]._id;
                    for (let i = 0; i < asset[argv.relationship].items.length; i++) {
                      const reln = asset[argv.relationship].items[i];
                      if (reln._id === relnRID) {
                        reln._context = relnWithCtx.items[0]._context;
                        relnCount++;
                        resolveCtx(reln);
                      }
                    }
                  }, function(failure) {
                    rejectCtx(failure);
                  });
                }
              });
            });

            Promise.all(getRelationshipContext).then(function(contextualisedRelns) {
              delete asset[argv.relationship].items;
              asset[argv.relationship].items = contextualisedRelns;
              resolve(asset);
            });

          });
        });
      });
      return Promise.all(exportResult);

    }).then(function(assetsWithCtx) {
      console.log("    ---> " + relnCount + " " + argv.relationship + " relationships retrieved.");
      fs.writeFileSync(argv.output, pd.json(JSON.stringify(assetsWithCtx)), 'utf8');
      igcrest.closeSession().then(function() {
        console.log("Relationships exported to '" + argv.output + "'.");
      }, function(failure) {
        console.log("Relationships exported to '" + argv.output + "', but unable to close session: " + JSON.stringify(failure));
      });
    })
    .catch(console.error);

  });

});
