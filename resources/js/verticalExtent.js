module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "verticalExtent.json#",
  "type": "object",
  "description": "Vertical element of an extent.",
  "example": "../examples/verticalExtent.json",
  "translation": {
    "ISO 19115-2": ["EX_Extent > verticalElement > EX_VerticalExtent "]
  },
  "additionalProperties": true,
  "required": ["minValue", "maxValue", "crsId"],
  "properties": {
    "description": {
      "type": "string",
      "description": "A brief description providing relevant information about the verticalExtent."
    },
    "minValue": {
      "type": "number",
      "description": "Lowest vertical extent contained in the resource.",
      "translation": {
        "ISO 19115-2": ["EX_VerticalExtent > minimumValue > Real "]
      }
    },
    "maxValue": {
      "type": "number",
      "description": "Highest vertical extent contained in the resource.",
      "translation": {
        "ISO 19115-2": ["EX_VerticalExtent > maximumValue > Real "]
      }
    },
    "crsId": {
      "$ref": "./spatialReference.json#",
      "description": "Identifies the vertical coordinate reference system used for the minimum and maximum values."
    }
  }
}
;