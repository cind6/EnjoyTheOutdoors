"use strict";


const mountainDropdown = document.getElementById("mountainDropdown");
const mountainDetailRow = document.getElementById("mountainDetailRow");

window.onload = () => {

    //when window finish loading "window load" in console window
   console.log("window load");

 
   mountainDropdown.onchange = showMountains;

   // populate the dropdown list
 for (let mountain of mountainsArray) {
    let newOption = new Option(mountain.name);
    mountainDropdown.appendChild(newOption);
}

}

function showMountains(){

    let selectedMountain = mountainDropdown.value;
    console.log(selectedMountain);

 //parks filter is equal to national parks array filtered from object property , equal to user selected location(state) 
    const currentMountain = mountainsArray.filter(mountain => mountain.name === selectedMountain);
    //let parksDetails = parksInLocation;

    console.log(currentMountain);

    mountainDetailRow.innerHTML = "";

    if (currentMountain.length > 0) {

        for (let Mountain of currentMountain) {
            createMountainCard(Mountain);
        }
    }
}

function createMountainCard(Mountain) {
    let mountainDetailRow = document.getElementById("mountainDetailRow");

    let divCol = document.createElement("div");
    divCol.className = "col";
    mountainDetailRow.appendChild(divCol);

    let divCard = document.createElement("div");
    divCard.className = "card";
    divCol.appendChild(divCard);

    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body";
    divCard.appendChild(divCardBody);

    let h5Name = document.createElement("h5");
    h5Name.className = "card-title";
    h5Name.innerHTML = Mountain.name;
    divCardBody.appendChild(h5Name);

    let ulDetails = document.createElement("ul");
    ulDetails.id = "mountainDetails";
    ulDetails.className = "";
    divCardBody.appendChild(ulDetails);
  
    let liName = document.createElement("li");
    liName.textContent = `Name: ${Mountain.name}`;
    ulDetails.appendChild(liName);
  
    let liElevation = document.createElement("li");
    liElevation.textContent = `Elevation: ${Mountain.elevation}`;
    ulDetails.appendChild(liElevation);
  
    let liDesc = document.createElement("li");
    liDesc.textContent = `Description: ${Mountain.desc}`;
    ulDetails.appendChild(liDesc);
}