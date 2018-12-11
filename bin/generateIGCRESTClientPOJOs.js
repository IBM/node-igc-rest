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
 * @file This script will generate POJO beans for use with the Java IGC REST Client
 * @license Apache-2.0
 * @requires underscore
 * @requires ibm-igc-rest
 * @requires ibm-iis-commons
 * @requires prompt
 * @requires yargs
 * @see module:ibm-iis-commons~createInfoSvrAuthFile
 * @example
 * // creates a POJO class for each type on the server under src/main/java/com/somewhere/
 * ./generateIGCRESTClientPOJOs.js -n com.somewhere -d src/main/java/com/somewhere/ -p isadmin
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const igcrest = require('ibm-igc-rest');
const commons = require('ibm-iis-commons');
const _ = require('underscore');
const prompt = require('prompt');
const camelCase = require('camelcase');
prompt.colors = false;

// Command-line setup
const yargs = require('yargs');
const argv = yargs
    .usage('Usage: $0 -d <path> -a <authfile> -p <password>')
    .example('$0 -n com.somewhere -d src/main/java/com/somewhere/ -p isadmin', 'creates a POJO class for each type on the server under src/main/java/com/somewhere/')
    .alias('n', 'pkgname').nargs('n', 1).describe('n', 'Name of the Java package for the POJOs')
    .alias('d', 'directory').nargs('d', 1).describe('d', 'Output directory into which to create the POJO classes')
    .alias('a', 'authfile').nargs('a', 1).describe('a', 'Authorisation file containing environment context')
    .alias('p', 'password').nargs('p', 1).describe('p', 'Password for invoking REST API')
    .demandOption(['d', 'n'])
    .help('h')
    .alias('h', 'help')
    .wrap(yargs.terminalWidth())
    .argv;

const envCtx = new commons.EnvironmentContext(null, argv.authfile);

// Ignore these types and pseudo-types -- they are not actual asset types that can be accessed
const ignoreTypes = [ "main_object", "information_asset" ];
//const ignoreProperties = [ "_name", "_type", "_url", "_id", "_context", "name", "short_description", "long_description", "labels", "stewards", "assigned_to_terms", "implements_rules", "governed_by_rules", "created_by", "created_on", "modified_by", "modified_on", "notes" ];
const ignoreProperties = [ "_name", "_type", "_url", "_id", "_context", "notes" ];
const qualifyProperties = [ "name", "type", "url", "id", "context" ];
const basicTypeToJavaType = {
  "string": "String",
  "boolean": "Boolean",
  "datetime": "Date",
  "number": "Number",
  "enum": "String"
};
const invalidNamingCharacters = ['\(', '\)', '\/', '&',' '];
const reInvalids = new RegExp('[' + invalidNamingCharacters.join('') + ']', 'g');
const reservedWords = [ 'package', 'final', 'abstract', 'default' ];

// Unfortunately there are some non-unique types in IGC...
const nonUniqueClassNames = {
  "valid_value_list": "ValidValueList",
  "validvaluelist": "ValidValueList2",
  "valid_value_range": "ValidValueRange",
  "validvaluerange": "ValidValueRange2",
  "parameter_set": "ParameterSet",
  "parameterset": "ParameterSet2",
  "function_call": "FunctionCall",
  "functioncall": "FunctionCall2"
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
  
  igcrest.setConnection(envCtx.getRestConnection(result.password));
  igcrest.openSession().then(function() {

    const igcGetTypes = new Promise(function(resolve, reject) {
      console.log("1 - getting all types");
      igcrest.getTypes().then(function(resTypes) {
        const types = _.pluck(resTypes, "_id");
        resolve(types);
      });
    });

    igcGetTypes.then(function(aTypes) {
      const igcPropertiesForTypes = aTypes.map(function(type) {
        return new Promise(function(resolve, reject) {
          igcrest.getOther("/ibm/iis/igc-rest/v1/types/" + encodeURIComponent(type) + "?showViewProperties=true", 200).then(function(props) {
            createPOJOForType(props, argv.directory, argv.pkgname);
            resolve();
          });
        });
      });
      console.log("2 - getting properties for each type");
      return Promise.all(igcPropertiesForTypes);
    }).then(function() {
      igcrest.closeSession().then(function() {
        console.log("POJOs generated in '" + argv.directory + "'.");
        process.exit(0);
      }, function(failure) {
        console.log("POJOs generated in '" + argv.directory + "', but unable to close session: " + JSON.stringify(failure));
        process.exit(1);
      });
    })
    .catch(console.error);

  });

});

