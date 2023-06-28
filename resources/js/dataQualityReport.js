module.exports = {
  "id": "dataQualityReport.json#",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "example": "../examples/dataQualityReport.json",
  "description": "Details about data quality.",
  "translation": {
    "ISO 19115-2": ["MI_Metadata > DQ_DataQuality > standaloneQualityReport"]
  },
  "properties": {
    "qualityMeasure": {
      "$ref": "./qualityMeasure.json#"
    },
    "evaluationMethod": {
      "$ref": "./evaluationMethod.json#"
    },
    "quantitativeResult": {
      "type": "array",
      "items": {
        "$ref": "./quantitativeResult.json#"
      }
    },
    "descriptiveResult": {
      "type": "array",
      "items": {
        "$ref": "./descriptiveResult.json#"
      }
    },
    "conformanceResult": {
      "type": "array",
      "items": {
        "$ref": "./conformanceResult.json#"
      }
    },
    "coverageResult": {
      "type": "array",
      "items": {
        "$ref": "./coverageResult.json#"
      }
    }
  }
}
;