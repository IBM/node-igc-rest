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
 * @file Re-usable functions for interacting with IGC's REST API
 * @license Apache-2.0
 * @example
 * // retrieves all of the "types" from IGC's REST API
 * var igcrest = require('ibm-igc-rest');
 * igcrest.setAuth("isadmin", "isadmin");
 * igcrest.setServer("hostname", "9445");
 * igcrest.getTypes(function(err, resTypes) {
 *   // do something with the types within resTypes object
 * });
 */

/**
 * @module ibm-igc-rest
 */

const https = require('https');

const hmDataContainerTypesToChildren = {
  "database_table": "database_columns",
  "data_file_record": "data_file_fields"
};
const hmDataChildrenToContainerTypes = {
  "database_column": "database_table",
  "data_file_field": "data_file_record"
};

var auth = "";
var host = "";
var port = "";

/**
 * Set authentication details to access the REST API
 *
 * @param {string} user - the username
 * @param {string} password - the user's password
 * @returns {string} authentication in the form of 'user:password'
 */
exports.setAuth = function(user, password) {
  this.auth = user + ":" + password;
  return this.auth;
};

/**
 * Set access details for the REST API
 *
 * @param {string} host - the hostname of the domain (services) tier of the IGC server
 * @param {string} port - the port number of the IGC server (e.g. 9445)
 */
exports.setServer = function(host, port) {
  this.host = host;
  this.port = port;
}

/**
 * Replace any variables (text that starts with '$') that show up in a query
 *
 * @param {Object} json - the query (as a JSON object)
 * @param {Dict} variables - a dictionary indexed by variable name
 * @returns {Object}
 */
exports.replaceQueryVars = function(json, variables) {
  for (var i = 0; i < json.where.conditions.length; i++ ) {
    var value = json.where.conditions[i].value;
    if (value.indexOf("$") === 0) {
      value = value.substring(1, value.length);
      json.where.conditions[i].value = variables[value];
    }
  }
  return json;
}

/**
 * Replace '$relatedObjectRID' in the query with the provided RID
 *
 * @param {Object} json - the query (as a JSON object)
 * @param {string} rid - the RID to inject into the query
 * @returns {Object}
 */
exports.replaceRelatedUpdateVars = function(json, rid) {
  return JSON.parse(JSON.stringify(json).replace("$relatedObjectRID", rid));
}

/**
 * Prepare the provided value for use via the REST API:
 * - if a string, surround it in double-quotes
 * - if an object, convert to a JSON string
 *
 * @param {Object} value - the value to prepare
 * @returns {Object}
 */
exports.prepValue = function(value) {
  if (typeof(value) == "string") {
    value = "\"" + value + "\"";
  } else {
    value = JSON.stringify(value);
  }
  return value;
}

/**
 * Verify that one and only one item was returned by a query
 *
 * @param {Object} json - the data returned from a query (as a JSON object)
 * @returns {Object} the single item returned
 * @throws will throw an error if either no item or multiple items are found
 */
exports.verifySingleItem = function(json) {
  if (json.items.length == 0) {
    throw new Error("Did not find the entry to update.");
  } else if (json.items.length > 1) {
    throw new Error("Found multiple entries to update.");
  }
  return json.items[0];
}

/**
 * Retrieve the first item returned by a query
 *
 * @param {Object} json - the data returned from a query (as a JSON object)
 * @returns {Object}
 * @throws will throw an error if no items are found
 */
exports.getSingleItem = function(json) {
  if (json.items.length == 0) {
    throw new Error("Did not find the entry to update.");
  }
  return json.items[0];
}

/**
 * Log to the console the results of an update
 *
 * @param {Object} results - the data returned from an update (as a JSON object)
 */
exports.logUpdateResults = function(results) {
  console.log("SUCCESS: The following updates were made -");
  for (var key in results) {
    if (results.hasOwnProperty(key)) {
      console.log("  - " + key + " = " + results[key]);
    }
  }
}

/**
 * Compare two objects for sorting purposes
 *
 * @returns {integer} -1 (a<b), 0 (a=b), 1 (a>b)
 */
exports.compareObjectsForSorting = function(a, b) {
  if (a._id < b._id)
    return -1;
  else if (a._id > b._id)
    return 1;
  else
    return 0;
}

