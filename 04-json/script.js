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
    const tasks = await loadData();
    for (let t of tasks){
        const listItem = document.createElement(`li`);
        listItem.innerHTML = `${t.name} due on ${t.date} (${t.urgency})`; 

        const todoList = document.querySelector("#todoList");
        todoList.appendChild(listItem); 
    }
}); 

// loadData will basically read in the JSON object
// in the `data.json` and return it
async function loadData(){
    const response = await axios.get("data/data.json");
    return response.data; 
}
