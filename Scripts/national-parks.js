"use strict";

console.log("Loading nationalParkData.js");

// Fetch the dropdown elements
const locationDropdown = document.getElementById("locationDropdown");
const parkTypeDropdown = document.getElementById("parkTypeDropdown");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
//const parksSelectionRow = document.getElementById("parksSelectionRow");
const parkDetailRow = document.getElementById("parkDetailRow");



// Fetch the results container
//const parkResultsContainer = document.getElementById("park-results");

window.onload = () => {
    console.log("window load");
locationDropdown.onclick = showLocations;
parkTypeDropdown.onclick = showParks;

btn1.onclick = onButton1Click;
btn2.onlick = onButton2Click;


    


};

function showLocations() {
    // populate the dropdown list
for (let location of locationsArray){
    let newOption = new Option(location);
    locationDropdown.appendChild(newOption);
}
};


function onButton1Click() {
   
    console.log("onButton1click")
   
    // handle the button click event here
    let selectedLocation = locationDropdown.value;

    
    const parksInLocation = nationalParksArray.filter(park => park.State === selectedLocation);
let parksDetails = parksInLocation;

console.log(parksInLocation);

parkDetailRow.innerHTML = "";

if(parksInLocation.length > 0 ){

    for (let park of parksInLocation){
    createNationalParkCard(park);
}}

    // parkName.innerHTML = parksDetails.LocationName;
    // parkId.innerHTML = parksDetails.LocationID;
    // parkAddress.innerHTML = parksDetails.Address;
    // parkCity.innerHTML = parksDetails.City;
    // parkState.innerHTML = parksDetails.State;
    // parkZip.innerHTML = parksDetails.ZipCode;
    // parkPhone.innerHTML = parksDetails.Phone;
    // parkFax.innerHTML = parksDetails.Fax;
  
}

function createNationalParkCard(park){
 let divCol = document.createElement("div");
divCol.className ="col";
parkDetailRow.appendChild(divCol);

let divCard = document.createElement("div");
divCard.className = "card";
divCol.appendChild(divCard);

let divCardBody = document.createElement("div");
divCardBody.className = "card-body";
divCard.appendChild(divCardBody);

let h5Name = document.createElement("h5");
h5Name.className = "card-title";
h5Name.innerHTML = park.LocationName;
divCardBody.appendChild(h5Name);


}


function showParks() {
    // populate the dropdown list
for (let park of parkTypesArray){
    let newOption = new Option(park);
    parkTypeDropdown.appendChild(newOption);
}
};


function onButton2Click(){
 console.log("onButton2click")
    
let SelectedParkType = parkTypeDropdown.value;
const result = nationalParksArray.filter(park => park.LocationName.toLowerCase().includes("preserve"));

console.log(result);
}





