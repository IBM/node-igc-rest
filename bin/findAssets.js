#!/usr/bin/env node

/***
 * Copyright 2016 IBM Corp. All Rights Reserved.
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
 * // Given a file 'assignTermToMyDbTable.json' with the following contents...
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
 * //           "value": "MY_DB_TABLE"
 * //         }
 * //       ]
 * //     }
 * //   },
 * //   "update":
 * //   {
 * //     "value":
 * //     {
 * //       "assigned_to_terms": ["6662c0f2.e1b1ec6c.svu583pvk.3sr7b7n.mq748u.ru37pccq07437ncqvhvjs"]
 * //     }
 * //   }
 * // }
 * // ... this command queries IGC for any database tables whose name is 'MY_DB_TABLE' and assigns them to the term with RID '6662c0f2.e1b1ec6c.svu583pvk.3sr7b7n.mq748u.ru37pccq07437ncqvhvjs'
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
    .usage('Usage: $0 -f <path>')
    .option('f', {
      alias: 'file',
      describe: 'JSON file containing query and delete to be made',
      demand: true, requiresArg: true, type: 'string'
    })
    .option('a', {
      alias: 'authfile',
      describe: 'Authorisation file containing environment context',
      requiresArg: true, type: 'string'
    })
    .option('p', {
      alias: 'password',
      describe: 'Password for invoking REST API',
      demand: false, requiresArg: true, type: 'string'
    })
    .help('h')
    .alias('h', 'help')
    .wrap(yargs.terminalWidth())
    .argv;

const envCtx = new commons.EnvironmentContext(null, argv.authfile);

const inputFile = argv.file;
const checkStats = fs.statSync(inputFile);
if (!checkStats.isFile()) {
  console.error("ERROR: Unable to find file at location " + inputFile);
  process.exit(1);
}
const outputFile = inputFile + ".results";

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

const input = fs.readFileSync(inputFile, 'utf8');
const reqJSON = JSON.parse(input);

const reqQueryJSON = igcrest.replaceQueryVars(reqJSON.query, process.env);
const bIsDelete = reqJSON.hasOwnProperty("delete");
const bIsUpdate = reqJSON.hasOwnProperty("update");

function logActionResult(err, result) {
  if (err !== null) {
    console.error("Action failed: " + err);
  } else {
    igcrest.logUpdateResults(result);
  }
}

prompt.start();
prompt.get(inputPrompt, function (err, result) {
  igcrest.setConnection(envCtx.getRestConnection(result.password));
  igcrest.search(reqQueryJSON).then(function(resSearch) {
    if (!bIsUpdate && !bIsDelete) {
      fs.writeFileSync(outputFile, pd.json(JSON.stringify(resSearch.items)), 'utf8');
    } else {
      for (let i = 0; i < resSearch.items.length; i++) {
        const itemDetails = resSearch.items[i];
        if (bIsDelete) {
          igcrest.deleteAssetById(itemDetails._id, logActionResult);
        } else if (bIsUpdate) {
          igcrest.update(itemDetails._id, reqJSON.update.value, logActionResult);
        }
      }
    }
  }, function(error) {
    console.error(error);
  });
});