function getPropertyHeading(propertyId, propertyDisplayName, typeObj, javaType) {
  let heading = ""
        + "    /**" + os.EOL
        + "     * The '" + _.escape(propertyId) + "' property, displayed as '" + _.escape(propertyDisplayName) + "' in the IGC UI." + os.EOL;
  if (typeObj.hasOwnProperty("url")) {
    heading += "     * <br><br>" + os.EOL;
    if (javaType === "ReferenceList") {
      heading += "     * Will be a {@link ReferenceList} of {@link " + getClassName(typeObj.name) + "} objects." + os.EOL;
    } else if (javaType === "Reference") {
      heading += "     * Will be a single {@link Reference} to a {@link " + getClassName(typeObj.name) + "} object." + os.EOL;
    }
  } else if (typeObj.name === "enum") {
    const validValues = typeObj.validValues;
    if (validValues.length > 0) {
      heading += "     * <br><br>" + os.EOL
              + "     * Can be one of the following values:" + os.EOL
              + "     * <ul>" + os.EOL;
      for (let i = 0; i < validValues.length; i++) {
        heading += "     *     <li>" + validValues[i].id + " (displayed in the UI as '" + validValues[i].displayName + "')</li>" + os.EOL;
      }
      heading += "     * </ul>" + os.EOL;
    }
  }
  return heading + "     */" + os.EOL;
}

function getPropertyDetailForPOJO(name, typeObj, maxNum, displayName) {

  let declMember = "";
  let declGetterSetter = "";

  const type = typeObj.name;
  let nominalType = type;

  if (typeObj.hasOwnProperty("url")) {
    nominalType = "Reference";
  } else if (basicTypeToJavaType.hasOwnProperty(type)) {
    nominalType = basicTypeToJavaType[type];
  } else if (!basicTypeToJavaType.hasOwnProperty(type)) {
    console.log("Found unknown type: " + type + " (" + JSON.stringify(typeObj, null, 2) + ")");
    return null;
  }

  let javaType = "";
  // When there isn't a maxCardinality specified, there can be multiple;
  // UNLESS the data type is boolean (then there is only one value permitted)
  if (maxNum != 1) {
    if (nominalType === "Reference") {
      javaType = "ReferenceList";
    } else if (nominalType === "Boolean") {
      javaType = nominalType;
    } else {
      javaType = "ArrayList<" + nominalType + ">";
    }
  } else {
    javaType = nominalType;
  }

  let propName = name;
  declMember = getPropertyHeading(name, displayName, typeObj, javaType);
  if (propName.search(reInvalids) >= 0) {
    propName = propName.replace(reInvalids, "_");
//    fs.appendFileSync(filename, "    @JsonProperty(\"" + name + "\") protected " + javaType + " " + propName + ";" + os.EOL);
    declMember += "    @JsonProperty(\"" + name + "\") protected " + javaType + " " + propName + ";" + os.EOL;
  } else if (reservedWords.includes(propName)) {
    propName = "__" + propName;
//    fs.appendFileSync(filename, "    @JsonProperty(\"" + name + "\") protected " + javaType + " " + propName + ";" + os.EOL);
    declMember += "    @JsonProperty(\"" + name + "\") protected " + javaType + " " + propName + ";" + os.EOL;
  } else {
//    fs.appendFileSync(filename, "    protected " + javaType + " " + propName + ";" + os.EOL);
    declMember += "    protected " + javaType + " " + propName + ";" + os.EOL;
  }

  let ccName = camelCase(propName, {pascalCase: true});
  if (qualifyProperties.includes(propName)) {
    ccName = camelCase("the_" + propName, {pascalCase: true});
  }

  const getSetPrepend = "    /** @see #" + propName + " */ @JsonProperty(\"" + name + "\") ";
  declGetterSetter = getSetPrepend + " public " + javaType + " get" + ccName + "() { return this." + propName + "; }" + os.EOL
                   + getSetPrepend + " public void set" + ccName + "(" + javaType + " " + propName + ") { this." + propName + " = " + propName + "; }" + os.EOL
                   + os.EOL;

  return { "member": declMember, "getSet": declGetterSetter };

}

