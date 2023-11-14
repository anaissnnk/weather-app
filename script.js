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
    const main = document.querySelector("main");
    const cityName = document.createElement("h2");
    main.append(cityName);
    cityName.textContent = cityInformation.results[0].name;
    //Country
    const cityCountry = document.createElement("h3");
    main.append(cityCountry);
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
    const weathersCodes = forecastInformation.daily.weather_code;
    weathersCodes.forEach(code => {
        if (weatherBook.hasOwnProperty(code)) {
            const weathersDescription = document.createElement("section");
            weathersDescription.classList.add('forecast-section');
            weathersDescription.textContent = weatherBook[code].day.description;
            main.append(weathersDescription);
        } else {
            const codeNotFound = document.createElement("section");
            codeNotFound.textContent = "Weather Code not found, but if it's Belgium it'll probably rain."
            main.append(codeNotFound);
        }
    });
    newSearch();
}

function newSearch() {
    const newSearch =  document.createElement("button");
    newSearch.textContent = "New Search";
    const newSearchSection = document.getElementById("newSearch");
    newSearchSection.append(newSearch);
    newSearch.addEventListener("click", () => {
    location.reload();
})

}


const searchButton = document.querySelector("button");
searchButton.addEventListener("click", () => {
    getWeather();
})

const inputField = document.querySelector("input");
inputField.addEventListener("keyup", (event) => {
    if (event.code === 'Enter') {
        getWeather();
    }
})
