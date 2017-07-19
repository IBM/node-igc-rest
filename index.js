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

const request = require('request');
const fs = require('fs');
const path = require('path');

/**
 * Re-usable functions for interacting with IBM Information Governance Catalog's REST API
 * @module ibm-igc-rest
 * @license Apache-2.0
 * @requires request
 * @example
 * // retrieves all of the "types" from IGC's REST API
 * var igcrest = require('ibm-igc-rest');
 * var commons = require('ibm-iis-commons');
 * var restConnect = new commons.RestConnection("isadmin", "isadmin", "hostname", "9445");
 * igcrest.setConnection(restConnect);
 * igcrest.getTypes(function(err, resTypes) {
 *   // do something with the types within resTypes object
 * });
 */
const RestIGC = (function() {

  const hmDataContainerTypesToChildren = {
    "database_table": "database_columns",
    "data_file_record": "data_file_fields"
  };
  const hmDataChildrenToContainerTypes = {
    "database_column": "database_table",
    "data_file_field": "data_file_record"
  };
  
  let _restConnect = null;
  let _throwErrors = true;
  
  /**
   * Set the connection for the REST API
   * 
   * @param {RestConnection} restConnect - RestConnection object, from ibm-iis-commons
   */
  const setConnection = function(restConnect) {
    _restConnect = restConnect;
  };

  /**
   * Disables default error-handling, i.e. avoids throwing errors on connection issues
   */
  const disableThrowingErrors = function() {
    _throwErrors = false;
  };

  /**
   * Enable default error-handling, i.e. throw errors on connection issues
   */
  const enableThrowingErrors = function() {
    _throwErrors = true;
  };
  
  /**
   * Replace any variables (text that starts with '$') that show up in a query
   *
   * @param {Object} json - the query (as a JSON object)
   * @param {Dict} variables - a dictionary indexed by variable name
   * @returns {Object}
   */
  const replaceQueryVars = function(json, variables) {
    if (json.hasOwnProperty("where")) {
      for (let i = 0; i < json.where.conditions.length; i++ ) {
        let value = json.where.conditions[i].value;
        if (value.indexOf("$") === 0) {
          value = value.substring(1, value.length);
          json.where.conditions[i].value = variables[value];
        }
      }
    }
    return json;
  };
  
  /**
   * Replace '$relatedObjectRID' in the query with the provided RID
   *
   * @param {Object} json - the query (as a JSON object)
   * @param {string} rid - the RID to inject into the query
   * @returns {Object}
   */
  const replaceRelatedUpdateVars = function(json, rid) {
    return JSON.parse(JSON.stringify(json).replace("$relatedObjectRID", rid));
  };
  
  /**
   * Prepare the provided value for use via the REST API:
   * - if XML, leave it as-is
   * - if a string, surround it in double-quotes
   * - if an object, convert to a JSON string
   *
   * @param {Object} value - the value to prepare
   * @param {string} [contentType] - the type of content received as input
   * @returns {Object}
   */
  const _prepValue = function(value, contentType) {
    if (contentType !== null && (contentType === "application/xml" || contentType === "text/xml" || contentType === "multipart/form-data")) {
      // Do nothing -- we should not change the value of XML or multipart form data (i.e. uploaded files)...
    } else if (typeof(value) === "string") {
      value = "\"" + value + "\"";
    } else {
      value = JSON.stringify(value);
    }
    return value;
  };
  
  /**
   * Verify that one and only one item was returned by a query
   *
   * @param {Object} json - the data returned from a query (as a JSON object)
   * @returns {Object} the single item returned
   * @throws will throw an error if either no item or multiple items are found
   */
  const verifySingleItem = function(json) {
    if (json.items.length === 0) {
      throw new Error("Did not find the entry to update.");
    } else if (json.items.length > 1) {
      throw new Error("Found multiple entries to update.");
    }
    return json.items[0];
  };
  
  /**
   * Retrieve the first item returned by a query
   *
   * @param {Object} json - the data returned from a query (as a JSON object)
   * @returns {Object}
   * @throws will throw an error if no items are found
   */
  const getSingleItem = function(json) {
    if (json.items.length === 0) {
      throw new Error("Did not find the entry to update.");
    }
    return json.items[0];
  };
  
  /**
   * Log to the console the results of an update
   *
   * @param {Object} results - the data returned from an update (as a JSON object)
   */
  const logUpdateResults = function(results) {
    console.log("SUCCESS: The following updates were made -");
    for (const key in results) {
      if (results.hasOwnProperty(key)) {
        console.log("  - " + key + " = " + results[key]);
      }
    }
  };
  
  /**
   * Compare two objects for sorting purposes
   *
   * @returns {integer} -1 (a<b), 0 (a=b), 1 (a>b)
   */
  const compareObjectsForSorting = function(a, b) {
    if (a._id < b._id) {
      return -1;
    } else if (a._id > b._id) {
      return 1;
    } else {
      return 0;
    }
  };
  
  /**
   * Retrieve the RID of the container of an asset (for example, the database table of a database column)
   *
   * @param {Object} assetObj - the asset object, as returned from REST API
   * @returns {string} the RID of assetObj's container
   */
  const getAssetContainerId = function(assetObj) {
  
    const ctx         = assetObj._context;
    const assetType   = assetObj._type;
    const containerType = hmDataChildrenToContainerTypes[assetType];
  
    for (let i = 0; i < ctx.length; i++) {
      const type = ctx[i]._type;
      if (type === containerType) {
        return ctx[i]._id;
      }
    }
  
  };
  
  /**
   * Get an identity object for the provided asset's container
   *
   * @param {Object} assetCtx - the context object for the asset
   * @param {Object} containerId - the RID of the asset's container
   * @param {identityCallback} callback - callback that handles the response, since further requests may be needed
   */
  const getContainerIdentity = function(assetCtx, containerId, callback) {
  
    const argsReceived = Array.prototype.splice.call(arguments, 3);
    const identity = {};
    identity._id = containerId;
  
    let dataFileId  = "";
  
    for (let i = 0; i < assetCtx.length; i++) {
      const type = assetCtx[i]._type;
      if (type === "data_file") {
        dataFileId = assetCtx[i]._id;
      }
      const name = assetCtx[i]._name;
      identity[type] = name;
    }
  
    // Unfortunately with files we need a parent object, this non-blocking IO request
    // in one instance but not others could cause headaches...
    if (dataFileId !== "") {
      argsReceived.unshift(dataFileId, "data_file", ["path"], 1, false, function(err, resDataFile) {
        const argsReceived = Array.prototype.splice.call(arguments, 2);
        identity.path = resDataFile.path;
        argsReceived.unshift(err, identity);
        return callback.apply(this, argsReceived);
      });
      getAssetPropertiesById.apply(this, argsReceived);
    } else {
      argsReceived.unshift(null, identity);
      return callback.apply(this, argsReceived);
    }
  
  };
  
  /**
   * Get an identity object for the provided asset
   *
   * @param {Object} assetObj - the asset for which to get an identity object
   * @param {Dict} containerIdentities - a dict cache of container identities
   * @returns {Object} the identity of this object
   */
  const getAssetIdentity = function(assetObj, containerIdentities) {
    const containerId = getAssetContainerId(assetObj);
    const containerIdentity = containerIdentities[containerId]; // this is a reference, not a copy!!!
    const identity = {};
    for (const key in containerIdentity) {
      if (containerIdentity.hasOwnProperty(key)) {
        identity[key] = containerIdentity[key];
      }
    }
    identity._id = assetObj._id;
    identity[assetObj._type] = assetObj._name;
    return identity;
  };
  
  /**
   * Constructs an asset identity string provide a REST API item (which must include '_context')
   *
   * @param {Object} restItem - a single entry from the 'items' array of a REST API response, including '_context' member
   * @param {string} [delimiter] - a delimiter to use for separating the components of the identity (default: '::')
   * @returns {string}
   */
  const getItemIdentityString = function(restItem, delimiter) {
    let identity = "";
    if (delimiter === undefined || delimiter === "") {
      delimiter = "::";
    }
    const aCtx = restItem._context;
    for (let i = 0; i < aCtx.length; i++) {
      identity = identity + delimiter + aCtx[i]._name;
    }
    identity = identity + delimiter + restItem._name;
    return identity.substring(delimiter.length);
  };
  
  /**
   * Make a request against IGC's REST API
   *
   * @see module:ibm-igc-rest.setServer
   * @see module:ibm-igc-rest.setAuth
   * @param {string} method - type of request, one of ['GET', 'PUT', 'POST', 'DELETE']
   * @param {string} path - the path to the end-point (e.g. /ibm/iis/igc-rest/v1/...)
   * @param {string} [input] - any input for the request, i.e. for PUT, POST
   * @param {string} [contentType] - the type of content, e.g. 'application/json' or 'application/xml'
   * @param {string} [drillDown] - the key into which to drill-down within the response
   * @param {requestCallback} callback - callback that handles the response
   * @throws will throw an error if connectivity details are incomplete or there is a fatal error during the request
   */
  const makeRequest = function(method, path, input, contentType, drillDown, callback) {
  
    const argsReceived = Array.prototype.splice.call(arguments, 5);

    const bInput = (typeof input !== 'undefined' && input !== null);
    const bDrillDown = (typeof drillDown !== 'undefined' && drillDown !== null);
    
    if (bInput) {
      input = _prepValue(input, contentType);
    }
  
    if (typeof _restConnect === 'undefined' || _restConnect === undefined || _restConnect === null) {
      throw new Error("Setup incomplete: no connection found.");
    }

    // Only pre-pend the base REST URL if the path is not already a fully-qualified URI
    const uri = path.startsWith('http') ? path : _restConnect.baseURL + path;
  
    const opts = {
      uri: uri,
      method: method,
      auth: _restConnect.auth,
      strictSSL: false,
      agent: _restConnect.agent
    };
    if (bInput) {
      if (contentType !== 'multipart/form-data') {
        opts.headers = {
          'Content-Type': contentType,
          'Content-Length': input.length
        };
        opts.body = input;
      } else {
        opts.formData = input;
      }
    }

    request(opts, function(error, response, body) {

      if (error !== null) {
        if (_throwErrors) {
          throw new Error(error);
        }
      } else if (body === "") {
        argsReceived.unshift(response, {});
      } else if (bDrillDown) {
        argsReceived.unshift(response, JSON.parse(body)[drillDown]);
      } else {
        argsReceived.unshift(response, JSON.parse(body));
      }
      return callback.apply(this, argsReceived);

    });
  
  };
  
  /**
   * Create an asset
   *
   * @param {string} type - the type of asset to create
   * @param {Object} value - the set of values with which to create the asset
   * @param {requestCallback} callback - callback that handles the response
   * @throws will throw an error if the status code does not indicate success
   */
  const create = function(type, value, callback) {
    const argsReceived = Array.prototype.splice.call(arguments, 3);
    value._type = type;
    argsReceived.unshift('POST', "/ibm/iis/igc-rest/v1/assets", value, 'application/json', null, function(res) {
      const argsReceived = Array.prototype.splice.call(arguments, 1);
      let err = null;
      if (res.statusCode !== 201) {
        err = "Unsuccessful request " + res.statusCode;
        console.error(err);
        console.error('headers: ', res.headers);
        if (_throwErrors) {
          throw new Error(err);
        }
      }
      let rid = "";
      if (res.headers.hasOwnProperty("Location")) {
        rid = res.headers.Location.substring(res.headers.Location.lastIndexOf("/"));
      } else if (res.headers.hasOwnProperty("location")) {
        rid = res.headers.location.substring(res.headers.location.lastIndexOf("/"));
      }
      if (rid.length > 0) {
        rid = rid.substring(1);
      }
      argsReceived.unshift(err, rid);
      return callback.apply(this, argsReceived);
    });
    makeRequest.apply(this, argsReceived);
  };
  
  /**
   * Update a RID with a specific set of data
   *
   * @param {string} rid - the RID of the asset to update
   * @param {Object} value - the set of data with which to update the asset
   * @param {requestCallback} callback - callback that handles the response
   * @throws will throw an error if the status code does not indicate success
   */
  const update = function(rid, value, callback) {
    const argsReceived = Array.prototype.splice.call(arguments, 3);
    argsReceived.unshift('PUT', "/ibm/iis/igc-rest/v1/assets/" + rid, value, 'application/json', null, function(res, resUpdate) {
      const argsReceived = Array.prototype.splice.call(arguments, 2);
      let err = null;
      if (res.statusCode !== 200) {
        err = "Unsuccessful request " + res.statusCode;
        console.error(err);
        console.error('headers: ', res.headers);
        if (_throwErrors) {
          throw new Error(err);
        }
      }
      argsReceived.unshift(err, resUpdate);
      return callback.apply(this, argsReceived);
    });
    makeRequest.apply(this, argsReceived);
  };
  
  /**
   * Search IGC
   *
   * @param {Object} query - the search to run against IGC (as a JSON object)
   * @param {requestCallback} callback - callback that handles the response
   * @throws will throw an error if the status code does not indicate success
   */
  const search = function(query, callback) {
    const argsReceived = Array.prototype.splice.call(arguments, 2);
    argsReceived.unshift('POST', "/ibm/iis/igc-rest/v1/search/", query, 'application/json', null, function(res, resSearch) {
      const argsReceived = Array.prototype.splice.call(arguments, 2);
      let err = null;
      if (res.statusCode !== 200) {
        err = "Unsuccessful request " + res.statusCode;
        console.error(err);
        console.error('headers: ', res.headers);
        if (_throwErrors) {
          throw new Error(err);
        }
      }
      argsReceived.unshift(err, resSearch);
      return callback.apply(this, argsReceived);
    });
    makeRequest.apply(this, argsReceived);
  };
  
  /**
   * Get a list of all of the IGC asset types
   *
   * @param {requestCallback} callback - callback that handles the response
   * @throws will throw an error if the status code does not indicate success
   */
  const getTypes = function(callback) {
    const argsReceived = Array.prototype.splice.call(arguments, 1);
    argsReceived.unshift('GET', "/ibm/iis/igc-rest/v1/types/", null, null, null, function(res, resTypes) {
      const argsReceived = Array.prototype.splice.call(arguments, 2);
      let err = null;
      if (res.statusCode !== 200) {
        err = "Unsuccessful request " + res.statusCode;
        console.error(err);
        console.error('headers: ', res.headers);
        if (_throwErrors) {
          throw new Error(err);
        }
      }
      argsReceived.unshift(err, resTypes);
      return callback.apply(this, argsReceived);
    });
    makeRequest.apply(this, argsReceived);
  };
  
  /**
   * Get a mapping of all asset types from display name to unique type id
   *
   * @param {requestCallback} callback - callback that handles the response, with an object keyed by display name and each value the unique type id for that display name
   * @throws will throw an error if the status code does not indicate success
   */
  const getAssetTypeNamesToIds = function(callback) {
    const argsReceived = Array.prototype.splice.call(arguments, 1);
    argsReceived.unshift(function(err, resTypes) {
      const argsReceived = Array.prototype.splice.call(arguments, 2);
      const typesToIds = {};
      for (let i = 0; i < resTypes.length; i++) {
        const name = resTypes[i]._name;
        const id = resTypes[i]._id;
        typesToIds[name] = id;
      }
      argsReceived.unshift(err, typesToIds);
      return callback.apply(this, argsReceived);
    });
    getTypes.apply(this, argsReceived);
  };
  
  /**
   * Make a general GET request against IGC's REST API
   *
   * @param {string} path - the path to the end-point (e.g. /ibm/iis/igc-rest/v1/...)
   * @param {integer} successCode - the HTTP response code that indicates success for this operation
   * @param {requestCallback} callback - callback that handles the response
   */
  const getOther = function(path, successCode, callback) {
    const argsReceived = Array.prototype.splice.call(arguments, 2);
    argsReceived.unshift('GET', path, null, null, null, function(res, resDetails) {
      const argsReceived = Array.prototype.splice.call(arguments, 2);
      let err = null;
      if (res.statusCode !== successCode) {
        err = "Unsuccessful request " + res.statusCode;
        console.error(err);
        console.error('headers: ', res.headers);
        if (_throwErrors) {
          throw new Error(err);
        }
      }
      argsReceived.unshift(err, resDetails);
      return callback.apply(this, argsReceived);
    });
    makeRequest.apply(this, argsReceived);
  };
  
  /**
   * Delete a specific asset from IGC
   *
   * @param {string} rid - the RID of the asset to delete
   * @param {requestCallback} callback - callback that handles the response
   * @throws will throw an error if the status code does not indicate success
   */
  const deleteAssetById = function(rid, callback) {
    const argsReceived = Array.prototype.splice.call(arguments, 2);
    argsReceived.unshift('DELETE', "/ibm/iis/igc-rest/v1/assets/" + rid, null, null, null, function(res, resDelete) {
      const argsReceived = Array.prototype.splice.call(arguments, 2);
      let err = null;
      if (res.statusCode !== 200) {
        err = "Unsuccessful request " + res.statusCode;
        console.error(err);
        console.error('headers: ', res.headers);
        if (_throwErrors) {
          throw new Error(err);
        }
      }
      argsReceived.unshift(err, resDelete);
      return callback.apply(this, argsReceived);
    });
    makeRequest.apply(this, argsReceived);
  };
  
  /**
   * Request IGC to detect lineage for a specific job (requires v11.5.0.1 GOVRUP3 or higher)
   * - Actual status comes from the "message" within the callback results: starts with SUCCESS, WARNING or FAILURE
   *
   * @param {string} rid - the RID of the job for which to detect lineage
   * @param {requestCallback} callback - callback that handles the response
   * @throws will throw an error if the status code does not indicate success
   */
  const detectLineageForJob = function(rid, callback) {
    const argsReceived = Array.prototype.splice.call(arguments, 2);
    argsReceived.unshift("/ibm/iis/igc-rest/v1/flows/detectFlows/dsjob/" + rid, 202, callback);
    getOther.apply(this, argsReceived);
  };

  /**
   * Create a new Open IGC bundle (asset type definition)
   *
   * @param {string} zipFile - the location of the zip file from which to create the bundle
   * @param {requestCallback} callback - callback that handles the response
   * @throws will throw an error if the status code does not indicate success
   */
  const createBundle = function(zipFile, callback) {
    const argsReceived = Array.prototype.splice.call(arguments, 2);

    const formData = {
      file: {
        value: fs.createReadStream(zipFile),
        options: {
          name: 'file',
          filename: path.posix.basename(zipFile),
          contentType: 'application/x-zip-compressed'
        }
      }
    };

    argsReceived.unshift('POST', "/ibm/iis/igc-rest/v1/bundles", formData, 'multipart/form-data', null, function(res, resCreate) {
      const argsReceived = Array.prototype.splice.call(arguments, 2);
      let err = null;
      if (res.statusCode !== 200) {
        err = "Unsuccessful request " + res.statusCode;
        console.error(err);
        console.error('headers: ', res.headers);
        if (_throwErrors) {
          throw new Error(err);
        }
      }
      argsReceived.unshift(err, resCreate);
      return callback.apply(this, argsReceived);
    });
    makeRequest.apply(this, argsReceived);
  };

  /**
   * Create instances of assets defined by an Open IGC bundle
   *
   * @param {string} xml - the flow document XML containing the asset instance definitions
   * @param {requestCallback} callback - callback that handles the response
   * @throws will throw an error if the status code does not indicate success
   */
  const createBundleAssets = function(xml, callback) {
    const argsReceived = Array.prototype.splice.call(arguments, 2);
    argsReceived.unshift('POST', "/ibm/iis/igc-rest/v1/bundles/assets", xml, 'application/xml', null, function(res, resCreate) {
      const argsReceived = Array.prototype.splice.call(arguments, 2);
      let err = null;
      if (res.statusCode !== 200) {
        err = "Unsuccessful request " + res.statusCode;
        console.error(err);
        console.error('headers: ', res.headers);
        if (_throwErrors) {
          throw new Error(err);
        }
      }
      argsReceived.unshift(err, resCreate);
      return callback.apply(this, argsReceived);
    });
    makeRequest.apply(this, argsReceived);
  };
  
  /**
   * Get a listing of all of the assets in a collection
   *
   * @param {string} collectionName
   * @param {integer} maxItems - maximum number of items to retrieve
   * @param {requestCallback} callback - callback that handles the response
   */
  const getAssetsInCollection = function(collectionName, maxItems, callback) {
    const argsReceived = Array.prototype.splice.call(arguments, 3);
    // The pageSize here seems to be for collections that are found -- not assets
    // within the collection; may cause issues with larger collections?
    const json = {
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
    argsReceived.unshift(json, function(err, resCollection) {
      const argsReceived = Array.prototype.splice.call(arguments, 2);
      let assets = [];
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
      argsReceived.unshift(err, assets);
      return callback.apply(this, argsReceived);
    });
    search.apply(this, argsReceived);
  };
  
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
  const getAssetById = function(rid, callback) {
    const argsReceived = Array.prototype.splice.call(arguments, 2);
    argsReceived.unshift("/ibm/iis/igc-rest/v1/assets/" + rid, 200, callback);
    getOther.apply(this, argsReceived);
  };

  /**
   * Retrieve only the single specified property of an asset
   *
   * @param {string} rid - the RID of the asset
   * @param {string} property - the property of the asset to retrieve (e.g. 'name')
   * @param {requestCallback} callback - callback that handles the response
   */
  const getAssetPropertyById = function(rid, property, callback) {
    const argsReceived = Array.prototype.splice.call(arguments, 3);
    argsReceived.unshift("/ibm/iis/igc-rest/v1/assets/" + rid + "/" + property, 200, callback);
    getOther.apply(this, argsReceived);
  };
  
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
  const getAssetPropertiesById = function(rid, type, properties, maxItems, bIncludeContext, callback) {
    
    const argsReceived = Array.prototype.splice.call(arguments, 6);
    if (!(properties instanceof Array)) {
      properties = [ properties ];
    }
  /*  if (bIncludeContext) {
      properties.push("_context");
    } */
  
    const json = {
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
    };
    argsReceived.unshift(json, function(err, results) {
      const argsReceived = Array.prototype.splice.call(arguments, 2);
      let toReturn = {};
      if (!err) {
        if (results.items.length > 1) {
          err = "WARN: Found more than one asset with RID '" + rid + "' -- only returning the first one.";
          console.warn(err);
        }
        if (results.items.length > 0) {
          if (bIncludeContext) {
            toReturn = results.items[0];
          } else {
            for (let i = 0; i < properties.length; i++) {
              const prop = properties[i];
              toReturn[prop] = results.items[0][prop];
            }
          }
        } else {
          err = "WARN: No assets found with RID '" + rid + "'.";
          console.warn(err);
        }
      }
      argsReceived.unshift(err, toReturn);
      return callback.apply(this, argsReceived);
    });
    search.apply(this, argsReceived);
  
  };

  /**
   * Retrieve the next page of information
   *
   * @see module:ibm-igc-rest.search
   * @param {Object} paging - the 'paging' sub-object of a results object
   * @param {requestCallback} callback - callback that handles the response
   */
  const getNextPage = function(paging, callback) {

    if (paging.hasOwnProperty('next')) {
      console.log("Getting next page ...");
      const nextURL = paging.next;
      getOther(nextURL, 200, function(err, resultOfNextPage) {
        if (err !== null) {
          console.log("ERROR: " + err);
          callback(err, resultOfNextPage);
        } else {
          console.log("... only returning next page ...");
          callback(err, resultOfNextPage);
        }
      });
    } else {
      console.log("No more pages.");
      callback(null, { items: [] });
    }

  };

  /**
   * Retrieve all remaining pages of information
   *
   * @see module:ibm-igc-rest.search
   * @see module:ibm-igc-rest.getNextPage
   * @param {Object} items - the 'items' sub-object of a results object
   * @param {Object} paging - the 'paging' sub-object of a results object
   * @param {itemSetCallback} callback - callback that provides the list of all items from all pages
   */
  const getAllPages = function(items, paging, callback) {

    getNextPage(paging, function(err, nextPage) {
      if (err !== null) {
        callback(err, items);
      } else if (nextPage.items.length > 0) {
        getAllPages(items.concat(nextPage.items), nextPage.paging, callback);
      } else {
        callback(err, items.concat(nextPage.items));
      }
    });

  };

  /**
   * @returns true iff the provided type is a data container
   */
  const isDataContainer = function(type) {
    return hmDataContainerTypesToChildren.hasOwnProperty(type);
  };
  
  /**
   * @returns the data type name for the child object of the provided container type
   */
  const getDataContainerChildTypes = function(type) {
    return hmDataContainerTypesToChildren[type];
  };
  
  /**
   * This callback is invoked as the result of obtaining a set of items, providing an array of items.
   * @callback itemSetCallback
   * @param {string} errorMessage - any error message, or null if no errors
   * @param {Object[]} itemArray - an array of JSON objects, each being an item
   */

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

  return {
    setConnection: setConnection,
    disableThrowingErrors: disableThrowingErrors,
    enableThrowingErrors: enableThrowingErrors,
    replaceQueryVars: replaceQueryVars,
    replaceRelatedUpdateVars: replaceRelatedUpdateVars,
    verifySingleItem: verifySingleItem,
    getSingleItem: getSingleItem,
    logUpdateResults: logUpdateResults,
    compareObjectsForSorting: compareObjectsForSorting,
    getAssetContainerId: getAssetContainerId,
    getContainerIdentity: getContainerIdentity,
    getAssetIdentity: getAssetIdentity,
    getItemIdentityString: getItemIdentityString,
    makeRequest: makeRequest,
    create: create,
    update: update,
    search: search,
    getTypes: getTypes,
    getAssetTypeNamesToIds: getAssetTypeNamesToIds,
    getOther: getOther,
    deleteAssetById: deleteAssetById,
    detectLineageForJob: detectLineageForJob,
    createBundle: createBundle,
    createBundleAssets: createBundleAssets,
    getAssetsInCollection: getAssetsInCollection,
    getAssetById: getAssetById,
    getAssetPropertyById: getAssetPropertyById,
    getAssetPropertiesById: getAssetPropertiesById,
    getNextPage: getNextPage,
    getAllPages: getAllPages,
    isDataContainer: isDataContainer,
    getDataContainerChildTypes: getDataContainerChildTypes
  };

})();

module.exports = RestIGC;
