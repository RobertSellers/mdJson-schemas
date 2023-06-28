module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "geometry.json#",
  "title": "geometry",
  "description": "A geometry is a GeoJSON object where the type member's value is one of the following strings: \"Point\", \"MultiPoint\", \"LineString\", \"MultiLineString\", \"Polygon\", \"MultiPolygon\", or \"GeometryCollection\".\n\nA GeoJSON geometry object of any type other than \"GeometryCollection\" must have a member with the name \"coordinates\". The value of the coordinates member is always an array. The structure for the elements in this array is determined by the type of geometry.",
  "example": "../examples/geometryObject.json",
  "translation": {
    "ISO 19115-2": ["EX_Extent > geographicElement > EX_BoundingPolygon > polygon > [Point | LineString | Polygon > [interior | exterior] | MultiGeometry]"]
  },
  "type": "object",
  "required": ["type", "coordinates"],
  "oneOf": [{
    "title": "Point",
    "type": "object",

    "description": "A point geometry object.",
    "example": "../examples/geometryObject.json",
    "translation": {
      "ISO 19115-2": ["EX_Extent > geographicElement > EX_BoundingPolygon > polygon > Point"]
    },
    "properties": {
      "type": {
        "enum": ["Point"],
        "description": "Type of geometry object."
      },
      "coordinates": {
        "description": "The position representing a point, represented by an array of numbers following x, y, z order (easting, northing, altitude for coordinates in a projected coordinate reference system, or longitude, latitude, altitude for coordinates in a geographic coordinate reference system).",
        "translation": {
          "ISO 19115-2": ["EX_Extent > geographicElement > EX_BoundingPolygon > polygon > Point > coordinates"]
        },
        "$ref": "#/definitions/position"
      }
    }
  }, {
    "title": "MultiPoint",
    "type": "object",

    "description": "A geographic object comprised of multiple points.",
    "example": "../examples/geometryObject.json",
    "translation": {
      "ISO 19115-2": ["EX_Extent > geographicElement > EX_BoundingPolygon > polygon > MultiGeometry > geometryMembers > Point[ ]"]
    },
    "properties": {
      "type": {
        "enum": ["MultiPoint"],
        "description": "Type of geometry object."
      },
      "coordinates": {
        "description": "The set of positions that constitute the MultiPoint geometry.",
        "translation": {
          "ISO 19115-2": ["EX_Extent > geographicElement > EX_BoundingPolygon > polygon > MultiGeometry > geometryMembers > Point[ ] > coordinates"]
        },
        "$ref": "#/definitions/positionArray"
      }
    }
  }, {
    "title": "LineString",
    "type": "object",
    "description": "A geometry object comprised of a minimum of two positions.",
    "example": "../examples/geometryObject.json",
    "translation": {
      "ISO 19115-2": ["EX_Extent > geographicElement > EX_BoundingPolygon > polygon > LineString"]
    },
    "properties": {
      "type": {
        "enum": ["LineString"],
        "description": "Type of geometry object."
      },
      "coordinates": {
        "description": "The set of positions that constitute the LineString geometry.",
        "translation": {
          "ISO 19115-2": ["EX_Extent > geographicElement > EX_BoundingPolygon > polygon > LineString > coordinates"]
        },
        "$ref": "#/definitions/lineString"
      }
    }
  }, {
    "title": "MultiLineString",
    "type": "object",
    "description": "A geometry object comprised of one or more LineStrings.",
    "example": "../examples/geometryObject.json",
    "translation": {
      "ISO 19115-2": ["EX_Extent > geographicElement > EX_BoundingPolygon > polygon > MultiGeometry > geometryMembers > LineString[ ]"]
    },
    "properties": {
      "type": {
        "enum": ["MultiLineString"],
        "description": "Type of geometry object."
      },
      "coordinates": {
        "type": "array",
        "description": "The set of LineString(s) that constitute the MultiLineString.",
        "translation": {
          "ISO 19115-2": ["EX_Extent > geographicElement > EX_BoundingPolygon > polygon > MultiGeometry > geometryMembers > LineString[ ] > coordinates"]
        },
        "items": {
          "$ref": "#/definitions/lineString"
        }
      }
    }
  }, {
    "title": "Polygon",
    "type": "object",
    "description": "A geometry object that is composed of a set of LinearRings. A LinearRing is a closed LineString with 4 or more positions. The first and last positions are equivalent (they represent equivalent points).\n\nFor Polygons with multiple rings, the first must be the exterior ring and any others must be interior rings or holes.",
    "example": "../examples/geometryObject.json",
    "translation": {
      "ISO 19115-2": ["EX_Extent > geographicElement > EX_BoundingPolygon > polygon > Polygon"]
    },
    "properties": {
      "type": {
        "enum": ["Polygon"],
        "description": "Type of geometry object."
      },
      "coordinates": {
        "$ref": "#/definitions/polygon"
      }
    }
  }, {
    "title": "MultiPolygon",
    "type": "object",
    "description": "A geometry object comprised of multiple polygons. ",
    "example": "../examples/geometryObject.json",
    "translation": {
      "ISO 19115-2": ["EX_Extent > geographicElement > EX_BoundingPolygon > polygon > MultiGeometry > geometryMembers > Polygon[ ]"]
    },
    "properties": {
      "type": {
        "enum": ["MultiPolygon"],
        "description": "Type of geometry object."
      },
      "coordinates": {
        "type": "array",
        "description": "The set of Polygons that constitute the MultiPolygon.",
        "translation": {
          "ISO 19115-2": ["EX_Extent > geographicElement > EX_BoundingPolygon > polygon > MultiGeometry > geometryMembers > Polygon[ ] > [exterior > LinearRing > coordinates | interior[ ] > LinearRing > coordinates]"]
        },
        "items": {
          "$ref": "#/definitions/polygon"
        }
      }
    }
  }],
  "definitions": {
    "position": {
      "title": "position",
      "description": "A position is the fundamental geometry construct. A position is represented by an array of numbers following x, y, z order (easting, northing, altitude for coordinates in a projected coordinate reference system, or longitude, latitude, altitude for coordinates in a geographic coordinate reference system).",
      "type": "array",
      "minItems": 2,
      "maxItems": 3,
      "items": {
        "type": "number"
      },
      "additionalItems": false
    },
    "positionArray": {
      "title": "positionArray",
      "description": "An array of positions",
      "type": "array",
      "items": {
        "$ref": "#/definitions/position"
      }
    },
    "lineString": {
      "title": "lineString",
      "description": "An array of two or more positions",
      "allOf": [{
        "$ref": "#/definitions/positionArray"
      }, {
        "title": "minimum 2",
        "description": "The LineString must consist of two or more positions",
        "minItems": 2
      }]
    },
    "linearRing": {
      "title": "LinearRing",
      "description": "An array of a minimum of four positions where the first equals the last",
      "allOf": [{
        "$ref": "#/definitions/positionArray"
      }, {
        "title": "minimum 4",
        "description": "A LinearRing is a closed LineString with 4 or more positions.",
        "minItems": 4
      }]
    },
    "polygon": {
      "title": "Polygon",
      "description": "A set of LinearRings that constitute a Polygon geometry. For Polygons with multiple rings, the first must be the exterior ring and any others must be interior rings or holes.",
      "translation": {
        "ISO 19115-2": ["EX_Extent > geographicElement > EX_BoundingPolygon > polygon > Polygon > [exterior > LinearRing > coordinates | interior[ ] > LinearRing > coordinates]"]
      },
      "type": "array",
      "items": {
        "$ref": "#/definitions/linearRing"
      }
    }
  }
}
;