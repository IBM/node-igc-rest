# README

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

## \_prepValue

Prepare the provided value for use via the REST API:

-   if XML, leave it as-is
-   if a string, surround it in double-quotes
-   if an object, convert to a JSON string

**Parameters**

-   `value` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the value to prepare
-   `contentType` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** the type of content received as input

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
-   `callback` **[requestCallback](#requestcallback)** callback that handles the response


-   Throws **any** will throw an error if the status code does not indicate success

## update

Update a RID with a specific set of data

**Parameters**

-   `rid` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the RID of the asset to update
-   `value` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the set of data with which to update the asset
-   `callback` **[requestCallback](#requestcallback)** callback that handles the response


-   Throws **any** will throw an error if the status code does not indicate success

## search

Search IGC

**Parameters**

-   `query` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the search to run against IGC (as a JSON object)
-   `callback` **[requestCallback](#requestcallback)** callback that handles the response


-   Throws **any** will throw an error if the status code does not indicate success

## getTypes

Get a list of all of the IGC asset types

**Parameters**

-   `callback` **[requestCallback](#requestcallback)** callback that handles the response


-   Throws **any** will throw an error if the status code does not indicate success

## getAssetTypeNamesToIds

Get a mapping of all asset types from display name to unique type id

**Parameters**

-   `callback` **[requestCallback](#requestcallback)** callback that handles the response, with an object keyed by display name and each value the unique type id for that display name


-   Throws **any** will throw an error if the status code does not indicate success

## getOther

Make a general GET request against IGC's REST API

**Parameters**

-   `path` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the path to the end-point (e.g. /ibm/iis/igc-rest/v1/...)
-   `callback` **[requestCallback](#requestcallback)** callback that handles the response

## deleteAssetById

Delete a specific asset from IGC

**Parameters**

-   `rid` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the RID of the asset to delete
-   `callback` **[requestCallback](#requestcallback)** callback that handles the response


-   Throws **any** will throw an error if the status code does not indicate success

## detectLineageForJob

Request IGC to detect lineage for a specific job (requires v11.5.0.1 GOVRUP3 or higher)

-   Actual status comes from the "message" within the callback results: starts with SUCCESS, WARNING or FAILURE

**Parameters**

-   `rid` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the RID of the job for which to detect lineage
-   `callback` **[requestCallback](#requestcallback)** callback that handles the response


-   Throws **any** will throw an error if the status code does not indicate success

## createBundleAssets

Create instances of assets defined by an Open IGC bundle

**Parameters**

-   `xml` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the flow document XML containing the asset instance definitions
-   `callback` **[requestCallback](#requestcallback)** callback that handles the response


-   Throws **any** will throw an error if the status code does not indicate success

## getAssetsInCollection

Get a listing of all of the assets in a collection

**Parameters**

-   `collectionName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `maxItems` **integer** maximum number of items to retrieve
-   `callback` **[requestCallback](#requestcallback)** callback that handles the response

## getAssetById

Request all details of an asset

NOTE: this function should be used with caution -- it will build a large object and
can be measurably slower (> 5x) than explicitly defining the properties and searching
using 'getAssetPropertiesById' instead

**Parameters**

-   `rid` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the RID of the asset
-   `callback` **[requestCallback](#requestcallback)** callback that handles the response

## getAssetPropertyById

Retrieve only the single specified property of an asset

**Parameters**

-   `rid` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the RID of the asset
-   `property` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the property of the asset to retrieve (e.g. 'name')
-   `callback` **[requestCallback](#requestcallback)** callback that handles the response

## getAssetPropertiesById

Retrieve only the specified details of an asset

**Parameters**

-   `rid` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the RID of the asset
-   `type` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the type of the asset
-   `properties` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>** array of properties to retrieve for the asset
-   `maxItems` **integer** maximum number of detailed properties
-   `bIncludeContext` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** whether to include contextual information (true) or drill-down just to the resulting properties (false)
-   `callback` **[requestCallback](#requestcallback)** callback that handles the response

## isDataContainer

**Parameters**

-   `type`  

Returns **any** true iff the provided type is a data container

## getDataContainerChildTypes

**Parameters**

-   `type`  

Returns **any** the data type name for the child object of the provided container type

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
