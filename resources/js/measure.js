module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "measure.json#",
  "type": "object",
  "title": "measure",
  "description": "Number and type of units",
  "example": "../examples/measure.json",
  "required": ["type", "value", "unitOfMeasure"],
  "additionalProperties": true,
  "properties": {
    "type": {
      "enum": ["distance", "length", "angle", "measure", "scale"],
      "description": "The type of measurement.",
      "translation": {}
    },
    "value": {
      "type": "number",
      "description": "The number of units in the measurement.",
      "translation": {}
    },
    "unitOfMeasure": {
      "type": "string",
      "description": "The type of units to associated with the value.",
      "translation": {},
      "minLength": 1
    }
  }
}
;