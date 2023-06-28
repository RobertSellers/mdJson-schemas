module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "additionalDocumentation.json#",
  "type": "object",
  "title": "additionalDocumentation",
  "description": "Other documents related to, but not defining, the resource such as factsheets, data catalog pages, award documents, proposals, and informational websites.",
  "translation": {
    "ISO 19115-2": ["MD_DataIdentification > aggregationInfo > MD_AggregateInformation > aggregateDataSetName > CI_Citation"],
    "FGDC CSDGM": ["idinfo > crossref "]
  },
  "example": "../examples/additionalDocumentation.json",
  "required": ["citation", "resourceType"],
  "properties": {
    "resourceType": {
      "type": "array",
      "description": "Identifies the type of resource, such as: userGuide, website, report, etc.",
      "translation": {
        "ISO 19115-2": ["[MD_ScopeCode]"]
      },
      "minItems": 1,
      "items": {
        "$ref": "./resourceType.json#"
      }
    },
    "citation": {
      "type": "array",
      "description": "Citation for the additional resource.",
      "translation": {},
      "items": {
        "$ref": "citation.json#"
      }
    }
  }
}
;