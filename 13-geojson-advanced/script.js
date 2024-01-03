async function loadCycling(){
    const response = await axios.get("data/cycling.geojson"); 
    return response.data; 
}

document.addEventListener("DOMContentLoaded", async function () {

    const mapObject = L.map("mapContainer");

    mapObject.setView([1.3521, 103.8198], 13);

    // the tile layer influences how the map will look like
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapObject);

    // load in the cycling tracks
    const cycling = await loadCycling(); 

    // L.geoJson takes two parameters
    // 1. the geoJSON object
    // 2. an object that provide configuration options
    const cyclingLayer = L.geoJson(cycling, {
        // this function is called for each feature in the GeoJSON object
        // first arg: the feature data
        // second arg: the layer (i.e the path,marker etc.) created for the feature
        // When you use on each feature, it will be pased into the first argument below (this is the raw data). The next arguement is
        // layer which is how it is represented on leaflet
        onEachFeature:function(feature, layer){
            layer.bindPopup("Path is clicked"); 
        }
    }); 
    // set the color of the lines to red

    cyclingLayer.setStyle({
        color:"red"
    })

    // customise the geoJson layer
    cyclingLayer.addTo(mapObject); 

})
