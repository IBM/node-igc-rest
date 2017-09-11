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
 * @file This script will create documentation on the various types and URLs available within the Information Governance Catalog REST API
 * @license Apache-2.0
 * @requires underscore
 * @requires ibm-igc-rest
 * @requires ibm-iis-commons
 * @requires prompt
 * @requires yargs
 * @see module:ibm-iis-commons~createInfoSvrAuthFile
 * @example
 * // creates a markdown file containing documentation on all of the data types and their properties
 * ./generateApiDoc.js -f igcRestAPI.md -p isadmin
 */

const fs = require('fs');
const os = require('os');
const igcrest = require('ibm-igc-rest');
const commons = require('ibm-iis-commons');
const _ = require('underscore');
const prompt = require('prompt');
prompt.colors = false;

// Command-line setup
const yargs = require('yargs');
const argv = yargs
    .usage('Usage: $0 -f <path> -a <authfile> -p <password>')
    .option('f', {
      alias: 'file',
      describe: 'Output file into which to create the documentation',
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
    .option('t', {
      alias: 'type',
      describe: 'Markdown/up type (github, confluence)',
      demand: false, requiresArg: true, type: 'string',
      default: 'github'
    })
    .help('h')
    .alias('h', 'help')
    .wrap(yargs.terminalWidth())
    .argv;

const filename = argv.file;
const mdtype = argv.type;

const envCtx = new commons.EnvironmentContext(null, argv.authfile);

const basicTypes = { 'string':0, 'boolean':0, 'datetime':0, 'number':0, 'note':0, 'external_asset_reference':0 };

const documentation = {};
let numTypes = -1;

function readyForOutput(numTypes) {
  return (Object.keys(documentation).length === numTypes);
}

const fd = fs.openSync(filename, 'w', 0o644);
if (mdtype === "github") {
  outputIt("# Information Governance Catalog REST API");
} else if (mdtype === "confluence") {
  outputIt("h1. Information Governance Catalog REST API");
}

function processTypeDetails(err, resProps) {
  let type = resProps._id;
  documentation[type] = parsePropertiesForType(resProps);
  if (readyForOutput(numTypes)) {
    outputDocumentation();
  }
}

function outputDocumentation() {
  const aAlphaKeys = Object.keys(documentation).sort();
  for (let i = 0; i < aAlphaKeys.length; i++) {
    const type = aAlphaKeys[i];
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

function parsePropertyRow(name, displayName, type, typeObj, maxNum, required) {

  let outputName = name;
  let outputType = type;
  let outputDetails = "_\"" + displayName + "\"_";

  if (maxNum > 1) {
    outputName = "_" + outputName + "_";
  }
  if (required) {
    if (mdtype === "github") {
      outputName = "**" + outputName + "**";
    } else if (mdtype === "confluence") {
      outputName = "_*" + outputName + "*_";
    }
  }

  if (type === "enum") {
    let valuesString = "";
    const validVals = typeObj.validValues;
    for (let i = 0; i < validVals.length; i++) {
      const valueId = validVals[i].id;
      if (mdtype === "github") {
        valuesString += "`" + valueId + "`, ";
      } else {
        valuesString += "{{" + valueId + "}}, ";
      }
    }
    outputDetails = outputDetails + ": " + valuesString.substring(0, valuesString.length - 2);
  } else if (typeObj.hasOwnProperty("url")) {
    if (mdtype === "github") {
      outputType = "[" + type + "](#" + type.toLowerCase() + ")";
    } else if (mdtype === "confluence") {
      outputType = "[#" + type.toLowerCase() + "]";
    }
  } else if (!basicTypes.hasOwnProperty(type)) {
    if (mdtype === "github") {
      outputDetails = outputDetails + ": UNKNOWN complexType = `" + JSON.stringify(typeObj, null, 2) + "`";
    } else if (mdtype === "confluence") {
      outputDetails = outputDetails + ": UNKNOWN complexType = {{" + JSON.stringify(typeObj, null, 2) + "}}";
    }
  }
  return "| " + outputName + " | " + outputType + " | " + outputDetails + " |\n";

}

function parseTableForProperties(sValidity, aProps) {

  let text = "";
  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i].name;
    const propType = aProps[i].type.name;
    const required = aProps[i].hasOwnProperty("minCardinality");
    let maxNum   = 1;
    if (aProps[i].hasOwnProperty("maxCardinality")) {
      maxNum = aProps[i].maxCardinality;
    }
    const propDisplay = aProps[i].displayName;
    text = text + parsePropertyRow(propName, propDisplay, propType, aProps[i].type, maxNum, required);
  }

  if (mdtype === "github") {
    return "\n" +
      "#### " + sValidity + "\n" +
      "\n" +
      "| Name | Type | Details |\n" +
      "| ---- | ---- | ---- |\n" +
      text;
  } else if (mdtype === "confluence") {
    return "\n" +
      "h4. " + sValidity + "\n" +
      "\n" +
      "|| Name || Type || Details ||\n" +
      text;
  }

}

function parsePropertiesForType(jsonProps) {
  
  const id   = jsonProps._id;
  const name = jsonProps._name;
  const url  = jsonProps._url;

  let text = "\n";
  if (mdtype === "github") {
    text +=
      "## `" + id + "`\n" +
      "\n" +
      "- Displayed as: _\"" + name + "\"_\n" +
      "- Path: [" + url + "](#" + url + ")\n";
  } else if (mdtype === "confluence") {
    text +=
      "h2. {{" + id + "}}\n" +
      "\n" +
      "- Displayed as: _\"" + name + "\"_\n" +
      "- Path: [" + url + "]\n";
  }

  let create = [];
  let edit = [];
  let view = [];
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

prompt.start();
prompt.get(inputPrompt, function (err, result) {
  igcrest.setConnection(envCtx.getRestConnection(result.password, 1));
  igcrest.getTypes().then(function(resTypes) {
    const types = _.pluck(resTypes, "_id");
    numTypes = types.length;
    for (let i = 0; i < types.length; i++) {
      const type = types[i];
      igcrest.getOther("/ibm/iis/igc-rest/v1/types/" + encodeURIComponent(type) + "?showEditProperties=true&showViewProperties=true&showCreateProperties=true", 200, processTypeDetails);
    }
  });
});
