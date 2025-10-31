// var map = L.map('map').setView([51.505, -0.09], 13);
const map = L.map('map').setView([22.28552, 114.15769], 13);

// Add Hong Kong basemap with traditional Chinese labels
const hkLayer = L.layerGroup.hongKong("topography.tc");
hkLayer.addTo(map);

var imageUrl = 'https://github.com/chosummingcuhk/map/raw/main/Zoom-現代香港全圖.jpg';
var altText = 'map of old Sheung Wan';
var latLngBounds = L.latLngBounds([[22.2, 114.1], [22.3, 114.2]]);
var imageOverlay = L.imageOverlay(imageUrl, latLngBounds,{
    opacity: 0.5,
    alt: altText,
    interactive: true
}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);