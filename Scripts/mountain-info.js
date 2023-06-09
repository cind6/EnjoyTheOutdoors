"use strict";


const mountainSelect = document.getElementById("mountainSelect");
const mountainDropdown = document.getElementById("mountainDropdown");
const mountainDetailRow = document.getElementById("mountainDetailRow");

window.onload = () => {

    //when window finish loading, following functions will execute
    console.log("window load");


    mountainDropdown.onclick = MountainsDropdownList;
    mountainSelect.onchange = mountainSelectChange;

    // for loop
    for (let mountain of mountainsArray) {
        let newOption = new Option(mountain.name);
        mountainDropdown.appendChild(newOption);
    }

};

//------------------------------------------------------------------------
function mountainSelectChange() {


    let mountainImage = selectedMountain.value;
    console.log(mountainImage);

}

let selectedMountain = mountainDropdown.value

function MountainsDropdownList() {

    let selectedMountain = mountainDropdown.value;
    console.log(selectedMountain);

   // search for a mountain object that matches the selected mountain's name.
    const mountain = mountainsArray.find(mountain => mountain.name === selectedMountain);
    
    mountainDetailRow.innerHTML = "";//Clearing Existing Mountain Details

    if (mountain) {
        createMountainCard(mountain);// if mountain found code proceeds to create a
                                     // mountain card by calling the createMountainCard function, passing the mountain object as an argument.

    }
}


function createMountainCard(mountain) {


    // let mountainDetailRow = document.getElementById("mountainDetailRow");

    let divCol = document.createElement("div");
    divCol.className = "col col-md-6 mx-auto mt-3";
    mountainDetailRow.appendChild(divCol);

    let divCard = document.createElement("div");
    divCard.className = "card";
    divCol.appendChild(divCard);

    let mountainImage = document.createElement("img");
    mountainImage.className = "card-img-top";
    mountainImage.src = "images/" + mountain.img;
    mountainImage.alt = "mountain image";
    divCard.appendChild(mountainImage);

    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body";
    divCard.appendChild(divCardBody);

    let h5Name = document.createElement("h5");
    h5Name.className = "card-title";
    h5Name.innerHTML = mountain.name;
    divCardBody.appendChild(h5Name);

    let mountainDesc = document.createElement("p");
    mountainDesc.className = "mountainDesc";
    mountainDesc.innerHTML = "description: " + mountain.desc;
    h5Name.appendChild(mountainDesc);

    let mountainElevation = document.createElement("li");
    mountainElevation.className = "mountainElevation";
    mountainElevation.innerHTML = "Elevation: " + mountain.elevation;
    mountainDesc.appendChild(mountainElevation);

    let mountainEffort = document.createElement("li");
    mountainEffort.className = "mountainEffort";
    mountainEffort.innerHTML = "Effort: " + mountain.effort;
    mountainElevation.appendChild(mountainEffort);


    //this function is making an asynchronous API call to retrieve the sunrise and sunset times for a given latitude (lat) and longitude (lng) coordinates.
    //mountain.coords.lat and mountain.coords.lng as arguments.
    getSunsetForMountain(mountain.coords.lat, mountain.coords.lng)
        .then((data) => {
            // Create elements with the sunrise/sunset times
            const sunriseTime = data.results.sunrise;
            const sunsetTime = data.results.sunset;


            const timesElement = document.createElement("div");//A new "div" element is created to hold the sunrise and sunset times. 
            timesElement.className = "card-text";

            //The timesElement is populated with the sunrise and sunset times using the innerHTML property.
            timesElement.innerHTML = `<p>The current sunrise time is ${sunriseTime}.</p>
                                <p>The current sunset time is ${sunsetTime}.</p>`;

            // Append the timesElement to the card body
            divCardBody.appendChild(timesElement);
        });


}


// function that can "fetch" the sunrise/sunset times
async function getSunsetForMountain(lat, lng) {
    let response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
    );
    let data = await response.json();
    return data;
}