function addPropertiesToPOJO(filename, properties) {

  const members = [];
  const getterSetters = [];

  for (let i = 0; i < properties.length; i++) {
    const propName = properties[i].name;
    if (propName !== null && !ignoreProperties.includes(propName)) {
      const typeObj = properties[i].type;
      let maxNum = -1;
      if (properties[i].hasOwnProperty("maxCardinality")) {
        maxNum = properties[i].maxCardinality;
      }
      const details = getPropertyDetailForPOJO(propName, typeObj, maxNum, properties[i].displayName);
      if (details != null) {
        members.push(details.member);
        getterSetters.push(details.getSet);
      }
    }
  }

  for (let j = 0; j < members.length; j++) {
    fs.appendFileSync(filename, members[j] + os.EOL);
  }
  fs.appendFileSync(filename, os.EOL);
  for (let k = 0; k < getterSetters.length; k++) {
    fs.appendFileSync(filename, getterSetters[k]);
  }

}

function createPOJOForType(jsonProps, directory, packageName) {
  
  const id   = jsonProps._id;
  const name = jsonProps._name;
  const url  = jsonProps._url;

  if (!ignoreTypes.includes(id)) {

    const className = getClassName(id);
//    const className = name.replace(reInvalids, "");
    const filename = directory + path.sep + className + ".java";
  
    const fd = fs.openSync(filename, 'w', 0o644);
  
    fs.appendFileSync(filename, "/* SPDX-License-Identifier: Apache-2.0 */" + os.EOL);
    fs.appendFileSync(filename, "/* Copyright Contributors to the ODPi Egeria project. */" + os.EOL);
    fs.appendFileSync(filename, "package " + packageName + ";" + os.EOL + os.EOL);
    fs.appendFileSync(filename, "import org.odpi.openmetadata.adapters.repositoryservices.igc.clientlibrary.model.common.*;" + os.EOL);
    fs.appendFileSync(filename, "import com.fasterxml.jackson.annotation.JsonIgnore;" + os.EOL);
    fs.appendFileSync(filename, "import com.fasterxml.jackson.annotation.JsonIgnoreProperties;" + os.EOL);
    fs.appendFileSync(filename, "import com.fasterxml.jackson.annotation.JsonProperty;" + os.EOL);
    fs.appendFileSync(filename, "import java.util.Date;" + os.EOL);
    fs.appendFileSync(filename, "import java.util.ArrayList;" + os.EOL);
    fs.appendFileSync(filename, os.EOL);
    fs.appendFileSync(filename, getClassHeading(name, id));
    fs.appendFileSync(filename, "@JsonIgnoreProperties(ignoreUnknown=true)" + os.EOL);
    fs.appendFileSync(filename, "public class " + className + " extends Reference {" + os.EOL + os.EOL);
    fs.appendFileSync(filename, "    @JsonIgnore public static final String IGC_TYPE_ID = \"" + id + "\";" + os.EOL + os.EOL);

    let view = [];
    if (jsonProps.hasOwnProperty("viewInfo") && jsonProps.viewInfo.hasOwnProperty("properties")) {
      view = jsonProps.viewInfo.properties;
    }
    if (view.length > 0) {
      addPropertiesToPOJO(filename, view);
    }
 
    fs.appendFileSync(filename, os.EOL + "    public static final Boolean is" + className + "(Object obj) { return (obj.getClass() == " + className + ".class); }" + os.EOL);

    fs.appendFileSync(filename, os.EOL + "}" + os.EOL);
    fs.closeSync(fd);

  }

}

function getClassHeading(displayName, typeName) {
  return ""
        + "/**" + os.EOL
        + " * POJO for the '" + typeName + "' asset type in IGC, displayed as '" + displayName + "' in the IGC UI." + os.EOL
        + " * <br><br>" + os.EOL
        + " * (this code has been generated based on out-of-the-box IGC metadata types;" + os.EOL
        + " *  if modifications are needed, eg. to handle custom attributes," + os.EOL
        + " *  extending from this class in your own custom class is the best approach.)" + os.EOL
        + " */" + os.EOL;
}

function getClassName(fromName) {
  if (nonUniqueClassNames.hasOwnProperty(fromName)) {
    return nonUniqueClassNames[fromName];
  } else {
    return camelCase(fromName.replace(reInvalids, "_"), {pascalCase: true});
  }
}
