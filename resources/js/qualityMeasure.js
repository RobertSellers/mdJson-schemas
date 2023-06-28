module.exports = {
  "id": "qualityMeasure.json#",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "example": "../examples/qualityMeasure.json",
  "description": "Reference to the measure used",
  "translation": {
    "ISO 19115-2": ["MI_Metadata > DQ_DataQuality >"]
  },
  "properties": {
    "identifier": {
      "$ref": "./identifier.json#"
    },
    "name": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "description": {
      "type": "string"
    }
  }
}
;