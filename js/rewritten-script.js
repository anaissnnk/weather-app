// Weather Book
import weatherBook from './weatherCode.js';

// search city, get weather
async function getWeather () {
    const inputCity = document.querySelector("input").value;
    const geoApi = "https://geocoding-api.open-meteo.com/v1/search?name=" + encodeURIComponent(inputCity);
    const getCity = await fetch (geoApi);
    const cityInformation = await getCity.json();
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

    //create card
    let container;
    for (let i = 0; i < 5; i++) {
        if (i <=2 ) {
            container = document.getElementById("forecast-firstsection");
        } else {
            container = document.getElementById("forecast-secondsection");
        }
    
    const weatherArticle = document.createElement("article");
    weatherArticle.classList.add("forecast-article");
    container.append(weatherArticle);
    
    //add date
    const weatherApi = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + encodeURIComponent(cityLatitude) + "&longitude=" + encodeURIComponent(cityLongitude) + "&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin");
    const forecastInformation = await weatherApi.json();
    const articleDate = document.createElement("h2");
    articleDate.classList.add("article-date");
    articleDate.textContent = forecastInformation.daily.time[i];
    weatherArticle.append(articleDate);

    //add weather code description
    const weatherHeading = document.createElement("h3");
    weatherHeading.textContent = weatherBook[forecastInformation.daily.weather_code[i]].day.description;
    weatherArticle.append(weatherHeading);

    //add weather img
    const weatherImg = document.createElement("img");
    weatherImg.classList.add("weather-img");
    weatherImg.src = weatherBook[forecastInformation.daily.weather_code[i]].day.image;
    weatherArticle.append(weatherImg);

    //add min temperature
    const minTemperature = document.createElement("span");
    minTemperature.classList.add('min-temperature');
    minTemperature.textContent = "Min temperature: " + forecastInformation.daily.temperature_2m_min[i];
    weatherArticle.append(minTemperature);

    //add max temperature
    const maxTemperature = document.createElement("span");
    maxTemperature.classList.add('max-temperature');
    maxTemperature.textContent = "Max temperature: " + forecastInformation.daily.temperature_2m_max[i];
    weatherArticle.append(maxTemperature);  
}
    //new search
    newSearch();  
}


//SEARCH BUTTON
const searchButton = document.querySelector("button");
searchButton.addEventListener("click", () => {
    getWeather();
    searchButton.disabled = true;
    if (searchButton.disabled == true) {
        searchButton.classList.add('disabled-button');
    }
    enterKeyPressed = true;
})

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

//NEW SEARCH
function newSearch() {
    const newSearch =  document.createElement("button");
    newSearch.classList.add('newSearch-button');
    newSearch.textContent = "New Search";
    const header = document.querySelector("header");
    const article = document.getElementById("app-article");
    header.insertBefore(newSearch, article);
    newSearch.addEventListener("click", () => {
    location.reload();
})
}

//DATE
function getCurrentDate() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
}

const dateSection = document.getElementById("actual-date");
const currentDate = document.createElement("span");
currentDate.textContent = "Today is " + getCurrentDate();
dateSection.append(currentDate);
