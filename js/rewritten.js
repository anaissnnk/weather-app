// Weather Book
//import weatherBook from './weatherCode.js';

//get city
async function getCityInformation () {
    const inputCity = document.getElementById('city').value;
    const geoApi = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + encodeURIComponent(inputCity));
    const cityInformation = await geoApi.json();
    console.dir(cityInformation);
}

//get geoLocalization
async function getWeather () {
    //code to execute;
}






//SEARCH BUTTON
const searchButton = document.querySelector("button");
searchButton.addEventListener("click", () => {
    //code to execute
})

//PRESS ENTER
const inputField = document.querySelector("input");
inputField.addEventListener("keyup", (event) => {
    if (event.code === 'Enter') {
        getCityInformation();
    }
})

//NEW SEARCH
function newSearch() {
    //code to execute
}

//DATE FUNCTION
function getCurrentDate() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
}

//PLACE DATE
const dateSection = document.getElementById("actual-date");
const currentDate = document.createElement("span");
currentDate.classList.add("current-date");
currentDate.textContent = "Today is " + getCurrentDate();
dateSection.append(currentDate);

