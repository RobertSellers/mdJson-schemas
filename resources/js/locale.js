module.exports = {
  "id": "locale.json#",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "example":"../examples/locale.json",
  "description": "Localised language(s) and characterset(s) used within the resource being described.",
  "type": "object",
  "required": ["language", "characterSet"],
  "additionalProperties": true,
  "properties": {
    "language": {
      "type": "string",
      "description": "Language(s) used within the resource. Should be a valid ISO 639-3 code.",
      "translation": {
        "ISO 19115-2": ["MD_DataIdentification > language"]
      }
    },
    "characterSet": {
      "type": "string",
      "description": "Full name of the character encoding standard used by the resource(see http://www.iana.org/assignments/character-sets/character-sets.xhtml).",
      "translation": {
        "ISO 19115-2": ["MD_DataIdentification > characterSet [MD_CharacterSetCode]"]
      }
    },
    "country": {
      "type": "string",
      "description": "Designation of the specific country of the locale language(ISO 3166-1).",
      "translation": {
        "ISO 19115-2": ["MD_DataIdentification > characterSet [MD_CharacterSetCode]"]
      }
    }
  }
}
;