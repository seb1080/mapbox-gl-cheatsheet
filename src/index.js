mapboxgl.accessToken =
  'pk.eyJ1Ijoic2ViMTA4MCIsImEiOiJjaXJuanlidGgwOTJ4ZmFtODV6eXRuaXV0In0.vzy6JGrTFN5ccvZw87b2yQ'

const MTL = {
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-73.77, 45.55],
  zoom: 10
}
const map = new mapboxgl.Map(MTL)
