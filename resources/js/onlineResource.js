module.exports = {
  "id": "onlineResource.json#",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "description": "Information about accessing online resources and services.",
  "example": "../examples/onlineResource.json",
  "required": ["uri"],
  "additionalProperties": true,
  "properties": {
    "uri": {
      "$ref": "common.json#/definitions/uri"
    },
    "name": {
      "type": "string",
      "description": "Name of the online resource.",
      "translation": {
        "ISO 19115-2": ["CI_OnlineResource > name"]
      }
    },
    "protocol": {
      "type": "string",
      "description": "The connection protocol to be used such as: ftp, http, etc.",
      "translation": {
        "ISO 19115-2": ["CI_OnlineResource > protocol"]
      }
    },
    "description": {
      "type": "string",
      "description": "Detailed text description of what the online resource is/does.",
      "translation": {
        "ISO 19115-2": ["CI_OnlineResource > description"]
      }
    },
    "function": {
      "type": "string",
      "description": "Function performed by the online resource.",
      "translation": {
        "ISO 19115-2": ["CI_OnlineResource > function > CI_OnlineFunctionCode [codelist]"]
      }
    },
    "applicationProfile": {
      "type": "string",
      "description": "Name of an application profile that can be used with the online resource.",
      "translation": {
        "ISO 19115-2": ["CI_OnlineResource > applicationProfile"]
      }
    },
    "protocolRequest": {
      "type": "string",
      "description": "Request used to access the resource depending on the protocol, e.g. body of POST(http)_ request.",
      "translation": {
        "ISO 19115-1": ["CI_OnlineResource > protocolRequest"]
      }
    }
  }
}
;