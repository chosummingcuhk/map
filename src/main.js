// var map = L.map('map').setView([51.505, -0.09], 13);
const map = L.map('map').setView([22.28552, 114.15769], 13);

// Add Hong Kong basemap with traditional Chinese labels
const hkLayer = L.layerGroup.hongKong("topography.tc");
hkLayer.addTo(map);
// const map = L.map('map').setView([22.28552, 114.15769], 13);
//
// // Add OpenStreetMap tile layer
// const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="httpsenstreetmap.org/copyright contributors'
// });
//
// osmLayer.addTo(map);