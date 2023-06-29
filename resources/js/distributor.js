module.exports = {
  "id": "distributor.json#",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "title": "distributor",
  "example":"../examples/distributor.json",
  "description": "Information about the distributor of and options for obtaining the resource.",
  "translation": {
    "ISO 19115-2": ["MD_Distribution"],
    "FGDC CSDGM": ["distinfo"]
  },
  "required": ["contact"],
  "additionalProperties": true,
  "properties": {
    "contact": {
      "description": "Party from whom the resource may be obtained. Note: This list need not be exhaustive.",
      "translation": {
        "ISO 19115-2": ["MD_Distribution > distributor > MD_Distributor > distributorContact > CI_ResponsibleParty"],
        "FGDC CSDGM": ["distinfo > distrib > cntinfo"]
      },
      "$ref": "./responsibility.json#"
    },
    "orderProcess": {
      "type": "array",
      "description": "Provides information about how the resource may be obtained and related instructions and fee information.",
      "translation": {
        "ISO 19115-2": ["MD_Distribution > distributor > MD_Distributor > distributionOrderProcess"]
      },
      "items": {
        "$ref":"./orderProcess.json#"
      }
    },
    "transferOption": {
      "type": "array",
      "description": "Describes method and media by which a resource is obtained from the distributor.",
      "translation": {
        "ISO 19115-2": ["MD_Distributor > distributorTransferOptions"],
        "FGDC CSDGM": ["distinfo > stdorder > digform > digtopt"]
      },
      "items": {
        "$ref": "./transferOption.json#"
      }
    }
  }
}
;