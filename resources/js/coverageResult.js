module.exports = {
  "id": "coverageResult.json#",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "description": "",
  "translation": {
    "ISO 19115-2": ["MI_Metadata > DQ_DataQuality > Report > coverageResult"]
  },
  "properties": {
    "dateTime": {
      "type": "string"
    },
    "scope": {
      "$ref": "./scope.json#"
    },
    "spatialRepresentationType": {
      "type": "string"
    },
    "spatialRepresentation": {
      "$ref": "./spatialRepresentation.json#"
    },
    "resultContent": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "resourceFormat": {
      "type": "string"
    },
    "resultFile": {
      "type": "string"
    }
  }
}
;