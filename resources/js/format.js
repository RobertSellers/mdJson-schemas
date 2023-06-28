module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "format.json#",
  "type": "object",
  "title": "format",
  "description": "Provides information about the format used.",
  "example": "../examples/format.json",
  "translation": {
    "ISO 19115-2": ["MD_Format"],
    "FGDC CSDGM": ["distinfo > stdorder > digform"]
  },
  "required": ["formatSpecification"],
  "additionalProperties": true,
  "properties": {
    "formatSpecification": {
      "$ref": "./citation.json#",
      "translation": {
        "ISO 19115-2": ["MD_Format > name", "MD_Format > version"],
        "FGDC CSDGM": ["distinfo > stdorder > digform > digtinfo > formname", "idinfo > citation > citeinfo > edition"]
      },
      "description": "Citation of the specification for the format."
    },
    "amendmentNumber": {
      "type": "string",
      "description": "Amendment number of the format version.",
      "translation": {},
      "minLength": 1
    },
    "compressionMethod": {
      "type": "string",
      "description": "Recommendations of algorithms or processes that can be applied to read or expand resources to which compression techniques have been applied.",
      "translation": {},
      "minLength": 1
    },
    "technicalPrerequisite": {
      "type": "string",
      "description": "Description of any technical capabilities that the consumer must have to use the data set in the form(s) provided by the distributor.",
      "translation": {
        "FGDC CSDGM": ["distinfo > techpreq"]
      },
      "minLength": 1
    }

  }
}
;