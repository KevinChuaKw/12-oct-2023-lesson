async function loadJSON(filePath){
    const response = await axios.get(filePath); 
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
    const cycling = await loadJSON("data/cycling.geojson"); 

    // L.geoJson takes two parameters
    // 1. the geoJSON object
    // 2. an object that provide configuration options
    const cyclingLayer = L.geoJson(cycling, {
        // this function is called for each feature in the GeoJSON object
        // first arg: the feature data
        // second arg: the layer (i.e the path,marker etc.) created for the feature
        // When you use on each feature, it will be pased into the first argument below (this is the raw data). The next arguement is
        // layer which is how it is represented on leaflet
        // To customise each of the feature, there is a need to us 'onEachFeature' 
        onEachFeature:function(feature, layer){
            console.log(feature)
            layer.bindPopup(feature.properties.Description); 

            // create a temp element to store the HTML
            const tempElement = document.createElement('div');
            tempElement.innerHTML = feature.properties.Description;
            // use query selector to extract from the temp element the data that I want
            const allTDs = tempElement.querySelectorAll('td'); 
            const region = allTDs[0].innerHTML;
            const agency = allTDs[1].innerHTML; 
            layer.bindPopup(`<h1>${region}</h1>
                <h2>${agency}</h2>
            `);
        }
    }); 
    // set the color of the lines to red

    cyclingLayer.setStyle({
        color:"red"
    })

    // customise the geoJson layer
    cyclingLayer.addTo(mapObject); 

    const nparks = await loadJSON("data/nparks.geojson"); 
    const nparksLayer = L.geoJson(nparks, {
        onEachFeature:function(feature, layer) { // this is going to be the regular expression. A regular expression is 
            // a kind of langauge that describe text
            const html = feature  
        }
    })


})
