module.exports = {
  "id": "extent.json#",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "description": "Information about the geographic, vertical, and temporal extent of a resource.",
  "example": "../examples/extent.json",
  "translation": {
    "ISO 19115-2": ["EX_Extent"]
  },
  "additionalProperties": true,
  "anyOf": [{
      "title": "description is required",
      "required": ["description"]
    },
    {
      "title": "geographicExtent is required",
      "required": ["geographicExtent"]
    }, {
      "title": "verticalExtent is required",
      "required": ["verticalExtent"]
    },
    {
      "title": "temporalExtent is required",
      "required": ["temporalExtent"]
    }
  ],
  "properties": {
    "description": {
      "type": "string",
      "description": "Description of the extent.",
      "translation": {
        "ISO 19115-2": ["EX_Extent > description"]
      }
    },
    "geographicExtent": {
      "type": "array",
      "items": {
        "$ref": "./geographicExtent.json#"
      }
    },
    "verticalExtent": {
      "type": "array",
      "description": "An array of objects each describing a vertical boundary comprising all or a portion of the resource.",
      "translation": {
        "ISO 19115-2": ["EX_Extent > verticalElement > EX_VerticalExtent "]
      },
      "items": {
        "$ref": "./verticalExtent.json#"
      }
    },
    "temporalExtent": {
      "type": "array",
      "description": "An array of objects each describing a temporal boundary comprising all or a portion of the resource.",
      "items": {
        "$ref": "./temporalExtent.json#"
      }
    }
  }
}
;