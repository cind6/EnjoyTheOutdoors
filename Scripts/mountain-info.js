"use strict";

// Fetch the dropdown elements
const mountainSelect = document.getElementById("mountainSelect");
const mountainDropdown = document.getElementById("mountainDropdown");
const mountainDetailRow = document.getElementById("mountainDetailRow");

window.onload = () => {

    //when window finish loading "window load" in console window
    console.log("window load");


    mountainDropdown.onchange = MountainsDropdownList;
    mountainSelect.onchange = mountainSelectChange; 

    // for loop
    for (let mountain of mountainsArray) {
        console.log(mountain);
        let newOption = new Option(mountain.name);
        mountainDropdown.appendChild(newOption);
    }

};

//------------------------------------------------------------------------
function mountainSelectChange (){


    let  mountainImage = selectedMountain.value;

    const mountainImages = mountainsArray.find(mountainImg =>mountainImg.img === mountainImage);
     console.log(mountainImage);
  
}

let selectedMountain = mountainDropdown.value

function MountainsDropdownList() {

    let selectedMountain = mountainDropdown.value;
    console.log(selectedMountain);

    //parks filter is equal to national parks array filtered from object property , equal to user selected location(state) 
    const mountain = mountainsArray.find(mountain => mountain.name === selectedMountain);
    console.log(mountain);

    mountainDetailRow.innerHTML = "";

    if (mountain) {


        createMountainCard(mountain);

    }
}

function createMountainCard(mountain) {


    // let mountainDetailRow = document.getElementById("mountainDetailRow");

    let divCol = document.createElement("div");
    divCol.className = "col";
    mountainDetailRow.appendChild(divCol);

    let divCard = document.createElement("div");
    divCard.className = "card";
    divCol.appendChild(divCard);

    let mountainImage = document.createElement("img"); 
    mountainImage.className = "card-img-top";
    mountainImage.src ="images/" + mountain.img;
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

    
    getSunsetForMountain(mountain.coords.lat, mountain.coords.lng)
    .then((data) => {
        const sunriseTime = data.results.sunrise;
        const sunsetTime = data.results.sunset;

        // Create elements or update existing elements with the sunrise/sunset times
        const timesElement = document.createElement("div");
        timesElement.className = "card-text";
        timesElement.innerHTML = `<p>The current sunrise time is ${sunriseTime}.</p>
                                <p>The current sunset time is ${sunsetTime}.</p>`;

        // Append the timesElement to the card body
        divCardBody.appendChild(timesElement);
    }); 

    
}



async function getSunsetForMountain(lat, lng) {
    let response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
    );
    let data = await response.json();
    return data;
  }  




