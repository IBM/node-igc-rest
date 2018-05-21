# README

Objective of this module is to provide re-usable functionality and utilities for interacting with the IBM Information Governance Catalog through its REST API, using NodeJS.

# Utilities

## findAssets.js

Run a query for IGC assets and (optionally) take action against the results.  Usage:

```shell
node ./findAssets.js
		-f <file>
		[-a <authfile>]
		[-p <password>]
```

Searches IGC based on the query conditions defined in the provided file; and if there is also an action section it will apply that action to each of the query results.  The provided file is expected to contain at least a "query" key, under which a set of IGC query conditions is specified; and optionally an action key [`update` or `delete`].

By default (if not specified using the optional `-a` parameter), the utility will look for environment details in `~/.infosvrauth` and will prompt the user for a password.

The authorisation file can be generated using the <https://npmjs.com/package/ibm-iis-commons> module.  Refer to the `createInfoSvrAuthFile.js` utility there for more details.

##### Examples:

Using this input file `queryAndUpdate.json`:

```json
{
  "query":
  {
    "properties": ["name"],
    "types": ["database_table"],
    "where":
    {
      "operator": "and",
      "conditions": [
        {
          "property": "name",
          "operator": "=",
          "value": "MY_DB_TABLE"
        }
      ]
    }
  },
  "update":
  {
    "value":
    {
      "assigned_to_terms": ["6662c0f2.e1b1ec6c.svu583pvk.3sr7b7n.mq748u.ru37pccq07437ncqvhvjs"]
     }
   }
}
```

the following command will find all database tables whose name is `MY_DB_TABLE`, and update the tables so that they are assigned to the term with RID `6662c0f2.e1b1ec6c.svu583pvk.3sr7b7n.mq748u.ru37pccq07437ncqvhvjs`.

```shell
node ./findAssets.js
	-f queryAndUpdate.json
```

## generateIGCRESTDocumentation.js

Create documentation on the various types (and their properties) available within the Information Governance Catalog REST API.  Usage:

```shell
node ./generateIGCRESTDocumentation.js
		-f <file>
		[-t <type>]
		[-a <authfile>]
		[-p <password>]
```

Creates a markdown file in the location provided by the file parameter, by default using GitHub-style markdown (unless overridden through the type parameter).

By default (if not specified using the optional `-a` parameter), the utility will look for environment details in `~/.infosvrauth` and will prompt the user for a password.

The authorisation file can be generated using the <https://npmjs.com/package/ibm-iis-commons> module.  Refer to the `createInfoSvrAuthFile.js` utility there for more details.

