module.exports = {
  "id": "maintInfo.json#",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "description": "Information about the maintenance of a resource.",
  "example": "../examples/maintenance.json",
  "translation": {
    "ISO 19115-2": ["MD_MaintenanceInformation"]
  },
  "codelist": "iso_maintenanceFrequency",
  "required": ["frequency"],
  "additionalProperties": true,
  "properties": {
    "frequency": {
      "type": "string",
      "description": "Describes the frequency of additions and updates made to a resource.",
      "translation": {
        "ISO 19115-2": ["MD_MaintenanceInformation > maintenanceAndUpdateFrequency [MD_MaintenanceFrequencyCode]"]
      }
    },
    "date": {
      "type": "array",
      "description": "Date related to resource maintenance.",
      "translation": {},
      "items": {
        "$ref": "common.json#/definitions/dateObject"
      }
    },
    "scope": {
      "type": "array",
      "description": "Type of resource to which the maintenance information applies.",
      "translation": {},
      "items": {
        "$ref": "./scope.json#"
      }
    },
    "note": {
      "type": "array",
      "description": "Notes regarding the maintenance of the resource.",
      "translation": {
        "ISO 19115-2": ["MD_MaintenanceInformation > maintenanceNote"]
      },
      "items": {
        "type": "string"
      }
    },
    "contact": {
      "type": "array",
      "description": "Contact information for the maintainer of the resource.",
      "translation": {
        "ISO 19115-2": ["MD_MaintenanceInformation > contact > CI_Contact"],
        "FGDC CSDGM": ["metainfo > metc"]
      },
      "uniqueItems": true,
      "items": {
        "$ref": "./responsibility.json#"
      }
    }
  }
}
;