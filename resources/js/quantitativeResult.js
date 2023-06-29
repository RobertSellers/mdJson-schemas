module.exports = {
  "id": "quantitativeResult.json#",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "example": "../examples/quantitativeResult.json",
  "description": "",
  "translation": {
    "ISO 19115-2": ["MI_Metadata > DQ_DataQuality > Report > quantitativeResult"]
  },
  "properties": {
    "dateTime": {
      "type": "string"
    },
    "scope": {
      "$ref": "./scope.json#"
    },
    "value": {
      "type": "array",
      "items": {
        "type": "number"
      }
    },
    "valueUnits": {
      "type": "string"
    },
    "valueRecordType": {
      "type": "string"
    }
  }
}
;