const button = document.querySelector("#submit-btn");

button.addEventListener("click", function(){
    // This is to do whatever we want to do when the click is detected

    let firstName;
    let firstNameElement= document.querySelector("#first-name"); 
    firstName = firstNameElement.value;
    console.log("FirstName = ", firstName); 

    let lastName = document.querySelector("#last-name").value; 
    // We are only interested in one radio button (the one that is checked)
    // hence we are using querySelector
    let checkedRadioButton = document.querySelector(".fish:checked");

    // let eatRawFish = null;
    // if (checkedRadioButton){
    //     eatRawFish = checkedRadioButton.value; 
    // }

    // alternative: use optional chaining
    // if checkedRadioButton is null, stop evaluating the expression and
    // evaluation to null
    // otherwise, get value property of checkedRadioButton
    let eatRawFish = checkedRadioButton?.value; 
    console.log(eatRawFish);
    
    let selectedCheckboxes = document.querySelectorAll("country:checked");
    console.log(selectedCheckboxes); 
    let countries = [];
    for (let check of selectedCheckboxes) {
        countries.push(c.value); 
    }
    console.log("Countries: ", countries); 
    console.log("First name: ", firstName);
    console.log("Last name: ", lastName);
    let occupationDropdown = document.querySelector("#occupation");
    let occupation = occupationDropdown.value;
    console.log("Occupation: ", occupation); 
})
