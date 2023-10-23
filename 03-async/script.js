// by default all lines of code are executed in a sequential order
// unless somehow affected by an if, else or function call
// SYNCHRONOUS EXECUTION

console.log("1. hello world");
console.log("2. goodbye world");
console.log("3. all world");

let n = 3;
if (n<10){
    console.log("Hi")
} else {
    console.log("Bye")
}

// Reasons for asynchronous JavaScript
// - Take a long time to finish
// - fetching data from a webpage/server will take anywhere from 500ms to 2s
// - reading data from database will take from 500ms to 2s

// function must be marked as async before we can use await
async function loadData(){
    // the first parameter is the URL of the resource (aka data)
    // that we want to fetch, If given a relative URL, 
    // it iwll be relative to the .js file it is

    // await is used with a promise
    // so it cna be used with function that return a promise
    // pause the execution in the funciton until the promise finishes 
    // the JavaScript will execute the next instruction that it can 
    const response = await axios.get("data.txt"); // this is a releative URL
    // an absolute URL is anything that begins with HTTPs
    // 'await' must go into a function - it needs to be in the local scope
    // and not in the global scope
    console.log("response: ", response); 
    return response.data; 
}

document.querySelector("#loadDataBtn").addEventListener("click", async function(){
    const data = await loadData();
    console.log(data);
    document.querySelector("#output").innerHTML = data;
})