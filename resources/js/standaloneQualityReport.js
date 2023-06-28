module.exports = {
  "id": "standaloneQualityReport.json#",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "example": "../examples/standaloneQualityReport.json",
  "description": "Details about data quality.",
  "translation": {
    "ISO 19115-2": ["MI_Metadata > DQ_DataQuality > standaloneQualityReport"]
  },
  "required": ["abstract"],
  "properties": {
    "reportReference": {
      "translation": {
        "ISO 19115-2": ["DQ_DataQuality > standaloneQualityReport > reportReference"]
      },
      "$ref": "./citation.json#"
    },
    "abstract": {
      "translation": {
        "ISO 19115-2": ["DQ_DataQuality > standaloneQualityReport > abstract"]
      },
      "type": "string"
    }
  }
}
;