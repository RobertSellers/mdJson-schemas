module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "vectorRepresentation.json#",
  "type": "object",
  "description": "Information about the vector spatial objects in the resource",
  "example": "../examples/vectorRepresentation.json",
  "minProperties": 1,
  "additionalProperties": true,
  "properties": {
    "scope": {
      "type": "array",
      "minItems": 0,
      "description": "Level and extent of the spatial representation",
      "translation": {
        "ISO 19115-1": ["spatialRepresentationInfo > MD_GridSpatialRepresentation > scope"],
        "ISO 19115-2": ["spatialRepresentationInfo > MD_GridSpatialRepresentation > scope"],
        "FGDC CSDGM": ["no translation"]
      },
      "items": {
        "$ref": "./scope.json#"
      }
    },
    "topologyLevel": {
      "type": "string",
      "description": "Identifies the degree of complexity of the spatial relationships",
      "translation": {}
    },
    "vectorObject": {
      "type": "array",
      "minItems": 1,
      "description": "Information about the geometric objects used in the resource",
      "translation": {},
      "items": {
        "$ref": "#/definitions/vectorObject"
      }
    }
  },
  "anyOf": [{
    "title": "vectorObject is required",
    "required": ["vectorObject"]
  }, {
    "title": "topologyLevel is required",
    "required": ["topologyLevel"]
  }],
  "definitions": {
    "vectorObject": {
      "type": "object",
      "description": "Information about the geometric objects used in the resource.",
      "example": "../examples/vectorObject.json",
      "translation": {},
      "required": ["objectType"],
      "additionalProperties": true,
      "properties": {
        "objectType": {
          "type": "string",
          "description": "Name of point or vector objects used to locate zero-, one-, two-, or three-dimensional spatial locations in the resource.",
          "translation": {},
          "minLength": 1
        },
        "objectCount": {
          "type": "integer",
          "description": "The total number of point or vector objects occurring in the dataset.",
          "translation": {}
        }
      }
    }
  }
}
;