/**
 * Retrieve the RID of the container of an asset (for example, the database table of a database column)
 *
 * @param {Object} assetObj - the asset object, as returned from REST API
 * @returns {string} the RID of assetObj's container
 */
exports.getAssetContainerId = function(assetObj) {

  var id = assetObj._id;

  var ctx         = assetObj._context;
  var assetType   = assetObj._type;
  var containerType = hmDataChildrenToContainerTypes[assetType];
  var containerId = "";

  for (var i = 0; i < ctx.length; i++) {
    var type = ctx[i]._type;
    if (type == containerType) {
      return ctx[i]._id;
    }
  }

}

/**
 * Get an identity object for the provided asset's container
 *
 * @param {Object} assetCtx - the context object for the asset
 * @param {Object} containerId - the RID of the asset's container
 * @param {identityCallback} callback - callback that handles the response, since further requests may be needed
 */
exports.getContainerIdentity = function(assetCtx, containerId, callback) {

  var identity = {};
  identity['_id'] = containerId;

  var dataFileId  = "";

  for (var i = 0; i < assetCtx.length; i++) {
    var type = assetCtx[i]._type;
    if (type == "data_file") {
      dataFileId = assetCtx[i]._id;
    }
    var name = assetCtx[i]._name;
    identity[type] = name;
  }

  // Unfortunately with files we need a parent object, this non-blocking IO request
  // in one instance but not others could cause headaches...
  if (dataFileId != "") {
    this.getAssetPropertiesById(dataFileId, "data_file", ["path"], 1, false, function(err, resDataFile) {
      identity['path'] = resDataFile.path;
      callback(err, identity);
      return identity;
    });
  } else {
    callback(null, identity);
    return identity;
  }

}

/**
 * Get an identity object for the provided asset
 *
 * @param {Object} assetObj - the asset for which to get an identity object
 * @param {Dict} containerIdentities - a dict cache of container identities
 * @returns {Object} the identity of this object
 */
exports.getAssetIdentity = function(assetObj, containerIdentities) {
  var containerId = this.getAssetContainerId(assetObj);
  var containerIdentity = containerIdentities[containerId]; // this is a reference, not a copy!!!
  var identity = {};
  for (var key in containerIdentity) {
    identity[key] = containerIdentity[key];
  }
  identity._id = assetObj._id;
  identity[assetObj._type] = assetObj._name;
  return identity;
}

/**
 * Make a request against IGC's REST API
 *
 * @see module:ibm-igc-rest.setServer
 * @see module:ibm-igc-rest.setAuth
 * @param {string} method - type of request, one of ['GET', 'PUT', 'POST', 'DELETE']
 * @param {string} path - the path to the end-point (e.g. /ibm/iis/igc-rest/v1/...)
 * @param {string} [input] - any input for the request, i.e. for PUT, POST
 * @param {string} [drillDown] - the key into which to drill-down within the response
 * @param {requestCallback} callback - callback that handles the response
 * @throws will throw an error if connectivity details are incomplete or there is a fatal error during the request
 */
exports.makeRequest = function(method, path, input, drillDown, callback) {

  var bInput = (typeof input !== 'undefined' && input !== null);
  var bDrillDown = (typeof drillDown !== 'undefined' && drillDown !== null);
  
  if (bInput) {
    input = this.prepValue(input);
  }

  if (this.auth == "" || this.host == "" || this.port == "") {
    throw new Error("Setup incomplete: auth = " + this.auth + ", host = " + this.host + ", port = " + this.port + ".");
  }

  var opts = {
    auth: this.auth,
    hostname: this.host,
    port: this.port,
    path: path,
    method: method,
    rejectUnauthorized: false,
    maxSockets: 1
  }
  if (bInput) {
    opts.headers = {
      'Content-Type': 'application/json',
      'Content-Length': input.length
    }
  }
  opts.agent = new https.Agent(opts);

  var req = https.request(opts, (res) => {

    var data = "";
    res.on('data', (d) => {
      data += d;
    });
    res.on('end', function() {
      if (bDrillDown) {
        callback(res, JSON.parse(data)[drillDown]);
        return JSON.parse(data)[drillDown];
      } else {
        callback(res, JSON.parse(data));
        return JSON.parse(data);
      }
    });
  });
  if (bInput) {
    req.write(input);
  }
  req.end();

  req.on('error', (e) => {
    throw new Error(e);
  });

}

