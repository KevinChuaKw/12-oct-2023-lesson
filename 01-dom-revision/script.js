// The 'document' object is available in all '.js' files
// that are included in a html file 

// select one element that matches the query 
// (the query is the first parameter and it is the same
// type of query selector for CSS)
// the result of querySelector returns DOM node
// a DOM node is an object that represent the element 
const h1Element = document.querySelector("#title"); 
h1Element.innerHTML = "Kevin's Fish Soup";
// .innerHTML property sets or returns the HTML content 
// of an element
h1Element.style.backgroundColor = "blue";

const listItems = document.querySelectorAll(".selling");
// we use a for loop because listItems is an array
// it will be the array for all the 'li.selling' 
for (let item of listItems){
    // the CSS property will be in camel case 
    // if we are using JavaScript to change them
    // .selling{
    //     font-size: 42px:
    // }
    item.style.fontSize = "42px"; 
}