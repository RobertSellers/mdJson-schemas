module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "releasability.json#",
  "type": "object",
  "description": "Information about resource release constraints.",
  "example":"../examples/releasability.json",
  "minProperties": 1,
  "additionalProperties": true,
  "properties": {
    "addressee": {
      "type": "array",

      "minItems": 1,
      "items": {
        "$ref": "./responsibility.json#"
      }
    },
    "statement": {
      "type": "string",
      "description": "The release statement.",
            "translation": {},
      "minLength": 1
    },
    "disseminationConstraint": {
      "type": "array",
      "description": "Factor in determining releasability",
            "translation": {},
      "items": {
        "type": "string"
      }
    }
  },
  "anyOf": [{
    "title": "Addressee is required.",
    "required": ["addressee"]
  }, {
    "title": "Statement is required.",
    "required": ["statement"]
  }]
}
;