/**
 * Update a RID with a specific set of data
 *
 * @param {string} rid - the RID of the asset to update
 * @param {Object} value - the set of data with which to update the asset
 * @param {requestCallback} callback - callback that handles the response
 * @throws will throw an error if the status code does not indicate success
 */
exports.update = function(rid, value, callback) {
  this.makeRequest('PUT', "/ibm/iis/igc-rest/v1/assets/" + rid, value, null, function(res, resUpdate) {
    var err = null;
    if (res.statusCode != 200) {
      err = "Unsuccessful request " + res.statusCode;
      console.error(err);
      console.error('headers: ', res.headers);
      throw new Error(err);
    }
    callback(err, resUpdate);
    return resUpdate;
  });
}

/**
 * Search IGC
 *
 * @param {Object} query - the search to run against IGC (as a JSON object)
 * @param {requestCallback} callback - callback that handles the response
 * @throws will throw an error if the status code does not indicate success
 */
exports.search = function(query, callback) {
  this.makeRequest('POST', "/ibm/iis/igc-rest/v1/search/", query, null, function(res, resSearch) {
    var err = null;
    if (res.statusCode != 200) {
      err = "Unsuccessful request " + res.statusCode;
      console.error(err);
      console.error('headers: ', res.headers);
      throw new Error(err);
    }
    callback(err, resSearch);
    return resSearch;
  });
}

/**
 * Get a list of all of the IGC asset types
 *
 * @param {requestCallback} callback - callback that handles the response
 * @throws will throw an error if the status code does not indicate success
 */
exports.getTypes = function(callback) {
  this.makeRequest('GET', "/ibm/iis/igc-rest/v1/types/", null, null, function(res, resTypes) {
    var err = null;
    if (res.statusCode != 200) {
      err = "Unsuccessful request " + res.statusCode;
      console.error(err);
      console.error('headers: ', res.headers);
      throw new Error(err);
    }
    callback(err, resTypes);
    return resTypes;
  });
}

/**
 * Make a general GET request against IGC's REST API
 *
 * @param {string} path - the path to the end-point (e.g. /ibm/iis/igc-rest/v1/...)
 * @param {requestCallback} callback - callback that handles the response
 */
exports.getOther = function(path, callback) {
  this.makeRequest('GET', path, null, null, callback);
}

/**
 * Delete a specific asset from IGC
 *
 * @param {string} rid - the RID of the asset to delete
 * @param {requestCallback} callback - callback that handles the response
 * @throws will throw an error if the status code does not indicate success
 */
exports.deleteAssetById = function(rid, callback) {
  this.makeRequest('DELETE', "/ibm/iis/igc-rest/v1/assets/" + rid, null, null, function(res, resDelete) {
    var err = null;
    if (res.statusCode != 200) {
      err = "Unsuccessful request " + res.statusCode;
      console.error(err);
      console.error('headers: ', res.headers);
      throw new Error(err);
    }
    callback(err, resDelete);
    return resDelete;
  });
}

/**
 * Request IGC to detect lineage for a specific job (requires v11.5.0.1 GOVRUP3 or higher)
 * - Actual status comes from the "message" within the callback results: starts with SUCCESS, WARNING or FAILURE
 *
 * @param {string} rid - the RID of the job for which to detect lineage
 * @param {requestCallback} callback - callback that handles the response
 * @throws will throw an error if the status code does not indicate success
 */
exports.detectLineageForJob = function(rid, callback) {
  this.getOther("/ibm/iis/igc-rest/v1/flows/detectFlows/dsjob/" + rid, function(res, resLineage) {
    var err = null;
    // Result code will always be 202, actual status only comes from "message"
    if (res.statusCode != 202) {
      err = "Unsuccessful request " + res.statusCode;
      console.error(err);
      console.error('headers: ', res.headers);
      throw new Error(err);
    }
    callback(err, resLineage);
    return resLineage;
  });
}

