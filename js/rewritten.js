'use strict'
import weatherBook from './weatherCode.js';

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

//get weather
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

//createCard
const createCard = async () => {
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

    const { cityLatitude, cityLongitude } = await getCityInformation();
    
    //add date
    const weatherApi = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + encodeURIComponent(cityLatitude) + "&longitude=" + encodeURIComponent(cityLongitude) + "&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin");
    const forecastInformation = await weatherApi.json();
    const articleDate = document.createElement("h2");
    articleDate.classList.add("article-date");
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const getDate = new Date()
    articleDate.textContent = weekdays[(getDate.getDay() + i) % 7]
    weatherArticle.append(articleDate);

    //add weather code description
    const weatherHeading = document.createElement("h3");
    weatherHeading.classList.add("weather-description");
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
}



//SEARCH BUTTON
const searchButton = document.querySelector("button");
searchButton.addEventListener("click", () => {
    getCityInformation();
    getWeather();
    createCard();
})

//PRESS ENTER
const inputField = document.querySelector("input");
inputField.addEventListener("keyup", (event) => {
    if (event.code === 'Enter') {
        getCityInformation();
        getWeather();
        createCard();
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
