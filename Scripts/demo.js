"use strict";

// Fetch the dropdown elements
const locationDropdown = document.getElementById("locationDropdown");
const parkTypeDropdown = document.getElementById("parkTypeDropdown");
const Btn1 = document.getElementById("Btn1");


// Fetch the results container
const parkResultsContainer = document.getElementById("parkResults");

window.onload = () => {
    console.log("window.load");
locationDropdown.onclick = displayLocations;

   
};

function displayLocations() {
    // populate the dropdown list
for (let location of locationsArray){
    let newOption = new Option(location);
    locationDropdown.appendChild(newOption);
}
};



function onBtn1Clicked() {
   
    let selectedLocation = locationDropdown.value;
    let parksByState = nationalParksArray.filter((park) => park.State === selectedLocation);
  



parkResultsContainer.innerHTML = "";

  // Create a dropdown of park results
  let parkDropdown = document.createElement("select");

  for (let park of parksByState) {
    let newOption = new Option(park.LocationName);
    parkDropdown.appendChild(newOption);
  }

  // Append the park dropdown to the results container
  parkResultsContainer.appendChild(parkDropdown);
}