Example output of running this against various versions of vanilla (uncustomised) Information Server environments can be found under the [`doc/`](https://github.com/IBM/node-igc-rest/tree/master/doc) directory of this GitHub repository.  Note that because these are vanilla (uncustomised) environments, they will not contain any details about custom attributes or OpenIGC objects that you may have in your own environment -- to see those details, run this utility against your own environment.

##### Examples:

```shell
node ./generateIGCRESTDocumentation.js
	-f IGC_REST.md
```

Creates markdown documentation in `IGC_REST.md` covering all of the data types and their properties that are available for use in the IGC REST API.

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## ibm-igc-rest

Re-usable functions for interacting with IBM Information Governance Catalog's REST API

**Examples**

```javascript
// retrieves all of the "types" from IGC's REST API
var igcrest = require('ibm-igc-rest');
var commons = require('ibm-iis-commons');
var restConnect = new commons.RestConnection("isadmin", "isadmin", "hostname", "9445");
igcrest.setConnection(restConnect);
igcrest.getTypes(function(err, resTypes) {
  // do something with the types within resTypes object
});
```

**Meta**

-   **license**: Apache-2.0

## setConnection

Set the connection for the REST API

**Parameters**

-   `restConnect` **RestConnection** RestConnection object, from ibm-iis-commons

## openSession

-   **See: module:ibm-igc-rest.setConnection**
-   **See: module:ibm-igc-rest.closeSession**

Setup a re-usable session against the IGC REST API -- a connection must first
be setup

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the opened sessionId

## closeSession

-   **See: module:ibm-igc-rest.setConnection**
-   **See: module:ibm-igc-rest.openSession**

Logout of (close) a re-usable session against the IGC REST API

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved will have logged out / closed the session

## replaceQueryVars

Replace any variables (text that starts with '$') that show up in a query

**Parameters**

-   `json` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the query (as a JSON object)
-   `variables` **Dict** a dictionary indexed by variable name

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## replaceRelatedUpdateVars

Replace '$relatedObjectRID' in the query with the provided RID

**Parameters**

-   `json` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the query (as a JSON object)
-   `rid` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the RID to inject into the query

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## verifySingleItem

Verify that one and only one item was returned by a query

**Parameters**

-   `json` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the data returned from a query (as a JSON object)


-   Throws **any** will throw an error if either no item or multiple items are found

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the single item returned

## getSingleItem

Retrieve the first item returned by a query

**Parameters**

-   `json` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the data returned from a query (as a JSON object)


-   Throws **any** will throw an error if no items are found

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## logUpdateResults

Log to the console the results of an update

**Parameters**

-   `results` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the data returned from an update (as a JSON object)

## compareObjectsForSorting

Compare two objects for sorting purposes

**Parameters**

-   `a`  
-   `b`  

Returns **integer** \-1 (a&lt;b), 0 (a=b), 1 (a>b)

## getAssetContainerId

Retrieve the RID of the container of an asset (for example, the database table of a database column)

**Parameters**

-   `assetObj` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the asset object, as returned from REST API

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the RID of assetObj's container

## getContainerIdentity

Get an identity object for the provided asset's container

**Parameters**

-   `assetCtx` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the context object for the asset
-   `containerId` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the RID of the asset's container
-   `callback` **[identityCallback](#identitycallback)** callback that handles the response, since further requests may be needed

## getAssetIdentity

Get an identity object for the provided asset

**Parameters**

-   `assetObj` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the asset for which to get an identity object
-   `containerIdentities` **Dict** a dict cache of container identities

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the identity of this object

## getItemIdentityString

Constructs an asset identity string provide a REST API item (which must include '\_context')

**Parameters**

-   `restItem` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a single entry from the 'items' array of a REST API response, including '\_context' member
-   `delimiter` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** a delimiter to use for separating the components of the identity (default: '::')

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## makeRequest

-   **See: module:ibm-igc-rest.setServer**
-   **See: module:ibm-igc-rest.setAuth**

Make a request against IGC's REST API

**Parameters**

-   `method` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** type of request, one of ['GET', 'PUT', 'POST', 'DELETE']
-   `path` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the path to the end-point (e.g. /ibm/iis/igc-rest/v1/...)
-   `input` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** any input for the request, i.e. for PUT, POST
-   `contentType` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** the type of content, e.g. 'application/json' or 'application/xml'
-   `drillDown` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** the key into which to drill-down within the response
-   `callback` **[requestCallback](#requestcallback)** callback that handles the response


-   Throws **any** will throw an error if connectivity details are incomplete or there is a fatal error during the request

## create

Create an asset

**Parameters**

-   `type` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the type of asset to create
-   `value` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the set of values with which to create the asset
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (if not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the RID of the created asset

## update

Update a RID with a specific set of data

**Parameters**

-   `rid` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the RID of the asset to update
-   `value` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the set of data with which to update the asset
-   `callback` **[requestCallback](#requestcallback)?** optional callback to handles the response (if not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the results of the update

## search

Search IGC

**Parameters**

-   `query` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the search to run against IGC (as a JSON object)
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (if not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the results of the search

## getTypes

Get a list of all of the IGC asset types

**Parameters**

-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (if not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the IGC types

## getAssetTypeNamesToIds

Get a mapping of all asset types from display name to unique type id

**Parameters**

-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises), with an object keyed by display name and each value the unique type id for that display name

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains an object keyed by display name and each value the unique type id for that display name

## getOther

Make a general GET request against IGC's REST API

**Parameters**

-   `path` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the path to the end-point (e.g. /ibm/iis/igc-rest/v1/...)
-   `successCode` **integer** the HTTP response code that indicates success for this operation
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the response body from the request

## deleteAssetById

Delete a specific asset from IGC

**Parameters**

-   `rid` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the RID of the asset to delete
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the result of the deletion

## detectLineageForJob

Request IGC to detect lineage for a specific job (requires v11.5.0.1 GOVRUP3 or higher)

-   Actual status comes from the "message" within the callback results: starts with SUCCESS, WARNING or FAILURE

**Parameters**

-   `rid` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the RID of the job for which to detect lineage
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains results of the lineage detection

## uploadLineageFlow

Create new lineage flow as defined by a flow XML document

**Parameters**

-   `xml` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the flow document XML containing the lineage to upload
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the results of the lineage flow upload

## getBundles

Get list of bundles (asset type definitions) already deployed

**Parameters**

-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains a String\[] of bundle names

## createBundle

Create a new Open IGC bundle (asset type definition)

**Parameters**

-   `zipFile` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the location of the zip file from which to create the bundle
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the results of the bundle upload

## updateBundle

Update an existing Open IGC bundle (asset type definition)

**Parameters**

-   `zipFile` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the location of the zip file from which to create the bundle
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the results of the bundle upload

## createBundleAssets

Create instances of assets defined by an Open IGC bundle

**Parameters**

-   `xml` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the flow document XML containing the asset instance definitions
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the results of the asset instantiations

## createCustomAttribute

Create a new Custom Attribute (available in v11.7 onwards only)

**Parameters**

-   `json` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the JSON object which describes the custom attribute
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the results of the custom attribute creation

## updateCustomAttribute

Update a new Custom Attribute (available in v11.7 onwards only)

**Parameters**

-   `rid` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the RID of the custom attribute to update
-   `json` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the JSON object which describes the custom attribute
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the results of the custom attribute update

## getCustomAttributes

Get list of custom attributes already deployed

**Parameters**

-   `maxItems` **integer** maximum number of custom attributes to retrieve
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains an array of objects with custom attribute definitions: "id", "name", "attributeType", and "appliesTo"\[]

## getAssetsInCollection

Get a listing of all of the assets in a collection

**Parameters**

-   `collectionName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `maxItems` **integer** maximum number of items to retrieve
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the list of assets in the collection

## getAssetById

-   **See: module:ibm-igc-rest.getAssetPropertiesById**

Request all details of an asset

NOTE: this function should be used with caution -- it will build a large object and
can be measurably slower (> 5x) than explicitly defining the properties and searching
using 'getAssetPropertiesById' instead

**Parameters**

-   `rid` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the RID of the asset
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains all of the asset's details

## getAssetPropertyById

Retrieve only the single specified property of an asset

**Parameters**

-   `rid` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the RID of the asset
-   `property` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the property of the asset to retrieve (e.g. 'name')
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the specified property of the asset

## getAssetPropertiesById

-   **See: module:ibm-igc-rest.getTypes**

Retrieve only the specified details of an asset

**Parameters**

-   `rid` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the RID of the asset
-   `type` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the type of the asset
-   `properties` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>** array of properties to retrieve for the asset
-   `maxItems` **integer** maximum number of detailed properties
-   `bIncludeContext` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether to include contextual information (true) or drill-down just to the resulting properties (false)
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the specified properties of the asset

## getNextPage

-   **See: module:ibm-igc-rest.search**

Retrieve the next page of information

**Parameters**

-   `paging` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the 'paging' sub-object of a results object
-   `callback` **[requestCallback](#requestcallback)?** optional callback that handles the response (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the next page of results

## getAllPages

-   **See: module:ibm-igc-rest.search**
-   **See: module:ibm-igc-rest.getNextPage**

Retrieve all remaining pages of information

**Parameters**

-   `items` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the 'items' sub-object of a results object
-   `paging` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the 'paging' sub-object of a results object
-   `callback` **[itemSetCallback](#itemsetcallback)?** optional callback that provides the list of all items from all pages (when not using Promises)

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** when resolved contains the list of all items from all pages of results

## isDataContainer

**Parameters**

-   `type`  

Returns **any** true if the provided type is a data container

## getDataContainerChildTypes

**Parameters**

-   `type`  

Returns **any** the data type name for the child object of the provided container type

## itemSetCallback

This callback is invoked as the result of obtaining a set of items, providing an array of items.

Type: [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

**Parameters**

-   `errorMessage` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** any error message, or null if no errors
-   `itemArray` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>** an array of JSON objects, each being an item

## requestCallback

This callback is invoked as the result of an IGC REST API call, providing the response of that request.

Type: [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

**Parameters**

-   `errorMessage` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** any error message, or null if no errors
-   `responseObject` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the JSON object containing the response

## identityCallback

This callback is invoked as the result of obtaining an object's identity, providing the response of that request.

Type: [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

**Parameters**

-   `errorMessage` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** any error message, or null if no errors
-   `identityObject` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the JSON object containing the identity
