module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "attributeGroup.json#",
  "type": "object",
  "description": "Information about groups of attributes describing a coverage.",
  "example":"../examples/attributeGroup.json",
  "required": ["attributeContentType"],
  "additionalProperties": true,
  "properties": {
    "attributeContentType": {
      "type": "array",
      "description": "Type of information represented by the values",
      "translation": {
        "ISO 19115-2": ["MI_ImageDescription | MI_CoverageDescription > contentType"]
      },
      "items": {
        "type": "string"
      }
    },
    "attribute": {
      "type": "array",
      "description": "",
      "translation": {},
      "items": {
        "$ref": "./attribute.json#"
      }
    }
  }
}
;