/**
 * Get a listing of all of the assets in a collection
 *
 * @param {string} collectionName
 * @param {integer} maxItems - maximum number of items to retrieve
 * @param {requestCallback} callback - callback that handles the response
 */
exports.getAssetsInCollection = function(collectionName, maxItems, callback) {
  // The pageSize here seems to be for collections that are found -- not assets
  // within the collection; may cause issues with larger collections?
  var json = {
    "pageSize": maxItems,
    "properties" : ["assets"],
    "types" : ["collection"],
    "where" :
    {
      "conditions" :
      [
        {
          "property" : "name",
          "operator" : "=",
          "value" : collectionName
        }
      ],
      "operator" : "and"
    }
  };
  this.search(json, function(err, resCollection) {
    var assets = [];
    if (resCollection.items.length > 1) {
      err = "WARN: Found more than one collection called '" + collectionName + "' -- only taking assets from the first one.";
      console.warn(err);
    }
    if (resCollection.items.length > 0) {
      assets = resCollection.items[0].assets.items;
    } else {
      err = "WARN: No assets found in the collection '" + collectionName + "'.";
      console.warn(err);
    }
    callback(err, assets);
    return assets;
  });
}

/**
 * Request all details of an asset
 *
 * NOTE: this function should be used with caution -- it will build a large object and
 * can be measurably slower (> 5x) than explicitly defining the properties and searching
 * using 'getAssetPropertiesById' instead
 *
 * @see module:ibm-igc-rest.getAssetPropertiesById
 * @param {string} rid - the RID of the asset
 * @param {requestCallback} callback - callback that handles the response
 */
exports.getAssetById = function(rid, callback) {
  this.getOther("/ibm/iis/igc-rest/v1/assets/" + rid, callback);
}

/**
 * Retrieve only the specified details of an asset
 *
 * @see module:ibm-igc-rest.getTypes
 * @param {string} rid - the RID of the asset
 * @param {string} type - the type of the asset
 * @param {string[]} properties - array of properties to retrieve for the asset
 * @param {integer} maxItems - maximum number of detailed properties
 * @param {boolean} bIncludeContext - whether to include contextual information (true) or drill-down just to the resulting properties (false)
 * @param {requestCallback} callback - callback that handles the response
 */
exports.getAssetPropertiesById = function(rid, type, properties, maxItems, bIncludeContext, callback) {
  
  if (!(properties instanceof Array)) {
    properties = [ properties ];
  }
  if (bIncludeContext) {
    properties.push("_context");
  }

  var json = {
    "pageSize": maxItems,
    "properties" : properties,
    "types" : [ type ],
    "where" :
    {
      "conditions" :
      [
        {
          "property" : "_id",
          "operator" : "=",
          "value" : rid
        }
      ],
      "operator" : "and"
    }
  }

  this.search(json, function(err, results) {
    var toReturn = {};
    if (results.items.length > 1) {
      err = "WARN: Found more than one asset with RID '" + rid + "' -- only returning the first one.";
      console.warn(err);
    }
    if (results.items.length > 0) {
      if (bIncludeContext) {
        toReturn = results.items[0];
      } else {
        for (var i = 0; i < properties.length; i++) {
          var prop = properties[i];
          toReturn[prop] = results.items[0][prop];
        }
      }
    } else {
      err = "WARN: No assets found with RID '" + rid + "'.";
      console.warn(err);
    }
    callback(err, toReturn);
    return toReturn;
  });

}

/**
 * @returns true iff the provided type is a data container
 */
exports.isDataContainer = function(type) {
  return hmDataContainerTypesToChildren.hasOwnProperty(type);
}

/**
 * @returns the data type name for the child object of the provided container type
 */
exports.getDataContainerChildTypes = function(type) {
  return hmDataContainerTypesToChildren[type];
}

/**
 * This callback is invoked as the result of an IGC REST API call, providing the response of that request.
 * @callback requestCallback
 * @param {string} errorMessage - any error message, or null if no errors
 * @param {Object} responseObject - the JSON object containing the response
 */

/**
 * This callback is invoked as the result of obtaining an object's identity, providing the response of that request.
 * @callback identityCallback
 * @param {string} errorMessage - any error message, or null if no errors
 * @param {Object} identityObject - the JSON object containing the identity
 */
