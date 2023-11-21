// Weather Book
//import weatherBook from './weatherCode.js';

'use strict'

//get city

const getCityInformation = async () => {
    const inputCity = document.getElementById('city').value;
    const geoApi = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + encodeURIComponent(inputCity));
    const cityInformation = await geoApi.json();
    console.dir(cityInformation);

    //Lattitude
    const cityLatitude = cityInformation.results[0].latitude;
    console.log(cityLatitude)
    //Longitude
    const cityLongitude = cityInformation.results[0].longitude;
    console.log(cityLongitude);

    return { cityInformation, cityLatitude, cityLongitude };
}

const getWeather = async() => {
    try {
        // Call getCityInformation() and extract latitude, and longitude
        const { cityLatitude, cityLongitude } = await getCityInformation();

        const weatherApi = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + encodeURIComponent(cityLatitude) + "&longitude=" + encodeURIComponent(cityLongitude) + "&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin");
        const forecastInformation = await weatherApi.json();
        console.log(forecastInformation);

        return forecastInformation;

    } catch (error) {
        console.error("Error fetching weather information:", error);
    }
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
        getWeather();
    }
})

//NEW SEARCH
const newSearch = () => {
    //code to execute
}

//DATE FUNCTION
const getCurrentDate = () => {
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

