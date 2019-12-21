# mapbox GL JS cheetsheet

[Mapbox GL JS vs. Mapbox.js](https://stackoverflow.com/questions/35069753/mapbox-gl-js-vs-mapbox-js)

## Mapbox GL JS

Mapbox GL JS is a JavaScript library that uses WebGL to render interactive maps from vector tiles and Mapbox styles.

## Vector tiles

A vector tile is a lightweight data format for storing geospatial vector data, such as points, lines, and polygons.

- [Vector tile specification](https://docs.mapbox.com/vector-tiles/specification/)
- [Awesome Vector Tiles](https://github.com/mapbox/awesome-vector-tiles)

## Mapbox Style specification

A Mapbox style is a document that defines the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it. A style document is a JSON object with specific root level and nested properties.

```js
{
    "version": 8,
    "name": "Mapbox Streets",
    "sprite": "mapbox://sprites/mapbox/streets-v8",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "sources": {
        "mapbox-streets": {
            "type": "vector",
            "url": "mapbox://mapbox.mapbox-streets-v6"
        }
    },
    "layers": [
        {
            "id": "water",
            "source": "mapbox-streets",
            "source-layer": "water",
            "type": "fill",
            "paint": {
            "fill-color": "#00ffff"
            }
        }
    ],
    "light": {
        "anchor": "viewport",
        "color": "white",
        "intensity": 0.4
    }
}
```

[Mapbox Style Specs](https://docs.mapbox.com/mapbox-gl-js/style-spec/)

# References

- [Mapbox GL Docs](https://docs.mapbox.com/mapbox-gl-js/api/#map)
- [The State of Vector Tiles](https://www.youtube.com/watch?v=se2cd3BMYRY)
- [OpenLayers Workshop](https://openlayers.org/workshop/en/vectortile/map.html)
- [geosandbox](https://joeyklee.github.io/geosandbox/hello-mapboxgl.html)

---

# Mapbox.js course

This cheatsheet is build using `mapbox.js/v2.0.1` that extends leaflet.js().

## Display a map

##

[Getting Started With the Mapbox JavaScript API, by Alex Korkan](https://app.pluralsight.com/library/courses/getting-started-mapbox-javascript/table-of-contents)
