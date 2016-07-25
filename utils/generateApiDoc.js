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

/**
 * @file This script will create documentation on the various types and URLs available within the Information Governance Catalog REST API
 * @license Apache-2.0
 * @requires underscore
 * @requires ibm-igc-rest
 * @requires yargs
 * @example
 * // creates a markdown file containing documentation on all of the data types and their properties
 * ./generateApiDoc.js -f ../docs/igcRestAPI.md -d hostname:9445 -u isadmin -p isadmin
 */

const fs = require('fs');
const os = require('os');
var igcrest = require('../');
var _ = require('underscore');

// Command-line setup
var yargs = require('yargs');
var argv = yargs
    .usage('Usage: $0 -f <path> -d <host>:<port> -u <user> -p <password>')
    .option('f', {
      alias: 'file',
      describe: 'Output file into which to create the documentation',
      default: '../docs/igcRestAPI.md',
      demand: true, requiresArg: true, type: 'string'
    })
    .env('DS')
    .option('d', {
      alias: 'domain',
      describe: 'Host and port for invoking IGC REST',
      default: 'datalake:9445',
      demand: true, requiresArg: true, type: 'string'
    })
    .option('u', {
      alias: 'deployment-user',
      describe: 'User for invoking IGC REST',
      default: 'isadmin',
      demand: true, requiresArg: true, type: 'string'
    })
    .option('p', {
      alias: 'deployment-user-password',
      describe: 'Password for invoking IGC REST',
      default: 'isadmin',
      demand: true, requiresArg: true, type: 'string'
    })
    .help('h')
    .alias('h', 'help')
    .wrap(yargs.terminalWidth())
    .argv;

var filename = argv.file;
var host_port = argv.domain.split(":");
igcrest.setAuth(argv.deploymentUser, argv.deploymentUserPassword);
igcrest.setServer(host_port[0], host_port[1]);

const basicTypes = { 'string':0, 'boolean':0, 'datetime':0, 'number':0, 'note':0, 'external_asset_reference':0 };

var documentation = {}

function readyForOutput(numTypes) {
  return (Object.keys(documentation).length == numTypes);
}

var fd = fs.openSync(filename, 'w', 0o644);
outputIt("# Information Governance Catalog REST API");

igcrest.getTypes(function(err, resTypes) {
  var types = _.pluck(resTypes, "_id");
  for (var i = 0; i < types.length; i++) {
    var type = types[i];
    igcrest.getOther("/ibm/iis/igc-rest/v1/types/" + type + "?showEditProperties=true&showViewProperties=true&showCreateProperties=true", function(res, resProps) {
      var err = null;
      if (res.statusCode != 200) {
        err = "Unsuccessful request " + res.statusCode;
        console.error(err);
        console.error('headers: ', res.headers);
        throw new Error(err);
      }
      var type = resProps._id;
      documentation[type] = parsePropertiesForType(resProps);
      if (readyForOutput(types.length)) {
        outputDocumentation();
      }
    });
  }
});

function outputDocumentation() {
  var aAlphaKeys = Object.keys(documentation).sort();
  for (var i = 0; i < aAlphaKeys.length; i++) {
    var type = aAlphaKeys[i];
    outputIt(documentation[type]);
  }
  wrapUp(0);
}

function outputIt(someString) {
  fs.appendFileSync(filename, someString + os.EOL);
}

function wrapUp(rc) {
  fs.closeSync(fd);
  process.exit(rc);
}

function getSubURL(type, url) {
  var strippedURL = url.substring(21, url.length);
  return "[" + strippedURL + "](#" + type.toLowerCase() + ")";
}

function parsePropertyRow(name, displayName, type, typeObj, maxNum, required) {

  var outputName = name;
  var outputType = type;
  var outputDetails = "_\"" + displayName + "\"_";

  if (maxNum > 1) {
    outputName = "_" + outputName + "_";
  }
  if (required) {
    outputName = "**" + outputName + "**";
  }

  if (type == "enum") {
    var valuesString = "";
    var validVals = typeObj.validValues;
    for (var i = 0; i < validVals.length; i++) {
      var valueId = validVals[i].id;
      valuesString += "`" + valueId + "`, ";
    }
    outputDetails = outputDetails + ": " + valuesString.substring(0, valuesString.length - 2);
  } else if (typeObj.hasOwnProperty("url")) {
    outputType = "[" + type + "](#" + type.toLowerCase() + ")";
  } else if (!basicTypes.hasOwnProperty(type)) {
    outputDetails = outputDetails + ": UNKNOWN complexType = `" + JSON.stringify(typeObj, null, 2) + "`";
  }
  return "| " + outputName + " | " + outputType + " | " + outputDetails + " |\n";

}

function parseTableForProperties(sValidity, aProps) {

  var text = "";
  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i].name;
    var propType = aProps[i].type.name;
    var required = aProps[i].hasOwnProperty("minCardinality");
    var maxNum   = 1;
    if (aProps[i].hasOwnProperty("maxCardinality")) {
      maxNum = aProps[i].maxCardinality;
    }
    var propDisplay = aProps[i].displayName;
    text = text + parsePropertyRow(propName, propDisplay, propType, aProps[i].type, maxNum, required);
  }

  return "\n"
        + "#### " + sValidity + "\n"
        + "\n"
        + "| Name | Type | Details |\n"
        + "| ---- | ---- | ---- |\n"
        + text;

}

function parsePropertiesForType(jsonProps) {
  
  var id   = jsonProps._id;
  var name = jsonProps._name;
  var url  = jsonProps._url;

  var text = "\n"
            + "## `" + id + "`\n"
            + "\n"
            + "- Displayed as: _\"" + name + "\"_\n"
            + "- Path: " + getSubURL(id, url) + "\n";

  var create = [];
  var edit = [];
  var view = [];
  if (jsonProps.hasOwnProperty("createInfo") && jsonProps.createInfo.hasOwnProperty("properties")) {
    create = jsonProps.createInfo.properties;
  }
  if (jsonProps.hasOwnProperty("editInfo") && jsonProps.editInfo.hasOwnProperty("properties")) {
    edit = jsonProps.editInfo.properties;
  }
  if (jsonProps.hasOwnProperty("viewInfo") && jsonProps.viewInfo.hasOwnProperty("properties")) {
    view = jsonProps.viewInfo.properties;
  }

  if (create.length > 0) {
    text = text + parseTableForProperties("Properties valid for creation:", create);
  }

  if (edit.length > 0) {
    text = text + parseTableForProperties("Properties valid for editing:", edit);
  }

  if (view.length > 0) {
    text = text + parseTableForProperties("Properties valid for viewing:", view);
  }

  return text;

}
