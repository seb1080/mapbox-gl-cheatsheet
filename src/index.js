import SUCCESS from './data/success'

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
