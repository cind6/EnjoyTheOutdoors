"use strict";



// Fetch the dropdown elements
const locationDropdown = document.getElementById("locationDropdown");
const parkTypeDropdown = document.getElementById("parkTypeDropdown");
const locationSelect = document.getElementById("locationSelect");
const parkTypeSelect = document.getElementById("parkTypeSelect");
const locationOption = document.getElementById("locationOption");
const parkTypeOption = document.getElementById("parkTypeOption");

const parkDetailRow = document.getElementById("parkDetailRow");


window.onload = () => {

    console.log("window load");

    locationOption.onchange = onLocationOptionChange;
    parkTypeOption.onchange = onParkTypeOptionChange;

    //when dropdown selected display state
    locationDropdown.onchange = onLocationDropdownChange;
    parkTypeDropdown.onchange = onParksTypeDropdownChange;





    // populate the location dropdown list
    for (let location of locationsArray) {
        let newOption = new Option(location);
        locationDropdown.appendChild(newOption);
    }

    // populate the parkType dropdown list
    for (let parkTypes of parkTypesArray) {
        let newOption = new Option(parkTypes);
        parkTypeDropdown.appendChild(newOption);
    }
};

//------------------------------------------------------------------------
function onLocationOptionChange() {
    if (locationOption.checked) {

        //show location section
        locationSelect.style.display = "block";

        parkTypeSelect.style.display = "none";
        parkDetailRow.innerHTML = "";
        locationDropdown.selectedIndex = 0;
    }
    else {
        //hide Location section
        locationSelect.style.display = "block";
    }
}

function onParkTypeOptionChange() {
    console.log("parkType")

    if (parkTypeOption.checked) {
        //show partype section
        parkTypeSelect.style.display = "block";
        locationSelect.style.display = "none"
        parkDetailRow.innerHTML = "";
        parkTypeDropdown.selectedIndex = 0;
    }
    else {
        parkTypeSelect.style.display = "none";
    }

}


function onLocationDropdownChange() {

   

    //selected location(state) is equal to user selected value
    let selectedLocation = locationDropdown.value;


    //parks filter is equal to national parks array filtered from object property , equal to user selected location(state) 
    const parksInLocation = nationalParksArray.filter(park => park.State === selectedLocation);


    console.log(parksInLocation);

    parkDetailRow.innerHTML = "";

    if (parksInLocation.length > 0) {

        for (let park of parksInLocation) {
            createNationalParkCard(park);
        }
    }



}

//------------------------------------------------------------------------
//populates the location selected with options 

function onParksTypeDropdownChange() {

    //selected parktype is defined as user selected value
    let selectedParkType = parkTypeDropdown.value;
    parkDetailRow.innerHTML = "";

    console.log(selectedParkType);

    let parkTypesFilter = nationalParksArray.filter(park => park.LocationName.includes(selectedParkType));

console.log(parkTypesFilter)

if (parkTypesFilter.length > 0) {
    for (let park of parkTypesFilter) {
      createNationalParkCard(park);}}
}

function createNationalParkCard(park) {


    let divCol = document.createElement("div");
    divCol.className = "col-4";
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

    let ulParkDetails = document.createElement("ul");
    divCardBody.appendChild(ulParkDetails);

    let liId = document.createElement("li");
    liId.textContent = `Id: ${park.LocationID}`;
    ulParkDetails.appendChild(liId);

    if (park.Visit) {
        let liWebsite = document.createElement("li");
        let websiteLink = document.createElement("a");
        websiteLink.href = park.Visit;
        websiteLink.textContent = "Visit Website";
        websiteLink.target = "_blank"; // _blank value opens in a new window/tab
        liWebsite.appendChild(websiteLink);
        ulParkDetails.appendChild(liWebsite);
    }

    

    let liAddress = document.createElement("li");
    liAddress.textContent = `Address: ${park.Address}`;
    ulParkDetails.appendChild(liAddress);

    let liCity = document.createElement("li");
    liCity.textContent = `City: ${park.City}`;
    ulParkDetails.appendChild(liCity);

    let liState = document.createElement("li");
    liState.textContent = `State: ${park.State}`;
    ulParkDetails.appendChild(liState);

    let liZipCode = document.createElement("li");
    liZipCode.textContent = `ZipCode: ${park.ZipCode}`;
    ulParkDetails.appendChild(liZipCode);

    let liPhone = document.createElement("li");
    liPhone.textContent = `Phone: ${park.Phone}`;
    ulParkDetails.appendChild(liPhone);

    let liFax = document.createElement("li");
    liFax.textContent = `Fax: ${park.Fax}`;
    ulParkDetails.appendChild(liFax);

    let liLatitude = document.createElement("li");
    liLatitude.textContent = `Latitude: ${park.Latitude}`;
    ulParkDetails.appendChild(liLatitude);

    let liLongitude = document.createElement("li");
    liLongitude.textContent = `Longitude: ${park.Longitude}`;
    ulParkDetails.appendChild(liLongitude);


}








