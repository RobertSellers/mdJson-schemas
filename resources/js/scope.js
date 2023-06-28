module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "scope.json#",
  "type": "object",
  "title": "",
  "description": "The target resource and physical extent for which information is reported.",
  "example": "../examples/scope.json",
  "additionalProperties": true,
  "required": ["scopeCode"],
  "properties": {
    "scopeCode": {
      "type": "string",
      "title": "",
      "description": "Class of information to which the resource applies.",
      "translation": {}
    },
    "scopeDescription": {
      "type": "array",
      "description": "Detailed description/listing of the items specified by the scope.",
      "translation": {},
      "items": {
        "$ref": "#/definitions/scopeDescription"
      }
    },
    "scopeExtent": {
      "type": "array",
      "description": "Information about the horizontal, vertical and temporal extent of the resource specified by the scope.",
      "translation": {},
      "items": {
        "$ref": "./extent.json#"
      }
    }
  },
  "definitions": {
    "scopeDescription": {
      "type": "object",
      "additionalProperties": true,
      "minProperties": 1,
      "properties": {
        "dataset": {
          "type": "string",
          "description": "Dataset to which the information applies.",
          "translation": {}
        },
        "attributes": {
          "type": "string",
          "description": "Instances of attribute types to which the information is applied.",
          "translation": {}
        },
        "features": {
          "type": "string",
          "description": "Instances of feature types to which the information is applied.",
          "translation": {}
        },
        "other": {
          "type": "string",
          "description": "Class of information that does not fall into the other categories to which the information applies.",
          "translation": {}
        }
      }
    }
  }
}
;