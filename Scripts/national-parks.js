"use strict";

//constants that reference specific elements in my HTML document.
const locationDropdown = document.getElementById("locationDropdown");
const parkTypeDropdown = document.getElementById("parkTypeDropdown");
const locationSelect = document.getElementById("locationSelect");
const parkTypeSelect = document.getElementById("parkTypeSelect");
const locationOption = document.getElementById("locationOption");
const parkTypeOption = document.getElementById("parkTypeOption");

const parkDetailRow = document.getElementById("parkDetailRow");

//after window finsih loading,following functions will execute
window.onload = () => {

    console.log("window load");
    //execute function if radio location button changed
    locationOption.onchange = onLocationOptionChange;
    parkTypeOption.onchange = onParkTypeOptionChange;

    //when dropdown selected display state
    locationDropdown.onchange = onLocationDropdownChange;
    //when dropdown selected display different park types
    parkTypeDropdown.onchange = onParksTypeDropdownChange;





    //loop through location array, for of loop
    for (let location of locationsArray) {

        //define variiable to hold data for every state name
        let newOption = new Option(location);

         //create new options in locactions dropdown
        locationDropdown.appendChild(newOption);
    }

    //  //loop through park types array , for of loop
    for (let listPark of parkTypesArray) {
         //define variable to hold type data
        let newOption2 = new Option(listPark);
         //create new options in park type dropdown
        parkTypeDropdown.appendChild(newOption2);
    }
};

//------------------------------------------------------------------------
//function to hide or show location radio button
function onLocationOptionChange() {
    if (locationOption.checked) {

        //show location section i checked
        locationSelect.style.display = "block";

        parkTypeSelect.style.display = "none";
        parkDetailRow.innerHTML = "";
        locationDropdown.selectedIndex = 0;
    }
    else {
        //hide Location section
        locationSelect.style.display = "none";
    }
}
//function to hide or show parktype radio button

function onParkTypeOptionChange() {
    console.log("parkType")

    if (parkTypeOption.checked) {
        //show park type section
        parkTypeSelect.style.display = "block";
        
        //hide park type option if location checked 
        locationSelect.style.display = "none"
        parkDetailRow.innerHTML = "";
        parkTypeDropdown.selectedIndex = 0;
    }
    else {
        //hide park type section.
        parkTypeSelect.style.display = "none";
    }

}

//function when location dropdown change
function onLocationDropdownChange() {

   

    //selected location is equal to user selected value
    let selectedLocation = locationDropdown.value;
console.log(selectedLocation);

    //parks filter is equal to national parks array filtered from object property , equal to user selected location(state) 
    const parksInLocation = nationalParksArray.filter(park => park.State === selectedLocation);


    console.log(parksInLocation);

    //dont show park details
    parkDetailRow.innerHTML = "";

   // a selection must be made, at least 1
    if (parksInLocation.length > 0) {

        // loop through array
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

    if (selectedParkType !== "") { 
 //parks type defined variable to hold national parks filtered data, location name includes same words as user selected type
    const parksType = nationalParksArray.filter(p => p.LocationName.includes(selectedParkType));
    

    console.log(parksType);

   

//If the parkTypesSelect array has one park, the code proceeds to create park cards.
if (parksType.length > 0) {

    for (let park of parksType) {

    //function to execute , passing park value to create cards for each
      createNationalParkCard(park)
    }
}
    }
else {
    // No park type is selected, reset the display
    // You can add any reset behavior you need here
    // For example, you can display a message indicating no park type is selected
    parkDetailRow.innerHTML = "";
  }
}


//function to create cards, passing park values
function createNationalParkCard(park) {

     // Create div element
    let divCol = document.createElement("div");
    divCol.className = "col-4";
    parkDetailRow.appendChild(divCol);

     //Create div element for card
    let divCard = document.createElement("div");
    divCard.className = "card";
    divCol.appendChild(divCard);

    //Create div element for card body
    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body";
    divCard.appendChild(divCardBody);

    let h5Name = document.createElement("h5");
    h5Name.className = "card-title";
    h5Name.innerHTML = park.LocationName;
    divCardBody.appendChild(h5Name);

    //Create unorderedlist element for list elements
    let ulParkDetails = document.createElement("ul");
    divCardBody.appendChild(ulParkDetails);

     //Create list element for park id
    let liId = document.createElement("li");
    liId.textContent = `Id: ${park.LocationID}`;
    ulParkDetails.appendChild(liId);

    //the if statement checks if park.Visit exists and evaluates to a value
    if (park.Visit) {
        let liWebsite = document.createElement("li")//This element displays the website link.
        let websiteLink = document.createElement("a");//represents an anchor tag or a hyperlink.
        websiteLink.href = park.Visit;//This link will point to the URL stored in the "Visit" property of the "park" object.
        websiteLink.textContent = "Visit Website";
        websiteLink.target = "_blank"; // _blank value opens in a new window/tab
        liWebsite.appendChild(websiteLink);//anchor tag element is appended as a child to the list item element 
        ulParkDetails.appendChild(liWebsite);//list item element containing the website link is appended as a child to the "ulParkDetails" element.
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








