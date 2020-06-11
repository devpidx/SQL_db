function createMap(countryTerminals) {

  // Create the tile layer that will be the background of our map
  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: MY_KEY
  });

  // Create a baseMaps object to hold the lightmap layer
  var baseMaps = {
    "Light Map": lightmap
  };

  // Create an overlayMaps object to hold the bikeStations layer
  var overlayMaps = {
    "Country Terminal": countryTerminal
  };

  // Create the map object with options
  var map = L.map("mapid", {
    center: [40.73, -74.0059],
    zoom: 12,
    layers: [lightmap, countryTerminal]
  });

  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}


function createMarkers(response) {

  // Pull the "stations" property off of response.data
  var stations = response.result;

  // Initialize an array to hold bike markers
  var terminalMarkers = [];

  // Loop through the stations array
  for (var index = 0; index < result.length; index++) {
    var result = result[index];

    // For each station, create a marker and bind a popup with the station's name
    var countryMarker = L.marker([result.latitude, result.longitude])
      .bindPopup("<h3>" + result.country + "<h3><h3>Terminal ID: " + result.terminal_id + "</h3>");

    // Add the marker to the bikeMarkers array
    countryMarkers.push(countryMarker);
  }

  // Create a layer group made from the bike markers array, pass it into the createMap function
  createMap(L.layerGroup(terminalMarkers));
}

d3.json("http://127.0.0.1:5000/api/geo/terminals", createMarkers);

// var myMap = L.map("mapid", {
//   center: [45.52, -122.67],
//   zoom: 13
// });

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 18,
//   id: 'mapbox/streets-v11',
//   tileSize: 512,
//   zoomOffset: -1,
//   accessToken: 'pk.eyJ1IjoiZGV2cGlkeCIsImEiOiJja2I5ajd5b2IwNmJxMnJxazJ3OHFmazZ1In0.UjtLRyCrOzpXdRz9Au1Czw'
// }).addTo(myMap);

// d3.json('http://127.0.0.1:5000/api/geo/terminals').then(function(data){
//   console.log(data);
// });



console.log("what happened??");