module.exports = {
  "id": "keyword.json#",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "schema for a keyword entry",
  "example": "../examples/keyword.json",
  "type": "object",
  "required": ["keyword"],
  "additionalProperties": true,
  "properties": {
    "keyword": {
      "type": "array",
      "description": "Commonly used word(s) or formalized word(s) or phrase(s) used to describe the subject.",
      "translation": {
        "ISO 19115-2": ["MD_Keywords > keyword"],
        "FGDC CSDGM": ["idinfo>keywords>theme>themekey",
          "idinfo>keywords>place>placekey",
          "idinfo>keywords>temporal>tempkey",
          "idinfo>keywords>stratum>stratkey"
        ]
      },
      "items": {
        "$ref": "#/definitions/keywordObject"
      },
      "uniqueItems": true
    },
    "keywordType": {
      "type": "string",
      "description": "A code, or concept, that defines the subject matter used to group similar keywords.",
      "translation": {
        "ISO 19115-2": ["MD_Keywords > type"]
      }
    },
    "thesaurus": {
      "description": "Name of the formally registered thesaurus or a similar authoritative source of keywords.",
      "translation": {
        "ISO 19115-2": ["MD_Keywords > thesaurusName > CI_Citation"],
        "FGDC CSDGM": ["idinfo>keywords>theme>themekt",
          "idinfo>keywords>place>placekt", "idinfo>keywords>temporal>tempkt",
          "idinfo>keywords>stratum>stratkt"
        ]
      },
      "$ref": "citation.json#"
    }
  },
  "oneOf": [{
    "$ref": "#/definitions/isoTopicCategory"
  }, {
    "title": "not an isoTopicCategory",
    "type": "object",
    "properties": {
      "keywordType": {
        "not": {
          "enum": ["isoTopicCategory"]
        }
      }
    }
  }],
  "definitions": {
    "keywordObject": {
      "type": "object",
      "title": "keywordObject",
      "example": "../examples/keyword.json#/0/keyword/0",
      "required": ["keyword"],
      "additionalProperties": true,
      "properties": {
        "keyword": {
          "type": "string",
          "description": "Commonly used word(s) or formalized word(s) or phrase(s) used to describe the subject."
        },
        "keywordId": {
          "type": "string",
          "description": "Identifier for the keyword."
        }
      }
    },
    "isoTopicCategory": {
      "type": "object",
      "title": "type is isoTopicCategory",
      "required": ["keyword", "keywordType"],
      "properties": {
        "keywordType": {
          "enum": ["isoTopicCategory"],
          "description": "ISO Topic Category keywords. Keywords must match list defined by ISO 19115.",
          "translation": {
            "ISO 19115-2": ["MD_Keywords > type"]
          }
        },
        "keyword": {
          "type": "array",
          "description": "Array of ISO Topic Category keywords.",
          "translation": {
            "ISO 19115-2": ["MD_Keywords > keyword"],
            "FGDC CSDGM": ["idinfo>keywords>theme>themekey",
              "idinfo>keywords>place>placekey",
              "idinfo>keywords>temporal>tempkey",
              "idinfo>keywords>stratum>stratkey"
            ]
          },
          "items": {
            "type": "object",
            "title": "isoTopicCategory",
            "properties": {
              "keyword": {
                "enum": ["farming", "biota", "boundaries",
                  "climatologyMeteorologyAtmosphere", "economy",
                  "elevation", "environment",
                  "geoscientificInformation",
                  "health", "imageryBaseMapsEarthCover",
                  "intelligenceMilitary", "inlandWaters", "location",
                  "oceans", "planningCadastre", "society", "structure",
                  "transportation", "utilitiesCommunication",
                  "extraTerrestrial", "disaster"
                ],
                "description": "ISO Topic Category keyword."
              }
            },
            "oneOf": [{
              "$ref": "#/definitions/keywordObject"
            }]
          },
          "uniqueItems": true
        }
      }
    }
  }
}
;