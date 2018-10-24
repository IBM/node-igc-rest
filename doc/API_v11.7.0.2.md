# Information Governance Catalog REST API

## `Rule_Execution_Result`

- Displayed as: _"Rule Execution Result"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/Rule_Execution_Result](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/Rule_Execution_Result)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| nbRecordsTested | number | _"Number of Records Tested"_ |
| nbPassed | number | _"Number of Records Met"_ |
| nbFailed | number | _"Number of Records Not Met"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| nbRecordsTested | number | _"Number of Records Tested"_ |
| nbPassed | number | _"Number of Records Met"_ |
| nbFailed | number | _"Number of Records Not Met"_ |
| benchmark | string | _"Benchmark"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `acl`

- Displayed as: _"Acl"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/acl](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/acl)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| has_acl_entry | [aclentry](#aclentry) | _"Has Acl Entry"_ |
| **of_common_object** | [information_asset](#information_asset) | _"Of Common Object"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| has_acl_entry | [aclentry](#aclentry) | _"Has Acl Entry"_ |
| **of_common_object** | [information_asset](#information_asset) | _"Of Common Object"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `aclentry`

- Displayed as: _"AclEntry"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/aclentry](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/aclentry)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| permissions | enum | _"Permissions"_: `READ`, `UPDATE`, `DELETE`, `VIEW`, `EXECUTE`, `OWNER` |
| **used_by_acl** | [acl](#acl) | _"Used By Acl"_ |
| has_system_role | [system_role](#system_role) | _"Has System Role"_ |
| has_principal | [steward](#steward) | _"Has Principal"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| permissions | enum | _"Permissions"_: `READ`, `UPDATE`, `DELETE`, `VIEW`, `EXECUTE`, `OWNER` |
| **used_by_acl** | [acl](#acl) | _"Used By Acl"_ |
| has_system_role | [system_role](#system_role) | _"Has System Role"_ |
| has_principal | [steward](#steward) | _"Has Principal"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `actiondescriptor`

- Displayed as: _"ActionDescriptor"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/actiondescriptor](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/actiondescriptor)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| instance_constraint_expression | string | _"Instance Constraint Expression"_ |
| parameters | string | _"Parameters"_ |
| has_privilege_system_role | [system_role](#system_role) | _"Has Privilege System Role"_ |
| has_privilege_contact_role | [user_role](#user_role) | _"Has Privilege Contact Role"_ |
| **of_class_descriptor** | [classdescriptor](#classdescriptor) | _"Of Class Descriptor"_ |
| description | string | _"Description"_ |
| display_name | string | _"Display Name"_ |
| name | string | _"Name"_ |
| operation | string | _"Operation"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| instance_constraint_expression | string | _"Instance Constraint Expression"_ |
| parameters | string | _"Parameters"_ |
| has_privilege_system_role | [system_role](#system_role) | _"Has Privilege System Role"_ |
| has_privilege_contact_role | [user_role](#user_role) | _"Has Privilege Contact Role"_ |
| **of_class_descriptor** | [classdescriptor](#classdescriptor) | _"Of Class Descriptor"_ |
| description | string | _"Description"_ |
| display_name | string | _"Display Name"_ |
| name | string | _"Name"_ |
| operation | string | _"Operation"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `amazon_s3_bucket`

- Displayed as: _"Amazon S3 Bucket"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/amazon_s3_bucket](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/amazon_s3_bucket)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| same_as_data_sources | [main_object](#main_object) | _"Same as Data Sources"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| host | [host](#host) | _"Host"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_amazon_s3_data_file_folders | [main_object](#main_object) | _"Contains Amazon S3 Data File Folders"_ |
| contains_amazon_s3_data_files | [amazon_s3_data_file](#amazon_s3_data_file) | _"Contains Amazon S3 Data Files"_ |
| uses_data_file_definitions | [data_file_definition](#data_file_definition) | _"Uses Data File Definitions"_ |
| location | string | _"Location"_ |
| source_creation_date | datetime | _"Source Creation Date"_ |
| source_modification_date | datetime | _"Source Modification Date"_ |
| data_connection | [data_connection](#data_connection) | _"Data Connection"_ |
| same_as_data_sources | [main_object](#main_object) | _"Same as Data Sources"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `amazon_s3_data_file`

- Displayed as: _"Amazon S3 Data File"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/amazon_s3_data_file](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/amazon_s3_data_file)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| parent_folder | [amazon_s3_data_file_folder](#amazon_s3_data_file_folder) | _"Parent Folder"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| data_file_records | [data_file_record](#data_file_record) | _"Data File Records"_ |
| implements_data_file_definition | [data_file_definition](#data_file_definition) | _"Implements Data File Definition"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| path | string | _"Path"_ |
| imported_from | string | _"Imported From"_ |
| content_type | string | _"Content Type"_ |
| compression | string | _"Compression"_ |
| size | number | _"Size"_ |
| url | string | _"URL"_ |
| version | string | _"Version"_ |
| source_creation_date | datetime | _"Source Creation Date"_ |
| source_modification_date | datetime | _"Source Modification Date"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `amazon_s3_data_file_field`

- Displayed as: _"Amazon S3 Data File Field"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/amazon_s3_data_file_field](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/amazon_s3_data_file_field)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| selected_classification | [data_class](#data_class) | _"Selected Data Classification"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| data_file_record | [data_file_record](#data_file_record) | _"Data File Record"_ |
| qualityScore | string | _"Quality Score"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| implements_entity_attributes | [entity_attribute](#entity_attribute) | _"Implements Entity Attributes"_ |
| implements_design_columns | [design_column](#design_column) | _"Implements Design Columns"_ |
| type | string | _"Native Type"_ |
| data_type | enum | _"Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| selected_classification | [data_class](#data_class) | _"Selected Data Classification"_ |
| detected_classifications | [classification](#classification) | _"Detected Data Classifications"_ |
| odbc_type | enum | _"ODBC Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| length | number | _"Length"_ |
| minimum_length | number | _"Minimum Length"_ |
| fraction | number | _"Scale"_ |
| position | number | _"Position"_ |
| level | number | _"Level Number"_ |
| allows_null_values | boolean | _"Allow Null Values"_ |
| unique | boolean | _"Unique Constraint"_ |
| uniqueFlag | boolean | _"Require Unique Values"_ |
| nullabilityFlag | boolean | _"Include Null Values"_ |
| constantFlag | boolean | _"Include Constant Values"_ |
| domainType | string | _"Domain"_ |
| numberCompleteValues | number | _"Number of Complete Values"_ |
| numberValidValues | number | _"Number of Valid Values"_ |
| numberEmptyValues | number | _"Number of Empty Values"_ |
| numberNullValues | number | _"Number of Null Values"_ |
| numberDistinctValues | number | _"Number of Distinct Values"_ |
| numberFormats | number | _"Number of Distinct Formats"_ |
| numberZeroValues | number | _"Number of Zero Values"_ |
| inferredDataType | enum | _"Inferred Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| inferredLength | number | _"Inferred Length"_ |
| inferredFormat | string | _"Inferred Format"_ |
| inferredScale | number | _"Inferred Scale"_ |
| inferredPrecision | number | _"Inferred Precision"_ |
| averageValue | string | _"Average Value"_ |
| isInferredForeignKey | boolean | _"Inferred Foreign Key"_ |
| isInferredPrimaryKey | boolean | _"Inferred Primary Key"_ |
| hasDataClassification | [classification](#classification) | _"Detected Data Classifications"_ |
| nbRecordsTested | number | _"Number of Records Tested"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| used_by_analytics_objects | [analytics_object](#analytics_object) | _"Used By Data Science"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `amazon_s3_data_file_folder`

- Displayed as: _"Amazon S3 Data File Folder"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/amazon_s3_data_file_folder](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/amazon_s3_data_file_folder)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| same_as_data_sources | [main_object](#main_object) | _"Same as Data Sources"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| parent_folder | [main_object](#main_object) | _"Data File Folder"_ |
| amazon_s3_bucket | [amazon_s3_bucket](#amazon_s3_bucket) | _"Amazon S3 Bucket"_ |
| amazon_s3_data_file_folder | [amazon_s3_data_file_folder](#amazon_s3_data_file_folder) | _"Amazon S3 Data File Folder"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_amazon_s3_data_file_folders | [main_object](#main_object) | _"Contains Amazon S3 Data File Folders"_ |
| contains_amazon_s3_data_files | [amazon_s3_data_file](#amazon_s3_data_file) | _"Contains Amazon S3 Data Files"_ |
| uses_data_file_definitions | [data_file_definition](#data_file_definition) | _"Uses Data File Definitions"_ |
| location | string | _"Location"_ |
| source_creation_date | datetime | _"Source Creation Date"_ |
| source_modification_date | datetime | _"Source Modification Date"_ |
| data_connection | [data_connection](#data_connection) | _"Data Connection"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| same_as_data_sources | [main_object](#main_object) | _"Same as Data Sources"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `amazon_s3_data_file_record`

- Displayed as: _"Amazon S3 Data File Record"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/amazon_s3_data_file_record](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/amazon_s3_data_file_record)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| amazon_s3_data_file | [amazon_s3_data_file](#amazon_s3_data_file) | _"Amazon S3 Data File"_ |
| qualityScore | string | _"Quality Score"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| amazon_s_3_data_file_fields | [amazon_s3_data_file_field](#amazon_s3_data_file_field) | _"Amazon S3 Data File Fields"_ |
| implements_logical_entities | [logical_entity](#logical_entity) | _"Implements Logical Entities"_ |
| implements_design_tables_or_views | [datagroup](#datagroup) | _"Implements Design Tables or Design Views"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| imported_from | string | _"Imported From"_ |
| reviewDate | datetime | _"Review Date"_ |
| fieldCount | number | _"Number of Fields"_ |
| rowCount | number | _"Number of Rows"_ |
| PKDuplicateCount | number | _"Primary Key Duplicates"_ |
| FKViolationCount | number | _"Foreign Key Violations"_ |
| nbRecordTested | number | _"Number of Records Tested"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `analysis_project`

- Displayed as: _"Analysis Project"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/analysis_project](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/analysis_project)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_&_long_description | string | _"Short & Long Description"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `analysissummaryobject`

- Displayed as: _"AnalysisSummaryObject"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/analysissummaryobject](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/analysissummaryobject)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| is_viewable | boolean | _"Is Viewable"_ |
| review_date | datetime | _"Review Date"_ |
| promoted_by_principal | [steward](#steward) | _"Promoted By Principal"_ |
| project_name | string | _"Project Name"_ |
| reviewed_by_principal | [steward](#steward) | _"Reviewed By Principal"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| is_viewable | boolean | _"Is Viewable"_ |
| review_date | datetime | _"Review Date"_ |
| promoted_by_principal | [steward](#steward) | _"Promoted By Principal"_ |
| project_name | string | _"Project Name"_ |
| reviewed_by_principal | [steward](#steward) | _"Reviewed By Principal"_ |


## `analytics_model`

- Displayed as: _"Data Science Model"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/analytics_model](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/analytics_model)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| **analytics_project** | [analytics_project](#analytics_project) | _"Data Science Project"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| input_training_notebook | [notebook](#notebook) | _"Notebooks"_ |
| input_training_script | [analytics_script](#analytics_script) | _"Scripts"_ |
| input_training_column | [data_field](#data_field) | _"Input Data Assets"_ |
| label_training_column | [data_field](#data_field) | _"Output Data Assets"_ |
| eval_metric | [model_eval_metric](#model_eval_metric) | _"Eval Metric"_ |
| system_equiv_id | string | _"System Equiv Id"_ |
| first_published_date | datetime | _"First Published Date"_ |
| package_name | string | _"Package Name"_ |
| logical_name | string | _"Logical Name"_ |
| url | string | _"URL"_ |
| model_type | string | _"Type"_ |
| model_quality | string | _"Quality"_ |
| version | number | _"Version"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `analytics_object`

- Displayed as: _"Analytics Object"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/analytics_object](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/analytics_object)


## `analytics_project`

- Displayed as: _"Data Science Project"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/analytics_project](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/analytics_project)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| analytics_models | [analytics_model](#analytics_model) | _"Data Science Models"_ |
| notebooks | [notebook](#notebook) | _"Notebooks"_ |
| r_shiny_apps | [r_shiny_app](#r_shiny_app) | _"RShiny Apps"_ |
| analytics_scripts | [analytics_script](#analytics_script) | _"Data Science Scripts"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `analytics_script`

- Displayed as: _"Data Science Script"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/analytics_script](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/analytics_script)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| **analytics_project** | [analytics_project](#analytics_project) | _"Data Science Project"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| data_file | [main_object](#main_object) | _"Data File"_ |
| system_equiv_id | string | _"System Equiv Id"_ |
| first_published_date | datetime | _"First Published Date"_ |
| package_name | string | _"Package Name"_ |
| logical_name | string | _"Logical Name"_ |
| url | string | _"URL"_ |
| script_type | string | _"Script Type"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `application`

- Displayed as: _"Application"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/application](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/application)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| object_types | [object_type](#object_type) | _"Object Types"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `application_install`

- Displayed as: _"Application Install"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/application_install](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/application_install)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| vendor_name | string | _"Vendor Name"_ |
| instance_name | string | _"Instance Name"_ |
| default_credential | [credential](#credential) | _"Default Credential"_ |
| location_name | string | _"Location Name"_ |
| installation_date | string | _"Installation Date"_ |
| platform_identifier | string | _"Platform Identifier"_ |
| has_credential | [credential](#credential) | _"Has Credential"_ |
| installed_on_host | [host](#host) | _"Installed On Host"_ |
| installation_path | string | _"Installation Path"_ |
| release_number | string | _"Release Number"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| vendor_name | string | _"Vendor Name"_ |
| instance_name | string | _"Instance Name"_ |
| default_credential | [credential](#credential) | _"Default Credential"_ |
| location_name | string | _"Location Name"_ |
| installation_date | string | _"Installation Date"_ |
| platform_identifier | string | _"Platform Identifier"_ |
| has_credential | [credential](#credential) | _"Has Credential"_ |
| installed_on_host | [host](#host) | _"Installed On Host"_ |
| installation_path | string | _"Installation Path"_ |
| release_number | string | _"Release Number"_ |


## `applicationfunction`

- Displayed as: _"ApplicationFunction"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/applicationfunction](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/applicationfunction)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| description | string | _"Description"_ |
| uses_class_descriptor | [classdescriptor](#classdescriptor) | _"Uses Class Descriptor"_ |
| name | string | _"Name"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| description | string | _"Description"_ |
| uses_class_descriptor | [classdescriptor](#classdescriptor) | _"Uses Class Descriptor"_ |
| name | string | _"Name"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `applicationsetting`

- Displayed as: _"ApplicationSetting"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/applicationsetting](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/applicationsetting)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| value | string | _"Value"_ |
| description | string | _"Description"_ |
| name | string | _"Name"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| value | string | _"Value"_ |
| description | string | _"Description"_ |
| name | string | _"Name"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `archivedtask`

- Displayed as: _"ArchivedTask"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/archivedtask](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/archivedtask)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| status | string | _"Status"_ |
| message | string | _"Status Message"_ |
| requested_on | datetime | _"Date Requested"_ |
| completion_date | datetime | _"Date Completed"_ |
| name | string | _"Asset Name"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| status | string | _"Status"_ |
| message | string | _"Status Message"_ |
| requested_on | datetime | _"Date Requested"_ |
| completion_date | datetime | _"Date Completed"_ |
| name | string | _"Asset Name"_ |


## `array`

- Displayed as: _"Array"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/array](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/array)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| next_array | [array](#array) | _"Next Array"_ |
| lower_bound | number | _"Lower Bound"_ |
| previous_array | [array](#array) | _"Previous Array"_ |
| **belonging_to_data_item** | [data_item](#data_item) | _"Belonging to Data Item"_ |
| maximum_size | number | _"Maximum Size"_ |
| minimum_size | number | _"Minimum Size"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| next_array | [array](#array) | _"Next Array"_ |
| lower_bound | number | _"Lower Bound"_ |
| previous_array | [array](#array) | _"Previous Array"_ |
| **belonging_to_data_item** | [data_item](#data_item) | _"Belonging to Data Item"_ |
| maximum_size | number | _"Maximum Size"_ |
| minimum_size | number | _"Minimum Size"_ |


## `ascl_steward`

- Displayed as: _"Steward"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/ascl_steward](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/ascl_steward)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| managed_assets | [information_asset](#information_asset) | _"Managed Assets"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| email_address | string | _"Email Address"_ |
| organization | string | _"Organization"_ |
| managed_assets | [information_asset](#information_asset) | _"Managed Assets"_ |
| managed_assets_basic | [main_object](#main_object) | _"Managed Assets"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |
| **steward_user** | [steward_user](#steward_user) | _"Steward User"_ |
| **steward_group** | [steward_group](#steward_group) | _"Steward Group"_ |


## `associativeobject`

- Displayed as: _"AssociativeObject"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/associativeobject](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/associativeobject)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| sequence | number | _"Sequence"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| sequence | number | _"Sequence"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `attribute`

- Displayed as: _"Attribute"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/attribute](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/attribute)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **member_type** | [member_type](#member_type) | _"Member Type"_ |
| **member_type_for_query** | [member_type](#member_type) | _"Member Type"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| **references_attribute_types** | [attribute_type](#attribute_type) | _"References Attribute Types"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| attribute_label | string | _"Attribute Label"_ |
| code | string | _"Code"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `attribute_type`

- Displayed as: _"Attribute Type"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/attribute_type](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/attribute_type)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **mdm_model** | [mdm_model](#mdm_model) | _"MDM Model"_ |
| **mdm_model_for_query** | [mdm_model](#mdm_model) | _"MDM Model"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| **contains_attribute_type_fields** | [attribute_type_field](#attribute_type_field) | _"Contains Attribute Type Fields"_ |
| referenced_by_attributes | [attribute](#attribute) | _"Referenced by Attributes"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `attribute_type_field`

- Displayed as: _"Attribute Type Field"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/attribute_type_field](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/attribute_type_field)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **attribute_type** | [attribute_type](#attribute_type) | _"Attribute Type"_ |
| **attribute_type_for_query** | [attribute_type](#attribute_type) | _"Attribute Type"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| type | enum | _"Type"_: `CHAR`, `DATETIME`, `SQWORD`, `UDWORD`, `UWORD`, `VARCHAR` |
| length | number | _"Length"_ |
| required | boolean | _"Required"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `automation_rule`

- Displayed as: _"Automation Rule"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/automation_rule](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/automation_rule)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| rule_logic | string | _"Rule Logic"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| rule_logic | string | _"Rule Logic"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_collection`

- Displayed as: _"BI Collection"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_collection](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_collection)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **type** | string | _"Type"_ |
| namespace | string | _"Namespace"_ |
| bi_model_or_bi_collection | [olapobject](#olapobject) | _"BI Model or BI Collection"_ |
| bi_model | [bi_model](#bi_model) | _"BI Model"_ |
| bi_collection | [bi_collection](#bi_collection) | _"BI Collection"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| has_olap_collection | [bi_collection](#bi_collection) | _"Has OLAP Collection"_ |
| bi_collection_members | [bi_collection_member](#bi_collection_member) | _"BI Collection Members"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| type_definition | string | _"Type Definition"_ |
| filter_expression | string | _"Filter Expression"_ |
| join_condition | string | _"Join Condition"_ |
| imported_from | string | _"Imported From"_ |
| referenced_by_bi_hierarchies | [bi_hierarchy](#bi_hierarchy) | _"Referenced by BI Hierarchies"_ |
| bi_hierarchies | [bi_hierarchy](#bi_hierarchy) | _"BI Hierarchies"_ |
| bi_levels | [bi_level](#bi_level) | _"BI Levels"_ |
| bi_filters | [bi_filter](#bi_filter) | _"BI Filters"_ |
| references_bi_collections | [bi_collection](#bi_collection) | _"References BI Collections"_ |
| referenced_by_bi_collection | [bi_collection](#bi_collection) | _"Referenced by BI Collection"_ |
| used_by_bi_report_queries | [bi_report_query](#bi_report_query) | _"Used by BI Report Queries"_ |
| used_by_bi_cubes | [bi_cube](#bi_cube) | _"Used by BI Cubes"_ |
| uses_database_tables_or_views | [datagroup](#datagroup) | _"Uses Database Tables or Views"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_collection_dimension`

- Displayed as: _"BI Collection Dimension"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_collection_dimension](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_collection_dimension)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **bi_cube** | [bi_cube](#bi_cube) | _"BI Cube"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| references_bi_collection | [bi_collection](#bi_collection) | _"References BI Collection"_ |
| uses_olap_hierarchy | [bi_hierarchy](#bi_hierarchy) | _"Uses OLAP Hierarchy"_ |
| sequence | number | _"Sequence"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **bi_cube** | [bi_cube](#bi_cube) | _"BI Cube"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| references_bi_collection | [bi_collection](#bi_collection) | _"References BI Collection"_ |
| uses_olap_hierarchy | [bi_hierarchy](#bi_hierarchy) | _"Uses OLAP Hierarchy"_ |
| business_name | string | _"Business Name"_ |
| sequence | number | _"Sequence"_ |


## `bi_collection_fact`

- Displayed as: _"BI Collection Fact"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_collection_fact](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_collection_fact)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **bi_cube** | [bi_cube](#bi_cube) | _"BI Cube"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| references_bi_member | [bi_collection_member](#bi_collection_member) | _"References BI Member"_ |
| sequence | number | _"Sequence"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **bi_cube** | [bi_cube](#bi_cube) | _"BI Cube"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| references_bi_member | [bi_collection_member](#bi_collection_member) | _"References BI Member"_ |
| business_name | string | _"Business Name"_ |
| sequence | number | _"Sequence"_ |


## `bi_collection_member`

- Displayed as: _"BI Collection Member"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_collection_member](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_collection_member)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **type** | string | _"Type"_ |
| namespace | string | _"Namespace"_ |
| **bi_collection** | [bi_collection](#bi_collection) | _"BI Collection"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| type_definition | string | _"Type Definition"_ |
| data_type | string | _"Data Type"_ |
| expression | string | _"Expression"_ |
| details | [bi_collection_member](#bi_collection_member) | _"Details"_ |
| references_bi_members | [bi_collection_member](#bi_collection_member) | _"References BI Members"_ |
| referenced_by_bi_members | [bi_collection_member](#bi_collection_member) | _"Referenced by BI Members"_ |
| used_by_bi_report_query_items | [reportobject](#reportobject) | _"Used by BI Report Query Items"_ |
| used_by_bi_cubes | [bi_cube](#bi_cube) | _"Used by BI Cubes"_ |
| uses_database_columns | [database_column](#database_column) | _"Uses Database Columns"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_cube`

- Displayed as: _"BI Cube"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_cube](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_cube)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| bi_model | [bi_model](#bi_model) | _"BI Model"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| bi_collection_dimensions | [bi_collection](#bi_collection) | _"BI Collection Dimensions"_ |
| bi_collection_facts | [bi_collection](#bi_collection) | _"BI Collection Facts"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| bi_cube_creation_date | datetime | _"BI Cube Creation Date"_ |
| bi_cube_modification_date | datetime | _"BI Cube Modification Date"_ |
| author | string | _"Author"_ |
| namespace | string | _"Namespace"_ |
| imported_from | string | _"Imported From"_ |
| used_by_bi_reports | [bi_report](#bi_report) | _"Used by BI Reports"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_filter`

- Displayed as: _"BI Filter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_filter](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_filter)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| context | [olapobject](#olapobject) | _"Context"_ |
| bi_model | [bi_model](#bi_model) | _"BI Model"_ |
| bi_collection | [bi_collection](#bi_collection) | _"BI Collection"_ |
| filter_expression | string | _"Filter Expression"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_folder`

- Displayed as: _"BI Folder"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_folder](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_folder)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| bi_folder | [bi_folder](#bi_folder) | _"BI Folder"_ |
| contains_bi_folders | [bi_folder](#bi_folder) | _"Contains BI Folders"_ |
| bi_reports | [bi_report](#bi_report) | _"BI Reports"_ |
| bi_models | [bi_model](#bi_model) | _"BI Models"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_hierarchy`

- Displayed as: _"BI Hierarchy"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_hierarchy](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_hierarchy)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| context | [olapobject](#olapobject) | _"Context"_ |
| bi_model | [bi_model](#bi_model) | _"BI Model"_ |
| bi_collection | [bi_collection](#bi_collection) | _"BI Collection"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| bi_levels | [bi_level](#bi_level) | _"BI Levels"_ |
| type | enum | _"Type"_: `BALANCED`, `UNBALANCED`, `RAGGED`, `NETWORK` |
| deployment | enum | _"Deployment"_: `STANDARD`, `RECURSIVE` |
| references_bi_collections | [bi_collection](#bi_collection) | _"References BI Collections"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_hierarchy_member`

- Displayed as: _"BI Hierarchy Member"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_hierarchy_member](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_hierarchy_member)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **bi_level** | [bi_level](#bi_level) | _"BI Level"_ |
| sorting_order | enum | _"Sorting Order"_: `ASCENDING`, `DESCENDING`, `NONE` |
| sequence | number | _"Sequence"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **bi_level** | [bi_level](#bi_level) | _"BI Level"_ |
| child_level | [bi_level](#bi_level) | _"Child Level"_ |
| sorting_order | enum | _"Sorting Order"_: `ASCENDING`, `DESCENDING`, `NONE` |
| sequence | number | _"Sequence"_ |


## `bi_level`

- Displayed as: _"BI Level"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_level](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_level)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **bi_collection** | [bi_collection](#bi_collection) | _"BI Collection"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| parent_bi_level | [bi_level](#bi_level) | _"Parent BI Level"_ |
| children_levels | [bi_level](#bi_level) | _"Children Levels"_ |
| depth | number | _"Depth"_ |
| bi_hierarchy | [bi_hierarchy](#bi_hierarchy) | _"BI Hierarchy"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_model`

- Displayed as: _"BI Model"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_model](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_model)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| bi_folder_or_bi_model | [main_object](#main_object) | _"BI Folder or BI Model"_ |
| bi_folder | [bi_folder](#bi_folder) | _"BI Folder"_ |
| bi_model | [bi_model](#bi_model) | _"BI Model"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| child_bi_models | [bi_model](#bi_model) | _"Child BI Models"_ |
| bi_cubes | [bi_cube](#bi_cube) | _"BI Cubes"_ |
| bi_collections | [bi_collection](#bi_collection) | _"BI Collections"_ |
| bi_reports | [bi_report](#bi_report) | _"BI Reports"_ |
| bi_report_queries | [bi_report_query](#bi_report_query) | _"BI Report Queries"_ |
| bi_joins | [olap_join](#olap_join) | _"BI Joins"_ |
| bi_filters | [bi_filter](#bi_filter) | _"BI Filters"_ |
| bi_hierarchies | [bi_hierarchy](#bi_hierarchy) | _"BI Hierarchies"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| bi_model_creation_date | datetime | _"BI Model Creation Date"_ |
| bi_model_modification_date | datetime | _"BI Model Modification Date"_ |
| namespace | string | _"Namespace"_ |
| imported_from | string | _"Imported From"_ |
| used_by_bi_reports | [bi_report](#bi_report) | _"Used by BI Reports"_ |
| uses_databases | [database](#database) | _"Uses Databases"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_olap_level_element`

- Displayed as: _"BI OLAP Level Element"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_olap_level_element](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_olap_level_element)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Element Name"_ |
| short_description | string | _"Short Description"_ |
| **defined_in_level** | [bi_level](#bi_level) | _"Defined in Level"_ |
| key_level | [bi_level](#bi_level) | _"Key Level"_ |
| **defined_as_an_olap_member** | [bi_collection_member](#bi_collection_member) | _"Defined as an OLAP Member"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Element Name"_ |
| business_name | string | _"Business Name"_ |
| short_description | string | _"Short Description"_ |
| **defined_in_level** | [bi_level](#bi_level) | _"Defined in Level"_ |
| key_level | [bi_level](#bi_level) | _"Key Level"_ |
| **defined_as_an_olap_member** | [bi_collection_member](#bi_collection_member) | _"Defined as an OLAP Member"_ |


## `bi_report`

- Displayed as: _"BI Report"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| bi_folder_or_bi_model_or_cube | [main_object](#main_object) | _"BI Folder or BI Model or Cube"_ |
| bi_folder | [bi_folder](#bi_folder) | _"BI Folder"_ |
| bi_model | [bi_model](#bi_model) | _"BI Model"_ |
| bi_cube | [bi_cube](#bi_cube) | _"BI Cube"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| bi_report_queries | [bi_report_query](#bi_report_query) | _"BI Report Queries"_ |
| referenced_by_bi_reports | [bi_report](#bi_report) | _"Referenced by BI Reports"_ |
| references_bi_reports | [bi_report](#bi_report) | _"References BI Reports"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| author | string | _"Author"_ |
| expression | string | _"Expression"_ |
| language | string | _"Language"_ |
| format | string | _"Format"_ |
| bi_report_creation_date | datetime | _"BI Report Creation Date"_ |
| bi_report_modification_date | datetime | _"BI Report Modification Date"_ |
| bi_report_run_date | datetime | _"BI Report Run Date"_ |
| number_of_runs | number | _"Number of Runs"_ |
| number_of_versions | number | _"Number of Versions"_ |
| namespace | string | _"Namespace"_ |
| imported_from | string | _"Imported From"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_report_data_item_source`

- Displayed as: _"BI Report Data Item Source"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_data_item_source](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_data_item_source)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| defined_by_olap_member | [bi_collection_member](#bi_collection_member) | _"Defined by OLAP Member"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| defined_of_report_field | [reportobject](#reportobject) | _"Defined of Report Field"_ |
| **defined_in_report_data_item** | [reportobject](#reportobject) | _"Defined in Report Data Item"_ |
| defined_by_data_field | [data_field](#data_field) | _"Defined by Data Field"_ |
| defined_by_olap_member | [bi_collection_member](#bi_collection_member) | _"Defined by OLAP Member"_ |


## `bi_report_nocontext`

- Displayed as: _"BI Report"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_nocontext](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_nocontext)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| bi_folder_or_bi_model_or_cube | [main_object](#main_object) | _"BI Folder or BI Model or Cube"_ |
| bi_folder | [bi_folder](#bi_folder) | _"BI Folder"_ |
| bi_model | [bi_model](#bi_model) | _"BI Model"_ |
| bi_cube | [bi_cube](#bi_cube) | _"BI Cube"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| bi_report_queries | [bi_report_query](#bi_report_query) | _"BI Report Queries"_ |
| referenced_by_bi_reports | [bi_report](#bi_report) | _"Referenced by BI Reports"_ |
| references_bi_reports | [bi_report](#bi_report) | _"References BI Reports"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| author | string | _"Author"_ |
| expression | string | _"Expression"_ |
| language | string | _"Language"_ |
| format | string | _"Format"_ |
| bi_report_creation_date | datetime | _"BI Report Creation Date"_ |
| bi_report_modification_date | datetime | _"BI Report Modification Date"_ |
| bi_report_run_date | datetime | _"BI Report Run Date"_ |
| number_of_runs | number | _"Number of Runs"_ |
| number_of_versions | number | _"Number of Versions"_ |
| namespace | string | _"Namespace"_ |
| imported_from | string | _"Imported From"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_report_nofolder`

- Displayed as: _"BI Report"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_nofolder](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_nofolder)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| bi_folder_or_bi_model_or_cube | [main_object](#main_object) | _"BI Folder or BI Model or Cube"_ |
| bi_folder | [bi_folder](#bi_folder) | _"BI Folder"_ |
| bi_model | [bi_model](#bi_model) | _"BI Model"_ |
| bi_cube | [bi_cube](#bi_cube) | _"BI Cube"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| bi_report_queries | [bi_report_query](#bi_report_query) | _"BI Report Queries"_ |
| referenced_by_bi_reports | [bi_report](#bi_report) | _"Referenced by BI Reports"_ |
| references_bi_reports | [bi_report](#bi_report) | _"References BI Reports"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| author | string | _"Author"_ |
| expression | string | _"Expression"_ |
| language | string | _"Language"_ |
| format | string | _"Format"_ |
| bi_report_creation_date | datetime | _"BI Report Creation Date"_ |
| bi_report_modification_date | datetime | _"BI Report Modification Date"_ |
| bi_report_run_date | datetime | _"BI Report Run Date"_ |
| number_of_runs | number | _"Number of Runs"_ |
| number_of_versions | number | _"Number of Versions"_ |
| namespace | string | _"Namespace"_ |
| imported_from | string | _"Imported From"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_report_query`

- Displayed as: _"BI Report Query"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_query](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_query)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| context | [main_object](#main_object) | _"Context"_ |
| **type** | string | _"Type"_ |
| namespace | string | _"Namespace"_ |
| bi_report | [bi_report](#bi_report) | _"BI Report"_ |
| bi_model | [bi_model](#bi_model) | _"BI Model"_ |
| bi_collection | [bi_collection](#bi_collection) | _"BI Collection"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| bi_report_query_items | [bi_report_query_item](#bi_report_query_item) | _"BI Report Query Items"_ |
| bi_report_query_detail_filters | [bi_report_query_detail_filter](#bi_report_query_detail_filter) | _"BI Query Detail Filters"_ |
| bi_report_query_summary_filters | [bi_report_query_summary_filter](#bi_report_query_summary_filter) | _"BI Query Summary Filters"_ |
| imported_from | string | _"Imported From"_ |
| condition | string | _"Condition"_ |
| contains_bi_queries | [bi_report_query](#bi_report_query) | _"Contains BI Queries"_ |
| contained_by_bi_report_queries | [bi_report_query](#bi_report_query) | _"Contained by BI Report Queries"_ |
| uses_bi_collections | [bi_collection](#bi_collection) | _"Uses BI Collections"_ |
| uses_database_tables_or_views | [datagroup](#datagroup) | _"Uses Database Tables or Views"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_report_query_detail_filter`

- Displayed as: _"Detail Filter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_query_detail_filter](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_query_detail_filter)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| expression_in_title | string | _"Expression"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **type** | string | _"Type"_ |
| namespace | string | _"Namespace"_ |
| **bi_report_query** | [bi_report_query](#bi_report_query) | _"BI Report Query"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| expression | string | _"Expression"_ |
| contains_bi_report_query_items | [reportobject](#reportobject) | _"References BI Report Query Items"_ |
| src_contains_bi_report_query_items | [reportobject](#reportobject) | _"Referenced by BI Report Query Item"_ |
| uses_database_columns | [data_field](#data_field) | _"Uses Database Columns"_ |
| uses_bi_collection_members | [bi_collection_member](#bi_collection_member) | _"Uses BI Collection Members"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_report_query_item`

- Displayed as: _"BI Report Query Item"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_query_item](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_query_item)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| display_name | string | _"Display Name"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **type** | string | _"Type"_ |
| namespace | string | _"Namespace"_ |
| **bi_report_query** | [bi_report_query](#bi_report_query) | _"BI Report Query"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| expression | string | _"Expression"_ |
| contains_bi_report_query_items | [reportobject](#reportobject) | _"References BI Report Query Items"_ |
| src_contains_bi_report_query_items | [reportobject](#reportobject) | _"Referenced by BI Report Query Item"_ |
| uses_database_columns | [data_field](#data_field) | _"Uses Database Columns"_ |
| uses_bi_collection_members | [bi_collection_member](#bi_collection_member) | _"Uses BI Collection Members"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_report_query_summary_filter`

- Displayed as: _"Summary Filter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_query_summary_filter](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_query_summary_filter)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| expression_in_title | string | _"Expression"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **type** | string | _"Type"_ |
| namespace | string | _"Namespace"_ |
| **bi_report_query** | [bi_report_query](#bi_report_query) | _"BI Report Query"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| expression | string | _"Expression"_ |
| contains_bi_report_query_items | [reportobject](#reportobject) | _"References BI Report Query Items"_ |
| src_contains_bi_report_query_items | [reportobject](#reportobject) | _"Referenced by BI Report Query Item"_ |
| uses_database_columns | [data_field](#data_field) | _"Uses Database Columns"_ |
| uses_bi_collection_members | [bi_collection_member](#bi_collection_member) | _"Uses BI Collection Members"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_report_query_usage`

- Displayed as: _"BI Report Query Usage"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_query_usage](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_query_usage)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| context | [main_object](#main_object) | _"Context"_ |
| **type** | string | _"Type"_ |
| namespace | string | _"Namespace"_ |
| bi_report | [bi_report](#bi_report) | _"BI Report"_ |
| bi_model | [bi_model](#bi_model) | _"BI Model"_ |
| bi_collection | [bi_collection](#bi_collection) | _"BI Collection"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| bi_report_query_items | [bi_report_query_item](#bi_report_query_item) | _"BI Report Query Items"_ |
| bi_report_query_detail_filters | [bi_report_query_detail_filter](#bi_report_query_detail_filter) | _"BI Query Detail Filters"_ |
| bi_report_query_summary_filters | [bi_report_query_summary_filter](#bi_report_query_summary_filter) | _"BI Query Summary Filters"_ |
| imported_from | string | _"Imported From"_ |
| condition | string | _"Condition"_ |
| contains_bi_queries | [bi_report_query](#bi_report_query) | _"Contains BI Queries"_ |
| contained_by_bi_report_queries | [bi_report_query](#bi_report_query) | _"Contained by BI Report Queries"_ |
| uses_bi_collections | [bi_collection](#bi_collection) | _"Uses BI Collections"_ |
| uses_database_tables_or_views | [datagroup](#datagroup) | _"Uses Database Tables or Views"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_report_section`

- Displayed as: _"BI Report Section"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_section](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_report_section)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| type | enum | _"Type"_: `CHART`, `LIST`, `MATRIX`, `TABLE`, `PAGE`, `PAGEBODY`, `PAGEFOOTER`, `PAGEHEADER`, `RECTANGLE`, `TEXT` |
| label | string | _"Label"_ |
| short_description | string | _"Short Description"_ |
| sequence | number | _"Sequence"_ |
| bi_report | [bi_report](#bi_report) | _"BI Report"_ |
| bi_report_fields | [reportobject](#reportobject) | _"BI Report Fields"_ |
| contains_sub_section | [bi_report_section](#bi_report_section) | _"Contains Sub Section"_ |
| contained_in_report_section | [bi_report_section](#bi_report_section) | _"Contained in Report Section"_ |


## `bi_root_folder`

- Displayed as: _"BI Folder"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_root_folder](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_root_folder)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| bi_server | [bi_server](#bi_server) | _"BI Server"_ |
| contains_bi_folders | [bi_folder](#bi_folder) | _"Contains BI Folders"_ |
| bi_reports | [bi_report](#bi_report) | _"BI Reports"_ |
| bi_models | [bi_model](#bi_model) | _"BI Models"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `bi_server`

- Displayed as: _"BI Server"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_server](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/bi_server)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_bi_folders | [bi_root_folder](#bi_root_folder) | _"Contains BI Folders"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| imported_from | string | _"Imported From"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `binary_infoset_operation`

- Displayed as: _"Binary InfoSet Operation"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/binary_infoset_operation](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/binary_infoset_operation)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **infoset** | [infoset](#infoset) | _"InfoSet"_ |
| **primary_input** | [infoset](#infoset) | _"Primary Input"_ |
| **secondary_input** | [infoset](#infoset) | _"Secondary Input"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `blueprint_element_link`

- Displayed as: _"Blueprint Element Link"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/blueprint_element_link](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/blueprint_element_link)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| element_name | string | _"Element Name"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| element_name | string | _"Element Name"_ |


## `candidate_key`

- Displayed as: _"Candidate Key"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/candidate_key](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/candidate_key)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **database_table_view** | [datagroup](#datagroup) | _"Database Table View"_ |
| primary_key | boolean | _"Primary Key"_ |
| defined_on_database_columns | [database_column](#database_column) | _"Defined on Database Columns"_ |
| referenced_by_foreign_keys | [foreign_key](#foreign_key) | _"Referenced by Foreign Keys"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `category`

- Displayed as: _"Category"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/category](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/category)

#### Properties valid for creation:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| parent_category | [category](#category) | _"Parent Category"_ |
| short_description | string | _"Short Description"_ |

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| parent_category | [category](#category) | _"Parent Category"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| language | enum | _"Language"_:  |
| subcategories | [category](#category) | _"Subcategories"_ |
| contains_business_term | [term](#term) | _"Contains Business Terms"_ |
| references_business_term | [term](#term) | _"References Business Terms"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| parent_category | [category](#category) | _"Parent Category"_ |
| category_path | [category](#category) | _"Category Path"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| language | enum | _"Language"_:  |
| subcategories | [category](#category) | _"Subcategories"_ |
| terms | [term](#term) | _"Terms"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| workflow_current_state | string | _"Workflow Current State"_ |
| workflow_stored_state | enum | _"Workflow Stored State"_: `DRAFT`, `WAITING_APPROVAL`, `APPROVED` |
| glossary_type | enum | _"Glossary Type"_: `PUBLISHED`, `DRAFT` |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `changed_properties`

- Displayed as: _"Changed Properties"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/changed_properties](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/changed_properties)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| property_name | string | _"Property Name"_ |
| previous_value | string | _"Previous Value"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| term_history | [term_history](#term_history) | _"Term History"_ |
| property_name | string | _"Property Name"_ |
| previous_value | string | _"Previous Value"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `classdescriptor`

- Displayed as: _"ClassDescriptor"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/classdescriptor](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/classdescriptor)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| identifier_attribute | string | _"Identifier Attribute"_ |
| class_name | string | _"Class Name"_ |
| used_in_application_function | [applicationfunction](#applicationfunction) | _"Used In Application Function"_ |
| long_description_attribute | string | _"Long Description Attribute"_ |
| has_navigation_descriptor | [navigationdescriptor](#navigationdescriptor) | _"Has Navigation Descriptor"_ |
| has_prop_descriptor | [propdescriptor](#propdescriptor) | _"Has Prop Descriptor"_ |
| model_name | string | _"Model Name"_ |
| has_custom_attribute_def | [information_asset](#information_asset) | _"Has Custom Attribute Def"_ |
| model_uri | string | _"Model URI"_ |
| short_description_attribute | string | _"Short Description Attribute"_ |
| has_action_descriptor | [actiondescriptor](#actiondescriptor) | _"Has Action Descriptor"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| identifier_attribute | string | _"Identifier Attribute"_ |
| class_name | string | _"Class Name"_ |
| used_in_application_function | [applicationfunction](#applicationfunction) | _"Used In Application Function"_ |
| long_description_attribute | string | _"Long Description Attribute"_ |
| has_navigation_descriptor | [navigationdescriptor](#navigationdescriptor) | _"Has Navigation Descriptor"_ |
| has_prop_descriptor | [propdescriptor](#propdescriptor) | _"Has Prop Descriptor"_ |
| model_name | string | _"Model Name"_ |
| has_custom_attribute_def | [information_asset](#information_asset) | _"Has Custom Attribute Def"_ |
| model_uri | string | _"Model URI"_ |
| short_description_attribute | string | _"Short Description Attribute"_ |
| has_action_descriptor | [actiondescriptor](#actiondescriptor) | _"Has Action Descriptor"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `classification`

- Displayed as: _"Classification"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/classification](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/classification)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| data_class | [data_class](#data_class) | _"Data Class"_ |
| **classifies_asset** | [main_object](#main_object) | _"Asset"_ |
| **detectedState** | enum | _"Type"_: `Candidate`, `Inferred` |
| confidencePercent | number | _"Confidence (Percent)"_ |
| threshold | number | _"Threshold"_ |
| value_frequency | number | _"Value Frequency"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| data_class | [data_class](#data_class) | _"Data Class"_ |
| **classifies_asset** | [main_object](#main_object) | _"Asset"_ |
| selected | boolean | _"Selected"_ |
| detected | boolean | _"Detected"_ |
| **detectedState** | enum | _"Type"_: `Candidate`, `Inferred` |
| confidencePercent | number | _"Confidence (Percent)"_ |
| threshold | number | _"Threshold"_ |
| value_frequency | number | _"Value Frequency"_ |
| date | datetime | _"Date"_ |
| column_analysis | [main_object](#main_object) | _"Detected from Column Analysis"_ |


## `classification_contribution`

- Displayed as: _"Classification Contribution"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/classification_contribution](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/classification_contribution)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **infoset** | [infoset](#infoset) | _"Infoset"_ |
| data_class | [data_class](#data_class) | _"Data Class"_ |
| object_count | number | _"Number of Objects"_ |
| size | number | _"Size (Bytes)"_ |
| match_type | enum | _"Match Type"_: `Exact`, `GreaterThan` |


## `classificationenabledgroup`

- Displayed as: _"ClassificationEnabledGroup"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/classificationenabledgroup](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/classificationenabledgroup)


## `classificationtask`

- Displayed as: _"ClassificationTask"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/classificationtask](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/classificationtask)


## `collection`

- Displayed as: _"Collection"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/collection](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/collection)

#### Properties valid for creation:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| owners | [steward](#steward) | _"Owners"_ |
| visibility | boolean | _"Visibility"_ |
| viewers | [steward](#steward) | _"Viewers"_ |

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| owners | [steward](#steward) | _"Owners"_ |
| visibility | boolean | _"Visibility"_ |
| viewers | [steward](#steward) | _"Viewers"_ |
| assets | [information_asset](#information_asset) | _"Assets												  "_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| owners | [steward](#steward) | _"Owners"_ |
| visibility | boolean | _"Visibility"_ |
| viewers | [steward](#steward) | _"Viewers"_ |
| user_id | string | _"User Id"_ |
| assets | [information_asset](#information_asset) | _"Assets												  "_ |
| references_assets | [main_object](#main_object) | _"Assets"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `column_analysis`

- Displayed as: _"Column Analysis"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/column_analysis](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/column_analysis)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| quality_score_percent | string | _"Quality Score"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| **table_analysis** | [main_object](#main_object) | _"Table Analysis"_ |
| project | string | _"Project"_ |
| database_column | [database_column](#database_column) | _"Database Column"_ |
| require_unique_values | boolean | _"Require Unique Values"_ |
| include_null_values | boolean | _"Include Null Values"_ |
| include_constant_values | boolean | _"Include Constant Values"_ |
| domain | string | _"Domain"_ |
| number_of_complete_values | number | _"Number of Complete Values"_ |
| number_of_valid_values | number | _"Number of Valid Values"_ |
| number_of_empty_values | number | _"Number of Empty Values"_ |
| number_of_null_values | number | _"Number of Null Values"_ |
| number_of_distinct_values | number | _"Number of Distinct Values"_ |
| number_of_distinct_formats | number | _"Number of Distinct Formats"_ |
| number_of_zero_values | number | _"Number of Zero Values"_ |
| inferred_data_type | enum | _"Inferred Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| inferred_length | number | _"Inferred Length"_ |
| inferred_format | string | _"Inferred Format"_ |
| inferred_scale | number | _"Inferred Scale"_ |
| inferred_precision | number | _"Inferred Precision"_ |
| average_value | string | _"Average Value"_ |
| inferred_foreign_key | boolean | _"Inferred Foreign Key"_ |
| inferred_primary_key | boolean | _"Inferred Primary Key"_ |
| classification | [classification](#classification) | _"Detected Data Classifications"_ |
| selected_primary_key | boolean | _"User Selected Primary Key"_ |
| selected_natural_key | boolean | _"User Selected Natural Key"_ |
| selected_foreign_key | boolean | _"User Selected Foreign Key"_ |
| selected_foreign_key_references | [database_column](#database_column) | _"User Selected Foreign Key References"_ |
| selected_foreign_key_referenced | [database_column](#database_column) | _"User Selected Foreign Key Referenced"_ |
| validation_type | string | _"Validation Type"_ |
| validation_properties | string | _"Validation Properties"_ |
| quality_score_percent | string | _"Quality Score"_ |
| nb_records_tested | number | _"Number of Records Tested"_ |
| quality_score_problems | [quality_problem](#quality_problem) | _"Quality Score Problems"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `column_analysis_summary`

- Displayed as: _"Column Analysis Summary"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/column_analysis_summary](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/column_analysis_summary)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| steward | [steward](#steward) | _"Steward"_ |
| **analyzed_column** | [data_field](#data_field) | _"Analyzed Column"_ |
| project_name | string | _"Project Name"_ |
| review_date | datetime | _"Review Date"_ |
| promoted_by_principal | [steward](#steward) | _"Promoted By Principal"_ |
| reviewed_by_principal | [steward](#steward) | _"Reviewed By Principal"_ |
| allow_null_values | boolean | _"Allow Null Values"_ |
| require_unique_values | boolean | _"Require Unique Values"_ |
| number_values | number | _"Number Values"_ |
| number_of_complete_values | number | _"Number of Complete Values"_ |
| number_of_valid_values | number | _"Number of Valid Values"_ |
| number_of_empty_values | number | _"Number of Empty Values"_ |
| number_of_null_values | number | _"Number of Null Values"_ |
| number_of_distinct_values | number | _"Number of Distinct Values"_ |
| number_of_distinct_patterns | number | _"Number of Distinct Patterns"_ |
| number_of_distinct_formats | number | _"Number of Distinct Formats"_ |
| inferred_data_type | enum | _"Inferred Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| inferred_format | string | _"Inferred Format"_ |
| mask | string | _"Mask"_ |
| constant | boolean | _"Constant"_ |
| domain_type | string | _"Domain Type"_ |
| longest_length | string | _"Longest Length"_ |
| shortest_length | string | _"Shortest Length"_ |
| inferred_length | number | _"Inferred Length"_ |
| inferred_scale | number | _"Inferred Scale"_ |
| inferred_precision | number | _"Inferred Precision"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_&_long_description | string | _"Short & Long Description"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| steward | [steward](#steward) | _"Steward"_ |
| **analyzed_column** | [data_field](#data_field) | _"Analyzed Column"_ |
| project_name | string | _"Project Name"_ |
| review_date | datetime | _"Review Date"_ |
| promoted_by_principal | [steward](#steward) | _"Promoted By Principal"_ |
| reviewed_by_principal | [steward](#steward) | _"Reviewed By Principal"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |
| allow_null_values | boolean | _"Allow Null Values"_ |
| require_unique_values | boolean | _"Require Unique Values"_ |
| number_values | number | _"Number Values"_ |
| number_of_complete_values | number | _"Number of Complete Values"_ |
| number_of_valid_values | number | _"Number of Valid Values"_ |
| number_of_empty_values | number | _"Number of Empty Values"_ |
| number_of_null_values | number | _"Number of Null Values"_ |
| number_of_distinct_values | number | _"Number of Distinct Values"_ |
| number_of_distinct_patterns | number | _"Number of Distinct Patterns"_ |
| number_of_distinct_formats | number | _"Number of Distinct Formats"_ |
| inferred_data_type | enum | _"Inferred Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| inferred_format | string | _"Inferred Format"_ |
| mask | string | _"Mask"_ |
| constant | boolean | _"Constant"_ |
| domain_type | string | _"Domain Type"_ |
| average_length | string | _"Average Length"_ |
| longest_length | string | _"Longest Length"_ |
| shortest_length | string | _"Shortest Length"_ |
| inferred_length | number | _"Inferred Length"_ |
| inferred_scale | number | _"Inferred Scale"_ |
| inferred_precision | number | _"Inferred Precision"_ |
| notes | note | _"Notes"_ |


## `column_definition`

- Displayed as: _"Column Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/column_definition](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/column_definition)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| table_definition | [table_definition](#table_definition) | _"Table Definition"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| used_by_stage_columns | [data_item](#data_item) | _"Used by Stage Columns"_ |
| key | boolean | _"Key"_ |
| type | string | _"Type"_ |
| length | number | _"Length"_ |
| fraction | number | _"Fraction"_ |
| allow_null_values | string | _"Allow Null Values"_ |
| data_item_definition | [data_field](#data_field) | _"Data Item Definition"_ |
| apt_field_properties | string | _"APT Field Properties"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `composite_view`

- Displayed as: _"Composite View"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/composite_view](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/composite_view)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **member_type** | [member_type](#member_type) | _"Member Type"_ |
| **composite_view** | [member_type](#member_type) | _"Composite View"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| type | enum | _"Type"_: `MEMBER`, `ENTITY` |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `connector`

- Displayed as: _"Connector"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/connector](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/connector)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| host | [host](#host) | _"Host"_ |
| implements_stage_type | [stage_type](#stage_type) | _"Implements Stage Type"_ |
| data_connections | [data_connection](#data_connection) | _"Data Connections"_ |
| type | string | _"Type"_ |
| version | string | _"Version"_ |
| variant | string | _"Variant"_ |
| library | string | _"Library"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `credential`

- Displayed as: _"Credential"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/credential](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/credential)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| password | string | _"Password"_ |
| username | string | _"Username"_ |
| for_application_install | [application_install](#application_install) | _"For Application Install"_ |
| used_by_user_credentials | [credentials](#credentials) | _"Used By User Credentials"_ |
| of_user_credentials | [credentials](#credentials) | _"Of User Credentials"_ |
| default_for_application_install | [application_install](#application_install) | _"Default For Application Install"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| password | string | _"Password"_ |
| username | string | _"Username"_ |
| for_application_install | [application_install](#application_install) | _"For Application Install"_ |
| used_by_user_credentials | [credentials](#credentials) | _"Used By User Credentials"_ |
| of_user_credentials | [credentials](#credentials) | _"Of User Credentials"_ |
| default_for_application_install | [application_install](#application_install) | _"Default For Application Install"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `credentials`

- Displayed as: _"Credentials"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/credentials](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/credentials)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **of_user** | [user](#user) | _"Of User"_ |
| external_credential | [credential](#credential) | _"External Credential"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| asb_credential | [credential](#credential) | _"Asb Credential"_ |
| **of_user** | [user](#user) | _"Of User"_ |
| external_credential | [credential](#credential) | _"External Credential"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `custom_attribute`

- Displayed as: _"Custom Attribute"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/custom_attribute](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/custom_attribute)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| custom_attribute_type | enum | _"Custom Attribute Type"_: `BOOLEAN`, `INTEGER`, `DOUBLE`, `STRING`, `DATE`, `TEXT`, `REFERENCE` |
| applies_to | string | _"Applies To"_ |
| name | string | _"Name"_ |
| description | string | _"Description"_ |


## `customattributeval`

- Displayed as: _"CustomAttributeVal"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/customattributeval](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/customattributeval)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| value | string | _"Value"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| x_custom_attribute_name | string | _"X Custom Attribute Name"_ |
| value | string | _"Value"_ |


## `data_class`

- Displayed as: _"Data Class"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_class](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_class)

#### Properties valid for creation:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| parent_data_class | [data_class](#data_class) | _"Parent Data Class"_ |
| short_description | string | _"Short Description"_ |
| **data_class_type_single** | enum | _"Type"_: `Undefined`, `Regex`, `Java`, `ValidValues`, `Script`, `ColumnSimilarity`, `UnstructuredFilter` |
| **class_code** | string | _"Class Code"_ |

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| parent_data_class | [data_class](#data_class) | _"Parent Data Class"_ |
| **data_class_type_single** | enum | _"Type"_: `Undefined`, `Regex`, `Java`, `ValidValues`, `Script`, `ColumnSimilarity`, `UnstructuredFilter` |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_data_classes | [data_class](#data_class) | _"Contains Data Classes"_ |
| classifications_selected | [classificationenabledgroup](#classificationenabledgroup) | _"Selected Data Classifications"_ |
| data_type_filter_elements_enum | enum | _"Data Type"_: `numeric`, `string`, `date`, `time`, `timestamp` |
| default_threshold | number | _"Threshold (Percent)"_ |
| length_filter_min | number | _"Minimum Data Length"_ |
| length_filter_max | number | _"Maximum Data Length"_ |
| regular_expression_single | string | _"Regular Expression"_ |
| applicable_for_single | enum | _"Applicable For"_: `structured_data_only`, `unstructured_data_only`, `all_data` |
| additional_regular_expression | string | _"Additional Regular Expression"_ |
| additionial_applicable_for | enum | _"Additional Applicable For"_: `structured_data_only`, `unstructured_data_only`, `all_data` |
| columnNameMatch | string | _"Column Name Match"_ |
| priority | number | _"Priority"_ |
| example | string | _"Example"_ |
| enabled | boolean | _"Enabled"_ |
| **class_code** | string | _"Class Code"_ |
| active | boolean | _"Active"_ |
| provider | string | _"Provider"_ |
| filters | [filter](#filter) | _"Filters"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| parent_data_class | [data_class](#data_class) | _"Parent Data Class"_ |
| **data_class_type_single** | enum | _"Type"_: `Undefined`, `Regex`, `Java`, `ValidValues`, `Script`, `ColumnSimilarity`, `UnstructuredFilter` |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_data_classes | [data_class](#data_class) | _"Contains Data Classes"_ |
| classifications_selected | [classificationenabledgroup](#classificationenabledgroup) | _"Selected Data Classifications"_ |
| classified_assets_detected | [classification](#classification) | _"Detected Data Classifications"_ |
| data_type_filter_elements_enum | enum | _"Data Type"_: `numeric`, `string`, `date`, `time`, `timestamp` |
| default_threshold | number | _"Threshold (Percent)"_ |
| length_filter_min | number | _"Minimum Data Length"_ |
| length_filter_max | number | _"Maximum Data Length"_ |
| java_class_name_single | string | _"JAVA Class"_ |
| properties | string | _"Properties"_ |
| scope | enum | _"Scope"_: `value`, `column`, `dataset_columns`, `dataset` |
| regular_expression_single | string | _"Regular Expression"_ |
| applicable_for_single | enum | _"Applicable For"_: `structured_data_only`, `unstructured_data_only`, `all_data` |
| additional_regular_expression | string | _"Additional Regular Expression"_ |
| additionial_applicable_for | enum | _"Additional Applicable For"_: `structured_data_only`, `unstructured_data_only`, `all_data` |
| valid_value_strings | string | _"Valid Values"_ |
| valid_values_case_sensitive | boolean | _"Case Sensitive"_ |
| allowSubstringMatch | boolean | _"Allow Substring Match"_ |
| squeezeConsecutiveWhiteSpaces | boolean | _"Collapse Consecutive White Spaces"_ |
| columnNameMatch | string | _"Column Name Match"_ |
| expression | string | _"Expression"_ |
| script | string | _"Script"_ |
| language | enum | _"Language"_: `JavaScript`, `DataRule` |
| reference_columns_metadata | string | _"Reference Columns Metadata"_ |
| priority | number | _"Priority"_ |
| example | string | _"Example"_ |
| enabled | boolean | _"Enabled"_ |
| **class_code** | string | _"Class Code"_ |
| validValueReferenceFile | string | _"Valid Value Reference File"_ |
| active | boolean | _"Active"_ |
| provider | string | _"Provider"_ |
| filters | [filter](#filter) | _"Filters"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `data_class_old`

- Displayed as: _"Data Class"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_class_old](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_class_old)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| is_sub_of_data_class | [data_class_old](#data_class_old) | _"Is Sub Of Data Class"_ |
| has_sub_data_class | [data_class_old](#data_class_old) | _"Has Sub Data Class"_ |
| inferred_by_df_analysis_summary | [column_analysis_summary](#column_analysis_summary) | _"Inferred By DF Analysis Summary"_ |
| is_user_defined | boolean | _"Is User Defined"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| is_sub_of_data_class | [data_class_old](#data_class_old) | _"Is Sub Of Data Class"_ |
| classifies_data_field | [data_field](#data_field) | _"Classifies Data Field"_ |
| has_sub_data_class | [data_class_old](#data_class_old) | _"Has Sub Data Class"_ |
| class_code | string | _"Class Code"_ |
| inferred_by_df_analysis_summary | [column_analysis_summary](#column_analysis_summary) | _"Inferred By DF Analysis Summary"_ |
| is_user_defined | boolean | _"Is User Defined"_ |


## `data_connection`

- Displayed as: _"Data Connection"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_connection](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_connection)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| host | [host](#host) | _"Host"_ |
| imports_database | [database](#database) | _"Imports Database"_ |
| data_connectors | [connector](#connector) | _"Data Connectors"_ |
| connection_string | string | _"Connection String"_ |
| imported_from | string | _"Imported From"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `data_connection_mapping`

- Displayed as: _"Data Connection Mapping"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_connection_mapping](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_connection_mapping)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| same_as_data_connections | [data_connection_mapping](#data_connection_mapping) | _"Same as Data Connections"_ |
| preferred_data_connection | [data_connection_mapping](#data_connection_mapping) | _"Preferred Data Connection"_ |
| bound_to_database | [database](#database) | _"Bound to Database"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| host_(engine)_name | string | _"Host (Engine) Name"_ |
| type | string | _"Type"_ |
| used_by | [main_object](#main_object) | _"Used by"_ |
| same_as_data_connections | [data_connection_mapping](#data_connection_mapping) | _"Same as Data Connections"_ |
| preferred_data_connection | [data_connection_mapping](#data_connection_mapping) | _"Preferred Data Connection"_ |
| bound_to_database | [database](#database) | _"Bound to Database"_ |


## `data_element`

- Displayed as: _"Data Element"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_element](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_element)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| transformation_project | [transformation_project](#transformation_project) | _"Transformation Project"_ |
| odbc_type | enum | _"Data Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| length | number | _"Length"_ |
| minimum_length | number | _"Minimum Length"_ |
| display_size | number | _"Display Size"_ |
| allows_null_values | boolean | _"Allow Null Values"_ |
| transforms | [transforms_function](#transforms_function) | _"Transforms"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `data_field`

- Displayed as: _"Data Item"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_field](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_field)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| type | string | _"Native Type"_ |
| data_type | enum | _"Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| odbc_type | enum | _"ODBC Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| data_item_definition | [data_item_definition](#data_item_definition) | _"Based On Data Definition"_ |
| length | number | _"Length"_ |
| fraction | number | _"Scale"_ |
| used_by_analytics_objects | [analytics_object](#analytics_object) | _"Used By Data Science"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `data_file`

- Displayed as: _"Data File"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_file](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_file)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| parent_folder_or_host | [main_object](#main_object) | _"Parent Folder or Host"_ |
| parent_folder | [main_object](#main_object) | _"Parent Folder"_ |
| host | [host](#host) | _"Host"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| data_file_records | [data_file_record](#data_file_record) | _"Data File Records"_ |
| implements_data_file_definition | [data_file_definition](#data_file_definition) | _"Implements Data File Definition"_ |
| implements_physical_models | [physical_data_model](#physical_data_model) | _"Implements Physical Models"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| path | string | _"Path"_ |
| store_type | string | _"Type"_ |
| imported_from | string | _"Imported From"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |
| **amazon_s3_data_files** | [amazon_s3_data_file](#amazon_s3_data_file) | _"Amazon S3 Data Files"_ |


## `data_file_definition`

- Displayed as: _"Data File Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_file_definition](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_file_definition)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| data_file_definition_records | [data_file_definition_record](#data_file_definition_record) | _"Data File Definition Records"_ |
| implemented_by_data_files | [main_object](#main_object) | _"Implemented by Data Files"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| imported_from | string | _"Imported From"_ |
| references_data_file_folders | [main_object](#main_object) | _"References Data File Folders"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `data_file_definition_field`

- Displayed as: _"Data File Definition Field"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_file_definition_field](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_file_definition_field)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| data_file_definition_record | [data_file_definition_record](#data_file_definition_record) | _"Data File Definition Record"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| type | string | _"Native Type"_ |
| data_type | enum | _"Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| odbc_type | enum | _"ODBC Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| length | string | _"Length"_ |
| minimum_length | number | _"Minimum Length"_ |
| fraction | number | _"Scale"_ |
| position | number | _"Position"_ |
| level | number | _"Level Number"_ |
| allows_null_values | boolean | _"Allow Null Values"_ |
| unique | boolean | _"Unique Constraint"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `data_file_definition_record`

- Displayed as: _"Data File Definition Record"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_file_definition_record](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_file_definition_record)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| data_file_definition | [data_file_definition](#data_file_definition) | _"Data File Definition"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| data_file_definition_fields | [data_file_definition_field](#data_file_definition_field) | _"Data File Definition Fields"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| imported_from | string | _"Imported From"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `data_file_field`

- Displayed as: _"Data File Field"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_file_field](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_file_field)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| selected_classification | [data_class](#data_class) | _"Selected Data Classification"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| data_file_record | [data_file_record](#data_file_record) | _"Data File Record"_ |
| qualityScore | string | _"Quality Score"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| implements_entity_attributes | [entity_attribute](#entity_attribute) | _"Implements Entity Attributes"_ |
| implements_design_columns | [design_column](#design_column) | _"Implements Design Columns"_ |
| type | string | _"Native Type"_ |
| data_type | enum | _"Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| default_value | string | _"Default Value"_ |
| selected_classification | [data_class](#data_class) | _"Selected Data Classification"_ |
| detected_classifications | [classification](#classification) | _"Detected Data Classifications"_ |
| odbc_type | enum | _"ODBC Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| length | number | _"Length"_ |
| minimum_length | number | _"Minimum Length"_ |
| fraction | number | _"Fraction"_ |
| position | number | _"Position"_ |
| level | number | _"Level"_ |
| allows_null_values | boolean | _"Allow Null Values"_ |
| unique | boolean | _"Unique Constraint"_ |
| same_as_data_sources | [data_field](#data_field) | _"Same as Data Sources"_ |
| uniqueFlag | boolean | _"Require Unique Values"_ |
| nullabilityFlag | boolean | _"Include Null Values"_ |
| constantFlag | boolean | _"Include Constant Values"_ |
| domainType | string | _"Domain"_ |
| numberCompleteValues | number | _"Number of Complete Values"_ |
| numberValidValues | number | _"Number of Valid Values"_ |
| numberEmptyValues | number | _"Number of Empty Values"_ |
| numberNullValues | number | _"Number of Null Values"_ |
| numberDistinctValues | number | _"Number of Distinct Values"_ |
| numberFormats | number | _"Number of Distinct Formats"_ |
| numberZeroValues | number | _"Number of Zero Values"_ |
| inferredDataType | enum | _"Inferred Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| inferredLength | number | _"Inferred Length"_ |
| inferredFormat | string | _"Inferred Format"_ |
| inferredScale | number | _"Inferred Scale"_ |
| inferredPrecision | number | _"Inferred Precision"_ |
| averageValue | string | _"Average Value"_ |
| isInferredForeignKey | boolean | _"Inferred Foreign Key"_ |
| isInferredPrimaryKey | boolean | _"Inferred Primary Key"_ |
| hasDataClassification | [classification](#classification) | _"Detected Data Classifications"_ |
| nbRecordsTested | number | _"Number of Records Tested"_ |
| qualityScore_bubble | string | _"Quality Score"_ |
| quality_dimension | [quality_problem](#quality_problem) | _"Quality Dimensions"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| used_by_analytics_objects | [analytics_object](#analytics_object) | _"Used By Data Science"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| datafile_data_rules | [data_rule](#data_rule) | _"Data Rules"_ |
| database_data_rule_sets | [data_rule_set](#data_rule_set) | _"Data Rule Sets"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `data_file_folder`

- Displayed as: _"Data File Folder"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_file_folder](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_file_folder)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| same_as_data_sources | [main_object](#main_object) | _"Same as Data Sources"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| parent_folder_or_host | [main_object](#main_object) | _"Parent Folder or Host"_ |
| parent_folder | [main_object](#main_object) | _"Parent Folder"_ |
| host | [host](#host) | _"Host"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| data_file_folders | [data_file_folder](#data_file_folder) | _"Data File Folders"_ |
| data_files | [data_file](#data_file) | _"Data Files"_ |
| uses_data_file_definitions | [data_file_definition](#data_file_definition) | _"Uses Data File Definitions"_ |
| location | string | _"Location"_ |
| source_creation_date | datetime | _"Source Creation Date"_ |
| source_modification_date | datetime | _"Source Modification Date"_ |
| store_type | string | _"Store Type"_ |
| **type** | string | _"Type"_ |
| data_connection | [data_connection](#data_connection) | _"Data Connection"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| same_as_data_sources | [main_object](#main_object) | _"Same as Data Sources"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `data_file_record`

- Displayed as: _"Data File Record"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_file_record](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_file_record)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| data_file | [data_file](#data_file) | _"Default Data File"_ |
| qualityScore | string | _"Quality Score"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| data_file_fields | [data_file_field](#data_file_field) | _"Data File Fields"_ |
| implements_logical_entities | [logical_entity](#logical_entity) | _"Implements Logical Entities"_ |
| implements_design_tables_or_views | [datagroup](#datagroup) | _"Implements Design Tables or Design Views"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| same_as_data_sources | [datagroup](#datagroup) | _"Same as Data Sources"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| imported_from | string | _"Imported From"_ |
| reviewDate | datetime | _"Review Date"_ |
| fieldCount | number | _"Number of Fields"_ |
| rowCount | number | _"Number of Rows"_ |
| PKDuplicateCount | number | _"Primary Key Duplicates"_ |
| FKViolationCount | number | _"Foreign Key Violations"_ |
| nbRecordTested | number | _"Number of Records Tested"_ |
| qualityScore_bubble | string | _"Quality Score"_ |
| quality_dimension | [quality_problem](#quality_problem) | _"Quality Dimensions"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `data_item`

- Displayed as: _"Data Item"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_item](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_item)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| has_dimension | [array](#array) | _"Has Dimension"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| data_item_definition | [data_item_definition](#data_item_definition) | _"Data Item Definition"_ |
| is_signed | boolean | _"Is Signed"_ |
| validated_by_data_values | [data_item_value](#data_item_value) | _"Validated By Data Values"_ |
| type | string | _"Native Type"_ |
| is_computed | boolean | _"Is Computed"_ |
| allows_empty_value | boolean | _"Allows Empty Value"_ |
| odbc_type | enum | _"ODBC Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| based_on | string | _"Based On "_ |
| position | number | _"Position"_ |
| allow_null_values | string | _"Null Value"_ |
| fraction | number | _"Scale"_ |
| allows_null_values | boolean | _"Allow Null Values"_ |
| calendar | string | _"Calendar"_ |
| display_size | number | _"Display Size"_ |
| minimum_length | number | _"Minimum Length"_ |
| item_kind | string | _"Item Kind"_ |
| has_dimension | [array](#array) | _"Has Dimension"_ |
| unique | boolean | _"Unique"_ |
| length | number | _"Maximum Length"_ |
| data_type | enum | _"Type Code"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| default_value | string | _"Default Value"_ |
| level | number | _"Level Number"_ |


## `data_item_definition`

- Displayed as: _"Data Item Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_item_definition](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_item_definition)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| database_schema | [database_schema](#database_schema) | _"Database Schema"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| contains_data_fields | [data_field](#data_field) | _"Contains Data Fields"_ |
| data_type | enum | _"Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| odbc_type | enum | _"ODBC Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| length | number | _"Length"_ |
| fraction | number | _"Scale"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `data_item_properties`

- Displayed as: _"Data Item Properties"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_item_properties](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_item_properties)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| belonging_to_parameter_definition | [parameter](#parameter) | _"Belonging to Parameter Definition"_ |
| flow_variable | [data_item](#data_item) | _"Flow Variable"_ |
| column_definition | [column_definition](#column_definition) | _"Column Definition"_ |
| filler_parents | string | _"Filler Parents"_ |
| nls_map | string | _"NLS Map"_ |
| sync_indicator | boolean | _"Sync Indicator"_ |
| redefined_field | string | _"Redefined Field"_ |
| association | string | _"Association"_ |
| depend_field | string | _"Depend Field"_ |
| scd_purpose | number | _"SCD Purpose"_ |
| field_type | string | _"Field Type"_ |
| date_mask | string | _"Date Mask"_ |
| apt_field_prop | string | _"APT Field Prop"_ |
| has_sign_indicator | boolean | _"Has Sign Indicator"_ |
| usage | string | _"Usage"_ |
| scale | number | _"Scale"_ |
| is_u_string | boolean | _"Is U String"_ |
| sign_option | number | _"Sign Option"_ |
| pad_char | string | _"Pad Char"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| belonging_to_parameter_definition | [parameter](#parameter) | _"Belonging to Parameter Definition"_ |
| flow_variable | [data_item](#data_item) | _"Flow Variable"_ |
| column_definition | [column_definition](#column_definition) | _"Column Definition"_ |
| filler_parents | string | _"Filler Parents"_ |
| nls_map | string | _"NLS Map"_ |
| sync_indicator | boolean | _"Sync Indicator"_ |
| redefined_field | string | _"Redefined Field"_ |
| association | string | _"Association"_ |
| depend_field | string | _"Depend Field"_ |
| scd_purpose | number | _"SCD Purpose"_ |
| field_type | string | _"Field Type"_ |
| date_mask | string | _"Date Mask"_ |
| apt_field_prop | string | _"APT Field Prop"_ |
| has_sign_indicator | boolean | _"Has Sign Indicator"_ |
| usage | string | _"Usage"_ |
| scale | number | _"Scale"_ |
| is_u_string | boolean | _"Is U String"_ |
| sign_option | number | _"Sign Option"_ |
| pad_char | string | _"Pad Char"_ |


## `data_item_value`

- Displayed as: _"Data Item Value"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_item_value](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_item_value)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| valid_value_list | [valid_value_list](#valid_value_list) | _"Valid Value List"_ |
| design_column | [data_item](#data_item) | _"Design Column"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| valid_value_list | [valid_value_list](#valid_value_list) | _"Valid Value List"_ |
| design_column | [data_item](#data_item) | _"Design Column"_ |


## `data_map_filter_operation`

- Displayed as: _"Data Map Filter Operation"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_map_filter_operation](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_map_filter_operation)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **infoset** | [infoset](#infoset) | _"InfoSet"_ |
| **primary_input** | [infoset](#infoset) | _"Primary Input"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `data_rule`

- Displayed as: _"Data Rule"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_rule](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_rule)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| implemented_bindings | [data_field](#data_field) | _"Implemented Bindings"_ |
| data_rule_definitions | [non_published_data_rule_definition](#non_published_data_rule_definition) | _"Data Rule Definitions"_ |
| project | string | _"Project"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| expression | string | _"Expression"_ |
| contact | [steward](#steward) | _"Contact"_ |
| metrics | [metric](#metric) | _"Metrics"_ |
| benchmark | string | _"Benchmark"_ |
| execution_history | [data_rule_results](#data_rule_results) | _"Execution History"_ |
| data_policies | [main_object](#main_object) | _"Data Policies"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `data_rule_definition`

- Displayed as: _"Data Rule Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_rule_definition](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_rule_definition)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| rule_logic | string | _"Rule Logic"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| data_rule_set_definitions | [non_published_data_rule_set](#non_published_data_rule_set) | _"Data Rule Set Definitions"_ |
| project | string | _"Project"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| published | boolean | _"Published"_ |
| publication_date | datetime | _"Publication Date"_ |
| rule_logic | string | _"Rule Logic"_ |
| contact | [steward](#steward) | _"Contact"_ |
| data_policies | [main_object](#main_object) | _"Data Policies"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |
| **non_published_data_rule_definitions** | [non_published_data_rule_definition](#non_published_data_rule_definition) | _"Non Published Data Rule Definitions"_ |
| **published_data_rule_definitions** | [published_data_rule_definition](#published_data_rule_definition) | _"Published Data Rule Definitions"_ |


## `data_rule_results`

- Displayed as: _"Data Rule Results"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_rule_results](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_rule_results)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| start_time | datetime | _"Start Time"_ |
| end_time | datetime | _"End Time"_ |
| number_of_records_tested | number | _"Number of Records Tested"_ |
| number_of_records_met | number | _"Number of Records Met"_ |
| number_of_records_not_met | number | _"Number of Records Not Met"_ |
| benchmark | string | _"Benchmark"_ |
| rule_results | [Rule_Execution_Result](#rule_execution_result) | _"Rule Results"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `data_rule_set`

- Displayed as: _"Data Rule Set"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_rule_set](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_rule_set)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| implemented_bindings | [data_field](#data_field) | _"Implemented Bindings"_ |
| data_rule_set_definitions | [non_published_data_rule_set](#non_published_data_rule_set) | _"Data Rule Set Definitions"_ |
| project | string | _"Project"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| contact | [steward](#steward) | _"Contact"_ |
| metrics | [metric](#metric) | _"Metrics"_ |
| benchmark | string | _"Benchmark"_ |
| execution_history | [data_rule_results](#data_rule_results) | _"Execution History"_ |
| data_policies | [main_object](#main_object) | _"Data Policies"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `data_rule_set_definition`

- Displayed as: _"Data Rule Set Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_rule_set_definition](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/data_rule_set_definition)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| project | string | _"Project"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| published | boolean | _"Published"_ |
| publication_date | datetime | _"Publication Date"_ |
| contact | [steward](#steward) | _"Contact"_ |
| data_policies | [main_object](#main_object) | _"Data Policies"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |
| **non_published_data_rule_set_definitions** | [non_published_data_rule_set](#non_published_data_rule_set) | _"Non Published Data Rule Set Definitions"_ |
| **published_data_rule_set_definitions** | [published_data_rule_set](#published_data_rule_set) | _"Published Data Rule Set Definitions"_ |


## `database`

- Displayed as: _"Database"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/database](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/database)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| host | [host](#host) | _"Host"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| database_schemas | [database_schema](#database_schema) | _"Database Schemas"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| location | string | _"Location"_ |
| dbms | string | _"DBMS"_ |
| dbms_server_instance | string | _"DBMS Server Instance"_ |
| dbms_vendor | string | _"DBMS Vendor"_ |
| dbms_version | string | _"DBMS Version"_ |
| database_type | string | _"Database Type"_ |
| imported_from | string | _"Imported From"_ |
| data_connections | [data_connection](#data_connection) | _"Data Connections"_ |
| data_connection_mappings | [data_connection_mapping](#data_connection_mapping) | _"Data Connection Mappings"_ |
| mapped_to_mdm_models | [mdm_model](#mdm_model) | _"Mapped to MDM Models"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| bi_reports | [bi_report](#bi_report) | _"BI Reports"_ |
| bi_models | [bi_model](#bi_model) | _"BI Models"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `database_alias`

- Displayed as: _"Database Alias"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/database_alias](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/database_alias)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| database_schema | [database_schema](#database_schema) | _"Database Schema"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| database_columns | [data_field](#data_field) | _"Database Columns"_ |
| alias_of_database_tables_or_views | [datagroup](#datagroup) | _"Alias of Database Tables or Views"_ |
| imported_from | string | _"Imported From"_ |
| implemented_key | [candidate_key](#candidate_key) | _"Defined Primary Key"_ |
| defined_foreign_key | [database_column](#database_column) | _"Defined Foreign Key"_ |
| indexes | [database_index](#database_index) | _"Indexes"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `database_column`

- Displayed as: _"Database Column"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/database_column](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/database_column)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| selected_classification | [data_class](#data_class) | _"Selected Data Classification"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| database_table_or_view | [datagroup](#datagroup) | _"Database Table or View"_ |
| qualityScore | string | _"Quality Score"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| database_table | [database_table](#database_table) | _"Database Table"_ |
| view | [view](#view) | _"Database View"_ |
| database_alias | [database_alias](#database_alias) | _"Database Alias"_ |
| implements_entity_attributes | [entity_attribute](#entity_attribute) | _"Implements Entity Attributes"_ |
| implements_design_columns | [design_column](#design_column) | _"Implements Design Columns"_ |
| type | string | _"Native Type"_ |
| odbc_type | enum | _"ODBC Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| data_type | enum | _"Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| default_value | string | _"Default Value"_ |
| database_domains | [database_domain](#database_domain) | _"Database Domains"_ |
| referenced_by_database_columns | [database_column](#database_column) | _"Referenced by Database Columns"_ |
| selected_classification | [data_class](#data_class) | _"Selected Data Classification"_ |
| detected_classifications | [classification](#classification) | _"Detected Data Classifications"_ |
| length | string | _"Length"_ |
| minimum_length | number | _"Minimum Length"_ |
| fraction | number | _"Fraction"_ |
| position | number | _"Position"_ |
| level | number | _"Level"_ |
| occurs | string | _"Occurs"_ |
| start_end_columns | string | _"Starting .. Ending Columns"_ |
| allows_null_values | boolean | _"Allow Null Values"_ |
| unique | boolean | _"Unique Constraint"_ |
| same_as_data_sources | [data_field](#data_field) | _"Same as Data Sources"_ |
| references_database_columns | [database_column](#database_column) | _"References Database Columns"_ |
| defined_primary_key | [candidate_key](#candidate_key) | _"Defined Primary Key"_ |
| defined_non_primary_key | [candidate_key](#candidate_key) | _"Defined Non Primary Key"_ |
| implemented_key | [candidate_key](#candidate_key) | _"Implemented Key"_ |
| selected_primary_key | boolean | _"User Selected Primary Key"_ |
| selected_natural_key | boolean | _"User Selected Natural Key"_ |
| defined_foreign_key | boolean | _"Defined Foreign Key"_ |
| defined_foreign_key_references | [database_column](#database_column) | _"Defined Foreign Key References"_ |
| defined_foreign_key_referenced | [data_field](#data_field) | _"Defined Foreign Key Referenced"_ |
| selected_foreign_key | boolean | _"User Selected Foreign Key"_ |
| selected_foreign_key_references | [database_column](#database_column) | _"User Selected Foreign Key References"_ |
| selected_foreign_key_referenced | [database_column](#database_column) | _"User Selected Foreign Key Referenced"_ |
| database_indexes | [database_index](#database_index) | _"Index"_ |
| index | [database_index](#database_index) | _"Index"_ |
| validity_tables | [validity_table](#validity_table) | _"Validity Tables"_ |
| uniqueFlag | boolean | _"Require Unique Values"_ |
| nullabilityFlag | boolean | _"Include Null Values"_ |
| constantFlag | boolean | _"Include Constant Values"_ |
| domainType | string | _"Domain"_ |
| numberCompleteValues | number | _"Number of Complete Values"_ |
| numberValidValues | number | _"Number of Valid Values"_ |
| numberEmptyValues | number | _"Number of Empty Values"_ |
| numberNullValues | number | _"Number of Null Values"_ |
| numberDistinctValues | number | _"Number of Distinct Values"_ |
| numberFormats | number | _"Number of Distinct Formats"_ |
| numberZeroValues | number | _"Number of Zero Values"_ |
| inferredDataType | enum | _"Inferred Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| inferredLength | number | _"Inferred Length"_ |
| inferredFormat | string | _"Inferred Format"_ |
| inferredScale | number | _"Inferred Scale"_ |
| inferredPrecision | number | _"Inferred Precision"_ |
| averageValue | string | _"Average Value"_ |
| isInferredForeignKey | boolean | _"Inferred Foreign Key"_ |
| isInferredPrimaryKey | boolean | _"Inferred Primary Key"_ |
| has_DataClassifications | [classification](#classification) | _"Detected data Classifications"_ |
| nbRecordsTested | number | _"Number of Records Tested"_ |
| qualityScore_bubble | string | _"Quality Score"_ |
| quality_dimension | [quality_problem](#quality_problem) | _"Quality Dimensions"_ |
| column_definitions | [column_definition](#column_definition) | _"Column Definitions"_ |
| mapped_to_physical_object_attributes | [physical_object_attribute](#physical_object_attribute) | _"Mapped to Physical Object Attributes"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| used_by_analytics_objects | [analytics_object](#analytics_object) | _"Used By Data Science"_ |
| bi_report_query_items | [reportobject](#reportobject) | _"BI Report Query Items"_ |
| bi_collection_members | [bi_collection_member](#bi_collection_member) | _"BI Collection Members"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| data_rule_definitions | [non_published_data_rule_definition](#non_published_data_rule_definition) | _"Data Rule Definitions"_ |
| data_rule_set_definitions | [non_published_data_rule_set](#non_published_data_rule_set) | _"Data Rule Set Definitions"_ |
| data_rules | [data_rule](#data_rule) | _"Data Rules"_ |
| data_rule_sets | [data_rule_set](#data_rule_set) | _"Data Rule Sets"_ |
| data_policies | [main_object](#main_object) | _"Data Policies"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `database_domain`

- Displayed as: _"Database Domain"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/database_domain](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/database_domain)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| database_schema | [database_schema](#database_schema) | _"Database Schema"_ |
| used_by_data_items | [data_field](#data_field) | _"Used by Data Items"_ |
| data_type | enum | _"Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| odbc_type | enum | _"ODBC Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| length | number | _"Length"_ |
| fraction | number | _"Scale"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `database_index`

- Displayed as: _"Database Index"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/database_index](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/database_index)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| indexed_database_columns | [database_column](#database_column) | _"Database Columns"_ |
| expression | string | _"Expression"_ |
| unique | boolean | _"Unique Index"_ |
| type | string | _"Type"_ |
| function | boolean | _"Function"_ |
| partition | boolean | _"Partition"_ |
| join | boolean | _"Join"_ |
| joined_database_columns | [database_column](#database_column) | _"Joined Database Columns"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `database_schema`

- Displayed as: _"Database Schema"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/database_schema](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/database_schema)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| same_as_data_sources | [main_object](#main_object) | _"Same as Data Sources"_ |
| preferred_database_schema | [database_schema](#database_schema) | _"Preferred Database Schema"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| database | [database](#database) | _"Database"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| database_tables | [database_table](#database_table) | _"Database Tables"_ |
| views | [view](#view) | _"Views"_ |
| database_aliases | [database_alias](#database_alias) | _"Database Aliases"_ |
| stored_procedures | [stored_procedure](#stored_procedure) | _"Stored Procedures"_ |
| implements_logical_data_models | [logical_data_model](#logical_data_model) | _"Implements Logical Data Models"_ |
| implements_physical_data_models | [physical_data_model](#physical_data_model) | _"Implements Physical Data Models"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| owner | string | _"Owner"_ |
| imported_from | string | _"Imported From"_ |
| mapped_to_mdm_models | [mdm_model](#mdm_model) | _"Mapped to MDM Models"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| same_as_data_sources | [main_object](#main_object) | _"Same as Data Sources"_ |
| preferred_database_schema | [database_schema](#database_schema) | _"Preferred Database Schema"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| database_domains | [data_item_definition](#data_item_definition) | _"Database Domains"_ |
| data_policies | [main_object](#main_object) | _"Data Policies"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `database_table`

- Displayed as: _"Database Table"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/database_table](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/database_table)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| database_schema | [database_schema](#database_schema) | _"Database Schema"_ |
| qualityScore | string | _"Quality Score"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| database_columns | [database_column](#database_column) | _"Database Columns"_ |
| implements_logical_entities | [logical_entity](#logical_entity) | _"Implements Logical Entities"_ |
| implements_design_tables_or_views | [datagroup](#datagroup) | _"Implements Design Tables or Design Views"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| same_as_data_sources | [datagroup](#datagroup) | _"Same as Data Sources"_ |
| referenced_by_views | [view](#view) | _"Referenced by Views"_ |
| database_aliases | [datagroup](#datagroup) | _"Database Aliases"_ |
| imported_from | string | _"Imported From"_ |
| defined_primary_key | [candidate_key](#candidate_key) | _"Defined Primary Key"_ |
| defined_non_primary_key | [candidate_key](#candidate_key) | _"Defined Non Primary Key"_ |
| selected_primary_key | [data_field](#data_field) | _"User Selected Primary Key"_ |
| defined_foreign_key | [database_column](#database_column) | _"Defined Foreign Key"_ |
| selected_foreign_key | [database_column](#database_column) | _"User Selected Foreign Key"_ |
| selected_natural_key | [data_field](#data_field) | _"User Selected Natural Key"_ |
| multi_column_analysis | string | _"Multi Column Analysis"_ |
| database_indexes | [database_index](#database_index) | _"Indexes"_ |
| indexes | [database_index](#database_index) | _"Indexes"_ |
| reviewDate | datetime | _"Review Date"_ |
| fieldCount | number | _"Number of Fields"_ |
| rowCount | number | _"Number of Rows"_ |
| PKDuplicateCount | number | _"Primary Key Duplicates"_ |
| FKViolationCount | number | _"Foreign Key Violations"_ |
| nbRecordTested | number | _"Number of Records Tested"_ |
| qualityScore_bubble | string | _"Quality Score"_ |
| quality_dimension | [quality_problem](#quality_problem) | _"Quality Dimensions"_ |
| table_definitions | [table_definition](#table_definition) | _"Table Definitions"_ |
| mapped_to_physical_objects | [physical_object](#physical_object) | _"Mapped to Physical Objects"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| bi_report_queries | [bi_report_query](#bi_report_query) | _"BI Report Queries"_ |
| bi_model_collections | [bi_collection](#bi_collection) | _"BI Model Collections"_ |
| source_mapping_specifications | [mapping_specification](#mapping_specification) | _"Source Mapping Specifications"_ |
| target_mapping_specifications | [mapping_specification](#mapping_specification) | _"Target Mapping Specifications"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| data_policies | [main_object](#main_object) | _"Data Policies"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `datagroup`

- Displayed as: _"DataGroup"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/datagroup](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/datagroup)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| name_quoting_char | string | _"Name Quoting Char"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| name_quoting_char | string | _"Name Quoting Char"_ |
| name_qualifier | string | _"Name Qualifier"_ |
| imported_via_data_connection | [data_connection](#data_connection) | _"Data Connection"_ |
| database_schema | [database_schema](#database_schema) | _"Database Schema"_ |


## `datasourcealiasgroup`

- Displayed as: _"DataSourceAliasGroup"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/datasourcealiasgroup](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/datasourcealiasgroup)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| same_as_data_connections | [data_connection_mapping](#data_connection_mapping) | _"Same as Data Connections"_ |
| preferred_data_connection | [data_connection_mapping](#data_connection_mapping) | _"Preferred Data Connection"_ |
| bound_to_database | [database](#database) | _"Bound To Database"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| same_as_data_connections | [data_connection_mapping](#data_connection_mapping) | _"Same as Data Connections"_ |
| preferred_data_connection | [data_connection_mapping](#data_connection_mapping) | _"Preferred Data Connection"_ |
| bound_to_database | [database](#database) | _"Bound To Database"_ |


## `datastage_item`

- Displayed as: _"DataStage Item"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/datastage_item](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/datastage_item)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| repository_id | string | _"Repository ID"_ |
| name | string | _"Name"_ |
| class_name | string | _"Class Name"_ |
| reference_item | boolean | _"Reference Item"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| repository_id | string | _"Repository ID"_ |
| name | string | _"Name"_ |
| class_name | string | _"Class Name"_ |
| reference_item | boolean | _"Reference Item"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created on"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Last Modified on"_ |


## `derivation`

- Displayed as: _"Derivation"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/derivation](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/derivation)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| expression | string | _"Expression"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| expression | string | _"Expression"_ |


## `design_column`

- Displayed as: _"Design Column"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/design_column](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/design_column)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| design_table_or_view | [datagroup](#datagroup) | _"Design Table or View"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| implements_entity_attributes | [entity_attribute](#entity_attribute) | _"Implements Entity Attributes"_ |
| implemented_by_data_fields | [data_field](#data_field) | _"Implemented By Data Fields"_ |
| implemented_by_database_columns | [database_column](#database_column) | _"Implemented by Database Columns"_ |
| primary_key | string | _"Primary Key"_ |
| included_in_design_key | [design_key](#design_key) | _"Design Key"_ |
| parent_design_foreignKey | [design_foreign_key](#design_foreign_key) | _"Parent Design Foreign Key"_ |
| included_in_design_foreign_key | [design_foreign_key](#design_foreign_key) | _"Child Design Foreign Key"_ |
| type | string | _"Native Type"_ |
| data_type | enum | _"Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| odbc_type | enum | _"ODBC Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| physical_domains | [physical_domain](#physical_domain) | _"Physical Domains"_ |
| length | string | _"Length"_ |
| minimum_length | number | _"Minimum Length"_ |
| fraction | number | _"Fraction"_ |
| position | number | _"Position"_ |
| level | number | _"Level"_ |
| allows_null_values | boolean | _"Allow Null Values"_ |
| unique | boolean | _"Unique Constraint"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `design_foreign_key`

- Displayed as: _"Design Foreign Key"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/design_foreign_key](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/design_foreign_key)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **of_data_collection** | [datagroup](#datagroup) | _"Of Data Collection"_ |
| included_database_columns | [data_field](#data_field) | _"Design Columns"_ |
| referenced_by_design_column | [data_field](#data_field) | _"Parent Design Columns"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `design_key`

- Displayed as: _"Design Key"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/design_key](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/design_key)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **design_table_or_view** | [datagroup](#datagroup) | _"Design Table or View"_ |
| primary_key | boolean | _"Primary Key"_ |
| defined_on_design_columns | [data_field](#data_field) | _"Design Columns"_ |
| referenced_by_design_foreign_keys | [foreign_key](#foreign_key) | _"Child Design Foreign Keys"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `design_stored_procedure`

- Displayed as: _"Design Stored Procedure"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/design_stored_procedure](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/design_stored_procedure)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| physical_data_model | [physical_data_model](#physical_data_model) | _"Physical Data Model"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| implemented_by_stored_procedures | [stored_procedure](#stored_procedure) | _"Implemented by Stored Procedures"_ |
| design_stored_procedure_parameters | [design_stored_procedure_parameter](#design_stored_procedure_parameter) | _"Design Stored Procedure Parameters"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| name_qualifier | string | _"Name Qualifier"_ |
| source_code | string | _"Source Code"_ |
| error_code | string | _"Error Code"_ |
| imported_from | string | _"Imported From"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `design_stored_procedure_parameter`

- Displayed as: _"Design Stored Procedure Parameter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/design_stored_procedure_parameter](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/design_stored_procedure_parameter)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| design_stored_procedure | [design_stored_procedure](#design_stored_procedure) | _"Design Stored Procedure"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| data_type | enum | _"Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| length | number | _"Length"_ |
| minimum_length | number | _"Minimum Length"_ |
| fraction | number | _"Fraction"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `design_table`

- Displayed as: _"Design Table"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/design_table](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/design_table)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| physical_data_model | [physical_data_model](#physical_data_model) | _"Physical Data Model"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| implements_logical_entities | [logical_entity](#logical_entity) | _"Implements Logical Entities"_ |
| implemented_by_data_file_elements | [data_file_record](#data_file_record) | _"Implemented by Data File Records"_ |
| implemented_by_database_tables_views | [datagroup](#datagroup) | _"Implemented by Database Tables or Views"_ |
| design_columns | [design_column](#design_column) | _"Design Columns"_ |
| design_keys | [design_key](#design_key) | _"Design Keys"_ |
| design_foreign_keys | [design_foreign_key](#design_foreign_key) | _"Parent Design Foreign Keys"_ |
| referenced_by_design_foreign_keys | [design_foreign_key](#design_foreign_key) | _"Child Design Foreign Keys"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| imported_from | string | _"Imported From"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `design_view`

- Displayed as: _"Design View"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/design_view](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/design_view)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| physical_data_model | [physical_data_model](#physical_data_model) | _"Physical Data Model"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| implements_logical_entities | [logical_entity](#logical_entity) | _"Implements Logical Entities"_ |
| implemented_by_data_file_elements | [data_file_record](#data_file_record) | _"Implemented by Data File Records"_ |
| implemented_by_database_tables_views | [datagroup](#datagroup) | _"Implemented by Database Tables or Views"_ |
| design_columns | [design_column](#design_column) | _"Design Columns"_ |
| design_keys | [design_key](#design_key) | _"Design Keys"_ |
| design_foreign_keys | [design_foreign_key](#design_foreign_key) | _"Design Foreign Keys"_ |
| referenced_by_foreign_key_design | [design_foreign_key](#design_foreign_key) | _"Referenced By Foreign Key Design"_ |
| expression | string | _"Expression"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| imported_from | string | _"Imported From"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `development_log`

- Displayed as: _"DevelopmentLog"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/development_log](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/development_log)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| workflow_task | string | _"Workflow Task"_ |
| development_log | string | _"Header"_ |
| activity | string | _"Activity"_ |
| new_state | string | _"New State"_ |
| comment | string | _"Comment"_ |
| user_task_key | string | _"User Task Key"_ |
| user_task_name | string | _"User Task Name"_ |
| workflow_instance_id | string | _"Workflow Instance Id"_ |
| workflow_event | string | _"Workflow Event"_ |
| workflow_new_state | string | _"Workflow New State"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| date | datetime | _"Date"_ |
| workflow_task | string | _"Workflow Task"_ |
| development_log | string | _"Header"_ |
| activity | string | _"Activity"_ |
| new_state | string | _"New State"_ |
| person | string | _"Person"_ |
| comment | string | _"Comment"_ |
| user_task_key | string | _"User Task Key"_ |
| user_task_name | string | _"User Task Name"_ |
| workflow_instance_id | string | _"Workflow Instance Id"_ |
| workflow_event | string | _"Workflow Event"_ |
| workflow_new_state | string | _"Workflow New State"_ |


## `directory`

- Displayed as: _"Directory"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/directory](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/directory)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| **has_directory_provider_configuration** | [directoryproviderconfiguration](#directoryproviderconfiguration) | _"Has Directory Provider Configuration"_ |
| has_principal | [steward](#steward) | _"Has Principal"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| **has_directory_provider_configuration** | [directoryproviderconfiguration](#directoryproviderconfiguration) | _"Has Directory Provider Configuration"_ |
| has_principal | [steward](#steward) | _"Has Principal"_ |


## `directoryproviderconfiguration`

- Displayed as: _"DirectoryProviderConfiguration"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/directoryproviderconfiguration](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/directoryproviderconfiguration)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| provider_name | string | _"Provider Name"_ |
| of_directory | [directory](#directory) | _"Of Directory"_ |
| description | string | _"Description"_ |
| has_directory_provider_property | [directoryproviderproperty](#directoryproviderproperty) | _"Has Directory Provider Property"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| provider_name | string | _"Provider Name"_ |
| of_directory | [directory](#directory) | _"Of Directory"_ |
| description | string | _"Description"_ |
| has_directory_provider_property | [directoryproviderproperty](#directoryproviderproperty) | _"Has Directory Provider Property"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `directoryproviderproperty`

- Displayed as: _"DirectoryProviderProperty"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/directoryproviderproperty](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/directoryproviderproperty)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| value | string | _"Value"_ |
| **of_provider_property_type** | [providerpropertytype](#providerpropertytype) | _"Of Provider Property Type"_ |
| **of_provider_property_info** | [providerpropertyinfo](#providerpropertyinfo) | _"Of Provider Property Info"_ |
| of_directory_provider_configuration | [directoryproviderconfiguration](#directoryproviderconfiguration) | _"Of Directory Provider Configuration"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| value | string | _"Value"_ |
| **of_provider_property_type** | [providerpropertytype](#providerpropertytype) | _"Of Provider Property Type"_ |
| **of_provider_property_info** | [providerpropertyinfo](#providerpropertyinfo) | _"Of Provider Property Info"_ |
| of_directory_provider_configuration | [directoryproviderconfiguration](#directoryproviderconfiguration) | _"Of Directory Provider Configuration"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `ds_stage_column`

- Displayed as: _"Stage Column"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/ds_stage_column](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/ds_stage_column)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| link | [link](#link) | _"Link"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| odbc_type | enum | _"SQL Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| key | boolean | _"Key"_ |
| length | number | _"Length"_ |
| minimum_length | number | _"Minimum Length"_ |
| allows_null_values | boolean | _"Allow Null Values"_ |
| expression | string | _"Expression"_ |
| constraints | [job_constraint](#job_constraint) | _"Constraints"_ |
| previous_stage_columns | [data_item](#data_item) | _"Previous Stage Columns or Variables"_ |
| next_stage_columns | [data_item](#data_item) | _"Next Stage Columns or Variables"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `dsargumentmap`

- Displayed as: _"DSArgumentMap"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsargumentmap](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsargumentmap)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| argument_map | string | _"Argument Map"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| a_xmeta_locking_root | string | _"A XMeta Locking Root"_ |
| argument_map | string | _"Argument Map"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `dsdata_connection`

- Displayed as: _"Data Connection"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsdata_connection](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsdata_connection)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| host | [host](#host) | _"Host"_ |
| imports_database | [main_object](#main_object) | _"Imports Database"_ |
| imports_table_definitions | [table_definition](#table_definition) | _"Imports Table Definitions"_ |
| data_connectors | [connector](#connector) | _"Data Connectors"_ |
| connection_string | string | _"Connection String"_ |
| folder_path | string | _"Folder Path"_ |
| namespace | string | _"Namespace"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `dsdesign_view`

- Displayed as: _"Design View"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsdesign_view](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsdesign_view)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| has_canvas_annotation | [main_object](#main_object) | _"Has Canvas Annotation"_ |
| output_pins | string | _"Output Pins"_ |
| input_pins | string | _"Input Pins"_ |
| stage_types | string | _"Stage Types"_ |
| of_job | [dsjob](#dsjob) | _"Of Job"_ |
| next_id | number | _"Next ID"_ |
| next_stage_id | number | _"Next Stage ID"_ |
| is_top_level | boolean | _"Is Top Level"_ |
| snap_to_grid | number | _"Snap To Grid"_ |
| stage_x_pos | string | _"Stage X Pos"_ |
| grid_lines | number | _"Grid Lines"_ |
| zoom_value | number | _"Zoom Value"_ |
| container_view_sizing | string | _"Container View Sizing"_ |
| stage_list | string | _"Stage List"_ |
| stage_y_pos | string | _"Stage Y Pos"_ |
| stage_y_size | string | _"Stage Y Size"_ |
| stage_x_size | string | _"Stage X Size"_ |
| internal_id | string | _"Internal ID"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| has_canvas_annotation | [main_object](#main_object) | _"Has Canvas Annotation"_ |
| output_pins | string | _"Output Pins"_ |
| input_pins | string | _"Input Pins"_ |
| stage_types | string | _"Stage Types"_ |
| of_job | [dsjob](#dsjob) | _"Of Job"_ |
| next_id | number | _"Next ID"_ |
| next_stage_id | number | _"Next Stage ID"_ |
| is_top_level | boolean | _"Is Top Level"_ |
| snap_to_grid | number | _"Snap To Grid"_ |
| stage_x_pos | string | _"Stage X Pos"_ |
| grid_lines | number | _"Grid Lines"_ |
| zoom_value | number | _"Zoom Value"_ |
| container_view_sizing | string | _"Container View Sizing"_ |
| stage_list | string | _"Stage List"_ |
| stage_y_pos | string | _"Stage Y Pos"_ |
| stage_y_size | string | _"Stage Y Size"_ |
| stage_x_size | string | _"Stage X Size"_ |
| internal_id | string | _"Internal ID"_ |


## `dsexternaldependency`

- Displayed as: _"DSExternalDependency"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsexternaldependency](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsexternaldependency)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| of_ds_job_def | [dsjob](#dsjob) | _"Of DS Job Def"_ |
| of_ds_routine | [routine](#routine) | _"Of DS Routine"_ |
| calls_ds_routine | [routine](#routine) | _"Calls DS Routine"_ |
| type | enum | _"Type"_: `JOB`, `ROUTINE`, `UVROUTINE`, `FILE`, `ACTIVEX`, `WEBSERVICE`, `ROOTJOB` |
| location | string | _"Location"_ |
| name | string | _"Name"_ |
| runs_ds_job | [dsjob](#dsjob) | _"Runs DS Job"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| of_ds_job_def | [dsjob](#dsjob) | _"Of DS Job Def"_ |
| of_ds_routine | [routine](#routine) | _"Of DS Routine"_ |
| a_xmeta_locking_root | string | _"A XMeta Locking Root"_ |
| calls_ds_routine | [routine](#routine) | _"Calls DS Routine"_ |
| type | enum | _"Type"_: `JOB`, `ROUTINE`, `UVROUTINE`, `FILE`, `ACTIVEX`, `WEBSERVICE`, `ROOTJOB` |
| location | string | _"Location"_ |
| name | string | _"Name"_ |
| runs_ds_job | [dsjob](#dsjob) | _"Runs DS Job"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `dsfolder`

- Displayed as: _"Folder"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsfolder](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsfolder)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| transformation_project | [transformation_project](#transformation_project) | _"Transformation Project"_ |
| parent_folder | [dsfolder](#dsfolder) | _"Parent Folder"_ |
| contains_folders | [dsfolder](#dsfolder) | _"Contains Folders"_ |
| contains_assets | [main_object](#main_object) | _"Contains Assets"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `dsjcltemplate`

- Displayed as: _"DSJCLTemplate"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsjcltemplate](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsjcltemplate)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| template_type | string | _"Template Type"_ |
| category | string | _"Category"_ |
| ds_name_space | string | _"DS Name Space"_ |
| platform_type | string | _"Platform Type"_ |
| code_template | string | _"Code Template"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| template_type | string | _"Template Type"_ |
| category | string | _"Category"_ |
| ds_name_space | string | _"DS Name Space"_ |
| platform_type | string | _"Platform Type"_ |
| code_template | string | _"Code Template"_ |


## `dsjob`

- Displayed as: _"Job"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsjob](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsjob)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| include_for_lineage__edit | enum | _"Include for Lineage"_: `setToTrue`, `setToFalse`, `defaultToProject` |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| transformation_project | [transformation_project](#transformation_project) | _"Transformation Project"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| stages | [stage](#stage) | _"Stages"_ |
| references_local_or_shared_containers | [referenced_container](#referenced_container) | _"References Local or Shared Containers"_ |
| type | string | _"Type"_ |
| annotations | string | _"Annotations"_ |
| folder | [dsfolder](#dsfolder) | _"Folder"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| design_parameters | [dsparameter_job](#dsparameter_job) | _"Design Parameters"_ |
| parameter_sets | [parameter_set_definition](#parameter_set_definition) | _"Parameter Sets"_ |
| references_table_definitions | [table_definition](#table_definition) | _"References Table Definitions"_ |
| runtime_column_propagation | boolean | _"Runtime Column Propagation"_ |
| optimizes_job | [dsjob](#dsjob) | _"Optimizes Job"_ |
| optimized_by_jobs | [dsjob](#dsjob) | _"Optimized by Jobs"_ |
| sequenced_by_jobs | [sequence_job](#sequence_job) | _"Sequenced by Jobs"_ |
| job_runs | [job_run](#job_run) | _"Job Runs"_ |
| include_for_lineage | boolean | _"Include for Lineage"_ |
| include_for_lineage__edit | enum | _"Include for Lineage"_: `setToTrue`, `setToFalse`, `defaultToProject` |
| include_for_lineage_description | string | _"Include for Lineage"_ |
| inherits_lineage_setting_from_transformation_project | boolean | _"Inherits Lineage Setting from Transformation Project"_ |
| lineage_service_last_run_date | datetime | _"Lineage Service Last Run Date"_ |
| lineage_service_status | string | _"Lineage Service Status"_ |
| lineage_service_information | string | _"Lineage Service Information"_ |
| mapping_specifications | [main_object](#main_object) | _"Mapping Specifications"_ |
| web_service_enabled | boolean | _"Web Service Enabled"_ |
| information_services_operations | [information_services_operation](#information_services_operation) | _"Information Services Operations"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `dsmetabag`

- Displayed as: _"DSMetaBag"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsmetabag](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsmetabag)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| of_ds_table_definition | [table_definition](#table_definition) | _"Of DS Table Definition"_ |
| of_ds_job_def | [dsjob](#dsjob) | _"Of DS Job Def"_ |
| of_ds_routine | [routine](#routine) | _"Of DS Routine"_ |
| of_ds_stage | [stage](#stage) | _"Of DS Stage"_ |
| of_ds_input_pin | [job_input_pin](#job_input_pin) | _"Of DS Input Pin"_ |
| values | string | _"Values"_ |
| of_ds_data_connection | [dsdata_connection](#dsdata_connection) | _"Of DS Data Connection"_ |
| of_ds_data_quality_spec | [standardization_object](#standardization_object) | _"Of DS Data Quality Spec"_ |
| of_ds_data_element | [data_element](#data_element) | _"Of DS Data Element"_ |
| a_xmeta_locking_root | string | _"A XMeta Locking Root"_ |
| of_ds_design_view | [dsdesign_view](#dsdesign_view) | _"Of DS Design View"_ |
| of_ds_stage_type | [dsstage_type](#dsstage_type) | _"Of DS Stage Type"_ |
| owners | string | _"Owners"_ |
| names | string | _"Names"_ |
| of_ds_transform | [transforms_function](#transforms_function) | _"Of DS Transform"_ |
| of_ds_output_pin | [job_output_pin](#job_output_pin) | _"Of DS Output Pin"_ |
| conditions | string | _"Conditions"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| of_ds_table_definition | [table_definition](#table_definition) | _"Of DS Table Definition"_ |
| of_ds_job_def | [dsjob](#dsjob) | _"Of DS Job Def"_ |
| of_ds_routine | [routine](#routine) | _"Of DS Routine"_ |
| of_ds_stage | [stage](#stage) | _"Of DS Stage"_ |
| of_ds_input_pin | [job_input_pin](#job_input_pin) | _"Of DS Input Pin"_ |
| values | string | _"Values"_ |
| of_ds_data_connection | [dsdata_connection](#dsdata_connection) | _"Of DS Data Connection"_ |
| of_ds_data_quality_spec | [standardization_object](#standardization_object) | _"Of DS Data Quality Spec"_ |
| of_ds_data_element | [data_element](#data_element) | _"Of DS Data Element"_ |
| a_xmeta_locking_root | string | _"A XMeta Locking Root"_ |
| of_ds_design_view | [dsdesign_view](#dsdesign_view) | _"Of DS Design View"_ |
| of_ds_stage_type | [dsstage_type](#dsstage_type) | _"Of DS Stage Type"_ |
| owners | string | _"Owners"_ |
| names | string | _"Names"_ |
| of_ds_transform | [transforms_function](#transforms_function) | _"Of DS Transform"_ |
| of_ds_output_pin | [job_output_pin](#job_output_pin) | _"Of DS Output Pin"_ |
| conditions | string | _"Conditions"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `dsmfcolumninfo`

- Displayed as: _"DSMFColumnInfo"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsmfcolumninfo](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsmfcolumninfo)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| column_value | string | _"Column Value"_ |
| a_xmeta_locking_root | string | _"A XMeta Locking Root"_ |
| of_ds_stage | [stage](#stage) | _"Of DS Stage"_ |
| sort_order | number | _"Sort Order"_ |
| usage_class | string | _"Usage Class"_ |
| sort_link | string | _"Sort Link"_ |
| aggregation | string | _"Aggregation"_ |
| name | string | _"Name"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| column_value | string | _"Column Value"_ |
| a_xmeta_locking_root | string | _"A XMeta Locking Root"_ |
| of_ds_stage | [stage](#stage) | _"Of DS Stage"_ |
| sort_order | number | _"Sort Order"_ |
| usage_class | string | _"Usage Class"_ |
| sort_link | string | _"Sort Link"_ |
| aggregation | string | _"Aggregation"_ |
| name | string | _"Name"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `dsparameter`

- Displayed as: _"Parameter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsparameter](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsparameter)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| of_container_def | [referenced_container](#referenced_container) | _"Context"_ |
| type | enum | _"Type"_: `UNUSED`, `ENCRYPTED`, `PATHNAME`, `STRINGLIST`, `INPUTCOL`, `OUTPUTCOL`, `NCHAR`, `PARAMETERSET` |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `dsparameter_job`

- Displayed as: _"Parameter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsparameter_job](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsparameter_job)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| long_description | string | _"Long Description"_ |
| of_job_def | [jobdef](#jobdef) | _"Job"_ |
| display_caption | string | _"Display Caption"_ |
| default_value | string | _"Default Value"_ |
| type | string | _"Type"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `dsparameter_set`

- Displayed as: _"Parameter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsparameter_set](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsparameter_set)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| of_parameter_set | [parameterset](#parameterset) | _"Context"_ |
| display_caption | string | _"Display Caption"_ |
| default_value | string | _"Default Value"_ |
| type | enum | _"Type"_: `UNUSED`, `ENCRYPTED`, `PATHNAME`, `STRINGLIST`, `INPUTCOL`, `OUTPUTCOL`, `NCHAR`, `PARAMETERSET` |
| help_text | string | _"Help Text"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `dsstage_type`

- Displayed as: _"Stage Type"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsstage_type](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/dsstage_type)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| transformation_project | [transformation_project](#transformation_project) | _"Transformation Project"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| stages | [stage](#stage) | _"Stages"_ |
| ole_type | string | _"OLE Type"_ |
| dll_name | string | _"DLL Name"_ |
| vendor | string | _"Vendor"_ |
| author | string | _"Author"_ |
| version | string | _"Version"_ |
| copyright | string | _"Copyright"_ |
| properties | [stage_type_detail](#stage_type_detail) | _"Properties"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `duplicates_operation`

- Displayed as: _"Duplicates Operation"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/duplicates_operation](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/duplicates_operation)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **infoset** | [infoset](#infoset) | _"InfoSet"_ |
| **primary_input** | [infoset](#infoset) | _"Primary Input"_ |
| **secondary_input** | [infoset](#infoset) | _"Secondary Input"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `endpoint`

- Displayed as: _"Endpoint"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/endpoint](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/endpoint)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| namespace | string | _"Namespace"_ |
| application | string | _"Application"_ |
| host | string | _"Host"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| port | string | _"Port"_ |
| direction | enum | _"Direction"_: `in`, `out`, `inout` |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `entity_attribute`

- Displayed as: _"Entity Attribute"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/entity_attribute](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/entity_attribute)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| logical_entity | [logical_entity](#logical_entity) | _"Logical Entity"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| implemented_by_design_columns | [design_column](#design_column) | _"Implemented by Design Columns"_ |
| implemented_by_database_columns | [database_column](#database_column) | _"Implemented by Database Columns"_ |
| primary_key | boolean | _"Primary Key"_ |
| logical_keys | [logical_key](#logical_key) | _"Logical Keys"_ |
| parent_logical_foreignKey | [logical_foreign_key](#logical_foreign_key) | _"Parent Logical Foreign Key"_ |
| child_logical_foreign_keys | [entity_attribute](#entity_attribute) | _"Child Logical Foreign Keys"_ |
| validation_rule | [logical_validation_rule](#logical_validation_rule) | _"Validation Rule"_ |
| validation_range | [logical_validation_range](#logical_validation_range) | _"Validation Range"_ |
| validation_list | [logical_validation_list](#logical_validation_list) | _"Validation List"_ |
| physical_name | string | _"Physical Name"_ |
| native_type | string | _"Native Type"_ |
| data_type | string | _"Data Type"_ |
| length | number | _"Length"_ |
| scale | number | _"Scale"_ |
| required | boolean | _"Required"_ |
| sequence | number | _"Sequence"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `entity_type`

- Displayed as: _"Entity Type"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/entity_type](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/entity_type)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **member_type** | [member_type](#member_type) | _"Member Type"_ |
| **member_type_for_query** | [member_type](#member_type) | _"Member Type"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| entity_type_label | string | _"Entity Type Label"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `exception_filter_operation`

- Displayed as: _"Exception Filter Operation"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/exception_filter_operation](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/exception_filter_operation)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **infoset** | [infoset](#infoset) | _"InfoSet"_ |
| **primary_input** | [infoset](#infoset) | _"Primary Input"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `extension_mapping`

- Displayed as: _"Extension Mapping"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/extension_mapping](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/extension_mapping)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| description | string | _"Description"_ |
| extension_mapping_document | [main_object](#main_object) | _"Extension Mapping Document"_ |
| sources | [information_asset](#information_asset) | _"Sources"_ |
| rule | string | _"Rule"_ |
| function | string | _"Function"_ |
| targets | [information_asset](#information_asset) | _"Targets"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `extension_mapping_document`

- Displayed as: _"Extension Mapping Document"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/extension_mapping_document](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/extension_mapping_document)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **parent_folder** | [folder](#folder) | _"Parent Folder"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| type | string | _"Type"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **parent_folder** | [folder](#folder) | _"Parent Folder"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| extension_mappings | [extension_mapping](#extension_mapping) | _"Extension Mappings"_ |
| file_name | string | _"File Name"_ |
| type | string | _"Type"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `field_analysis`

- Displayed as: _"Field Analysis"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/field_analysis](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/field_analysis)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| quality_score_percent | string | _"Quality Score"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| **table_analysis** | [main_object](#main_object) | _"Table Analysis"_ |
| project | string | _"Project"_ |
| data_file_field | [data_file_field](#data_file_field) | _"Data File Field"_ |
| require_unique_values | boolean | _"Require Unique Values"_ |
| include_null_values | boolean | _"Include Null Values"_ |
| include_constant_values | boolean | _"Include Constant Values"_ |
| domain | string | _"Domain"_ |
| number_of_complete_values | number | _"Number of Complete Values"_ |
| number_of_valid_values | number | _"Number of Valid Values"_ |
| number_of_empty_values | number | _"Number of Empty Values"_ |
| number_of_null_values | number | _"Number of Null Values"_ |
| number_of_distinct_values | number | _"Number of Distinct Values"_ |
| number_of_distinct_formats | number | _"Number of Distinct Formats"_ |
| number_of_zero_values | number | _"Number of Zero Values"_ |
| inferred_data_type | enum | _"Inferred Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| inferred_length | number | _"Inferred Length"_ |
| inferred_format | string | _"Inferred Format"_ |
| inferred_scale | number | _"Inferred Scale"_ |
| inferred_precision | number | _"Inferred Precision"_ |
| average_value | string | _"Average Value"_ |
| inferred_foreign_key | boolean | _"Inferred Foreign Key"_ |
| inferred_primary_key | boolean | _"Inferred Primary Key"_ |
| classification | [classification](#classification) | _"Detected Data Classifications"_ |
| selected_primary_key | boolean | _"User Selected Primary Key"_ |
| selected_natural_key | boolean | _"User Selected Natural Key"_ |
| selected_foreign_key | boolean | _"User Selected Foreign Key"_ |
| selected_foreign_key_references | [database_column](#database_column) | _"User Selected Foreign Key References"_ |
| selected_foreign_key_referenced | [database_column](#database_column) | _"User Selected Foreign Key Referenced"_ |
| validation_type | string | _"Validation Type"_ |
| validation_properties | string | _"Validation Properties"_ |
| quality_score_percent | string | _"Quality Score"_ |
| nb_records_tested | number | _"Number of Records Tested"_ |
| quality_score_problems | [quality_problem](#quality_problem) | _"Quality Score Problems"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `file`

- Displayed as: _"File"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/file](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/file)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `file_record_analysis`

- Displayed as: _"Record Analysis"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/file_record_analysis](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/file_record_analysis)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| quality_score_percent | string | _"Quality Score"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| project | string | _"Project"_ |
| data_file_record | [data_file_record](#data_file_record) | _"Data File Record"_ |
| review_date | datetime | _"Review Date"_ |
| number_of_fields | number | _"Number of Fields"_ |
| number_of_rows | number | _"Number of Rows"_ |
| primary_key_duplicates | number | _"Primary Key Duplicates"_ |
| foreign_key_violations | number | _"Foreign Key Violations"_ |
| selected_primary_key | [database_column](#database_column) | _"User Selected Primary Key"_ |
| selected_foreign_key | [database_column](#database_column) | _"User Selected Foreign Key"_ |
| selected_natural_key | [database_column](#database_column) | _"User Selected Natural Key"_ |
| quality_score_percent | string | _"Quality Score"_ |
| nb_record_tested | number | _"Number of Records Tested"_ |
| quality_score_problems | [quality_problem](#quality_problem) | _"Quality Score Problems"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `filter`

- Displayed as: _"Filter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/filter](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/filter)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| detects_data_class | [data_class](#data_class) | _"Data Classification"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| **instance** | [instance](#instance) | _"Instance"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| filter_expression | string | _"Filter Expression"_ |
| creator | string | _"Creator"_ |
| detects_data_class | [data_class](#data_class) | _"Data Classification"_ |
| tool_id | string | _"Tool ID"_ |
| sync_state | string | _"State"_ |
| url | string | _"URL"_ |
| infosets | [infoset](#infoset) | _"InfoSets"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `filter_operation`

- Displayed as: _"Filter Operation"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/filter_operation](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/filter_operation)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **infoset** | [infoset](#infoset) | _"InfoSet"_ |
| **filter** | [filter](#filter) | _"Filter"_ |
| **primary_input** | [infoset](#infoset) | _"Primary Input"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `filterconstraint`

- Displayed as: _"FilterConstraint"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/filterconstraint](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/filterconstraint)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| has_function_call | [functioncall](#functioncall) | _"Has Function Call"_ |
| usage | enum | _"Usage"_: `IN`, `OUT`, `INOUT`, `LINK` |
| filter_expression | string | _"Filter Expression"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| **of_link** | [main_object](#main_object) | _"Of Link"_ |
| has_function_call | [functioncall](#functioncall) | _"Has Function Call"_ |
| uses_flow_variable | [data_item](#data_item) | _"Uses Flow Variable"_ |
| usage | enum | _"Usage"_: `IN`, `OUT`, `INOUT`, `LINK` |
| filter_expression | string | _"Filter Expression"_ |


## `folder`

- Displayed as: _"Folder"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/folder](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/folder)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| description | string | _"Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| description | string | _"Description"_ |
| **parent_folder** | [folder](#folder) | _"Parent Folder"_ |
| contains_folders | [folder](#folder) | _"Contains Folders"_ |
| contains_mapping_documents | [main_object](#main_object) | _"Contains Mapping Documents"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `foreign_key`

- Displayed as: _"Foreign Key"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/foreign_key](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/foreign_key)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| included_database_columns | [data_field](#data_field) | _"Included Database Columns"_ |
| database_table | [datagroup](#datagroup) | _"Database Table"_ |
| sorting | enum | _"Sorting"_: `ASCENDING`, `DESCENDING`, `NONE` |


## `foreign_key_definition`

- Displayed as: _"Foreign Key Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/foreign_key_definition](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/foreign_key_definition)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| column | string | _"Column"_ |
| **table_definition** | [table_definition](#table_definition) | _"Table Definition"_ |
| references_tables | string | _"References Tables"_ |
| references_columns | string | _"References Columns"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `function`

- Displayed as: _"Function"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/function](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/function)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| module_name | string | _"Module Name"_ |
| module_path | string | _"Module Path"_ |
| is_inline | boolean | _"Is Inline"_ |
| has_function_call | [functioncall](#functioncall) | _"Has Function Call"_ |
| returns_parameter_def | [parameter](#parameter) | _"Returns Parameter Def"_ |
| platform_type | string | _"Platform Type"_ |
| external_name | string | _"External Name"_ |
| language | string | _"Language"_ |
| executed_by_function_call | [functioncall](#functioncall) | _"Executed By Function Call"_ |
| has_parameter_def | [parameter](#parameter) | _"Has Parameter Def"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| module_name | string | _"Module Name"_ |
| module_path | string | _"Module Path"_ |
| is_inline | boolean | _"Is Inline"_ |
| source_code | string | _"Source Code"_ |
| vendor | string | _"Vendor"_ |
| has_function_call | [functioncall](#functioncall) | _"Has Function Call"_ |
| returns_parameter_def | [parameter](#parameter) | _"Returns Parameter Def"_ |
| platform_type | string | _"Platform Type"_ |
| external_name | string | _"External Name"_ |
| language | string | _"Language"_ |
| version | string | _"Version"_ |
| executed_by_function_call | [functioncall](#functioncall) | _"Executed By Function Call"_ |
| has_parameter_def | [parameter](#parameter) | _"Has Parameter Def"_ |
| author | string | _"Author"_ |


## `function_call`

- Displayed as: _"Function Call"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/function_call](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/function_call)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| function_name | string | _"Function Name"_ |
| for_transforms | boolean | _"For Transforms"_ |
| stage_trigger | boolean | _"Stage Trigger"_ |
| executes_function | [function](#function) | _"Executes Function"_ |
| used_in_function | [function](#function) | _"Used In Function"_ |
| used_in_filter_constraint | [filterconstraint](#filterconstraint) | _"Used In Filter Constraint"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| function_name | string | _"Function Name"_ |
| for_transforms | boolean | _"For Transforms"_ |
| stage_trigger | boolean | _"Stage Trigger"_ |
| call_context | enum | _"Call Context"_: `BEFORE`, `AFTER`, `DEFAULT` |
| executes_function | [function](#function) | _"Executes Function"_ |
| used_in_function | [function](#function) | _"Used In Function"_ |
| used_in_filter_constraint | [filterconstraint](#filterconstraint) | _"Used In Filter Constraint"_ |


## `functioncall`

- Displayed as: _"FunctionCall"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/functioncall](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/functioncall)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| executes_function | [function](#function) | _"Executes Function"_ |
| used_in_function | [function](#function) | _"Used In Function"_ |
| used_in_filter_constraint | [filterconstraint](#filterconstraint) | _"Used In Filter Constraint"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| call_context | enum | _"Call Context"_: `BEFORE`, `AFTER`, `DEFAULT` |
| executes_function | [function](#function) | _"Executes Function"_ |
| used_in_function | [function](#function) | _"Used In Function"_ |
| used_in_filter_constraint | [filterconstraint](#filterconstraint) | _"Used In Filter Constraint"_ |


## `group`

- Displayed as: _"Group"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/group](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/group)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| group_name | string | _"Group Name"_ |
| type | string | _"Type"_ |
| email_address | string | _"Email Address"_ |
| web_address | string | _"Web Address"_ |
| organization | string | _"Organization"_ |
| location | string | _"Location"_ |
| principal_id | string | _"Principal ID"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `host`

- Displayed as: _"Host"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/host](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/host)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| databases | [database](#database) | _"Databases"_ |
| data_files | [data_file](#data_file) | _"Data Files"_ |
| idoc_types | [idoc_type](#idoc_type) | _"IDoc Types"_ |
| transformation_projects | [transformation_project](#transformation_project) | _"Transformation Projects"_ |
| data_connections | [connector](#connector) | _"Data Connections"_ |
| amazon_s3_buckets | [amazon_s3_bucket](#amazon_s3_bucket) | _"Amazon S3 Buckets"_ |
| data_file_folders | [data_file_folder](#data_file_folder) | _"Data File Folders"_ |
| location | string | _"Location"_ |
| network_node | string | _"Network Node"_ |
| imported_from | string | _"Imported From"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `host_(engine)`

- Displayed as: _"Host (Engine)"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/host_(engine)](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/host_(engine))

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| transformation_projects | [transformation_project](#transformation_project) | _"Transformation Projects"_ |
| data_connections | [connector](#connector) | _"Data Connectors"_ |
| location | string | _"Location"_ |
| network_node | string | _"Network Node"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `idoc_field`

- Displayed as: _"IDoc Field"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/idoc_field](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/idoc_field)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| idoc_segment_type | [idoc_segment_type](#idoc_segment_type) | _"IDoc Segment Type"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| odbc_type | enum | _"ODBC Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| data_type | enum | _"Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| type | string | _"Native Type"_ |
| idoc_type | [idoc_type](#idoc_type) | _"IDoc Type"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| used_by_analytics_objects | [analytics_object](#analytics_object) | _"Used By Data Science"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `idoc_segment_type`

- Displayed as: _"IDoc Segment Type"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/idoc_segment_type](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/idoc_segment_type)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| idoc_segment_type | [main_object](#main_object) | _"IDoc Segment Type"_ |
| idoc_type | [idoc_type](#idoc_type) | _"IDoc Type"_ |
| of_idoc_segment_type | [data_item_definition](#data_item_definition) | _"IDoc Segment Type"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| segment_definition | string | _"Segment Definition"_ |
| data_type | enum | _"Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| of_idoc_type | [idoc_type](#idoc_type) | _"IDoc Type"_ |
| level | number | _"Level"_ |
| min_/_max | string | _"Min / Max"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| used_by_analytics_objects | [analytics_object](#analytics_object) | _"Used By Data Science"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `idoc_type`

- Displayed as: _"IDoc Type"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/idoc_type](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/idoc_type)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| host | [host](#host) | _"Host"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| name_qualifier | string | _"Name Qualifier"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `in_parameter`

- Displayed as: _"In Parameter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/in_parameter](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/in_parameter)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| stored_procedure_definition | [stored_procedure_definition](#stored_procedure_definition) | _"Stored Procedure Definition"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `index_member`

- Displayed as: _"Index Member"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/index_member](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/index_member)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| uses_data_field | [data_field](#data_field) | _"Uses Data Field"_ |
| **of_index** | [database_index](#database_index) | _"Of Index"_ |
| sequence | number | _"Sequence"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| uses_data_field | [data_field](#data_field) | _"Uses Data Field"_ |
| **of_index** | [database_index](#database_index) | _"Of Index"_ |
| sequence | number | _"Sequence"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `inferred_foreign_key`

- Displayed as: _"Inferred Foreign Key"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inferred_foreign_key](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inferred_foreign_key)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **table_analysis** | [main_object](#main_object) | _"Table Analysis"_ |
| total_records | number | _"Total Records"_ |
| uses_database_fields | [database_column](#database_column) | _"Uses Database Fields"_ |
| references_inferred_keys | [inferred_key](#inferred_key) | _"References Inferred Keys"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `inferred_key`

- Displayed as: _"Inferred Key"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inferred_key](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inferred_key)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **table_analysis** | [main_object](#main_object) | _"Table Analysis"_ |
| total_records | number | _"Total Records"_ |
| primary_key | boolean | _"Primary Key"_ |
| inferred_database_fields | [database_column](#database_column) | _"Inferred Database Fields"_ |
| referenced_by_inferred_foreign_keys | [inferred_foreign_key](#inferred_foreign_key) | _"Referenced by Inferred Foreign Keys"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_asset`

- Displayed as: _"Information Asset"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_asset](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_asset)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_governance_policy`

- Displayed as: _"Information Governance Policy"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_governance_policy](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_governance_policy)

#### Properties valid for creation:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| parent_policy | [information_governance_policy](#information_governance_policy) | _"Parent Policy"_ |
| short_description | string | _"Short Description"_ |

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| parent_policy | [information_governance_policy](#information_governance_policy) | _"Parent Policy"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| language | enum | _"Language"_:  |
| subpolicies | [information_governance_policy](#information_governance_policy) | _"Subpolicies"_ |
| information_governance_rules | [information_governance_rule](#information_governance_rule) | _"Information Governance Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| parent_policy | [information_governance_policy](#information_governance_policy) | _"Parent Policy"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| language | enum | _"Language"_:  |
| subpolicies | [information_governance_policy](#information_governance_policy) | _"Subpolicies"_ |
| information_governance_rules | [information_governance_rule](#information_governance_rule) | _"Information Governance Rules"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| workflow_current_state | string | _"Workflow Current State"_ |
| workflow_stored_state | enum | _"Workflow Stored State"_: `DRAFT`, `WAITING_APPROVAL`, `APPROVED` |
| glossary_type | enum | _"Glossary Type"_: `PUBLISHED`, `DRAFT` |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_governance_rule`

- Displayed as: _"Information Governance Rule"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_governance_rule](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_governance_rule)

#### Properties valid for creation:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| referencing_policies | [information_governance_policy](#information_governance_policy) | _"Referencing Policies"_ |
| short_description | string | _"Short Description"_ |

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| referencing_policies | [information_governance_policy](#information_governance_policy) | _"Referencing Policies"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| language | enum | _"Language"_:  |
| related_rules | [information_governance_rule](#information_governance_rule) | _"Related Rules"_ |
| implemented_by_assets | [information_asset](#information_asset) | _"Implemented by Assets"_ |
| governs_assets | [information_asset](#information_asset) | _"Governs Assets"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| referencing_policies | [information_governance_policy](#information_governance_policy) | _"Referencing Policies"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| language | enum | _"Language"_:  |
| related_rules | [information_governance_rule](#information_governance_rule) | _"Related Rules"_ |
| implemented_by_assets | [information_asset](#information_asset) | _"Implemented by Assets"_ |
| governs_assets | [information_asset](#information_asset) | _"Governs Assets"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| workflow_current_state | string | _"Workflow Current State"_ |
| workflow_stored_state | enum | _"Workflow Stored State"_: `DRAFT`, `WAITING_APPROVAL`, `APPROVED` |
| glossary_type | enum | _"Glossary Type"_: `PUBLISHED`, `DRAFT` |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_server_report`

- Displayed as: _"Information Server Report"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| creator | string | _"Creator"_ |
| product | string | _"Product"_ |
| parameters | [information_server_report_parameters](#information_server_report_parameters) | _"Parameters"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_server_report_(analysis_project)`

- Displayed as: _"Information Server Report (Analysis Project)"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_(analysis_project)](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_(analysis_project))

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| creator | string | _"Creator"_ |
| product | string | _"Product"_ |
| host | string | _"Host"_ |
| database | string | _"Database"_ |
| schema | string | _"Schema"_ |
| table | string | _"Table"_ |
| analysis_project | string | _"Analysis Project"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_server_report_(database)`

- Displayed as: _"Information Server Report (Database)"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_(database)](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_(database))

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| creator | string | _"Creator"_ |
| product | string | _"Product"_ |
| data_source | [main_object](#main_object) | _"Data Source"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_server_report_(job)`

- Displayed as: _"Information Server Report (Job)"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_(job)](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_(job))

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| creator | string | _"Creator"_ |
| product | string | _"Product"_ |
| host_(engine) | string | _"Host (Engine)"_ |
| transformation_project | string | _"Transformation Project"_ |
| job | string | _"Job"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_server_report_(mapping_project)`

- Displayed as: _"Information Server Report (Mapping Project)"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_(mapping_project)](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_(mapping_project))

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| creator | string | _"Creator"_ |
| product | string | _"Product"_ |
| mapping_project | [mapping_project](#mapping_project) | _"Mapping Project"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_server_report_(mapping_specification)`

- Displayed as: _"Information Server Report (Mapping Specification)"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_(mapping_specification)](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_(mapping_specification))

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| creator | string | _"Creator"_ |
| product | string | _"Product"_ |
| report_on_object | [main_object](#main_object) | _"Report On Object"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_server_report_(steward)`

- Displayed as: _"Information Server Report (Steward)"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_(steward)](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_(steward))

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| creator | string | _"Creator"_ |
| product | string | _"Product"_ |
| data_steward | string | _"Data Steward"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_server_report_param_(job)`

- Displayed as: _"Information Server Report (Job)"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_param_(job)](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_param_(job))

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| creator | string | _"Creator"_ |
| product | string | _"Product"_ |
| job | string | _"Job"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_server_report_parameters`

- Displayed as: _"Information Server Report Parameters"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_parameters](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_server_report_parameters)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| value | string | _"Value"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_services_application`

- Displayed as: _"Information Services Application"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_services_application](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_services_application)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| information_services_project | [information_services_project](#information_services_project) | _"Information Services Project"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_services_argument`

- Displayed as: _"Information Services Argument"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_services_argument](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_services_argument)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| information_services_operation | [information_services_operation](#information_services_operation) | _"Information Services Operation"_ |
| argument_name | string | _"Argument Name"_ |
| argument_type | string | _"Argument Type"_ |
| reference_type | enum | _"Reference Type"_: `BIGDECIMAL`, `BIGINTEGER`, `BOOLEAN`, `BYTE`, `BYTEARRAY`, `DATE`, `DOUBLE`, `FLOAT`, `INT`, `STRING`, `TIME`, `TIMESTAMP`, `ENCRYPTED`, `XML` |
| default_value | string | _"Default Value"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_services_operation`

- Displayed as: _"Information Services Operation"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_services_operation](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_services_operation)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| information_services_service | [information_services_service](#information_services_service) | _"Information Services Service"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_services_project`

- Displayed as: _"Information Services Project"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_services_project](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_services_project)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| deployment_status | boolean | _"Deployment Status"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `information_services_service`

- Displayed as: _"Information Services Service"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_services_service](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/information_services_service)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| information_services_application | [information_services_application](#information_services_application) | _"Information Services Application"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `infoset`

- Displayed as: _"InfoSet"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/infoset](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/infoset)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| **instance** | [instance](#instance) | _"Instance"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| sync_type | enum | _"Include For Governance"_: `Regular`, `InferredPartial`, `InferredFull` |
| type | enum | _"Type"_: `User`, `System` |
| composition | enum | _"Composition"_: `MixedLevel`, `TopLevel` |
| object_count | number | _"Number of Objects"_ |
| size | number | _"Size (Bytes)"_ |
| creator | string | _"Creator"_ |
| created | datetime | _"Created"_ |
| applied_data_classes | [classification_contribution](#classification_contribution) | _"Data Classifications"_ |
| tool_id | string | _"Tool ID"_ |
| sync_state | string | _"State"_ |
| url | string | _"URL"_ |
| contributing_volumes | [volume_contribution](#volume_contribution) | _"Volumes"_ |
| created_with | [infoset_operation](#infoset_operation) | _"Originating Operation"_ |
| contributing_operations | [infoset_operation](#infoset_operation) | _"Applied Operations"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `infoset_operation`

- Displayed as: _"InfoSet Operation"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/infoset_operation](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/infoset_operation)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **infoset** | [infoset](#infoset) | _"InfoSet"_ |
| **primary_input** | [infoset](#infoset) | _"Primary Input"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `inout_parameter`

- Displayed as: _"InOut Parameter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inout_parameter](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inout_parameter)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| stored_procedure_definition | [stored_procedure_definition](#stored_procedure_definition) | _"Stored Procedure Definition"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `input_parameter`

- Displayed as: _"Input Parameter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/input_parameter](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/input_parameter)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| method | [method](#method) | _"Method"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `inputpin`

- Displayed as: _"InputPin"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inputpin](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inputpin)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **of_job_component** | [main_object](#main_object) | _"Of Job Component"_ |
| **is_target_of_link** | [main_object](#main_object) | _"Is Target Of Link"_ |
| sequence | number | _"Sequence"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **of_job_component** | [main_object](#main_object) | _"Of Job Component"_ |
| **is_target_of_link** | [main_object](#main_object) | _"Is Target Of Link"_ |
| sequence | number | _"Sequence"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `instance`

- Displayed as: _"Instance"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/instance](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/instance)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| primary_contact | string | _"Primary Contact"_ |
| secondary_contact | string | _"Secondary Contact"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| primary_contact | string | _"Primary Contact"_ |
| secondary_contact | string | _"Secondary Contact"_ |
| tool_id | string | _"Tool ID"_ |
| sync_state | string | _"State"_ |
| url | string | _"URL"_ |
| infosets | [infoset](#infoset) | _"Infosets"_ |
| volumes | [volume](#volume) | _"Volumes"_ |
| filters | [filter](#filter) | _"Filters"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `inv_data_rule`

- Displayed as: _"Data Rule"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inv_data_rule](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inv_data_rule)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_&_long_description | string | _"Short & Long Description"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| project | string | _"Project"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| steward | [ascl_steward](#ascl_steward) | _"Steward"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| data_rule_definitions | [inv_data_rule_definition](#inv_data_rule_definition) | _"Data Rule Definitions"_ |
| expression | string | _"Expression"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `inv_data_rule_definition`

- Displayed as: _"Data Rule Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inv_data_rule_definition](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inv_data_rule_definition)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_&_long_description | string | _"Short & Long Description"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| project | string | _"Project"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| contact | [associativeobject](#associativeobject) | _"Contact"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| data_rule_set_defintions | [inv_data_rule_set_definition](#inv_data_rule_set_definition) | _"Data Rule Set Defintions"_ |
| data_rules | [main_object](#main_object) | _"Data Rules"_ |
| published | boolean | _"Published"_ |
| expression | string | _"Expression"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `inv_data_rule_set`

- Displayed as: _"Data Rule Set"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inv_data_rule_set](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inv_data_rule_set)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_&_long_description | string | _"Short & Long Description"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| project | string | _"Project"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| steward | [ascl_steward](#ascl_steward) | _"Steward"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| data_rule_set_definitions | [inv_data_rule_set_definition](#inv_data_rule_set_definition) | _"Data Rule Set Definitions"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `inv_data_rule_set_definition`

- Displayed as: _"Data Rule Set Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inv_data_rule_set_definition](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/inv_data_rule_set_definition)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_&_long_description | string | _"Short & Long Description"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| project | string | _"Project"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| contact | [steward](#steward) | _"Contact"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| data_rule_definitions | [main_object](#main_object) | _"Data Rule Definitions"_ |
| data_rule_sets | [main_object](#main_object) | _"Data Rule Sets"_ |
| published | boolean | _"Published"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `job`

- Displayed as: _"Job"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| host_system | [host](#host) | _"Host System"_ |
| has_job_def | [jobdef](#jobdef) | _"Has Job Def"_ |
| release_status | string | _"Release Status"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| host_system | [host](#host) | _"Host System"_ |
| has_job_def | [jobdef](#jobdef) | _"Has Job Def"_ |
| release_status | string | _"Release Status"_ |


## `job_constraint`

- Displayed as: _"Job Constraint"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_constraint](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_constraint)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| **of_link** | [main_object](#main_object) | _"Link"_ |
| expression | string | _"Expression"_ |
| uses_flow_variable | [data_item](#data_item) | _"Stage Columns"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `job_fail_event`

- Displayed as: _"Job Fail Event"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_fail_event](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_fail_event)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **job_run_activity** | [information_asset](#information_asset) | _"Job Run Activity"_ |
| time | datetime | _"Time"_ |
| message | string | _"Message"_ |
| row_count | number | _"Row Count"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `job_input_pin`

- Displayed as: _"Job Input Pin"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_input_pin](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_input_pin)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| condition_not_met | string | _"Condition Not Met"_ |
| partner | string | _"Partner"_ |
| has_ds_meta_bag | [dsmetabag](#dsmetabag) | _"Has DS Meta Bag"_ |
| pin_type | string | _"Pin Type"_ |
| has_dsmf_column_info | [dsmfcolumninfo](#dsmfcolumninfo) | _"Has DSMF Column Info"_ |
| lookup_fail | string | _"Lookup Fail"_ |
| internal_id | string | _"Internal ID"_ |
| transaction_size | number | _"Transaction Size"_ |
| link_type | number | _"Link Type"_ |
| txn_behaviour | number | _"TXN Behaviour"_ |
| enable_tx_group | number | _"Enable Tx Group"_ |
| **of_job_component** | [main_object](#main_object) | _"Of Job Component"_ |
| **is_target_of_link** | [main_object](#main_object) | _"Is Target Of Link"_ |
| sequence | number | _"Sequence"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| condition_not_met | string | _"Condition Not Met"_ |
| partner | string | _"Partner"_ |
| a_xmeta_locking_root | string | _"A XMeta Locking Root"_ |
| has_ds_meta_bag | [dsmetabag](#dsmetabag) | _"Has DS Meta Bag"_ |
| pin_type | string | _"Pin Type"_ |
| has_dsmf_column_info | [dsmfcolumninfo](#dsmfcolumninfo) | _"Has DSMF Column Info"_ |
| lookup_fail | string | _"Lookup Fail"_ |
| internal_id | string | _"Internal ID"_ |
| transaction_size | number | _"Transaction Size"_ |
| link_type | number | _"Link Type"_ |
| txn_behaviour | number | _"TXN Behaviour"_ |
| enable_tx_group | number | _"Enable Tx Group"_ |
| **of_job_component** | [main_object](#main_object) | _"Of Job Component"_ |
| **is_target_of_link** | [main_object](#main_object) | _"Is Target Of Link"_ |
| sequence | number | _"Sequence"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `job_output_pin`

- Displayed as: _"Job Output Pin"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_output_pin](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_output_pin)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| left_text_pos | number | _"Left Text Pos"_ |
| partner | string | _"Partner"_ |
| a_xmeta_locking_root | string | _"A XMeta Locking Root"_ |
| has_ds_meta_bag | [dsmetabag](#dsmetabag) | _"Has DS Meta Bag"_ |
| pin_type | string | _"Pin Type"_ |
| top_text_pos | number | _"Top Text Pos"_ |
| internal_id | string | _"Internal ID"_ |
| has_ds_argument_map | [dsargumentmap](#dsargumentmap) | _"Has DS Argument Map"_ |
| **of_job_component** | [main_object](#main_object) | _"Of Job Component"_ |
| **is_source_of_link** | [main_object](#main_object) | _"Is Source Of Link"_ |
| sequence | number | _"Sequence"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| left_text_pos | number | _"Left Text Pos"_ |
| partner | string | _"Partner"_ |
| a_xmeta_locking_root | string | _"A XMeta Locking Root"_ |
| has_ds_meta_bag | [dsmetabag](#dsmetabag) | _"Has DS Meta Bag"_ |
| pin_type | string | _"Pin Type"_ |
| top_text_pos | number | _"Top Text Pos"_ |
| internal_id | string | _"Internal ID"_ |
| has_ds_argument_map | [dsargumentmap](#dsargumentmap) | _"Has DS Argument Map"_ |
| **of_job_component** | [main_object](#main_object) | _"Of Job Component"_ |
| **is_source_of_link** | [main_object](#main_object) | _"Is Source Of Link"_ |
| sequence | number | _"Sequence"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `job_parameter`

- Displayed as: _"Job Parameter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_parameter](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_parameter)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| job_run | [job_run](#job_run) | _"Job Run"_ |
| value | string | _"Value"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `job_read_event`

- Displayed as: _"Job Read Event"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_read_event](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_read_event)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| reads_from | string | _"Reads From"_ |
| **job_run_activity** | [information_asset](#information_asset) | _"Job Run Activity"_ |
| row_count | number | _"Rows Processed"_ |
| time | datetime | _"Time"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `job_run`

- Displayed as: _"Job Run"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_run](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_run)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| translated_summary | string | _"Name"_ |
| wave_number | string | _"Wave Number"_ |
| omd_file_name | string | _"OMD File Name"_ |
| translated_status_code | string | _"Status"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| translated_summary | string | _"Name"_ |
| job | [dsjob](#dsjob) | _"Job"_ |
| invocation_id | string | _"Invocation ID"_ |
| wave_number | string | _"Wave Number"_ |
| omd_file_name | string | _"OMD File Name"_ |
| starting_date | datetime | _"Starting Date"_ |
| ending_date | datetime | _"Ending Date"_ |
| translated_status_code | string | _"Status"_ |
| parameters | [job_parameter](#job_parameter) | _"Parameters"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `job_run_activity`

- Displayed as: _"Job Run Activity"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_run_activity](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_run_activity)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| **job_run** | [job_run](#job_run) | _"Job Run"_ |
| x_emits_read_event_display_name | string | _"X Emits Read Event Display Name"_ |
| x_emits_write_event_display_name | string | _"X Emits Write Event Display Name"_ |
| x_emits_fail_events_display_name | string | _"X Emits Fail Events Display Name"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `job_stage_parameters`

- Displayed as: _"Job Stage Parameters"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_stage_parameters](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_stage_parameters)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| transaction_groupable | number | _"Transaction Groupable"_ |
| **of_ds_parameter_def** | [parameter](#parameter) | _"Of DS Parameter Def"_ |
| a_xmeta_locking_root | string | _"A XMeta Locking Root"_ |
| locked | boolean | _"Locked"_ |
| hidden | boolean | _"Hidden"_ |
| for_output | number | _"For Output"_ |
| for_stage | number | _"For Stage"_ |
| quote_string | number | _"Quote String"_ |
| conv_type | number | _"Conv Type"_ |
| for_input | number | _"For Input"_ |
| display_style | number | _"Display Style"_ |
| view_data | number | _"View Data"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| transaction_groupable | number | _"Transaction Groupable"_ |
| **of_ds_parameter_def** | [parameter](#parameter) | _"Of DS Parameter Def"_ |
| a_xmeta_locking_root | string | _"A XMeta Locking Root"_ |
| locked | boolean | _"Locked"_ |
| hidden | boolean | _"Hidden"_ |
| for_output | number | _"For Output"_ |
| for_stage | number | _"For Stage"_ |
| quote_string | number | _"Quote String"_ |
| conv_type | number | _"Conv Type"_ |
| for_input | number | _"For Input"_ |
| display_style | number | _"Display Style"_ |
| view_data | number | _"View Data"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `job_stage_record`

- Displayed as: _"Job Stage Record"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_stage_record](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_stage_record)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| record_id_name | string | _"Record ID Name"_ |
| a_xmeta_locking_root | string | _"A XMeta Locking Root"_ |
| other_records_initialization_flag | number | _"Other Records Initialization Flag"_ |
| **of_ds_stage** | [stage](#stage) | _"Of DS Stage"_ |
| has_ds_flow_variable | [data_item](#data_item) | _"Has DS Flow Variable"_ |
| record_id_value | string | _"Record ID Value"_ |
| internal_id | string | _"Internal ID"_ |
| record_name | string | _"Record Name"_ |
| record_id_name_value_relation | string | _"Record ID Name Value Relation"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| record_id_name | string | _"Record ID Name"_ |
| a_xmeta_locking_root | string | _"A XMeta Locking Root"_ |
| other_records_initialization_flag | number | _"Other Records Initialization Flag"_ |
| **of_ds_stage** | [stage](#stage) | _"Of DS Stage"_ |
| has_ds_flow_variable | [data_item](#data_item) | _"Has DS Flow Variable"_ |
| record_id_value | string | _"Record ID Value"_ |
| internal_id | string | _"Internal ID"_ |
| record_name | string | _"Record Name"_ |
| record_id_name_value_relation | string | _"Record ID Name Value Relation"_ |


## `job_write_event`

- Displayed as: _"Job Write Event"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_write_event](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/job_write_event)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **job_run_activity** | [information_asset](#information_asset) | _"Emitted By Activity"_ |
| time | datetime | _"Time"_ |
| writes_to | string | _"Writes To"_ |
| row_count | number | _"Rows Processed"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `jobdef`

- Displayed as: _"JobDef"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/jobdef](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/jobdef)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Annotation"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Annotation"_ |
| alias | [main_object](#main_object) | _"Alias"_ |


## `keycomponent`

- Displayed as: _"KeyComponent"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/keycomponent](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/keycomponent)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| sorting_order | enum | _"Sorting Order"_: `ASCENDING`, `DESCENDING`, `NONE` |
| **of_key** | [main_object](#main_object) | _"Of Key"_ |
| **uses_data_field** | [data_field](#data_field) | _"Uses Data Field"_ |
| references_data_field | [data_field](#data_field) | _"References Data Field"_ |
| sequence | number | _"Sequence"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| sorting_order | enum | _"Sorting Order"_: `ASCENDING`, `DESCENDING`, `NONE` |
| **of_key** | [main_object](#main_object) | _"Of Key"_ |
| **uses_data_field** | [data_field](#data_field) | _"Uses Data Field"_ |
| references_data_field | [data_field](#data_field) | _"References Data Field"_ |
| sequence | number | _"Sequence"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `label`

- Displayed as: _"Label"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/label](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/label)

#### Properties valid for creation:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| description | string | _"Description"_ |

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| description | string | _"Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| description | string | _"Description"_ |
| labeled_assets | [information_asset](#information_asset) | _"Labeled Assets"_ |


## `lineage_container`

- Displayed as: _"Business Lineage Container"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/lineage_container](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/lineage_container)

#### Properties valid for creation:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| parent_container | [lineage_container](#lineage_container) | _"Parent Container"_ |
| short_description | string | _"Short Description"_ |

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| parent_container | [lineage_container](#lineage_container) | _"Parent Container"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| information_assets | [information_asset](#information_asset) | _"Contains Information Assets"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| parent_container | [lineage_container](#lineage_container) | _"Parent Container"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| sub_business_container | [category](#category) | _"Sub Business Container"_ |
| information_assets | [information_asset](#information_asset) | _"Contains Information Assets"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `lineage_report_template`

- Displayed as: _"Lineage Report Template"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/lineage_report_template](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/lineage_report_template)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| long_description | string | _"Description"_ |
| uses_lineage_filter | [lineagefilter](#lineagefilter) | _"Uses Lineage Filter"_ |
| asset_display_properties | [information_asset](#information_asset) | _"Asset Type Properties"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| long_description | string | _"Description"_ |
| uses_lineage_filter | [lineagefilter](#lineagefilter) | _"Uses Lineage Filter"_ |
| asset_display_properties | [information_asset](#information_asset) | _"Asset Type Properties"_ |


## `lineagefilter`

- Displayed as: _"LineageFilter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/lineagefilter](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/lineagefilter)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |


## `link`

- Displayed as: _"Link"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/link](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/link)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| job_or_container | [main_object](#main_object) | _"Job or Container"_ |
| stage_columns | [data_item](#data_item) | _"Stage Columns"_ |
| input_stages | [stage](#stage) | _"Input Stages"_ |
| output_stages | [stage](#stage) | _"Output Stages"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `linktype`

- Displayed as: _"LinkType"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/linktype](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/linktype)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| description | string | _"Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| description | string | _"Description"_ |


## `local_container`

- Displayed as: _"Local Container"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/local_container](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/local_container)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| job_or_container | [main_object](#main_object) | _"Job or Container"_ |
| stages | [stage](#stage) | _"Stages"_ |
| referenced_by_stages | [stage](#stage) | _"Referenced by Stages"_ |
| referenced_by_containers | [referenced_container](#referenced_container) | _"Referenced by Containers"_ |
| type | enum | _"Type"_: `SERVER`, `MAINFRAME`, `SEQUENCE`, `PARALLEL` |
| version | string | _"Version"_ |
| annotations | string | _"Annotations"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `logical_data_model`

- Displayed as: _"Logical Data Model"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_data_model](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_data_model)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| logical_data_model | [logical_data_model](#logical_data_model) | _"Logical Data Model"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| implemented_by_physical_data_models | [physical_data_model](#physical_data_model) | _"Implemented by Physical Data Models"_ |
| implemented_by_database_schemas | [database_schema](#database_schema) | _"Implemented by Database Schemas"_ |
| contains_logical_data_models | [logical_data_model](#logical_data_model) | _"Contains Logical Data Models"_ |
| subject_areas | [subject_area](#subject_area) | _"Subject Areas"_ |
| logical_entities | [logical_entity](#logical_entity) | _"Logical Entities"_ |
| logical_domains | [logical_domain](#logical_domain) | _"Logical Domains"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| author | string | _"Author"_ |
| methodology | string | _"Methodology"_ |
| version | string | _"Version"_ |
| design_tool | string | _"Design Tool"_ |
| native_id | string | _"Native ID"_ |
| package | string | _"Package"_ |
| namespace | string | _"Namespace"_ |
| imported_from | string | _"Imported From"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `logical_domain`

- Displayed as: _"Logical Domain"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_domain](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_domain)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| logical_data_model | [logical_data_model](#logical_data_model) | _"Logical Data Model"_ |
| entity_attributes | [entity_attribute](#entity_attribute) | _"Entity Attributes"_ |
| parent_domain | [logical_domain](#logical_domain) | _"Parent Domain"_ |
| child_domains | [logical_domain](#logical_domain) | _"Child Domains"_ |
| data_type | string | _"Data Type"_ |
| native_type | string | _"Native Type"_ |
| default_value | string | _"Default Value"_ |
| null_value | string | _"Null Value"_ |
| length | number | _"Length"_ |
| scale | number | _"Scale"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `logical_entity`

- Displayed as: _"Logical Entity"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_entity](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_entity)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| logical_data_model | [logical_data_model](#logical_data_model) | _"Logical Data Model"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| implemented_by_design_tables_or_views | [datagroup](#datagroup) | _"Implemented by Design Tables or Design Views"_ |
| implemented_by_database_tables_or_views | [datagroup](#datagroup) | _"Implemented by Database Tables or Views"_ |
| subject_areas | [subject_area](#subject_area) | _"Subject Areas"_ |
| entity_attributes | [entity_attribute](#entity_attribute) | _"Entity Attributes"_ |
| logical_keys | [logical_key](#logical_key) | _"Logical Keys"_ |
| logical_inversion_keys | [logical_inversion_key](#logical_inversion_key) | _"Logical Inversion Keys"_ |
| logical_foreign_keys | [logical_foreign_key](#logical_foreign_key) | _"Logical Foreign Keys"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| physical_name | string | _"Physical Name"_ |
| type | string | _"Type"_ |
| subtypes | [logical_entity](#logical_entity) | _"Subtypes"_ |
| supertypes | [logical_entity](#logical_entity) | _"Supertypes"_ |
| imported_from | string | _"Imported From"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `logical_foreign_key`

- Displayed as: _"Logical Foreign Key"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_foreign_key](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_foreign_key)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| logical_entity | [logical_entity](#logical_entity) | _"Logical Entity"_ |
| physical_name | string | _"Physical Name"_ |
| referenced_by_entity_attributes | [entity_attribute](#entity_attribute) | _"Parent Entity Attribute"_ |
| child_entity_attributes | [entity_attribute](#entity_attribute) | _"Child Entity Attributes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `logical_inversion_key`

- Displayed as: _"Logical Inversion Key"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_inversion_key](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_inversion_key)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **logical_entity** | [logical_entity](#logical_entity) | _"Logical Entity"_ |
| physical_name | string | _"Physical Name"_ |
| defined_on_entity_attributes | [entity_attribute](#entity_attribute) | _"Referenced by Entity Attributes"_ |
| expression | string | _"Expression"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `logical_key`

- Displayed as: _"Logical Key"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_key](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_key)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **logical_entity** | [logical_entity](#logical_entity) | _"Logical Entity"_ |
| physical_name | string | _"Physical Name"_ |
| primary_key | boolean | _"Primary Key"_ |
| defined_on_entity_attributes | [entity_attribute](#entity_attribute) | _"Defined on Entity Attributes"_ |
| referenced_by_logical_keys | [reference_key](#reference_key) | _"Child Entity Attributes"_ |
| expression | string | _"Expression"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `logical_validation_list`

- Displayed as: _"Logical Validation List"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_validation_list](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_validation_list)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| logical_data_model | [logical_data_model](#logical_data_model) | _"Logical Data Model"_ |
| used_by_entity_attributes | [entity_attribute](#entity_attribute) | _"Used by Entity Attributes"_ |
| values | string | _"Values"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `logical_validation_range`

- Displayed as: _"Logical Validation Range"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_validation_range](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_validation_range)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| logical_data_model | [logical_data_model](#logical_data_model) | _"Logical Data Model"_ |
| used_by_entity_attributes | [entity_attribute](#entity_attribute) | _"Used by Entity Attributes"_ |
| maximum_value | string | _"Maximum Value"_ |
| minimum_value | string | _"Minimum Value"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `logical_validation_rule`

- Displayed as: _"Logical Validation Rule"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_validation_rule](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_validation_rule)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| logical_data_model | [logical_data_model](#logical_data_model) | _"Logical Data Model"_ |
| used_by_entity_attributes | [entity_attribute](#entity_attribute) | _"Used by Entity Attributes"_ |
| rule_expression | string | _"Rule Expression"_ |
| rule_type | string | _"Rule Type"_ |
| top_element | string | _"Top Element"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `logical_variable`

- Displayed as: _"Logical Variable"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_variable](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/logical_variable)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_&_long_description | string | _"Short & Long Description"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| binding | [information_asset](#information_asset) | _"Binding"_ |
| data_type | enum | _"Data Type"_: `INTEGER`, `FLOAT`, `NUMBER`, `FIXED_STRING`, `VARIABLE_STRING`, `STRING`, `DATE`, `TIME`, `DATETIME`, `ANY` |
| **type** | string | _"Example"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `main_object`

- Displayed as: _"Main Object"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/main_object](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/main_object)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |


## `mapping`

- Displayed as: _"Mapping"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mapping](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mapping)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| mapping_specification | [main_object](#main_object) | _"Mapping Specification"_ |
| source_column_names | string | _"Source Column Names"_ |
| source_columns | [database_column](#database_column) | _"Source Columns"_ |
| source_terms | [term](#term) | _"Source Terms"_ |
| target_column_names | string | _"Target Column Names"_ |
| target_columns | [database_column](#database_column) | _"Target Columns"_ |
| target_terms | [term](#term) | _"Target Terms"_ |
| status | string | _"Status"_ |
| tags | string | _"Tags"_ |
| rule_description | string | _"Rule Description"_ |
| rule_expression | string | _"Rule Expression"_ |
| last_update_description | string | _"Last Update Description"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `mapping_component`

- Displayed as: _"Mapping Component"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mapping_component](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mapping_component)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| mapping_project | [mapping_project](#mapping_project) | _"Mapping Project"_ |
| shared_containers | [referenced_container](#referenced_container) | _"Shared Containers"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `mapping_filter`

- Displayed as: _"Mapping Filter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mapping_filter](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mapping_filter)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| rule_expression | string | _"Rule Expression"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `mapping_join`

- Displayed as: _"Mapping Join"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mapping_join](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mapping_join)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| primary_key_columns | [database_column](#database_column) | _"Primary Key Columns"_ |
| foreign_key_columns | [database_column](#database_column) | _"Foreign Key Columns"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `mapping_project`

- Displayed as: _"Mapping Project"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mapping_project](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mapping_project)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| mapping_specifications | [mapping_specification](#mapping_specification) | _"Mapping Specifications"_ |
| mapping_components | [mapping_component](#mapping_component) | _"Mapping Components"_ |
| generated_jobs | [dsjob](#dsjob) | _"Generated Jobs"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `mapping_specification`

- Displayed as: _"Mapping Specification"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mapping_specification](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mapping_specification)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| include_for_lineage | enum | _"Include for Lineage"_: `setToTrue`, `setToFalse` |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| mapping_project | [mapping_project](#mapping_project) | _"Mapping Project"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| mappings | [mapping](#mapping) | _"Mappings"_ |
| source_database_tables_or_views | [datagroup](#datagroup) | _"Source Database Tables or Views"_ |
| target_database_tables_or_views | [datagroup](#datagroup) | _"Target Database Tables or Views"_ |
| status | enum | _"Status"_: `PROCESSING_STARTED`, `REVIEW_COMPLETED`, `DEPLOYMENT_COMPLETED` |
| owner | [steward](#steward) | _"Owner"_ |
| include_for_lineage | enum | _"Include for Lineage"_: `setToTrue`, `setToFalse` |
| joins | [mapping_join](#mapping_join) | _"Joins"_ |
| filters | [mapping_filter](#mapping_filter) | _"Filters"_ |
| generated_jobs | [dsjob](#dsjob) | _"Generated Jobs"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `masking_rule`

- Displayed as: _"Masking Rule"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/masking_rule](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/masking_rule)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| rule_logic | string | _"Rule Logic"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| rule_logic | string | _"Rule Logic"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `match_specification`

- Displayed as: _"Match Specification"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/match_specification](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/match_specification)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| transformation_project | [transformation_project](#transformation_project) | _"Transformation Project"_ |
| folder | [dsfolder](#dsfolder) | _"Folder"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| used_by_stages | [stage](#stage) | _"Stages"_ |
| type | string | _"Type"_ |
| data_quality_specifications | [standardization_object](#standardization_object) | _"Data Quality Specifications"_ |
| dataFields | string | _"Data Fields"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `mdm_model`

- Displayed as: _"MDM Model"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mdm_model](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mdm_model)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_physical_objects | [physical_object](#physical_object) | _"Contains Physical Objects"_ |
| contains_member_types | [member_type](#member_type) | _"Contains Member Types"_ |
| contains_attributes_types | [attribute_type](#attribute_type) | _"Contains Attributes Types"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| version | string | _"Version"_ |
| namespace | string | _"Namespace"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `member_type`

- Displayed as: _"Member Type"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/member_type](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/member_type)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **mdm_model** | [mdm_model](#mdm_model) | _"MDM Model"_ |
| **mdm_model_for_query** | [mdm_model](#mdm_model) | _"MDM Model"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| **contains_attributes** | [attribute](#attribute) | _"Contains Attributes"_ |
| contains_composite_views | [composite_view](#composite_view) | _"Contains Composite Views"_ |
| **contains_entity_types** | [entity_type](#entity_type) | _"Contains Entity Types"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| member_type_label | string | _"Member Type Label"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `method`

- Displayed as: _"Method"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/method](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/method)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| object_type | [object_type](#object_type) | _"Object Type"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| input_parameters | [input_parameter](#input_parameter) | _"Input Parameters"_ |
| output_values | [output_value](#output_value) | _"Output Values"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `metric`

- Displayed as: _"Metric"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/metric](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/metric)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| project | string | _"Project"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| measure | string | _"Expression"_ |
| references_data_rules_or_data_rule_sets | [main_object](#main_object) | _"References Data Rules or Data Rule Sets"_ |
| benchmark | string | _"Benchmark"_ |
| execution_history | [data_rule_results](#data_rule_results) | _"Execution History"_ |
| data_policies | [main_object](#main_object) | _"Data Policies"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `model_eval_metric`

- Displayed as: _"Model Eval Metric"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/model_eval_metric](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/model_eval_metric)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **of_model** | [analytics_model](#analytics_model) | _"Of Model"_ |
| metric_type | string | _"Metric Type"_ |
| value | string | _"Value"_ |
| eval_date | datetime | _"Eval Date"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `model_input`

- Displayed as: _"Model Input"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/model_input](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/model_input)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `model_label`

- Displayed as: _"Model Label"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/model_label](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/model_label)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `mwb_database_alias`

- Displayed as: _"Database Alias"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mwb_database_alias](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/mwb_database_alias)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| type | string | _"Type"_ |
| database | [database](#database) | _"Database"_ |
| referenced_by_jobs | [dsjob](#dsjob) | _"Referenced by Jobs"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `navigationdescriptor`

- Displayed as: _"NavigationDescriptor"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/navigationdescriptor](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/navigationdescriptor)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **of_class_descriptor** | [classdescriptor](#classdescriptor) | _"Of Class Descriptor"_ |
| description | string | _"Description"_ |
| expression | string | _"Expression"_ |
| display_name | string | _"Display Name"_ |
| name | string | _"Name"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **of_class_descriptor** | [classdescriptor](#classdescriptor) | _"Of Class Descriptor"_ |
| description | string | _"Description"_ |
| expression | string | _"Expression"_ |
| display_name | string | _"Display Name"_ |
| name | string | _"Name"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `node_operation`

- Displayed as: _"Node Operation"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/node_operation](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/node_operation)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **infoset** | [infoset](#infoset) | _"InfoSet"_ |
| type | enum | _"Node Operation"_: `Expand`, `Collapse` |
| **primary_input** | [infoset](#infoset) | _"Primary Input"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `non_published_data_rule_definition`

- Displayed as: _"Data Rule Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/non_published_data_rule_definition](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/non_published_data_rule_definition)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| rule_logic | string | _"Expression"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| design_bindings | [database_column](#database_column) | _"Design Bindings"_ |
| data_rules | [data_rule](#data_rule) | _"Data Rules"_ |
| data_rule_set_definitions | [non_published_data_rule_set](#non_published_data_rule_set) | _"Data Rule Set Definitions"_ |
| project | string | _"Project"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| published | boolean | _"Published"_ |
| rule_logic | string | _"Expression"_ |
| contact | [steward](#steward) | _"Contacts"_ |
| data_policies | [main_object](#main_object) | _"Data Policies"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `non_published_data_rule_set`

- Displayed as: _"Data Rule Set Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/non_published_data_rule_set](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/non_published_data_rule_set)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| design_bindings | [database_column](#database_column) | _"Design Bindings"_ |
| data_rule_sets | [data_rule_set](#data_rule_set) | _"Data Rule Sets"_ |
| data_rule_definitions | [main_object](#main_object) | _"Data Rule Definitions"_ |
| project | string | _"Project"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| published | boolean | _"Published"_ |
| contact | [steward](#steward) | _"Contacts"_ |
| data_policies | [main_object](#main_object) | _"Data Policies"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `non_steward_user`

- Displayed as: _"User"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/non_steward_user](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/non_steward_user)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| full_name | string | _"Full Name"_ |
| job_title | string | _"Job Title"_ |
| email_address | string | _"Email Address"_ |
| office_phone_number | string | _"Office Phone Number"_ |
| mobile_phone_number | string | _"Mobile Phone Number"_ |
| principal_id | string | _"User Name"_ |
| given_name | string | _"Given Name"_ |
| surname | string | _"Surname"_ |
| courtesy_title | string | _"Courtesy Title"_ |
| organization | string | _"Organization"_ |
| location | string | _"Location"_ |
| business_address | string | _"Business Address"_ |
| home_phone_number | string | _"Home Phone Number"_ |
| fax_number | string | _"Fax Number"_ |
| pager_number | string | _"Pager Number"_ |
| instant_message_id | string | _"Instant Message ID"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `notebook`

- Displayed as: _"Notebook"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/notebook](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/notebook)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| **analytics_project** | [analytics_project](#analytics_project) | _"Data Science Project"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| input_training_notebook_inv | [analytics_model](#analytics_model) | _"Data Science Models"_ |
| model_input_training_column | [data_field](#data_field) | _"Data Assets"_ |
| system_equiv_id | string | _"System Equiv Id"_ |
| first_published_date | datetime | _"First Published Date"_ |
| package_name | string | _"Package Name"_ |
| logical_name | string | _"Logical Name"_ |
| url | string | _"URL"_ |
| environment | string | _"Environment"_ |
| tool | string | _"Tool"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `object_type`

- Displayed as: _"Object Type"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/object_type](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/object_type)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| application | [application](#application) | _"Application"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| methods | [method](#method) | _"Methods"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `olap_join`

- Displayed as: _"OLAP Join"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/olap_join](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/olap_join)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Join Name"_ |
| short_description | string | _"Short Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Join Name"_ |
| business_name | string | _"Business Name"_ |
| short_description | string | _"Short Description"_ |
| type | enum | _"Type"_: `INNER`, `FULL_OUTER`, `LEFT_OUTER`, `RIGHT_OUTER` |
| condition | string | _"Condition"_ |
| bi_model | [bi_model](#bi_model) | _"OLAP Model"_ |
| contains_references | [olapjoinref](#olapjoinref) | _"Contains References"_ |
| referenced_by_an_olap_cube | [bi_cube](#bi_cube) | _"Referenced by an OLAP Cube"_ |


## `olap_member_source`

- Displayed as: _"OLAP Member Source"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/olap_member_source](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/olap_member_source)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **olap_member** | [bi_collection_member](#bi_collection_member) | _"OLAP Member"_ |
| data_field | [data_field](#data_field) | _"Data Field"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **olap_member** | [bi_collection_member](#bi_collection_member) | _"OLAP Member"_ |
| data_field | [data_field](#data_field) | _"Data Field"_ |


## `olapassociation`

- Displayed as: _"OLAPAssociation"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/olapassociation](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/olapassociation)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| sequence | number | _"Sequence"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| sequence | number | _"Sequence"_ |
| business_name | string | _"Business Name"_ |


## `olaphierarchyassociation`

- Displayed as: _"OLAPHierarchyAssociation"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/olaphierarchyassociation](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/olaphierarchyassociation)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| **of_olap_hierarchy_member** | [bi_hierarchy_member](#bi_hierarchy_member) | _"Of OLAP Hierarchy Member"_ |
| **has_parent_olap_level** | [bi_level](#bi_level) | _"Has Parent OLAP Level"_ |
| **has_child_olap_level** | [bi_level](#bi_level) | _"Has Child OLAP Level"_ |
| sequence | number | _"Sequence"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| **of_olap_hierarchy_member** | [bi_hierarchy_member](#bi_hierarchy_member) | _"Of OLAP Hierarchy Member"_ |
| **has_parent_olap_level** | [bi_level](#bi_level) | _"Has Parent OLAP Level"_ |
| **has_child_olap_level** | [bi_level](#bi_level) | _"Has Child OLAP Level"_ |
| x_of_olap_level | [bi_level](#bi_level) | _"X Of OLAP Level"_ |
| sequence | number | _"Sequence"_ |
| business_name | string | _"Business Name"_ |


## `olapjoinref`

- Displayed as: _"OLAPJoinRef"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/olapjoinref](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/olapjoinref)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| joins_database_table | [datagroup](#datagroup) | _"Joins Database Table"_ |
| alias | [main_object](#main_object) | _"Alias"_ |
| cardinality | enum | _"Cardinality"_: `ONE_TO_ONE`, `ONE_TO_MANY`, `MANY_TO_ONE`, `MANY_TO_MANY` |
| sequence | number | _"Sequence"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| joins_olap_collection | [bi_collection](#bi_collection) | _"Joins OLAP Collection"_ |
| joins_database_table | [datagroup](#datagroup) | _"Joins Database Table"_ |
| alias | [main_object](#main_object) | _"Alias"_ |
| cardinality | enum | _"Cardinality"_: `ONE_TO_ONE`, `ONE_TO_MANY`, `MANY_TO_ONE`, `MANY_TO_MANY` |
| sequence | number | _"Sequence"_ |


## `olapmodelgroup`

- Displayed as: _"OLAPModelGroup"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/olapmodelgroup](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/olapmodelgroup)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| bi_model | [bi_model](#bi_model) | _"BI Model"_ |
| business_name | string | _"Business Name"_ |


## `olapobject`

- Displayed as: _"OLAPObject"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/olapobject](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/olapobject)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| business_name | string | _"Business Name"_ |


## `oslc_link`

- Displayed as: _"Link"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/oslc_link](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/oslc_link)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **url** | string | _"Url"_ |
| **link_type** | [linktype](#linktype) | _"Link Type"_ |
| description | string | _"Description"_ |
| of_main_object | [main_object](#main_object) | _"Of Main Object"_ |
| **of_provider_connection** | [information_asset](#information_asset) | _"Of Provider Connection"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **url** | string | _"Url"_ |
| **link_type** | [linktype](#linktype) | _"Link Type"_ |
| description | string | _"Description"_ |
| of_main_object | [main_object](#main_object) | _"Of Main Object"_ |
| **of_provider_connection** | [information_asset](#information_asset) | _"Of Provider Connection"_ |


## `out_parameter`

- Displayed as: _"Out Parameter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/out_parameter](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/out_parameter)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| stored_procedure | [stored_procedure_definition](#stored_procedure_definition) | _"Stored Procedure"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `output_value`

- Displayed as: _"Output Value"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/output_value](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/output_value)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| method | [method](#method) | _"Method"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `outputpin`

- Displayed as: _"OutputPin"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/outputpin](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/outputpin)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **of_job_component** | [main_object](#main_object) | _"Of Job Component"_ |
| **is_source_of_link** | [main_object](#main_object) | _"Is Source Of Link"_ |
| sequence | number | _"Sequence"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **of_job_component** | [main_object](#main_object) | _"Of Job Component"_ |
| **is_source_of_link** | [main_object](#main_object) | _"Is Source Of Link"_ |
| sequence | number | _"Sequence"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `parameter`

- Displayed as: _"Parameter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/parameter](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/parameter)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| is_return_of_function | [function](#function) | _"Is Return Of Function"_ |
| is_parameter_set | [parameterset](#parameterset) | _"Is Parameter Set"_ |
| defines_parameter_val | [parameterval](#parameterval) | _"Defines Parameter Val"_ |
| of_stored_procedure | [datagroup](#datagroup) | _"Of Stored Procedure"_ |
| usage | enum | _"Usage"_: `DEFAULT`, `IN`, `OUT`, `INOUT`, `RETURN` |
| connection_property | enum | _"Connection Property"_: `CONNECTIONSTRING`, `USERNAME`, `PASSWORD`, `PRIVATE` |
| is_connection_property | boolean | _"Is Connection Property"_ |
| of_function | [function](#function) | _"Of Function"_ |
| has_dimension | [array](#array) | _"Has Dimension"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| is_return_of_function | [function](#function) | _"Is Return Of Function"_ |
| of_container_def | [referenced_container](#referenced_container) | _"Of Container Def"_ |
| of_parameter_set | [parameterset](#parameterset) | _"Of Parameter Set"_ |
| is_parameter_set | [parameterset](#parameterset) | _"Is Parameter Set"_ |
| defines_parameter_val | [parameterval](#parameterval) | _"Defines Parameter Val"_ |
| of_stage_type | [stage_type](#stage_type) | _"Of Stage Type"_ |
| of_job_def | [jobdef](#jobdef) | _"Of Job Def"_ |
| of_stored_procedure | [datagroup](#datagroup) | _"Of Stored Procedure"_ |
| usage | enum | _"Usage"_: `DEFAULT`, `IN`, `OUT`, `INOUT`, `RETURN` |
| connection_property | enum | _"Connection Property"_: `CONNECTIONSTRING`, `USERNAME`, `PASSWORD`, `PRIVATE` |
| is_connection_property | boolean | _"Is Connection Property"_ |
| of_function | [function](#function) | _"Of Function"_ |
| data_item_definition | [data_item_definition](#data_item_definition) | _"Data Item Definition"_ |
| is_signed | boolean | _"Is Signed"_ |
| validated_by_data_values | [data_item_value](#data_item_value) | _"Validated By Data Values"_ |
| type | string | _"Native Type"_ |
| is_computed | boolean | _"Is Computed"_ |
| allows_empty_value | boolean | _"Allows Empty Value"_ |
| odbc_type | enum | _"ODBC Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| based_on | string | _"Based On "_ |
| position | number | _"Position"_ |
| allow_null_values | string | _"Null Value"_ |
| fraction | number | _"Scale"_ |
| allows_null_values | boolean | _"Allow Null Values"_ |
| calendar | string | _"Calendar"_ |
| display_size | number | _"Display Size"_ |
| minimum_length | number | _"Minimum Length"_ |
| item_kind | string | _"Item Kind"_ |
| has_dimension | [array](#array) | _"Has Dimension"_ |
| unique | boolean | _"Unique"_ |
| length | number | _"Maximum Length"_ |
| data_type | enum | _"Type Code"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| default_value | string | _"Default Value"_ |
| level | number | _"Level Number"_ |


## `parameter_set`

- Displayed as: _"Parameter Set"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/parameter_set](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/parameter_set)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| transformation_project | [transformation_project](#transformation_project) | _"Transformation Project"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| jobs | [jobdef](#jobdef) | _"Jobs"_ |
| parameters | [dsparameter_set](#dsparameter_set) | _"Parameters"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `parameter_set_definition`

- Displayed as: _"Parameter Set Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/parameter_set_definition](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/parameter_set_definition)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| context | [transformation_project](#transformation_project) | _"Context"_ |
| referenced_by_jobs | [jobdef](#jobdef) | _"Referenced by Jobs"_ |
| parameters | [dsparameter_set](#dsparameter_set) | _"Parameters"_ |
| type | enum | _"Type"_: `UNUSED`, `ENCRYPTED`, `PATHNAME`, `STRINGLIST`, `INPUTCOL`, `OUTPUTCOL`, `NCHAR`, `PARAMETERSET` |
| display_caption | string | _"Display Caption"_ |
| default_value | string | _"Default Value"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `parameterset`

- Displayed as: _"ParameterSet"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/parameterset](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/parameterset)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| has_parameter_def | [parameter](#parameter) | _"Has Parameter Def"_ |
| used_as_parameter_def | [parameter](#parameter) | _"Used As Parameter Def"_ |


## `parameterval`

- Displayed as: _"ParameterVal"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/parameterval](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/parameterval)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| has_function_call | [functioncall](#functioncall) | _"Has Function Call"_ |
| for_function_call | [functioncall](#functioncall) | _"For Function Call"_ |
| for_data_connection | [data_connection](#data_connection) | _"For Data Connection"_ |
| sequence | number | _"Sequence"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| parameter_name | string | _"Parameter Name"_ |
| value_expression | string | _"Value Expression"_ |
| binds_parameter_def | [parameter](#parameter) | _"Binds Parameter Def"_ |
| has_function_call | [functioncall](#functioncall) | _"Has Function Call"_ |
| for_function_call | [functioncall](#functioncall) | _"For Function Call"_ |
| for_job_object | [main_object](#main_object) | _"For Job Object"_ |
| usage | enum | _"Usage"_: `DEFAULT`, `IN`, `OUT`, `INOUT`, `RETURN` |
| for_data_connection | [data_connection](#data_connection) | _"For Data Connection"_ |
| sequence | number | _"Sequence"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `physical_data_model`

- Displayed as: _"Physical Data Model"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/physical_data_model](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/physical_data_model)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| physical_model | [physical_data_model](#physical_data_model) | _"Physical Model"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_physical_models | [physical_data_model](#physical_data_model) | _"Contains Physical Models"_ |
| implements_logical_data_models | [logical_data_model](#logical_data_model) | _"Implements Logical Data Models"_ |
| implemented_by_data_files | [main_object](#main_object) | _"Implemented By Data Files"_ |
| implemented_by_database_schemas | [database_schema](#database_schema) | _"Implemented by Database Schemas"_ |
| contains_design_tables | [design_table](#design_table) | _"Contains Design Tables"_ |
| contains_design_views | [design_view](#design_view) | _"Contains Design Views"_ |
| contains_design_stored_procedures | [design_stored_procedure](#design_stored_procedure) | _"Contains Design Stored Procedures"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| author | string | _"Author"_ |
| target_database | string | _"Target Database"_ |
| target_dbms | string | _"Target DBMS"_ |
| native_id | string | _"Native ID"_ |
| package | string | _"Package"_ |
| namespace | string | _"Namespace"_ |
| imported_from | string | _"Imported From"_ |
| physical_domains | [physical_domain](#physical_domain) | _"Physical Domains"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `physical_domain`

- Displayed as: _"Physical Domain"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/physical_domain](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/physical_domain)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_&_long_description | string | _"Short & Long Description"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| physical_data_model | [physical_data_model](#physical_data_model) | _"Physical Data Model"_ |
| used_by_data_items | [design_column](#design_column) | _"Used by Data Items"_ |
| data_type | enum | _"Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| odbc_type | enum | _"ODBC Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| length | number | _"Length"_ |
| fraction | number | _"Fraction"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `physical_object`

- Displayed as: _"Physical Object"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/physical_object](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/physical_object)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| context | [main_object](#main_object) | _"Context"_ |
| **mdm_model** | [mdm_model](#mdm_model) | _"MDM Model"_ |
| physical_object | [physical_object](#physical_object) | _"Physical Object"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_physical_objects | [physical_object](#physical_object) | _"Contains Physical Objects"_ |
| **contains_physical_object_attributes** | [physical_object_attribute](#physical_object_attribute) | _"Contains Physical Object Attributes"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| maps_database_tables_or_views | [datagroup](#datagroup) | _"Maps Database Tables or Views"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `physical_object_attribute`

- Displayed as: _"Physical Object Attribute"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/physical_object_attribute](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/physical_object_attribute)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **physical_object** | [physical_object](#physical_object) | _"Physical Object"_ |
| **physical_object_for_query** | [physical_object](#physical_object) | _"Physical Object"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| maps_database_fields | [database_column](#database_column) | _"Maps Database Fields"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `primarycategory`

- Displayed as: _"PrimaryCategory"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/primarycategory](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/primarycategory)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| color | string | _"Color"_ |
| icon | string | _"Icon"_ |
| **uses_business_category** | [main_object](#main_object) | _"Uses Business Category"_ |
| name | string | _"Name"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| color | string | _"Color"_ |
| icon | string | _"Icon"_ |
| **uses_business_category** | [main_object](#main_object) | _"Uses Business Category"_ |
| name | string | _"Name"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `propdescriptor`

- Displayed as: _"PropDescriptor"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/propdescriptor](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/propdescriptor)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| value_expression | string | _"Value Expression"_ |
| **of_class_descriptor** | [classdescriptor](#classdescriptor) | _"Of Class Descriptor"_ |
| description | string | _"Description"_ |
| is_attribute | boolean | _"Is Attribute"_ |
| value_type | string | _"Value Type"_ |
| attribute_name | string | _"Attribute Name"_ |
| display_name | string | _"Display Name"_ |
| name | string | _"Name"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| value_expression | string | _"Value Expression"_ |
| **of_class_descriptor** | [classdescriptor](#classdescriptor) | _"Of Class Descriptor"_ |
| description | string | _"Description"_ |
| is_attribute | boolean | _"Is Attribute"_ |
| value_type | string | _"Value Type"_ |
| attribute_name | string | _"Attribute Name"_ |
| display_name | string | _"Display Name"_ |
| name | string | _"Name"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `providerpropertyinfo`

- Displayed as: _"ProviderPropertyInfo"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/providerpropertyinfo](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/providerpropertyinfo)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| property_data_type | string | _"Property Data Type"_ |
| has_provider_property_info_extended | [providerpropertyinfoextended](#providerpropertyinfoextended) | _"Has Provider Property Info Extended"_ |
| is_searchable | boolean | _"Is Searchable"_ |
| complex_attribute_source | boolean | _"Complex Attribute Source"_ |
| description | string | _"Description"_ |
| is_complex_attribute | boolean | _"Is Complex Attribute"_ |
| name | string | _"Name"_ |
| is_required | boolean | _"Is Required"_ |
| display_name | string | _"Display Name"_ |
| has_directory_provider_property | [directoryproviderproperty](#directoryproviderproperty) | _"Has Directory Provider Property"_ |
| is_editable | boolean | _"Is Editable"_ |
| default_value | string | _"Default Value"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| property_data_type | string | _"Property Data Type"_ |
| has_provider_property_info_extended | [providerpropertyinfoextended](#providerpropertyinfoextended) | _"Has Provider Property Info Extended"_ |
| is_searchable | boolean | _"Is Searchable"_ |
| complex_attribute_source | boolean | _"Complex Attribute Source"_ |
| description | string | _"Description"_ |
| is_complex_attribute | boolean | _"Is Complex Attribute"_ |
| name | string | _"Name"_ |
| is_required | boolean | _"Is Required"_ |
| display_name | string | _"Display Name"_ |
| has_directory_provider_property | [directoryproviderproperty](#directoryproviderproperty) | _"Has Directory Provider Property"_ |
| is_editable | boolean | _"Is Editable"_ |
| default_value | string | _"Default Value"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `providerpropertyinfoextended`

- Displayed as: _"ProviderPropertyInfoExtended"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/providerpropertyinfoextended](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/providerpropertyinfoextended)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| str_value | string | _"Str Value"_ |
| **of_provider_property_info** | [providerpropertyinfo](#providerpropertyinfo) | _"Of Provider Property Info"_ |
| name | string | _"Name"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| str_value | string | _"Str Value"_ |
| **of_provider_property_info** | [providerpropertyinfo](#providerpropertyinfo) | _"Of Provider Property Info"_ |
| name | string | _"Name"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `providerpropertytype`

- Displayed as: _"ProviderPropertyType"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/providerpropertytype](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/providerpropertytype)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| description | string | _"Description"_ |
| name | string | _"Name"_ |
| property_type | enum | _"Property Type"_: `USER`, `USER_GROUP`, `ROLE`, `CONNECTION` |
| has_directory_provider_property | [directoryproviderproperty](#directoryproviderproperty) | _"Has Directory Provider Property"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| description | string | _"Description"_ |
| name | string | _"Name"_ |
| property_type | enum | _"Property Type"_: `USER`, `USER_GROUP`, `ROLE`, `CONNECTION` |
| has_directory_provider_property | [directoryproviderproperty](#directoryproviderproperty) | _"Has Directory Provider Property"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `published_data_rule_definition`

- Displayed as: _"Data Rule Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/published_data_rule_definition](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/published_data_rule_definition)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| rule_logic | string | _"Expression"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| copied_into_data_rule_stages | [stage](#stage) | _"Copied Into Data Rule Stages"_ |
| data_rule_set_definitions | [non_published_data_rule_set](#non_published_data_rule_set) | _"Data Rule Set Definitions"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| published | boolean | _"Published"_ |
| publication_date | datetime | _"Publication Date"_ |
| rule_logic | string | _"Expression"_ |
| contact | [steward](#steward) | _"Contacts"_ |
| data_policies | [main_object](#main_object) | _"Data Policies"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `published_data_rule_set`

- Displayed as: _"Data Rule Set Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/published_data_rule_set](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/published_data_rule_set)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| data_rule_definitions | [published_data_rule_definition](#published_data_rule_definition) | _"Data Rule Definitions"_ |
| status | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED`, `DRAFT`, `IN_PROCESS`, `REJECTED`, `ERROR` |
| published | boolean | _"Published"_ |
| publication_date | datetime | _"Publication Date"_ |
| contact | [steward](#steward) | _"Contacts"_ |
| data_policies | [main_object](#main_object) | _"Data Policies"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `quality_Problem_Type`

- Displayed as: _"QualityProblemType"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/quality_Problem_Type](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/quality_Problem_Type)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| code | string | _"Code"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| code | string | _"Code"_ |


## `quality_problem`

- Displayed as: _"Quality Score Problem"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/quality_problem](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/quality_problem)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| details | string | _"Details"_ |
| confidence | number | _"Confidence"_ |
| occurrences | number | _"Occurrences"_ |
| percent_occurrences | number | _"Percent Occurrences"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| qualityScore | number | _"Quality Score"_ |
| QualityProblemTypeName | string | _"Quality Problem Type Name"_ |
| details | string | _"Details"_ |
| confidence | number | _"Confidence"_ |
| occurrences | number | _"Occurrences"_ |
| percent_occurrences | number | _"Percent Occurrences"_ |
| QualityProblemTypeDescription | string | _"Quality Problem Type Description"_ |
| Column | string | _"Column"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `quality_problem_type_DQR`

- Displayed as: _"QualityProblemType"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/quality_problem_type_DQR](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/quality_problem_type_DQR)


## `r_shiny_app`

- Displayed as: _"RShiny App"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/r_shiny_app](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/r_shiny_app)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| **analytics_project** | [analytics_project](#analytics_project) | _"Data Science Project"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_r_shiny_app_object | [r_shiny_app_object](#r_shiny_app_object) | _"RShiny App Objects"_ |
| system_equiv_id | string | _"System Equiv Id"_ |
| first_published_date | datetime | _"First Published Date"_ |
| package_name | string | _"Package Name"_ |
| logical_name | string | _"Logical Name"_ |
| url | string | _"URL"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `r_shiny_app_object`

- Displayed as: _"RShiny App Object"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/r_shiny_app_object](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/r_shiny_app_object)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| **from_r_shiny_app** | [r_shiny_app](#r_shiny_app) | _"RShiny App"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| system_equiv_id | string | _"System Equiv Id"_ |
| studio_asset_type | string | _"Studio Asset Type"_ |
| path | string | _"Path"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `reference_key`

- Displayed as: _"Reference Key"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/reference_key](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/reference_key)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **logical_entity** | [logical_entity](#logical_entity) | _"Logical Entity"_ |
| physical_name | string | _"Physical Name"_ |
| referenced_by_attribute | [entity_attribute](#entity_attribute) | _"Parent Entity Attribute"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `referenced_container`

- Displayed as: _"Referenced Container"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/referenced_container](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/referenced_container)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| type | enum | _"Type"_: `SERVER`, `MAINFRAME`, `SEQUENCE`, `PARALLEL` |
| version | string | _"Version"_ |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| stages | [stage](#stage) | _"Stages"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |
| **local_containers** | [local_container](#local_container) | _"Local Containers"_ |
| **shared_containers** | [shared_container](#shared_container) | _"Shared Containers"_ |


## `reportobject`

- Displayed as: _"ReportObject"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/reportobject](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/reportobject)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |


## `result_column`

- Displayed as: _"Result Column"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/result_column](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/result_column)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| stored_procedure_definition | [stored_procedure_definition](#stored_procedure_definition) | _"Stored Procedure Definition"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `role_assignment`

- Displayed as: _"Role Assignment"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/role_assignment](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/role_assignment)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **defined_by_system_role** | [system_role](#system_role) | _"Defined By System Role"_ |
| **has_role_context** | [role_context](#role_context) | _"Has Role Context"_ |
| sequence | number | _"Sequence"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| assigns_principal | [steward](#steward) | _"Assigns Principal"_ |
| **defined_by_system_role** | [system_role](#system_role) | _"Defined By System Role"_ |
| **has_role_context** | [role_context](#role_context) | _"Has Role Context"_ |
| sequence | number | _"Sequence"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `role_context`

- Displayed as: _"Role Context"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/role_context](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/role_context)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| context_id | string | _"Context Id"_ |
| defines_role_assignment | [role_assignment](#role_assignment) | _"Defines Role Assignment"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| context_id | string | _"Context Id"_ |
| defines_role_assignment | [role_assignment](#role_assignment) | _"Defines Role Assignment"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `root_tuple`

- Displayed as: _"Tuple"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/root_tuple](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/root_tuple)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| endpoint | [endpoint](#endpoint) | _"Endpoint"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `routine`

- Displayed as: _"Routine"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/routine](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/routine)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| transformation_project | [transformation_project](#transformation_project) | _"Transformation Project"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| vendor | string | _"Vendor"_ |
| version | string | _"Version"_ |
| author | string | _"Author"_ |
| copyright | string | _"Copyright"_ |
| source_code | string | _"Source Code"_ |
| arguments | [routine_argument](#routine_argument) | _"Arguments"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `routine_argument`

- Displayed as: _"Routine Argument"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/routine_argument](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/routine_argument)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| function | [routine](#routine) | _"Function"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `sap_connection`

- Displayed as: _"SAP Connection"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/sap_connection](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/sap_connection)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| host | [host](#host) | _"Host"_ |
| data_connectors | [connector](#connector) | _"Data Connectors"_ |
| connection_string | string | _"Connection String"_ |
| imports_idoc_types | [main_object](#main_object) | _"Imports IDoc Types"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `sequence_job`

- Displayed as: _"Sequence Job"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/sequence_job](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/sequence_job)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| include_for_lineage__edit | enum | _"Include for Lineage"_: `setToTrue`, `setToFalse`, `defaultToProject` |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| transformation_project | [transformation_project](#transformation_project) | _"Transformation Project"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| stages | [stage](#stage) | _"Stages"_ |
| references_local_or_shared_containers | [referenced_container](#referenced_container) | _"References Local or Shared Containers"_ |
| sequences_jobs | [dsjob](#dsjob) | _"Sequences Jobs"_ |
| folder | [dsfolder](#dsfolder) | _"Folder"_ |
| design_parameters | [dsparameter_job](#dsparameter_job) | _"Parameters"_ |
| parameter_sets | [parameter_set_definition](#parameter_set_definition) | _"Parameter Sets"_ |
| annotations | string | _"Annotations"_ |
| job_runs | [job_run](#job_run) | _"Job Runs"_ |
| include_for_lineage | boolean | _"Include for Lineage"_ |
| include_for_lineage_description | string | _"Include for Lineage"_ |
| include_for_lineage__edit | enum | _"Include for Lineage"_: `setToTrue`, `setToFalse`, `defaultToProject` |
| inherits_lineage_setting_from_transformation_project | boolean | _"Inherits Lineage Setting from Transformation Project"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `session_configuration`

- Displayed as: _"Session Configuration"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/session_configuration](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/session_configuration)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| max_sessions | number | _"Max Sessions"_ |
| time_to_live | number | _"Time To Live"_ |
| wake_up_interval | number | _"Wake Up Interval"_ |
| name | string | _"Name"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| max_sessions | number | _"Max Sessions"_ |
| time_to_live | number | _"Time To Live"_ |
| wake_up_interval | number | _"Wake Up Interval"_ |
| name | string | _"Name"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `set_operation`

- Displayed as: _"Set Operation"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/set_operation](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/set_operation)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **infoset** | [infoset](#infoset) | _"InfoSet"_ |
| type | enum | _"Set Operation"_: `Union`, `Intersection`, `Difference`, `Subtraction` |
| **primary_input** | [infoset](#infoset) | _"Primary Input"_ |
| **secondary_input** | [infoset](#infoset) | _"Secondary Input"_ |
| additional_inputs | [infoset](#infoset) | _"Additional Inputs"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `shared_container`

- Displayed as: _"Shared Container"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/shared_container](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/shared_container)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| transformation_project | [transformation_project](#transformation_project) | _"Transformation Project"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| stages | [stage](#stage) | _"Stages"_ |
| referenced_by_stages | [stage](#stage) | _"Referenced by Stages"_ |
| references_containers | [referenced_container](#referenced_container) | _"References Containers"_ |
| referenced_by_containers | [shared_container](#shared_container) | _"Referenced by Containers"_ |
| type | enum | _"Type"_: `SERVER`, `MAINFRAME`, `SEQUENCE`, `PARALLEL` |
| parameters | [dsparameter](#dsparameter) | _"Parameters"_ |
| parameter_sets | [dsparameter_set](#dsparameter_set) | _"Parameter Sets"_ |
| annotations | string | _"Annotations"_ |
| mapping_components | [mapping_component](#mapping_component) | _"Mapping Components"_ |
| source_mappings | [main_object](#main_object) | _"Source Mappings"_ |
| target_mappings | [main_object](#main_object) | _"Target Mappings"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `stage`

- Displayed as: _"Stage"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stage](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stage)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| manually_bound_to | [main_object](#main_object) | _"Manually Bound To"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| job_or_container | [main_object](#main_object) | _"Job or Container"_ |
| job | [dsjob](#dsjob) | _"Job"_ |
| shared_or_local_container | [referenced_container](#referenced_container) | _"Shared or Local Container"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| type | [dsstage_type](#dsstage_type) | _"Type"_ |
| type_definition | string | _"Type Definition"_ |
| constraints | [job_constraint](#job_constraint) | _"Constraints"_ |
| references_container | [referenced_container](#referenced_container) | _"References Container"_ |
| stage_variable | [stage_variable](#stage_variable) | _"Stage Variables"_ |
| input_links | [link](#link) | _"Input Links"_ |
| output_links | [link](#link) | _"Output Links"_ |
| next_stages | [stage](#stage) | _"Next Stages"_ |
| previous_stages | [stage](#stage) | _"Previous Stages"_ |
| manually_bound_to | [main_object](#main_object) | _"Manually Bound To"_ |
| references_data_connection_mapping | [data_connection_mapping](#data_connection_mapping) | _"References Data Connection Mapping"_ |
| runs_sequences_jobs | [dsjob](#dsjob) | _"Runs Sequences Jobs"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| references_table_definitions | [table_definition](#table_definition) | _"References Table Definitions"_ |
| file | string | _"File"_ |
| host | string | _"Host"_ |
| data_source_or_server | string | _"Data Source or Server"_ |
| schema | string | _"Schema"_ |
| table | string | _"Table"_ |
| sql_statement | string | _"SQL Statement"_ |
| insert_sql | string | _"Insert SQL"_ |
| update_sql | string | _"Update SQL"_ |
| delete_sql | string | _"Delete SQL"_ |
| before_sql | string | _"Before SQL"_ |
| after_sql | string | _"After SQL"_ |
| all_sql_statements | string | _"All SQL Statements"_ |
| standardization_rule_sets | [standardization_rule_set](#standardization_rule_set) | _"Standardization Rule Sets"_ |
| match_specifications | [match_specification](#match_specification) | _"Match Specifications"_ |
| data_rule_definition | [stage_data_rule_definition](#stage_data_rule_definition) | _"Data Rule Definition"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `stage_column`

- Displayed as: _"Stage Column"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stage_column](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stage_column)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| link | [link](#link) | _"Link"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| odbc_type | enum | _"SQL Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| key | boolean | _"Key"_ |
| length | number | _"Length"_ |
| minimum_length | number | _"Minimum Length"_ |
| allows_null_values | boolean | _"Allow Null Values"_ |
| expression | string | _"Expression"_ |
| constraints | [job_constraint](#job_constraint) | _"Constraints"_ |
| next_stage_columns | [data_item](#data_item) | _"Next Stage Columns"_ |
| previous_stage_columns | [data_item](#data_item) | _"Previous Stage Columns"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `stage_data_rule_definition`

- Displayed as: _"Stage Data Rule Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stage_data_rule_definition](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stage_data_rule_definition)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| **stage** | [stage](#stage) | _"Stage"_ |
| stage_logic | string | _"Stage Logic"_ |
| **based_on_rule** | [published_data_rule_definition](#published_data_rule_definition) | _"Based on Rule"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `stage_type`

- Displayed as: _"Stage Type"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stage_type](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stage_type)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| long_description | string | _"Description"_ |
| steward | [steward](#steward) | _"Steward"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| long_description | string | _"Description"_ |
| steward | [steward](#steward) | _"Steward"_ |
| vendor | string | _"Vendor"_ |
| version | string | _"Version"_ |
| author | string | _"Author"_ |
| copyright | string | _"Copyright"_ |


## `stage_type_detail`

- Displayed as: _"Stage Type Detail"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stage_type_detail](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stage_type_detail)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| of_stage_type | [stage_type](#stage_type) | _"Stage Type"_ |
| display_caption | string | _"Prompt"_ |
| default_value | string | _"Default Value"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `stage_variable`

- Displayed as: _"Stage Variable"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stage_variable](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stage_variable)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| stage | [stage](#stage) | _"Stage"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| odbc_type | enum | _"SQL Type"_: `CHAR`, `VARCHAR`, `LONGVARCHAR`, `WCHAR`, `WVARCHAR`, `WLONGVARCHAR`, `DECIMAL`, `NUMERIC`, `SMALLINT`, `INTEGER`, `REAL`, `FLOAT`, `DOUBLE`, `BIT`, `TINYINT`, `BIGINT`, `BINARY`, `VARBINARY`, `LONGVARBINARY`, `DATE`, `TIME`, `TIMESTAMP`, `GUID`, `UNKNOWN` |
| length | number | _"Length"_ |
| minimum_length | number | _"Minimum Length"_ |
| expression | string | _"Expression"_ |
| previous_stage_columns | [data_item](#data_item) | _"Previous Stage Columns or Variables"_ |
| next_stage_columns | [data_item](#data_item) | _"Next Stage Columns or Variables"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `standardization_object`

- Displayed as: _"Standardization Object"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/standardization_object](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/standardization_object)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| fields | string | _"Data Fields"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| data_quality_specifications | [standardization_object](#standardization_object) | _"Data Quality Specification"_ |
| folder | [dsfolder](#dsfolder) | _"Folder"_ |
| used_by_stages | [stage](#stage) | _"Stages"_ |
| type | string | _"Type"_ |
| fields | string | _"Data Fields"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `standardization_rule`

- Displayed as: _"DataQualitySpec"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/standardization_rule](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/standardization_rule)


## `standardization_rule_set`

- Displayed as: _"Standardization Rule Set"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/standardization_rule_set](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/standardization_rule_set)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| help_text | string | _"Long Description"_ |
| transformation_project | [transformation_project](#transformation_project) | _"Transformation Project"_ |
| folder | [dsfolder](#dsfolder) | _"Folder"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| used_by_stages | [stage](#stage) | _"Stages"_ |
| type | string | _"Type"_ |
| data_quality_specifications | [standardization_object](#standardization_object) | _"Data Quality Specifications"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `steward`

- Displayed as: _"Steward"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/steward](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/steward)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| assigned_by_contact_assignment | [associativeobject](#associativeobject) | _"Assigned By Contact Assignment"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| assigned_by_contact_assignment | [associativeobject](#associativeobject) | _"Assigned By Contact Assignment"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `steward_group`

- Displayed as: _"Steward Group"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/steward_group](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/steward_group)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| managed_assets | [information_asset](#information_asset) | _"Managed Assets"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| group_name | string | _"Group Name"_ |
| type | string | _"Type"_ |
| email_address | string | _"Email Address"_ |
| web_address | string | _"Web Address"_ |
| organization | string | _"Organization"_ |
| location | string | _"Location"_ |
| principal_id | string | _"Principal ID"_ |
| managed_assets | [information_asset](#information_asset) | _"Managed Assets"_ |
| managed_assets_basic | [main_object](#main_object) | _"Managed Assets"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `steward_user`

- Displayed as: _"Steward User"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/steward_user](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/steward_user)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| managed_assets | [information_asset](#information_asset) | _"Managed Assets"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| full_name | string | _"Full Name"_ |
| job_title | string | _"Job Title"_ |
| email_address | string | _"Email Address"_ |
| office_phone_number | string | _"Office Phone Number"_ |
| mobile_phone_number | string | _"Mobile Phone Number"_ |
| principal_id | string | _"User Name"_ |
| given_name | string | _"Given Name"_ |
| surname | string | _"Surname"_ |
| courtesy_title | string | _"Courtesy Title"_ |
| organization | string | _"Organization"_ |
| location | string | _"Location"_ |
| business_address | string | _"Business Address"_ |
| home_phone_number | string | _"Home Phone Number"_ |
| fax_number | string | _"Fax Number"_ |
| pager_number | string | _"Pager Number"_ |
| instant_message_id | string | _"Instant Message ID"_ |
| managed_assets | [information_asset](#information_asset) | _"Managed Assets"_ |
| managed_assets_basic | [main_object](#main_object) | _"Managed Assets"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `stored_procedure`

- Displayed as: _"Stored Procedure"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stored_procedure](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stored_procedure)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| database_schema | [database_schema](#database_schema) | _"Database Schema"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| stored_procedure_parameters | [stored_procedure_parameter](#stored_procedure_parameter) | _"Stored Procedure Parameters"_ |
| implements_design_stored_procedures | [design_stored_procedure](#design_stored_procedure) | _"Implements Design Stored Procedures"_ |
| name_qualifier | string | _"Name Qualifier"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| source_code | string | _"Source Code"_ |
| error_code | string | _"Error Codes"_ |
| imported_from | string | _"Imported From"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `stored_procedure_definition`

- Displayed as: _"Stored Procedure Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stored_procedure_definition](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stored_procedure_definition)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| in_parameters | [in_parameter](#in_parameter) | _"In Parameters"_ |
| out_parameters | [out_parameter](#out_parameter) | _"Out Parameters"_ |
| inout_parameters | [inout_parameter](#inout_parameter) | _"InOut Parameters"_ |
| result_columns | [result_column](#result_column) | _"Result Columns"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| include_for_business_lineage | boolean | _"Include for Business Lineage"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `stored_procedure_parameter`

- Displayed as: _"Stored Procedure Parameter"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stored_procedure_parameter](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/stored_procedure_parameter)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| stored_procedure | [stored_procedure](#stored_procedure) | _"Stored Procedure"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| data_type | enum | _"Data Type"_: `INT8`, `INT16`, `INT32`, `INT64`, `SFLOAT`, `DFLOAT`, `QFLOAT`, `DECIMAL`, `STRING`, `BINARY`, `BOOLEAN`, `DATE`, `TIME`, `DATETIME`, `DURATION`, `CHOICE`, `ORDERED_GROUP`, `UNORDERED_GROUP`, `GUID`, `UNKNOWN`, `JSON`, `XML` |
| length | number | _"Length"_ |
| minimum_length | number | _"Minimum Length"_ |
| fraction | number | _"Fraction"_ |
| reads_from_(static) | [information_asset](#information_asset) | _"Reads from (Static)"_ |
| writes_to_(static) | [information_asset](#information_asset) | _"Writes to (Static)"_ |
| reads_from_(design) | [information_asset](#information_asset) | _"Reads from (Design)"_ |
| writes_to_(design) | [information_asset](#information_asset) | _"Writes to (Design)"_ |
| reads_from_(operational) | [information_asset](#information_asset) | _"Reads from (Operational)"_ |
| writes_to_(operational) | [information_asset](#information_asset) | _"Writes to (Operational)"_ |
| reads_from_(user_defined) | [information_asset](#information_asset) | _"Reads from (User-Defined)"_ |
| writes_to_(user_defined) | [information_asset](#information_asset) | _"Writes to (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `subject_area`

- Displayed as: _"Subject Area"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/subject_area](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/subject_area)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **logical_data_model** | [logical_data_model](#logical_data_model) | _"Logical Data Model"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| logical_entities | [logical_entity](#logical_entity) | _"Logical Entities"_ |
| author | string | _"Author"_ |
| comments | string | _"Comments"_ |
| imported_from | string | _"Imported From"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `system_role`

- Displayed as: _"System Role"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/system_role](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/system_role)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| product | enum | _"Product"_: `ASB`, `DATASTAGE`, `SORCERER`, `SOA`, `ENTERPRISE_MANAGER`, `OTHER`, `GLOSSARY`, `OMD`, `WISD`, `PERSONA` |
| of_principal | [steward](#steward) | _"Of Principal"_ |
| of_acl_entry | [aclentry](#aclentry) | _"Of Acl Entry"_ |
| role_type | enum | _"Role Type"_: `SUITE`, `PRODUCT`, `PROJECT`, `PERSONA` |
| role_id | string | _"Role Id"_ |
| defines_role_assignment | [role_assignment](#role_assignment) | _"Defines Role Assignment"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| product | enum | _"Product"_: `ASB`, `DATASTAGE`, `SORCERER`, `SOA`, `ENTERPRISE_MANAGER`, `OTHER`, `GLOSSARY`, `OMD`, `WISD`, `PERSONA` |
| of_principal | [steward](#steward) | _"Of Principal"_ |
| of_acl_entry | [aclentry](#aclentry) | _"Of Acl Entry"_ |
| role_type | enum | _"Role Type"_: `SUITE`, `PRODUCT`, `PROJECT`, `PERSONA` |
| role_id | string | _"Role Id"_ |
| defines_role_assignment | [role_assignment](#role_assignment) | _"Defines Role Assignment"_ |


## `table_analysis`

- Displayed as: _"Table Analysis"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/table_analysis](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/table_analysis)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| quality_score_percent | string | _"Quality Score"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| project | string | _"Project"_ |
| database_table_or_view | [datagroup](#datagroup) | _"Database Table or View"_ |
| review_date | datetime | _"Review Date"_ |
| number_of_fields | number | _"Number of Fields"_ |
| number_of_rows | number | _"Number of Rows"_ |
| primary_key_duplicates | number | _"Primary Key Duplicates"_ |
| foreign_key_violations | number | _"Foreign Key Violations"_ |
| selected_primary_key | [database_column](#database_column) | _"User Selected Primary Key"_ |
| selected_foreign_key | [database_column](#database_column) | _"User Selected Foreign Key"_ |
| selected_natural_key | [database_column](#database_column) | _"User Selected Natural Key"_ |
| quality_score_percent | string | _"Quality Score"_ |
| nb_record_tested | number | _"Number of Records Tested"_ |
| quality_score_problems | [quality_problem](#quality_problem) | _"Quality Score Problems"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `table_analysis_summary`

- Displayed as: _"Table Analysis Summary"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/table_analysis_summary](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/table_analysis_summary)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| steward | [steward](#steward) | _"Steward"_ |
| **analyzed_table** | [datagroup](#datagroup) | _"Analyzed Table"_ |
| project_name | string | _"Analysis Project"_ |
| review_date | datetime | _"Review Date"_ |
| promoted_by_principal | [steward](#steward) | _"Promoted By Principal"_ |
| reviewed_by_principal | [steward](#steward) | _"Reviewed By Principal"_ |
| number_of_fields | number | _"Number of Fields"_ |
| number_of_rows | number | _"Number of Rows"_ |
| inferred_primary_keys | string | _"Inferred Primary Keys"_ |
| primary_key_duplicates | number | _"Primary Key Duplicates"_ |
| inferred_foreign_keys | string | _"Inferred Foreign Keys"_ |
| foreign_key_violations | number | _"Foreign Key Violations"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_&_long_description | string | _"Short & Long Description"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| steward | [steward](#steward) | _"Steward"_ |
| **analyzed_table** | [datagroup](#datagroup) | _"Analyzed Table"_ |
| project_name | string | _"Analysis Project"_ |
| review_date | datetime | _"Review Date"_ |
| promoted_by_principal | [steward](#steward) | _"Promoted By Principal"_ |
| reviewed_by_principal | [steward](#steward) | _"Reviewed By Principal"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |
| number_of_fields | number | _"Number of Fields"_ |
| number_of_rows | number | _"Number of Rows"_ |
| inferred_primary_keys | string | _"Inferred Primary Keys"_ |
| primary_key_duplicates | number | _"Primary Key Duplicates"_ |
| inferred_foreign_keys | string | _"Inferred Foreign Keys"_ |
| foreign_key_violations | number | _"Foreign Key Violations"_ |
| notes | note | _"Notes"_ |


## `table_definition`

- Displayed as: _"Table Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/table_definition](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/table_definition)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| transformation_project | [transformation_project](#transformation_project) | _"Transformation Project"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| column_definitions | [column_definition](#column_definition) | _"Column Definitions"_ |
| included_by_stages | [stage](#stage) | _"Included by Stages"_ |
| foreign_keys | [foreign_key_definition](#foreign_key_definition) | _"Foreign Keys"_ |
| referenced_by_foreign_keys | [foreign_key_definition](#foreign_key_definition) | _"Referenced by Foreign Keys"_ |
| data_source_type | string | _"Data Source Type"_ |
| data_source_name | string | _"Data Source Name"_ |
| machine_or_platform_type | string | _"Machine or Platform Type"_ |
| mainframe_access_type | string | _"Mainframe Access Type"_ |
| owner | string | _"Owner"_ |
| referenced_by_data_sources | [datagroup](#datagroup) | _"Referenced by Data Sources"_ |
| table_type | string | _"Table Type"_ |
| computer | string | _"Computer"_ |
| software_product | string | _"Software Product"_ |
| data_store | string | _"Data Store"_ |
| data_schema | string | _"Data Schema"_ |
| data_collection | string | _"Data Collection"_ |
| data_connection | [dsdata_connection](#dsdata_connection) | _"Data Connection"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `table_definition_properties`

- Displayed as: _"Table Definition Properties"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/table_definition_properties](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/table_definition_properties)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **of_ds_table_definition** | [table_definition](#table_definition) | _"Of DS Table Definition"_ |
| seq_col_space | number | _"SEQ Col Space"_ |
| seq_fixed_width | boolean | _"SEQ Fixed Width"_ |
| seq_delimiter | string | _"SEQ Delimiter"_ |
| seq_quote_char | string | _"SEQ Quote Char"_ |
| locator | string | _"Locator"_ |
| access_type | string | _"Access Type"_ |
| apt_record_prop | string | _"APT Record Prop"_ |
| seq_col_headers | boolean | _"SEQ Col Headers"_ |
| import_location | string | _"Import Location"_ |
| nls_map_name | string | _"NLS Map Name"_ |
| seq_omit_new_line | boolean | _"SEQ Omit New Line"_ |
| platform_type | string | _"Platform Type"_ |
| version | string | _"Version"_ |
| a_xmeta_locking_root | string | _"A XMeta Locking Root"_ |
| registration_timestamp | string | _"Registration Timestamp"_ |
| allow_column_mapping | boolean | _"Allow Column Mapping"_ |
| sp_error_codes | string | _"SP Error Codes"_ |
| seq_null_string | string | _"SEQ Null String"_ |
| multivalued | boolean | _"Multivalued"_ |
| pad_char | string | _"Pad Char"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **of_ds_table_definition** | [table_definition](#table_definition) | _"Of DS Table Definition"_ |
| seq_col_space | number | _"SEQ Col Space"_ |
| seq_fixed_width | boolean | _"SEQ Fixed Width"_ |
| seq_delimiter | string | _"SEQ Delimiter"_ |
| seq_quote_char | string | _"SEQ Quote Char"_ |
| locator | string | _"Locator"_ |
| access_type | string | _"Access Type"_ |
| apt_record_prop | string | _"APT Record Prop"_ |
| seq_col_headers | boolean | _"SEQ Col Headers"_ |
| import_location | string | _"Import Location"_ |
| nls_map_name | string | _"NLS Map Name"_ |
| seq_omit_new_line | boolean | _"SEQ Omit New Line"_ |
| platform_type | string | _"Platform Type"_ |
| version | string | _"Version"_ |
| a_xmeta_locking_root | string | _"A XMeta Locking Root"_ |
| registration_timestamp | string | _"Registration Timestamp"_ |
| allow_column_mapping | boolean | _"Allow Column Mapping"_ |
| sp_error_codes | string | _"SP Error Codes"_ |
| seq_null_string | string | _"SEQ Null String"_ |
| multivalued | boolean | _"Multivalued"_ |
| pad_char | string | _"Pad Char"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `term`

- Displayed as: _"Term"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/term](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/term)

#### Properties valid for creation:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| **parent_category** | [category](#category) | _"Parent Category"_ |
| short_description | string | _"Short Description"_ |
| **status** | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED` |

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **parent_category** | [category](#category) | _"Parent Category"_ |
| referencing_categories | [category](#category) | _"Referencing Categories"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| **status** | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED` |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| language | enum | _"Language"_:  |
| abbreviation | string | _"Abbreviation"_ |
| additional_abbreviation | string | _"Additional Abbreviation"_ |
| example | string | _"Example"_ |
| usage | string | _"Usage"_ |
| is_modifier | boolean | _"Is Modifier"_ |
| type | enum | _"Type"_: `NONE`, `PRIME`, `CLASS` |
| translations | [term](#term) | _"Translations"_ |
| is_a_type_of | [term](#term) | _"Is a Type Of"_ |
| has_types | [term](#term) | _"Has Types"_ |
| is_of | [term](#term) | _"Is Of"_ |
| has_a_term | [term](#term) | _"Has A"_ |
| synonyms | [term](#term) | _"Synonyms"_ |
| preferred_synonym | [term](#term) | _"Preferred Synonym"_ |
| related_terms | [term](#term) | _"Related Terms"_ |
| replaces | [term](#term) | _"Replaces"_ |
| replaced_by | [term](#term) | _"Replaced By"_ |
| assigned_terms | [term](#term) | _"Assigned Terms"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| assigned_assets | [information_asset](#information_asset) | _"Assigned Assets"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| **parent_category** | [category](#category) | _"Parent Category"_ |
| category_path | [category](#category) | _"Category Path"_ |
| referencing_categories | [category](#category) | _"Referencing Categories"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| **status** | enum | _"Status"_: `CANDIDATE`, `ACCEPTED`, `STANDARD`, `DEPRECATED` |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| language | enum | _"Language"_:  |
| abbreviation | string | _"Abbreviation"_ |
| additional_abbreviation | string | _"Additional Abbreviation"_ |
| example | string | _"Example"_ |
| usage | string | _"Usage"_ |
| is_modifier | boolean | _"Is Modifier"_ |
| type | enum | _"Type"_: `NONE`, `PRIME`, `CLASS` |
| translations | [term](#term) | _"Translations"_ |
| is_a_type_of | [term](#term) | _"Is a Type Of"_ |
| has_types | [term](#term) | _"Has Types"_ |
| is_of | [term](#term) | _"Is Of"_ |
| has_a | [term](#term) | _"Has A"_ |
| has_a_term | [term](#term) | _"Has A"_ |
| synonyms | [term](#term) | _"Synonyms"_ |
| preferred_synonym | [term](#term) | _"Preferred Synonym"_ |
| related_terms | [term](#term) | _"Related Terms"_ |
| replaces | [term](#term) | _"Replaces"_ |
| replaced_by | [term](#term) | _"Replaced By"_ |
| assigned_terms | [term](#term) | _"Assigned Terms"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| assigned_assets | [information_asset](#information_asset) | _"Assigned Assets"_ |
| Automation_Rules | [main_object](#main_object) | _"Automation Rules"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| workflow_current_state | string | _"Workflow Current State"_ |
| workflow_stored_state | enum | _"Workflow Stored State"_: `DRAFT`, `WAITING_APPROVAL`, `APPROVED` |
| glossary_type | enum | _"Glossary Type"_: `PUBLISHED`, `DRAFT` |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `term_assignment`

- Displayed as: _"Suggested Term Assignment"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/term_assignment](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/term_assignment)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| assign_to_term | [main_object](#main_object) | _"Term"_ |
| assign_to_object | [information_asset](#information_asset) | _"Asset"_ |
| confidence_percent | number | _"Confidence (Percent)"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| assign_to_term | [main_object](#main_object) | _"Term"_ |
| assign_to_object | [information_asset](#information_asset) | _"Asset"_ |
| confidence_percent | number | _"Confidence (Percent)"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `term_history`

- Displayed as: _"Term History"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/term_history](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/term_history)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| term | [information_asset](#information_asset) | _"Term"_ |
| user_task_name | string | _"User Task Name"_ |
| user_task_key | string | _"User Task Key"_ |
| workflow_instance_id | string | _"Workflow Instance Id"_ |
| workflow_event | string | _"Workflow Event"_ |
| workflow_new_state | string | _"Workflow New State"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| term | [information_asset](#information_asset) | _"Term"_ |
| date | datetime | _"Date"_ |
| comment | string | _"Comment"_ |
| edited_by | string | _"Edited By"_ |
| changed_properties | [changed_properties](#changed_properties) | _"Changed Properties"_ |
| user_task_name | string | _"User Task Name"_ |
| user_task_key | string | _"User Task Key"_ |
| workflow_instance_id | string | _"Workflow Instance Id"_ |
| workflow_event | string | _"Workflow Event"_ |
| workflow_new_state | string | _"Workflow New State"_ |


## `transform_argument`

- Displayed as: _"Transform Argument"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/transform_argument](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/transform_argument)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| transform | [transforms_function](#transforms_function) | _"Transform"_ |
| data_elements | [data_element](#data_element) | _"Data Elements"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `transformation_project`

- Displayed as: _"Transformation Project"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/transformation_project](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/transformation_project)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| include_for_lineage | enum | _"Include for Lineage"_: `setToTrue`, `setToFalse` |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| host_(engine) | [host_(engine)](#host_(engine)) | _"Host (Engine)"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| include_for_lineage | enum | _"Include for Lineage"_: `setToTrue`, `setToFalse` |
| include_for_lineage_desc | boolean | _"Include for Lineage"_ |
| folders | [dsfolder](#dsfolder) | _"Folders"_ |
| jobs | [dsjob](#dsjob) | _"Jobs"_ |
| containers | [shared_container](#shared_container) | _"Containers"_ |
| stage_types | [dsstage_type](#dsstage_type) | _"Stage Types"_ |
| table_definitions | [table_definition](#table_definition) | _"Table Definitions"_ |
| standardization_rule_sets | [standardization_rule_set](#standardization_rule_set) | _"Standardization Rule Sets"_ |
| match_specifications | [match_specification](#match_specification) | _"Match Specifications"_ |
| parameter_sets | [parameter_set](#parameter_set) | _"Parameter Sets"_ |
| transforms | [transforms_function](#transforms_function) | _"Transforms"_ |
| routines | [routine](#routine) | _"Routines"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `transforms_function`

- Displayed as: _"Transforms Function"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/transforms_function](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/transforms_function)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| transformation_project | [transformation_project](#transformation_project) | _"Transformation Project"_ |
| source_code | string | _"Definition"_ |
| arguments | [transform_argument](#transform_argument) | _"Arguments"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `tuple`

- Displayed as: _"Tuple"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/tuple](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/tuple)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| tuple_attributes | [tuple_attribute](#tuple_attribute) | _"Tuple Attributes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `tuple_attribute`

- Displayed as: _"Tuple Attribute"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/tuple_attribute](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/tuple_attribute)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| tuple_or_tuple_attribute | [main_object](#main_object) | _"Tuple or Tuple Attribute"_ |
| tuple_attribute | [tuple_attribute](#tuple_attribute) | _"Tuple Attribute"_ |
| **tuple** | [root_tuple](#root_tuple) | _"Tuple"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `user`

- Displayed as: _"User"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/user](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/user)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| full_name | string | _"Full Name"_ |
| job_title | string | _"Job Title"_ |
| email_address | string | _"Email Address"_ |
| office_phone_number | string | _"Office Phone Number"_ |
| mobile_phone_number | string | _"Mobile Phone Number"_ |
| principal_id | string | _"User Name"_ |
| given_name | string | _"Given Name"_ |
| surname | string | _"Surname"_ |
| courtesy_title | string | _"Courtesy Title"_ |
| organization | string | _"Organization"_ |
| location | string | _"Location"_ |
| business_address | string | _"Business Address"_ |
| home_phone_number | string | _"Home Phone Number"_ |
| fax_number | string | _"Fax Number"_ |
| pager_number | string | _"Pager Number"_ |
| instant_message_id | string | _"Instant Message ID"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `user_group`

- Displayed as: _"User Group"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/user_group](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/user_group)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| group_name | string | _"Group Name"_ |
| type | string | _"Type"_ |
| email_address | string | _"Email Address"_ |
| web_address | string | _"Web Address"_ |
| organization | string | _"Organization"_ |
| location | string | _"Location"_ |
| principal_id | string | _"Principal ID"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `user_role`

- Displayed as: _"User Role"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/user_role](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/user_role)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Role"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Role"_ |
| system_role | boolean | _"System Role"_ |
| users | [steward](#steward) | _"Users"_ |


## `valid_value`

- Displayed as: _"Valid Value"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/valid_value](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/valid_value)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| rule_component | string | _"Rule Component"_ |
| rule_type | string | _"Rule Type"_ |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| valid_value_list | [valid_value_list](#valid_value_list) | _"Valid Value List"_ |
| design_column | [data_item](#data_item) | _"Design Column"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| rule_component | string | _"Rule Component"_ |
| rule_type | string | _"Rule Type"_ |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| valid_value_list | [valid_value_list](#valid_value_list) | _"Valid Value List"_ |
| design_column | [data_item](#data_item) | _"Design Column"_ |


## `valid_value_list`

- Displayed as: _"Valid Value List"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/valid_value_list](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/valid_value_list)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| valid_values | [data_item_value](#data_item_value) | _"Valid Values"_ |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| valid_value_list | [valid_value_list](#valid_value_list) | _"Valid Value List"_ |
| design_column | [data_item](#data_item) | _"Design Column"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| valid_values | [data_item_value](#data_item_value) | _"Valid Values"_ |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| valid_value_list | [valid_value_list](#valid_value_list) | _"Valid Value List"_ |
| design_column | [data_item](#data_item) | _"Design Column"_ |


## `valid_value_range`

- Displayed as: _"Valid Value Range"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/valid_value_range](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/valid_value_range)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| is_max_inclusive | boolean | _"Is Max Inclusive"_ |
| minimum_value | string | _"Minimum Value"_ |
| is_min_inclusive | boolean | _"Is Min Inclusive"_ |
| maximum_value | string | _"Maximum Value"_ |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| valid_value_list | [valid_value_list](#valid_value_list) | _"Valid Value List"_ |
| design_column | [data_item](#data_item) | _"Design Column"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| is_max_inclusive | boolean | _"Is Max Inclusive"_ |
| minimum_value | string | _"Minimum Value"_ |
| is_min_inclusive | boolean | _"Is Min Inclusive"_ |
| maximum_value | string | _"Maximum Value"_ |
| **name** | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| valid_value_list | [valid_value_list](#valid_value_list) | _"Valid Value List"_ |
| design_column | [data_item](#data_item) | _"Design Column"_ |


## `validity_table`

- Displayed as: _"Validity Table"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/validity_table](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/validity_table)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| validity_type | string | _"Validity Type"_ |
| database_columns | [data_field](#data_field) | _"Database Columns"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `validvaluelist`

- Displayed as: _"ValidValueList"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/validvaluelist](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/validvaluelist)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| contains_valid_values | [validvalues](#validvalues) | _"Contains Valid Values"_ |
| valid_value_list_of_contains_valid_values_inverse | [validvaluelist](#validvaluelist) | _"Valid Value List Of Contains Valid Values Inverse"_ |
| is_not | boolean | _"Is Not"_ |
| sequence | number | _"Sequence"_ |
| is_case_sensitive | boolean | _"Is Case Sensitive"_ |
| custom_attribute_def_of_has_valid_values_inverse | [information_asset](#information_asset) | _"Custom Attribute Def Of Has Valid Values Inverse"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| contains_valid_values | [validvalues](#validvalues) | _"Contains Valid Values"_ |
| valid_value_list_of_contains_valid_values_inverse | [validvaluelist](#validvaluelist) | _"Valid Value List Of Contains Valid Values Inverse"_ |
| is_not | boolean | _"Is Not"_ |
| sequence | number | _"Sequence"_ |
| is_case_sensitive | boolean | _"Is Case Sensitive"_ |
| custom_attribute_def_of_has_valid_values_inverse | [information_asset](#information_asset) | _"Custom Attribute Def Of Has Valid Values Inverse"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `validvaluerange`

- Displayed as: _"ValidValueRange"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/validvaluerange](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/validvaluerange)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| is_max_inclusive | boolean | _"Is Max Inclusive"_ |
| minimum_value | string | _"Minimum Value"_ |
| is_min_inclusive | boolean | _"Is Min Inclusive"_ |
| maximum_value | string | _"Maximum Value"_ |
| valid_value_list_of_contains_valid_values_inverse | [validvaluelist](#validvaluelist) | _"Valid Value List Of Contains Valid Values Inverse"_ |
| is_not | boolean | _"Is Not"_ |
| sequence | number | _"Sequence"_ |
| is_case_sensitive | boolean | _"Is Case Sensitive"_ |
| custom_attribute_def_of_has_valid_values_inverse | [information_asset](#information_asset) | _"Custom Attribute Def Of Has Valid Values Inverse"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| is_max_inclusive | boolean | _"Is Max Inclusive"_ |
| minimum_value | string | _"Minimum Value"_ |
| is_min_inclusive | boolean | _"Is Min Inclusive"_ |
| maximum_value | string | _"Maximum Value"_ |
| valid_value_list_of_contains_valid_values_inverse | [validvaluelist](#validvaluelist) | _"Valid Value List Of Contains Valid Values Inverse"_ |
| is_not | boolean | _"Is Not"_ |
| sequence | number | _"Sequence"_ |
| is_case_sensitive | boolean | _"Is Case Sensitive"_ |
| custom_attribute_def_of_has_valid_values_inverse | [information_asset](#information_asset) | _"Custom Attribute Def Of Has Valid Values Inverse"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `validvaluerule`

- Displayed as: _"ValidValueRule"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/validvaluerule](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/validvaluerule)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| rule_code | string | _"Rule Code"_ |
| rule_type | string | _"Rule Type"_ |
| valid_value_list_of_contains_valid_values_inverse | [validvaluelist](#validvaluelist) | _"Valid Value List Of Contains Valid Values Inverse"_ |
| is_not | boolean | _"Is Not"_ |
| sequence | number | _"Sequence"_ |
| is_case_sensitive | boolean | _"Is Case Sensitive"_ |
| custom_attribute_def_of_has_valid_values_inverse | [information_asset](#information_asset) | _"Custom Attribute Def Of Has Valid Values Inverse"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| rule_code | string | _"Rule Code"_ |
| rule_type | string | _"Rule Type"_ |
| valid_value_list_of_contains_valid_values_inverse | [validvaluelist](#validvaluelist) | _"Valid Value List Of Contains Valid Values Inverse"_ |
| is_not | boolean | _"Is Not"_ |
| sequence | number | _"Sequence"_ |
| is_case_sensitive | boolean | _"Is Case Sensitive"_ |
| custom_attribute_def_of_has_valid_values_inverse | [information_asset](#information_asset) | _"Custom Attribute Def Of Has Valid Values Inverse"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `validvalues`

- Displayed as: _"ValidValues"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/validvalues](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/validvalues)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| valid_value_list_of_contains_valid_values_inverse | [validvaluelist](#validvaluelist) | _"Valid Value List Of Contains Valid Values Inverse"_ |
| is_not | boolean | _"Is Not"_ |
| sequence | number | _"Sequence"_ |
| is_case_sensitive | boolean | _"Is Case Sensitive"_ |
| custom_attribute_def_of_has_valid_values_inverse | [information_asset](#information_asset) | _"Custom Attribute Def Of Has Valid Values Inverse"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| valid_value_list_of_contains_valid_values_inverse | [validvaluelist](#validvaluelist) | _"Valid Value List Of Contains Valid Values Inverse"_ |
| is_not | boolean | _"Is Not"_ |
| sequence | number | _"Sequence"_ |
| is_case_sensitive | boolean | _"Is Case Sensitive"_ |
| custom_attribute_def_of_has_valid_values_inverse | [information_asset](#information_asset) | _"Custom Attribute Def Of Has Valid Values Inverse"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `view`

- Displayed as: _"View"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/view](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/view)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| notes | note | _"Notes"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| database_schema | [database_schema](#database_schema) | _"Database Schema"_ |
| qualityScore | string | _"Quality Score"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| database_columns | [database_column](#database_column) | _"Database Columns"_ |
| implements_logical_entities | [logical_entity](#logical_entity) | _"Implements Logical Entities"_ |
| implements_design_tables_or_views | [datagroup](#datagroup) | _"Implements Design Tables or Design Views"_ |
| alias_(business_name) | string | _"Alias (Business Name)"_ |
| same_as_data_sources | [datagroup](#datagroup) | _"Same as Data Sources"_ |
| database_aliases | [datagroup](#datagroup) | _"Database Aliases"_ |
| based_upon_database_tables | [datagroup](#datagroup) | _"Based upon Database Tables"_ |
| referenced_by_views | [view](#view) | _"Referenced by Views"_ |
| expression | string | _"Expression"_ |
| imported_from | string | _"Imported From"_ |
| defined_primary_key | [candidate_key](#candidate_key) | _"Defined Primary Key"_ |
| defined_non_primary_key | [candidate_key](#candidate_key) | _"Defined Non Primary Key"_ |
| selected_primary_key | [data_field](#data_field) | _"User Selected Primary Key"_ |
| defined_foreign_key | [database_column](#database_column) | _"Defined Foreign Key"_ |
| selected_foreign_key | [database_column](#database_column) | _"User Selected Foreign Key"_ |
| selected_natural_key | [data_field](#data_field) | _"User Selected Natural Key"_ |
| multi_column_analysis | string | _"Multi Column Analysis"_ |
| database_indexes | [database_index](#database_index) | _"Indexes"_ |
| reviewDate | datetime | _"Review Date"_ |
| fieldCount | number | _"Number of Fields"_ |
| Row Count | number | _"Number of Rows"_ |
| PKDuplicateCount | number | _"Primary Key Duplicates"_ |
| FKViolationCount | number | _"Foreign Key Violations"_ |
| nbRecordTested | number | _"Number of Records Tested"_ |
| qualityScore_bubble | string | _"Quality Score"_ |
| quality_dimension | [quality_problem](#quality_problem) | _"Quality Dimensions"_ |
| table_definitions | [table_definition](#table_definition) | _"Table Definitions"_ |
| mapped_to_physical_objects | [physical_object](#physical_object) | _"Mapped to Physical Objects"_ |
| read_by_(static) | [information_asset](#information_asset) | _"Read by (Static)"_ |
| written_by_(static) | [information_asset](#information_asset) | _"Written by (Static)"_ |
| read_by_(design) | [information_asset](#information_asset) | _"Read by (Design)"_ |
| written_by_(design) | [information_asset](#information_asset) | _"Written by (Design)"_ |
| read_by_(operational) | [information_asset](#information_asset) | _"Read by (Operational)"_ |
| written_by_(operational) | [information_asset](#information_asset) | _"Written by (Operational)"_ |
| read_by_(user_defined) | [information_asset](#information_asset) | _"Read by (User-Defined)"_ |
| written_by_(user_defined) | [information_asset](#information_asset) | _"Written by (User-Defined)"_ |
| impacted_by | [information_asset](#information_asset) | _"Impacted by"_ |
| impacts_on | [information_asset](#information_asset) | _"Impacts on"_ |
| lineage_service_last_run_date | datetime | _"Lineage Service Last Run Date"_ |
| lineage_service_status | string | _"Lineage Service Status"_ |
| lineage_service_information | string | _"Lineage Service Information"_ |
| bi_report_queries | [bi_report_query](#bi_report_query) | _"BI Report Queries"_ |
| bi_model_collections | [bi_collection](#bi_collection) | _"BI Model Collections"_ |
| source_mapping_specifications | [mapping_specification](#mapping_specification) | _"Source Mapping Specifications"_ |
| target_mapping_specifications | [mapping_specification](#mapping_specification) | _"Target Mapping Specifications"_ |
| data_policies | [main_object](#main_object) | _"Data Policies"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| suggested_term_assignments | [term_assignment](#term_assignment) | _"Suggested Term Assignments"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `volume`

- Displayed as: _"Volume"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/volume](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/volume)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| **instance** | [instance](#instance) | _"Instance"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| data_server | string | _"Data Server"_ |
| type | enum | _"Type"_: `Primary`, `Retention`, `DiscoveryExport`, `System` |
| source_type | string | _"Source Type"_ |
| server_name | string | _"Server"_ |
| object_count | number | _"Number of Objects"_ |
| size | number | _"Size (Bytes)"_ |
| last_harvested | datetime | _"Last Harvest Date"_ |
| tool_id | string | _"Tool ID"_ |
| sync_state | string | _"State"_ |
| url | string | _"URL"_ |
| infosets | [infoset](#infoset) | _"InfoSets"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `volume_contribution`

- Displayed as: _"Volume Contribution"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/volume_contribution](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/volume_contribution)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **infoset** | [infoset](#infoset) | _"Infoset"_ |
| **volume** | [volume](#volume) | _"Volume"_ |
| object_count | number | _"Number of Objects"_ |
| size | number | _"Size (Bytes)"_ |


## `xml_schema_definition`

- Displayed as: _"XML Schema Definition"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xml_schema_definition](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xml_schema_definition)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| target_namespace | string | _"Namespace"_ |
| xml_schema_library | [xml_schema_library](#xml_schema_library) | _"XML Schema Library"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_xsd_elements | [main_object](#main_object) | _"XSD Elements"_ |
| contains_xsd_attributes | [xsd_attribute](#xsd_attribute) | _"XSD Attributes"_ |
| contains_xsd_simple_types | [xsd_simple_type](#xsd_simple_type) | _"XSD Simple Types"_ |
| contains_xsd_complex_types | [xsd_complex_type](#xsd_complex_type) | _"XSD Complex Types"_ |
| contains_xsd_element_groups | [xsd_element_group](#xsd_element_group) | _"XSD Element Groups"_ |
| contains_xsd_attribute_groups | [xsd_attribute_group](#xsd_attribute_group) | _"XSD Attribute Groups"_ |
| includes_xsd_schemas | [main_object](#main_object) | _"Includes XML Schema Definitions"_ |
| imports_xsd_schemas | [main_object](#main_object) | _"Imports XML Schema Definitions"_ |
| redefines_xsd_schemas | [main_object](#main_object) | _"Redefines XML Schema Definitions"_ |
| overrides_xsd_schemas | [main_object](#main_object) | _"Overrides XML Schema Definitions"_ |
| id | string | _"Id"_ |
| xpath | string | _"Path"_ |
| default_namespace | string | _"Default Namespace"_ |
| language | string | _"Language"_ |
| version | string | _"Version"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `xml_schema_library`

- Displayed as: _"XML Schema Library"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xml_schema_library](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xml_schema_library)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| description | string | _"Description"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| description | string | _"Description"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| xml_schema_definitions | [xml_schema_definition](#xml_schema_definition) | _"XML Schema Definitions"_ |
| id | string | _"ID"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `xsd_attribute`

- Displayed as: _"XSD Attribute"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_attribute](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_attribute)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| context | [main_object](#main_object) | _"Parent XSD Object"_ |
| namespace | string | _"Namespace"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| referenced_by_xsd_elements | [main_object](#main_object) | _"Referenced by XSD Elements"_ |
| referenced_by_xsd_complex_type | [xsd_complex_type](#xsd_complex_type) | _"Referenced by XSD Complex Types"_ |
| referenced_by_xsd_attribute_groups | [xsd_attribute_group](#xsd_attribute_group) | _"Referenced by XSD Attribute Groups"_ |
| xsd_simple_type_definition | [xsd_simple_type](#xsd_simple_type) | _"XSD Simple Type Definition"_ |
| data_type | string | _"Data Type"_ |
| default_value | string | _"Default Value"_ |
| usage | string | _"Usage"_ |
| inheritable | boolean | _"Inheritable"_ |
| fixed_value | string | _"Fixed Value"_ |
| length | number | _"Length"_ |
| max_length | number | _"Maximum Length"_ |
| min_length | number | _"Minimum Length"_ |
| fraction_digits | number | _"Fraction"_ |
| total_digits | number | _"Total Digits"_ |
| white_space | string | _"Total Whitespace"_ |
| timezone | string | _"Timezone"_ |
| name_form | string | _"Form"_ |
| pattern_expression | string | _"Pattern"_ |
| minimum_range | string | _"Minimum Range"_ |
| is_minimum_range_inclusive | boolean | _"Minimum Range Inclusive"_ |
| maximum_range | string | _"Maximum Range"_ |
| is_maximum_range_inclusive | boolean | _"Maximum Range Inclusive"_ |
| enumeration_value | string | _"Enumeration Values"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `xsd_attribute_group`

- Displayed as: _"XSD Attribute Group"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_attribute_group](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_attribute_group)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| xsd_schema | [xml_schema_definition](#xml_schema_definition) | _"XSD Schema"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_xsd_attributes | [xsd_attribute](#xsd_attribute) | _"Contains XSD Attributes"_ |
| references_xsd_attributes | [xsd_attribute_reference](#xsd_attribute_reference) | _"References XSD Attributes"_ |
| references_xsd_attribute_groups | [xsd_attribute_group](#xsd_attribute_group) | _"References XSD Attribute Groups"_ |
| referenced_by_xsd_elements | [main_object](#main_object) | _"Referenced by XSD Elements"_ |
| referenced_by_xsd_complex_types | [xsd_complex_type](#xsd_complex_type) | _"Referenced by XSD Complex Types"_ |
| referenced_by_xsd_attribute_groups | [xsd_attribute_group](#xsd_attribute_group) | _"Referenced by XSD Attribute Groups"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `xsd_attribute_reference`

- Displayed as: _"XSD Attribute Reference"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_attribute_reference](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_attribute_reference)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| usage | string | _"Usage"_ |
| xsd_element | [main_object](#main_object) | _"XSD Element"_ |
| xsd_attribute_group | [xsd_attribute_group](#xsd_attribute_group) | _"Attribute Group"_ |
| xsd_complex_type | [xsd_complex_type](#xsd_complex_type) | _"XSD Complex Type"_ |
| references_xsd_attribute | [xsd_attribute](#xsd_attribute) | _"XSD Attribute"_ |


## `xsd_choice`

- Displayed as: _"XSD Choice"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_choice](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_choice)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| context | [main_object](#main_object) | _"Parent XSD Object"_ |
| namespace | string | _"Namespace"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_elements | [main_object](#main_object) | _"Contains XSD Elements"_ |
| contains_attributes | [xsd_attribute](#xsd_attribute) | _"Contains XSD Attributes"_ |
| references_xsd_elements | [xsd_element_reference](#xsd_element_reference) | _"References XSD Elements"_ |
| references_xsd_attributes | [xsd_attribute_reference](#xsd_attribute_reference) | _"References XSD Attributes"_ |
| references_xsd_element_groups | [xsd_element_group_reference](#xsd_element_group_reference) | _"References XSD Element Groups"_ |
| references_xsd_attribute_groups | [xsd_attribute_group](#xsd_attribute_group) | _"References XSD Attribute Groups"_ |
| referenced_by_xsd_elements | [xsd_element_reference](#xsd_element_reference) | _"Referenced by XSD Elements"_ |
| referenced_by_xsd_element_groups | [xsd_element_reference](#xsd_element_reference) | _"Referenced by XSD Element Groups"_ |
| referenced_by_xsd_complex_types | [xsd_element_reference](#xsd_element_reference) | _"Referenced by XSD Complex Types"_ |
| xsd_complex_type_definition | [xsd_complex_type](#xsd_complex_type) | _"XSD Complex Type Definition"_ |
| xsd_simple_type_definition | [xsd_simple_type](#xsd_simple_type) | _"XSD Simple Type Definition"_ |
| data_type | string | _"Data Type"_ |
| extends_xsd_complex_type | [xsd_complex_type](#xsd_complex_type) | _"Extends XSD Complex Type"_ |
| restricts_xsd_complex_type | [xsd_complex_type](#xsd_complex_type) | _"Restricts XSD Complex Type"_ |
| restricts_xsd_simple_type | [xsd_simple_type](#xsd_simple_type) | _"Restricts XSD Simple Type"_ |
| is_abstract | boolean | _"Abstract"_ |
| type | enum | _"Type"_: `All`, `Choice`, `Sequence` |
| default_value | string | _"Default Value"_ |
| fixed_value | string | _"Fixed Value"_ |
| length | number | _"Length"_ |
| min_length | number | _"Minimum Length"_ |
| max_length | number | _"Maximum Length"_ |
| fraction_digits | number | _"Fraction Digits"_ |
| min_occurs | number | _"Minimum Occurrence"_ |
| max_occurs | number | _"Maximum Occurrence"_ |
| is_nullable | boolean | _"Allow Null Values"_ |
| total_digits | number | _"Total Digits"_ |
| white_space | string | _"Total Whitespace"_ |
| timezone | string | _"Timezone"_ |
| name_form | string | _"Form"_ |
| primary_keys | [xsd_primary_key](#xsd_primary_key) | _"Primary Keys"_ |
| unique_keys | [xsd_unique_key](#xsd_unique_key) | _"Unique Keys"_ |
| foreign_keys | [xsd_foreign_key](#xsd_foreign_key) | _"Foreign Keys"_ |
| pattern_expression | string | _"Pattern"_ |
| minimum_range | string | _"Minimum Range"_ |
| is_minimum_range_inclusive | boolean | _"Minimum Range Inclusive"_ |
| maximum_range | string | _"Maximum Range"_ |
| is_maximum_range_inclusive | boolean | _"Maximum Range Inclusive"_ |
| enumeration_value | string | _"Enumeration Values"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `xsd_complex_type`

- Displayed as: _"XSD Complex Type"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_complex_type](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_complex_type)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| xsd_schema | [xml_schema_definition](#xml_schema_definition) | _"XSD Schema"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_xsd_attributes | [xsd_attribute](#xsd_attribute) | _"Contains XSD Attributes"_ |
| contains_xsd_elements | [main_object](#main_object) | _"Contains XSD Elements"_ |
| defines_xsd_elements | [main_object](#main_object) | _"Defines XSD Elements"_ |
| references_xsd_elements | [xsd_element_reference](#xsd_element_reference) | _"References XSD Elements"_ |
| references_xsd_attributes | [xsd_attribute_reference](#xsd_attribute_reference) | _"References XSD Attributes"_ |
| references_xsd_element_group | [xsd_element_group_reference](#xsd_element_group_reference) | _"References XSD Element Groups"_ |
| references_xsd_attribute_groups | [xsd_attribute_group](#xsd_attribute_group) | _"References XSD Attribute Groups"_ |
| extends_xsd_complex_type | [xsd_complex_type](#xsd_complex_type) | _"Extends XSD Complex Type"_ |
| extended_by_xsd_complex_type | [xsd_complex_type](#xsd_complex_type) | _"Extended by XSD Complex Types"_ |
| restricts_xsd_complex_type | [xsd_complex_type](#xsd_complex_type) | _"Restricts XSD Complex Type"_ |
| restricted_by_xsd_complex_type | [xsd_complex_type](#xsd_complex_type) | _"Restricted by XSD Complex Types"_ |
| extends_xsd_simple_type | [xsd_simple_type](#xsd_simple_type) | _"Extends XSD Simple Type"_ |
| extends_xsd_element | [main_object](#main_object) | _"Extends XSD Elements"_ |
| restricts_xsd_element | [main_object](#main_object) | _"Restricts XSD Elements"_ |
| type | enum | _"Type"_: `All`, `Choice`, `Sequence` |
| base_type | string | _"Data Type"_ |
| abstract | boolean | _"Abstract"_ |
| mixed | boolean | _"Mixed"_ |
| default | boolean | _"Default"_ |
| block | string | _"Block"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `xsd_element`

- Displayed as: _"XSD Element"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_element](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_element)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| context | [main_object](#main_object) | _"Parent XSD Object"_ |
| namespace | string | _"Namespace"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_elements | [main_object](#main_object) | _"Contains XSD Elements"_ |
| contains_attributes | [xsd_attribute](#xsd_attribute) | _"Contains XSD Attributes"_ |
| references_xsd_elements | [xsd_element_reference](#xsd_element_reference) | _"References XSD Elements"_ |
| references_xsd_attributes | [xsd_attribute_reference](#xsd_attribute_reference) | _"References XSD Attributes"_ |
| references_xsd_element_groups | [xsd_element_group_reference](#xsd_element_group_reference) | _"References XSD Element Groups"_ |
| references_xsd_attribute_groups | [xsd_attribute_group](#xsd_attribute_group) | _"References XSD Attribute Groups"_ |
| referenced_by_xsd_elements | [xsd_element_reference](#xsd_element_reference) | _"Referenced by XSD Elements"_ |
| referenced_by_xsd_element_groups | [xsd_element_reference](#xsd_element_reference) | _"Referenced by XSD Element Groups"_ |
| referenced_by_xsd_complex_types | [xsd_element_reference](#xsd_element_reference) | _"Referenced by XSD Complex Types"_ |
| xsd_complex_type_definition | [xsd_complex_type](#xsd_complex_type) | _"XSD Complex Type Definition"_ |
| xsd_simple_type_definition | [xsd_simple_type](#xsd_simple_type) | _"XSD Simple Type Definition"_ |
| data_type | string | _"Data Type"_ |
| extends_xsd_complex_type | [xsd_complex_type](#xsd_complex_type) | _"Extends XSD Complex Type"_ |
| restricts_xsd_complex_type | [xsd_complex_type](#xsd_complex_type) | _"Restricts XSD Complex Type"_ |
| restricts_xsd_simple_type | [xsd_simple_type](#xsd_simple_type) | _"Restricts XSD Simple Type"_ |
| is_abstract | boolean | _"Abstract"_ |
| type | enum | _"Type"_: `All`, `Choice`, `Sequence` |
| default_value | string | _"Default Value"_ |
| fixed_value | string | _"Fixed Value"_ |
| length | number | _"Length"_ |
| min_length | number | _"Minimum Length"_ |
| max_length | number | _"Maximum Length"_ |
| fraction_digits | number | _"Fraction Digits"_ |
| min_occurs | number | _"Minimum Occurrence"_ |
| max_occurs | number | _"Maximum Occurrence"_ |
| is_nullable | boolean | _"Allow Null Values"_ |
| total_digits | number | _"Total Digits"_ |
| white_space | string | _"Total Whitespace"_ |
| timezone | string | _"Timezone"_ |
| name_form | string | _"Form"_ |
| primary_keys | [xsd_primary_key](#xsd_primary_key) | _"Primary Keys"_ |
| unique_keys | [xsd_unique_key](#xsd_unique_key) | _"Unique Keys"_ |
| foreign_keys | [xsd_foreign_key](#xsd_foreign_key) | _"Foreign Keys"_ |
| pattern_expression | string | _"Pattern"_ |
| minimum_range | string | _"Minimum Range"_ |
| is_minimum_range_inclusive | boolean | _"Minimum Range Inclusive"_ |
| maximum_range | string | _"Maximum Range"_ |
| is_maximum_range_inclusive | boolean | _"Maximum Range Inclusive"_ |
| enumeration_value | string | _"Enumeration Values"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `xsd_element_group`

- Displayed as: _"XSD Element Group"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_element_group](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_element_group)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| xsd_schema | [xml_schema_definition](#xml_schema_definition) | _"XSD Schema"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_xsd_elements | [main_object](#main_object) | _"Contains XSD Elements"_ |
| references_xsd_elements | [xsd_element_reference](#xsd_element_reference) | _"References XSD Elements"_ |
| references_xsd_element_groups | [xsd_element_group_reference](#xsd_element_group_reference) | _"References XSD Element Groups"_ |
| references_by_xsd_elements | [main_object](#main_object) | _"Referenced by XSD Elements"_ |
| referenced_by_xsd_element_groups | [xsd_element_group](#xsd_element_group) | _"Referenced by XSD Element Groups"_ |
| type | enum | _"Type"_: `All`, `Choice`, `Sequence` |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `xsd_element_group_reference`

- Displayed as: _"XSD Element Group Reference"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_element_group_reference](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_element_group_reference)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| min_occurs | number | _"Minimum Occurrence"_ |
| max_occurs | number | _"Maximum Occurrence"_ |
| xsd_element | [main_object](#main_object) | _"XSD Element"_ |
| xsd_complex_type | [xsd_complex_type](#xsd_complex_type) | _"XSD Complex Type"_ |
| xsd_element_group | [xsd_element_group](#xsd_element_group) | _"XSD Element Group"_ |
| references_xsd_element_group | [xsd_element_group](#xsd_element_group) | _"XSD Element Group"_ |


## `xsd_element_reference`

- Displayed as: _"XSD Element Reference"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_element_reference](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_element_reference)

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| min_occurs | number | _"Minimum Occurrence"_ |
| max_occurs | number | _"Maximum Occurrence"_ |
| xsd_element | [main_object](#main_object) | _"XSD Element"_ |
| xsd_complex_type | [xsd_complex_type](#xsd_complex_type) | _"XSD Complex Type"_ |
| xsd_element_group | [xsd_element_group](#xsd_element_group) | _"XSD Element Group"_ |
| referenced_xsd_element | [main_object](#main_object) | _"XSD Element"_ |


## `xsd_foreign_key`

- Displayed as: _"XSD Foreign Key"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_foreign_key](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_foreign_key)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| namespace | string | _"Namespace"_ |
| selector | string | _"Selector"_ |
| xsd_elements_or_attributes | [main_object](#main_object) | _"XSD Elements or Attributes"_ |
| referenced_xsd_keys | [xsd_unique_key](#xsd_unique_key) | _"References XSD Keys"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| **xsd_element** | [main_object](#main_object) | _"XSD Element"_ |
| namespace | string | _"Namespace"_ |
| selector | string | _"Selector"_ |
| xsd_elements_or_attributes | [main_object](#main_object) | _"XSD Elements or Attributes"_ |
| referenced_xsd_keys | [xsd_unique_key](#xsd_unique_key) | _"References XSD Keys"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `xsd_primary_key`

- Displayed as: _"XSD Primary Key"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_primary_key](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_primary_key)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| namespace | string | _"Namespace"_ |
| selector | string | _"Selector"_ |
| xsd_elements_or_attributes | [main_object](#main_object) | _"XSD Elements or Attributes"_ |
| referenced_by_xsd_keys | [xsd_foreign_key](#xsd_foreign_key) | _"Referenced by XSD Keys"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| **xsd_element** | [main_object](#main_object) | _"XSD Element"_ |
| namespace | string | _"Namespace"_ |
| selector | string | _"Selector"_ |
| xsd_elements_or_attributes | [main_object](#main_object) | _"XSD Elements or Attributes"_ |
| referenced_by_xsd_keys | [xsd_foreign_key](#xsd_foreign_key) | _"Referenced by XSD Keys"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `xsd_sequence`

- Displayed as: _"XSD Sequence"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_sequence](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_sequence)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| context | [main_object](#main_object) | _"Parent XSD Object"_ |
| namespace | string | _"Namespace"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| contains_elements | [main_object](#main_object) | _"Contains XSD Elements"_ |
| contains_attributes | [xsd_attribute](#xsd_attribute) | _"Contains XSD Attributes"_ |
| references_xsd_elements | [xsd_element_reference](#xsd_element_reference) | _"References XSD Elements"_ |
| references_xsd_attributes | [xsd_attribute_reference](#xsd_attribute_reference) | _"References XSD Attributes"_ |
| references_xsd_element_groups | [xsd_element_group_reference](#xsd_element_group_reference) | _"References XSD Element Groups"_ |
| references_xsd_attribute_groups | [xsd_attribute_group](#xsd_attribute_group) | _"References XSD Attribute Groups"_ |
| referenced_by_xsd_elements | [xsd_element_reference](#xsd_element_reference) | _"Referenced by XSD Elements"_ |
| referenced_by_xsd_element_groups | [xsd_element_reference](#xsd_element_reference) | _"Referenced by XSD Element Groups"_ |
| referenced_by_xsd_complex_types | [xsd_element_reference](#xsd_element_reference) | _"Referenced by XSD Complex Types"_ |
| xsd_complex_type_definition | [xsd_complex_type](#xsd_complex_type) | _"XSD Complex Type Definition"_ |
| xsd_simple_type_definition | [xsd_simple_type](#xsd_simple_type) | _"XSD Simple Type Definition"_ |
| data_type | string | _"Data Type"_ |
| extends_xsd_complex_type | [xsd_complex_type](#xsd_complex_type) | _"Extends XSD Complex Type"_ |
| restricts_xsd_complex_type | [xsd_complex_type](#xsd_complex_type) | _"Restricts XSD Complex Type"_ |
| restricts_xsd_simple_type | [xsd_simple_type](#xsd_simple_type) | _"Restricts XSD Simple Type"_ |
| is_abstract | boolean | _"Abstract"_ |
| type | enum | _"Type"_: `All`, `Choice`, `Sequence` |
| default_value | string | _"Default Value"_ |
| fixed_value | string | _"Fixed Value"_ |
| length | number | _"Length"_ |
| min_length | number | _"Minimum Length"_ |
| max_length | number | _"Maximum Length"_ |
| fraction_digits | number | _"Fraction Digits"_ |
| min_occurs | number | _"Minimum Occurrence"_ |
| max_occurs | number | _"Maximum Occurrence"_ |
| is_nullable | boolean | _"Allow Null Values"_ |
| total_digits | number | _"Total Digits"_ |
| white_space | string | _"Total Whitespace"_ |
| timezone | string | _"Timezone"_ |
| name_form | string | _"Form"_ |
| primary_keys | [xsd_primary_key](#xsd_primary_key) | _"Primary Keys"_ |
| unique_keys | [xsd_unique_key](#xsd_unique_key) | _"Unique Keys"_ |
| foreign_keys | [xsd_foreign_key](#xsd_foreign_key) | _"Foreign Keys"_ |
| pattern_expression | string | _"Pattern"_ |
| minimum_range | string | _"Minimum Range"_ |
| is_minimum_range_inclusive | boolean | _"Minimum Range Inclusive"_ |
| maximum_range | string | _"Maximum Range"_ |
| is_maximum_range_inclusive | boolean | _"Maximum Range Inclusive"_ |
| enumeration_value | string | _"Enumeration Values"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `xsd_simple_type`

- Displayed as: _"XSD Simple Type"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_simple_type](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_simple_type)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| notes | note | _"Notes"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| name | string | _"Name"_ |
| short_description | string | _"Short Description"_ |
| long_description | string | _"Long Description"_ |
| xsd_schema | [xml_schema_definition](#xml_schema_definition) | _"XSD Schema"_ |
| labels | [label](#label) | _"Labels"_ |
| stewards | [ascl_steward](#ascl_steward) | _"Stewards"_ |
| assigned_to_terms | [term](#term) | _"Assigned to Terms"_ |
| implements_rules | [information_governance_rule](#information_governance_rule) | _"Implements Rules"_ |
| governed_by_rules | [information_governance_rule](#information_governance_rule) | _"Governed by Rules"_ |
| defines_xsd_elements | [main_object](#main_object) | _"Defines XSD Elements"_ |
| defines_xsd_attributes | [xsd_attribute](#xsd_attribute) | _"Defines XSD Attributes"_ |
| extends_xsd_simple_type | [xsd_simple_type](#xsd_simple_type) | _"Extends XSD Simple Type"_ |
| extended_by_xsd_simple_type | [xsd_simple_type](#xsd_simple_type) | _"Extended by XSD Simple Types"_ |
| restricts_xsd_simple_type | [xsd_simple_type](#xsd_simple_type) | _"Restricts XSD Simple Type"_ |
| restricted_by_xsd_simple_type | [xsd_simple_type](#xsd_simple_type) | _"Restricted by XSD Simple Types"_ |
| extends_xsd_element | [main_object](#main_object) | _"Extends XSD Elements"_ |
| restricts_xsd_element | [main_object](#main_object) | _"Restricts XSD Elements"_ |
| extended_by_xsd_complex_type | [xsd_complex_type](#xsd_complex_type) | _"Extended by XSD Complex Types"_ |
| base_type | string | _"Data Type"_ |
| length | number | _"Length"_ |
| max_length | number | _"Maximum Length"_ |
| min_length | number | _"Minimum Length"_ |
| fraction | number | _"Fraction"_ |
| total_digits | number | _"Total Digits"_ |
| whitespace | string | _"Whitespace"_ |
| timezone | string | _"Timezone"_ |
| final | string | _"Final"_ |
| restriction_pattern | string | _"Pattern"_ |
| restriction_minimum_value | string | _"Minimum Range"_ |
| restriction_minimum_inclusive | boolean | _"Minimum Range Inclusive"_ |
| restriction_maximum_value | string | _"Maximum Range"_ |
| restriction_maximum_inclusive | boolean | _"Maximum Range Inclusive"_ |
| restriction_enumeration_values | string | _"Enumeration Values"_ |
| in_collections | [collection](#collection) | _"In Collections"_ |
| notes | note | _"Notes"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |


## `xsd_unique_key`

- Displayed as: _"XSD Unique Key"_
- Path: [https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_unique_key](#https://b7cg-dom.fyre.ibm.com:9446/ibm/iis/igc-rest/v1/types/xsd_unique_key)

#### Properties valid for editing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| namespace | string | _"Namespace"_ |
| selector | string | _"Selector"_ |
| xsd_elements_or_attributes | [main_object](#main_object) | _"XSD Elements or Attributes"_ |
| referenced_by_xsd_keys | [xsd_foreign_key](#xsd_foreign_key) | _"Referenced by XSD Keys"_ |

#### Properties valid for viewing:

| Name | Type | Details |
| ---- | ---- | ---- |
| **name** | string | _"Name"_ |
| **xsd_element** | [main_object](#main_object) | _"XSD Element"_ |
| namespace | string | _"Namespace"_ |
| selector | string | _"Selector"_ |
| xsd_elements_or_attributes | [main_object](#main_object) | _"XSD Elements or Attributes"_ |
| referenced_by_xsd_keys | [xsd_foreign_key](#xsd_foreign_key) | _"Referenced by XSD Keys"_ |
| created_by | string | _"Created By"_ |
| created_on | datetime | _"Created On"_ |
| modified_by | string | _"Modified By"_ |
| modified_on | datetime | _"Modified On"_ |

