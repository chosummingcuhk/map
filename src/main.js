// var map = L.map('map').setView([51.505, -0.09], 13);
// const map = L.map('map').setView([22.28552, 114.15769], 13);

// Add Hong Kong basemap with traditional Chinese labels
const hkLayer = L.tileLayer.hongKong("basemap.topography");

const map = L.map('map', {
    center: [22.28552, 114.15769],
    zoom: 13,
    layers: [hkLayer] // default base layer
});


var imageUrl = 'https://github.com/chosummingcuhk/map/raw/main/Zoom-現代香港全圖.jpg';
var latLngBounds = L.latLngBounds([[22.2, 114.1], [22.3, 114.2]]);
var imageOverlay = L.imageOverlay(imageUrl, latLngBounds,{
    opacity: 0.7,
    interactive: true
});

var imageUrl1 = 'https://github.com/chosummingcuhk/map/raw/main/Zoom-China%2C%20Hongkong.jpg';
var latLngBounds1 = L.latLngBounds([[22.2, 114.1], [22.3, 114.2]]);
var imageOverlay1 = L.imageOverlay(imageUrl1, latLngBounds,{
    opacity: 0.7,
    interactive: true
});

var imageUrl2 = 'https://github.com/chosummingcuhk/map/raw/main/MAP_%E7%8F%BE%E4%BB%A3%E9%A6%99%E6%B8%AF%E5%85%A8%E5%9C%96.jpg';
var latLngBounds2 = L.latLngBounds([[22.2, 114.1], [22.3, 114.2]]);
var imageOverlay2 = L.imageOverlay(imageUrl2, latLngBounds,{
    opacity: 0.7,
    interactive: true
});

var imageUrl3 = 'https://github.com/chosummingcuhk/map/raw/main/MAP_Plan%20of%20Victoria%20Hong-kong.jpg';
var latLngBounds3 = L.latLngBounds([[22.2, 114.1], [22.3, 114.2]]);
var imageOverlay3 = L.imageOverlay(imageUrl3, latLngBounds,{
    opacity: 0.7,
    interactive: true
});

var imageUrl4 = 'https://github.com/chosummingcuhk/map/raw/main/MAP_China%2C%20Hongkong.jpg';
var latLngBounds4 = L.latLngBounds([[22.2, 114.1], [22.3, 114.2]]);
var imageOverlay4 = L.imageOverlay(imageUrl4, latLngBounds,{
    opacity: 0.7,
    interactive: true
});

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

var baseMaps = {
    "LandsD": hkLayer,
};

var overlayMaps = {
    "1937（放大）": imageOverlay,
    "1857（放大）": imageOverlay1,
    "1937": imageOverlay2,
    "1866": imageOverlay3,
    "1857": imageOverlay4,
};


// // Preload all overlays (load tiles/images once)
// Object.values(overlays).forEach(layer => {
//     layer.addTo(map);
//     map.removeLayer(layer);
// });


var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

// Track current overlay
let currentOverlay = null;

map.on('overlayadd', function (e) {
    // Remove previous overlay if it's different
    if (currentOverlay && currentOverlay !== e.layer) {
        map.removeLayer(currentOverlay);
    }
    currentOverlay = e.layer;
});

map.on('overlayremove', function (e) {
    if (currentOverlay === e.layer) {
        currentOverlay = null;
    }
});


// function enableComparisonMode(layerA, layerB) {
//     // Remove all overlays
//     Object.values(overlays).forEach(layer => map.removeLayer(layer));
//
//     // Add selected overlays with transparency
//     layerA.setOpacity(0.5).addTo(map);
//     layerB.setOpacity(0.5).addTo(map);
// }
//
// function disableComparisonMode() {
//     // Remove all overlays
//     Object.values(overlays).forEach(layer => map.removeLayer(layer));
// }
