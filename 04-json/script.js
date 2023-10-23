// [
//     {
//         "id": 1, this is the primary key, it will uniquely identify this object
//         "name": "Wash the car",
//         "date": "22/01/2024",
//         "urgency": 3
//     },
// ]

// Json files are an array of objects 
// Grabbing each object in the Json to display in the <li> 

document.addEventListener("DOMContentLoaded", async function() {
    // await is to tell a function 
    // to pause at the line until that line 
    const response = await loadData; 
}); 

async function loadData(){
    const response = await axios.get("data/data.json");
    return response.data
    console.log(response.data); 
}
