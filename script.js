// Weather Book
import weatherBook from './weatherCode.js';

//Display city information + forecast
async function getWeather () {
    const inputCity = document.querySelector("input").value;
    const geoApi = "https://geocoding-api.open-meteo.com/v1/search?name=" + encodeURIComponent(inputCity);
    const getCity = await fetch (geoApi);
    const cityInformation = await getCity.json();
    //All info
    //console.log(JSON.stringify(cityInformation, null, 2));
    //Name
    const cityInfoSection = document.getElementById("city-information");
    const cityName = document.createElement("h2");
    cityName.classList.add('city-name');
    cityInfoSection.append(cityName);
    cityName.textContent = cityInformation.results[0].name;
    //Country
    const cityCountry = document.createElement("h3");
    cityCountry.classList.add('country-name');
    cityInfoSection.append(cityCountry);
    cityCountry.textContent = cityInformation.results[0].country;
    //Lattitude
    const cityLatitude = cityInformation.results[0].latitude;
    //Longitude
    const cityLongitude = cityInformation.results[0].longitude;
    //Forecast
    const weatherApi = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + encodeURIComponent(cityLatitude) + "&longitude=" + encodeURIComponent(cityLongitude) + "&hourly=temperature_2m&daily=weather_code");
    //https://api.open-meteo.com/v1/forecast?latitude=48.2085&longitude=16.3721&hourly=temperature_2m&daily=weather_code
    const forecastInformation = await weatherApi.json();
    //console.log(forecastInformation);
    //const weekDays = forecastInformation.daily.time;
    const firstweathersCodes = forecastInformation.daily.weather_code.slice(0, 4);
    firstweathersCodes.forEach(code => {
        if (weatherBook.hasOwnProperty(code)) {
            const weathersDescription = document.createElement("article");
            weathersDescription.classList.add('forecast-article');
            weathersDescription.textContent = weatherBook[code].day.description;
            const forecastFirstSection = document.getElementById("forecast-firstsection");
            forecastFirstSection.append(weathersDescription);
        } else {
            const codeNotFound = document.createElement("article");
            codeNotFound.textContent = "Weather Code not found, but if it's Belgium it'll probably rain."
            forecastFirstSection.append(codeNotFound);
        }
    });
    const secondweathersCodes = forecastInformation.daily.weather_code.slice(4, 7);
    secondweathersCodes.forEach(code => {
        if (weatherBook.hasOwnProperty(code)) {
            const weathersDescription = document.createElement("article");
            weathersDescription.classList.add('forecast-article');
            weathersDescription.textContent = weatherBook[code].day.description;
            const forecastSecondSection = document.getElementById("forecast-secondsection");
            forecastSecondSection.append(weathersDescription);
        } else {
            const codeNotFound = document.createElement("article");
            codeNotFound.textContent = "Weather Code not found, but if it's Belgium it'll probably rain."
            forecastSecondSection.append(codeNotFound);
        }
    })
    newSearch();
}

//DISABLE BUTTON
const searchButton = document.querySelector("button");
searchButton.addEventListener("click", () => {
    getWeather();
    searchButton.disabled = true;
    if (searchButton.disabled == true) {
        searchButton.classList.add('disabled-button');
    }
    enterKeyPressed = true;
})

//NEW SEARCH
function newSearch() {
    const newSearch =  document.createElement("button");
    newSearch.classList.add('newSearch-button');
    newSearch.textContent = "New Search";
    const newSearchSection = document.getElementById("newSearch");
    newSearchSection.append(newSearch);
    newSearch.addEventListener("click", () => {
    location.reload();
    
})

}
//PRESS ENTER
const inputField = document.querySelector("input");
let enterKeyPressed = false;
inputField.addEventListener("keyup", (event) => {
    if (event.code === 'Enter' && !enterKeyPressed) {
        getWeather();
        searchButton.disabled = true;
        if (searchButton.disabled == true) {
            searchButton.classList.add('disabled-button');
        }
        enterKeyPressed = true;
    }
})

