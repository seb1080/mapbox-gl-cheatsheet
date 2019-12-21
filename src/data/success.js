module.exports = {
  id: 'points',
  type: 'symbol',
  source: {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-73.77, 45.55]
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-71.77, 46.55]
          }
        }
      ]
    }
  },
  layout: {
    'text-field': 'succès',
    'text-size': 50,
    'text-allow-overlap': true,
    'text-ignore-placement': true,
    'text-offset': [0, -0.32]
  }
}
