module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "resourceType.json#",
  "type": "object",
  "title": "resourceType",
  "description": "Identifies the kinds and scope of items in the resource",
  "example": "../examples/resourceType.json",
  "required": ["type"],
  "additionalProperties": true,
  "properties": {
    "type": {
      "type": "string",
      "description": "The type of resource(or component of a resource) being described.",
      "translation": {},
      "codelist": "iso_scope",
      "minLength": 1
    },
    "name": {
      "type": "string",
      "description": "The name of the resource component.",
      "translation": {}
    }
  }
}
;