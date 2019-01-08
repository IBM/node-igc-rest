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

const path = require('path');
const fs = require('fs');

/**
 * Conversion class -- for encapsulating mapping / transformation information between REST concepts and other representations
 */
class Conversion {

  constructor() { }

  /**
   * Retrieves the IGC REST type equivalent for the provided schema type
   *
   * @param {string} schemaType - the xmeta schema type (eg. 'ASCLModel.DatabaseField')
   * @returns {string} the REST type (eg. 'database_column')
   */
  static getRESTTypeFromSchemaType(schemaType) {
    const map = this._getSchemaTypeMap();
    if (map.has(schemaType)) {
      return map.get(schemaType);
    } else if (schemaType.startsWith("MwbExtensions.Xt_")) {
      return this._schemaTypeToOpenIGCREST(schemaType);
    } else {
      throw new Error("Unable to find schema type '" + schemaType + "'.");
    }
  }

  /**
   * Retrieves the xmeta schema type equivalent for the provided REST type
   *
   * @param {string} restType - the REST type (eg. 'database_column')
   * @returns {string} the xmeta schema type (eg. 'ASCLModel.DatabaseField')
   */
  static getSchemaTypeFromRESTType(restType) {
    const map = this._reverseMap(this._getSchemaTypeMap());
    if (map.has(restType)) {
      return map.get(restType);
    } else if (restType.startsWith("$")) {
      return this._openIGCRESTTypeToSchema(restType);
    } else {
      throw new Error("Unable to find REST type '" + restType + "'.");
    }
  }

  /**
   * @private
   */
  static _reverseMap(mapping) {
    return new Map(Array.from(mapping).map(function(a) { return [ a[1], a[0] ]; }));
  }

  static _getSchemaTypeMap() {
    return new Map([
      ["ASCLModel.DatabaseField", "database_column"]
    ]);
  }

  static _openIGCRESTTypeToSchema(restType) {
    return "MwbExtensions.Xt_" + restType.substring("$".length).replace(/-/g, "__");
  }

  static _schemaTypeToOpenIGCREST(schemaType) {
    return "$" + schemaType.substring("MwbExtensions.Xt_".length).replace(/__/g, "-");
  }

}

module.exports = Conversion;
