"use strict";

// Fetch the dropdown elements
const locationDropdown = document.getElementById("locationDropdown");
const parkTypeDropdown = document.getElementById("parkTypeDropdown");
const Btn1 = document.getElementById("Btn1");
const parksSelectionRow = document.getElementById("parksSelectionRow");


// Fetch the results container
const parkResultsContainer = document.getElementById("park-results");

window.onload = () => {
    console.log("window.load");
locationDropdown.onclick = showLocations;
parkTypeDropdown.onclick = showParks;

   
};

function showLocations() {
    // populate the dropdown list
for (let location of locationsArray){
    let newOption = new Option(location);
    locationDropdown.appendChild(newOption);
}
};


function onBtn1Clicked() {
   
    console.log("clicked")
    // handle the button click event here
    let selectedLocation = locationSelect.value;

}

// function populateParksSelect(fullListOfParks, selectedLoaction) {

//     let initialOption = new Option("Please select your park!", "");
//     parksSelect.appendChild(initialOption);

//     //let activitiesIsCategory = getActivitiesInCategory
//     //(fullListOfActivities, selectedCategory);
   
//     let parksInLocation = park.filter(park  => park.location == selectedLocation);


//     parksInLocation.forEach( (park) => {
//         let theOption = new Option(park.name, park.id);
//         parkSelect.appendChild(theOption);
//     })
// }

function showParks() {
    // populate the dropdown list
for (let park of parkTypesArray){
    let newOption = new Option(park);
    parkTypeDropdown.appendChild(newOption);
}
};