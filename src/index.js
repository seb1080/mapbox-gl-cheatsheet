import SUCCESS from './data/success'
import markers from './data/markers'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2ViMTA4MCIsImEiOiJjaXJuanlidGgwOTJ4ZmFtODV6eXRuaXV0In0.vzy6JGrTFN5ccvZw87b2yQ'

const MTL = {
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-73.77, 45.55],
  zoom: 10
}

/* Create the map instance */
const map = new mapboxgl.Map(MTL)

/*  Add Success label */
map.on('load', () => {
  map.addLayer(SUCCESS)
})

/* Add Simple marker */
const marker = new mapboxgl.Marker().setLngLat([-73.77, 45.55]).addTo(map)

/*   Create PopUp */
const popup = new mapboxgl.Popup({ offset: 25 }).setText(
  `Find more at:https://docs.mapbox.com/mapbox-gl-js/example/popup-on-click/`
)
marker.setPopup(popup)

/* Create a geojson point */
map.on('load', () => {
  map.addLayer({
    id: 'places',
    type: 'symbol',
    source: {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              description:
                '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
              icon: 'rocket'
            },
            geometry: {
              type: 'Point',
              coordinates: [-73.77, 45.5]
            }
          },
          {
            type: 'Feature',
            properties: {
              description:
                '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>',
              icon: 'rocket'
            },
            geometry: {
              type: 'Point',
              coordinates: [-77.003168, 45.894651]
            }
          }
        ]
      }
    },
    layout: {
      'icon-image': '{icon}-15',
      'icon-allow-overlap': true
    }
  })
})
