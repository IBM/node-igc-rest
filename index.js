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
const util = require('util');

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
  
  /**
   * Set the connection for the REST API
   * 
   * @param {RestConnection} restConnect - RestConnection object, from ibm-iis-commons
   */
  const setConnection = function(restConnect) {
    _restConnect = restConnect;
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
        if (json.where.conditions[i].hasOwnProperty("value")) {
          let value = json.where.conditions[i].value;
          if (value.indexOf("$") === 0) {
            value = value.substring(1, value.length);
            json.where.conditions[i].value = variables[value];
          }
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
   * Checks for any error in the request, based on a non-successful status code
   *
   * @param {Object} res - the full response object from the request
   * @param {integer} statusCodeSuccess - the numeric status code that indicates success
   * @param {Function} reject - the reject function of the promise being handled
   * @returns {string} a description of the error (if not using Promises)
   */
  const _checkRequestError = function(res, statusCodeSuccess, reject) {
    let err = null;
    if (res.statusCode !== statusCodeSuccess) {
      err = "Unsuccessful request " + res.statusCode;
      err += "\n   headers: " + util.inspect(res.headers);
      reject(new Error(err));
    }
    return err;
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

    callback = callback || function () {};
    return new Promise(function(resolve, reject) {

      const bInput = (typeof input !== 'undefined' && input !== null);
      const bDrillDown = (typeof drillDown !== 'undefined' && drillDown !== null);
      
      if (bInput) {
        input = _prepValue(input, contentType);
      }
    
      if (typeof _restConnect === 'undefined' || _restConnect === undefined || _restConnect === null) {
        reject(new Error("Setup incomplete: no connection found."));
        return callback("Setup incomplete: no connection found.");
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
  
        let retVal = {};
        retVal.res = response;
        if (error !== null) {
          reject(error);
          return callback(error);
        } else if (body === "") {
          retVal.body = {};
        } else if (bDrillDown) {
          retVal.body = JSON.parse(body)[drillDown];
        } else {
          retVal.body = JSON.parse(body);
        }
        resolve(retVal);
        return callback(retVal.res, retVal.body);
  
      });

    });
  
  };
  
  /**
   * Create an asset
   *
   * @param {string} type - the type of asset to create
   * @param {Object} value - the set of values with which to create the asset
   * @param {requestCallback} [callback] - optional callback that handles the response (if not using Promises)
   * @returns {Promise} when resolved contains the RID of the created asset
   */
  const create = function(type, value, callback) {
    callback = callback || function() {};
    return new Promise(function(resolve, reject) {
      value._type = type;
      makeRequest('POST', "/ibm/iis/igc-rest/v1/assets", value, 'application/json').then(function(results) {
        const err = _checkRequestError(results.res, 201, reject);
        let rid = "";
        if (results.res.headers.hasOwnProperty("Location")) {
          rid = results.res.headers.Location.substring(results.res.headers.Location.lastIndexOf("/"));
        } else if (results.res.headers.hasOwnProperty("location")) {
          rid = results.res.headers.location.substring(results.res.headers.location.lastIndexOf("/"));
        }
        if (rid.length > 0) {
          rid = rid.substring(1);
        }
        resolve(rid);
        return callback(err, rid);
      });
    });
  };
  
  /**
   * Update a RID with a specific set of data
   *
   * @param {string} rid - the RID of the asset to update
   * @param {Object} value - the set of data with which to update the asset
   * @param {requestCallback} [callback] - optional callback to handles the response (if not using Promises)
   * @returns {Promise} when resolved contains the results of the update
   */
  const update = function(rid, value, callback) {
    callback = callback || function() {};
    return new Promise(function(resolve, reject) {
      makeRequest('PUT', "/ibm/iis/igc-rest/v1/assets/" + rid, value, 'application/json').then(function(results) {
        const err = _checkRequestError(results.res, 200, reject);
        resolve(results.body);
        return callback(err, results.body);
      });
    });
  };
  
  /**
   * Search IGC
   *
   * @param {Object} query - the search to run against IGC (as a JSON object)
   * @param {requestCallback} [callback] - optional callback that handles the response (if not using Promises)
   * @returns {Promise} when resolved contains the results of the search
   */
  const search = function(query, callback) {
    callback = callback || function() {};
    return new Promise(function(resolve, reject) {
      makeRequest('POST', "/ibm/iis/igc-rest/v1/search/", query, 'application/json').then(function(results) {
        const err = _checkRequestError(results.res, 200, reject);
        resolve(results.body);
        return callback(err, results.body);
      });
    });
  };
  
  /**
   * Get a list of all of the IGC asset types
   *
   * @param {requestCallback} [callback] - optional callback that handles the response (if not using Promises)
   * @returns {Promise} when resolved contains the IGC types
   */
  const getTypes = function(callback) {
    callback = callback || function() {};
    return new Promise(function(resolve, reject) {
      makeRequest('GET', "/ibm/iis/igc-rest/v1/types/").then(function(results) {
        const err = _checkRequestError(results.res, 200, reject);
        resolve(results.body);
        return callback(err, results.body);
      });
    });
  };
  
  /**
   * Get a mapping of all asset types from display name to unique type id
   *
   * @param {requestCallback} [callback] - optional callback that handles the response (when not using Promises), with an object keyed by display name and each value the unique type id for that display name
   * @returns {Promise} when resolved contains an object keyed by display name and each value the unique type id for that display name
   */
  const getAssetTypeNamesToIds = function(callback) {
    callback = callback || function() {};
    return new Promise(function(resolve, reject) {
      getTypes().then(function(resTypes) {
        const typesToIds = {};
        for (let i = 0; i < resTypes.length; i++) {
          const name = resTypes[i]._name;
          const id = resTypes[i]._id;
          typesToIds[name] = id;
        }
        resolve(typesToIds);
        return callback(null, typesToIds);
      }, function(error) {
        reject(error);
        return callback(error, null);
      });
    });
  };
  
  /**
   * Make a general GET request against IGC's REST API
   *
   * @param {string} path - the path to the end-point (e.g. /ibm/iis/igc-rest/v1/...)
   * @param {integer} successCode - the HTTP response code that indicates success for this operation
   * @param {requestCallback} [callback] - optional callback that handles the response (when not using Promises)
   * @returns {Promise} when resolved contains the response body from the request
   */
  const getOther = function(path, successCode, callback) {
    callback = callback || function() {};
    return new Promise(function(resolve, reject) {
      makeRequest('GET', path).then(function(results) {
        const err = _checkRequestError(results.res, successCode, reject);
        resolve(results.body);
        return callback(err, results.body);
      });
    });
  };
  
  /**
   * Delete a specific asset from IGC
   *
   * @param {string} rid - the RID of the asset to delete
   * @param {requestCallback} [callback] - optional callback that handles the response (when not using Promises)
   * @returns {Promise} when resolved contains the result of the deletion
   */
  const deleteAssetById = function(rid, callback) {
    callback = callback || function() {};
    return new Promise(function(resolve, reject) {
      makeRequest('DELETE', "/ibm/iis/igc-rest/v1/assets/" + rid).then(function(results) {
        const err = _checkRequestError(results.res, 200, reject);
        resolve(results.body);
        return callback(err, results.body);
      });
    });
  };
  
  /**
   * Request IGC to detect lineage for a specific job (requires v11.5.0.1 GOVRUP3 or higher)
   * - Actual status comes from the "message" within the callback results: starts with SUCCESS, WARNING or FAILURE
   *
   * @param {string} rid - the RID of the job for which to detect lineage
   * @param {requestCallback} [callback] - optional callback that handles the response (when not using Promises)
   * @returns {Promise} when resolved contains results of the lineage detection
   */
  const detectLineageForJob = function(rid, callback) {
    return getOther("/ibm/iis/igc-rest/v1/flows/detectFlows/dsjob/" + rid, 202, callback);
  };

  /**
   * Create new lineage flow as defined by a flow XML document
   *
   * @param {string} xml - the flow document XML containing the lineage to upload
   * @param {requestCallback} [callback] - optional callback that handles the response (when not using Promises)
   * @returns {Promise} when resolved contains the results of the lineage flow upload
   */
  const uploadLineageFlow = function(xml, callback) {
    callback = callback || function() {};
    return new Promise(function(resolve, reject) {
      makeRequest('POST', "/ibm/iis/igc-rest/v1/flows/upload", xml, 'application/xml').then(function(results) {
        const err = _checkRequestError(results.res, 200, reject);
        resolve(results.body);
        return callback(err, results.body);
      });
    });
  };

  /**
   * Get list of bundles (asset type definitions) already deployed
   *
   * @param {requestCallback} [callback] - optional callback that handles the response (when not using Promises)
   * @returns {Promise} when resolved contains the a String[] of bundle names
   */
  const getBundles = function(callback) {
    return getOther("/ibm/iis/igc-rest/v1/bundles/", 200, callback);
  };

  /**
   * Create a new Open IGC bundle (asset type definition)
   *
   * @param {string} zipFile - the location of the zip file from which to create the bundle
   * @param {requestCallback} [callback] - optional callback that handles the response (when not using Promises)
   * @returns {Promise} when resolved contains the results of the bundle upload
   */
  const createBundle = function(zipFile, callback) {

    callback = callback || function() {};
    return new Promise(function(resolve, reject) {
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
      makeRequest('POST', "/ibm/iis/igc-rest/v1/bundles", formData, 'multipart/form-data').then(function(results) {
        const err = _checkRequestError(results.res, 200, reject);
        resolve(results.body);
        return callback(err, results.body);
      });
    });

  };

  /**
   * Update an existing Open IGC bundle (asset type definition)
   *
   * @param {string} zipFile - the location of the zip file from which to create the bundle
   * @param {requestCallback} [callback] - optional callback that handles the response (when not using Promises)
   * @returns {Promise} when resolved contains the results of the bundle upload
   */
  const updateBundle = function(zipFile, callback) {

    callback = callback || function() {};
    return new Promise(function(resolve, reject) {
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
      makeRequest('PUT', "/ibm/iis/igc-rest/v1/bundles", formData, 'multipart/form-data').then(function(results) {
        const err = _checkRequestError(results.res, 200, reject);
        resolve(results.body);
        return callback(err, results.body);
      });
    });

  };

  /**
   * Create instances of assets defined by an Open IGC bundle
   *
   * @param {string} xml - the flow document XML containing the asset instance definitions
   * @param {requestCallback} [callback] - optional callback that handles the response (when not using Promises)
   * @returns {Promise} when resolved contains the results of the asset instantiations
   */
  const createBundleAssets = function(xml, callback) {
    callback = callback || function() {};
    return new Promise(function(resolve, reject) {
      makeRequest('POST', "/ibm/iis/igc-rest/v1/bundles/assets", xml, 'application/xml').then(function(results) {
        const err = _checkRequestError(results.res, 200, reject);
        resolve(results.body);
        return callback(err, results.body);
      });
    });
  };
  
  /**
   * Get a listing of all of the assets in a collection
   *
   * @param {string} collectionName
   * @param {integer} maxItems - maximum number of items to retrieve
   * @param {requestCallback} [callback] - optional callback that handles the response (when not using Promises)
   * @returns {Promise} when resolved contains the list of assets in the collection
   */
  const getAssetsInCollection = function(collectionName, maxItems, callback) {
    callback = callback || function() {};
    return new Promise(function(resolve, reject) {
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
      search(json).then(function(results) {
        let assets = [];
        let err = null;
        if (results.items.length > 1) {
          err = "WARN: Found more than one collection called '" + collectionName + "' -- only taking assets from the first one.";
          console.warn(err);
        }
        if (results.items.length > 0) {
          assets = results.items[0].assets.items;
        } else {
          err = "WARN: No assets found in the collection '" + collectionName + "'.";
          console.warn(err);
        }
        resolve(assets);
        return callback(err, assets);
      }, function(error) {
        reject(error);
      });
    });
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
   * @param {requestCallback} [callback] - optional callback that handles the response (when not using Promises)
   * @returns {Promise} when resolved contains all of the asset's details
   */
  const getAssetById = function(rid, callback) {
    return getOther("/ibm/iis/igc-rest/v1/assets/" + rid, 200, callback);
  };

  /**
   * Retrieve only the single specified property of an asset
   *
   * @param {string} rid - the RID of the asset
   * @param {string} property - the property of the asset to retrieve (e.g. 'name')
   * @param {requestCallback} [callback] - optional callback that handles the response (when not using Promises)
   * @returns {Promise} when resolved contains the specified property of the asset
   */
  const getAssetPropertyById = function(rid, property, callback) {
    return getOther("/ibm/iis/igc-rest/v1/assets/" + rid + "/" + property, 200, callback);
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
   * @param {requestCallback} [callback] - optional callback that handles the response (when not using Promises)
   * @returns {Promise} when resolved contains the specified properties of the asset
   */
  const getAssetPropertiesById = function(rid, type, properties, maxItems, bIncludeContext, callback) {
    
    callback = callback || function() {};
    return new Promise(function(resolve, reject) {
      
      if (!Array.isArray(properties)) {
        properties = [ properties ];
      }

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

      search(json).then(function(results) {
        let toReturn = {};
        let err = null;
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
        }
        resolve(toReturn);
        return callback(err, toReturn);
      }, function(error) {
        reject(new Error("No assets found with RID '" + rid + "'.\n" + error));
      });

    });
  
  };

  /**
   * Retrieve the next page of information
   *
   * @see module:ibm-igc-rest.search
   * @param {Object} paging - the 'paging' sub-object of a results object
   * @param {requestCallback} [callback] - optional callback that handles the response (when not using Promises)
   * @returns {Promise} when resolved contains the next page of results
   */
  const getNextPage = function(paging, callback) {

    if (paging.hasOwnProperty('next')) {
      return getOther(paging.next, 200, callback);
    } else {
      callback = callback || function() {};
      return new Promise(function(resolve) {
        resolve({ items: [] });
        return callback(null, { items: [] });
      });
    }

  };

  /**
   * Retrieve all remaining pages of information
   *
   * @see module:ibm-igc-rest.search
   * @see module:ibm-igc-rest.getNextPage
   * @param {Object} items - the 'items' sub-object of a results object
   * @param {Object} paging - the 'paging' sub-object of a results object
   * @param {itemSetCallback} [callback] - optional callback that provides the list of all items from all pages (when not using Promises)
   * @returns {Promise} when resolved contains the list of all items from all pages of results
   */
  const getAllPages = function(items, paging, callback) {

    callback = callback || function() {};
    return new Promise(function(resolve, reject) {
      getNextPage(paging).then(function(results) {
        if (results.items.length > 0) {
          resolve(getAllPages(items.concat(results.items), results.paging, callback));
        } else {
          resolve(items.concat(results.items));
          return callback(null, items.concat(results.items));
        }
      }, function(error) {
        reject(error);
        return callback(error, items);
      });
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
    uploadLineageFlow: uploadLineageFlow,
    getBundles: getBundles,
    createBundle: createBundle,
    updateBundle: updateBundle,
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
