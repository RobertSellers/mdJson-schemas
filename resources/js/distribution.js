module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "distribution.json#",
  "type": "object",
  "title": "distribution",
  "description": "Information about the distributor of and options for obtaining the resource.",
  "example": "../examples/distribution.json",
  "translation": {
    "ISO 19115-2": ["MD_Metadata > distribution > MD_Distribution"],
    "FGDC CSDGM": ["distinfo"]
  },
  "additionalProperties": true,
  "properties": {
    "description": {
      "type": "string",
      "description": "A description of a set of distribution options.",
      "translation": {}
    },
    "liabilityStatement": {
      "type": "string",
      "description": "A statement of the liability assumed by the resource owner.",
      "translation": {
        "ISO 19115-2": ["MD_DataIdentification > resourceConstraints > MD_LegalConstraints > otherConstraints"],
        "FGDC CSDGM": ["distinfo > distliab"],
        "sbJSON": ["rights"]
      }
    },
    "distributor": {
      "type": "array",
      "description": "Information about the distributor of and options for obtaining the resource.",
      "translation": {
        "ISO 19115-2": ["MD_Distribution"],
        "FGDC CSDGM": ["distinfo"]
      },
      "minItems": 1,
      "items": {
        "$ref": "./distributor.json#",
        "description": "Information about the distributor of and options for obtaining the resource."
      }
    }
  },
  "anyOf": [{
    "title": "description is required",
    "required": ["description"]
  }, {
    "title": "distributor is required",
    "required": ["distributor"]
  }]
}
;