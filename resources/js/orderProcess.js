module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "orderProcess.json#",
  "type": "object",
  "title": "orderProcess",
  "description": "Provides information about how the resource may be obtained and related instructions and fee information.",
  "translation": {
    "ISO 19115-2": ["MD_Distribution > distributor > MD_Distributor > distributionOrderProcess > MD_StandardOrderProcess"]
  },
  "example":"../examples/orderProcess.json",
  "additionalProperties": true,
  "properties": {
    "fees": {
      "type": "string",
      "description": "Fees and terms for retrieving the resource, including monetary units.",
      "translation": {
        "ISO 19115-2": ["MD_StandardOrderProcess > fees"],
        "FGDC CSDGM": ["distinfo > stdorder > fees"]
      }
    },
    "plannedAvailability": {
      "description": "Date and time when the resource will be available.",
      "translation": {
        "ISO 19115-2": ["MD_StandardOrderProcess > plannedAvailabilityDateTime"]
      },
      "$ref": "common.json#/definitions/date"
    },
    "orderingInstructions": {
      "type": "string",
      "description": "General instructions, terms and services provided by the distributor.",
      "translation": {
        "ISO 19115-2": ["MD_StandardOrderProcess > orderingInstructions"],
        "FGDC CSDGM": ["distinfo > stdorder > digform > digtopt > onlinopt > accinstr"]
      }
    },
    "turnaround": {
      "type": "string",
      "description": "Typical turnaround time for the filling of an order.",
      "translation": {
        "ISO 19115-2": ["MD_StandardOrderProcess > turnaround"],
        "FGDC CSDGM": ["distinfo > stdorder > turnarnd"]
      }
    }
  }
}
;