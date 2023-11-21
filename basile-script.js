import WMO_CODES from "./wmo_codes.mjs";

const button = document.querySelector('#submit-search');
const inputField = document.querySelector('#cityName');
const cityNameContainer = document.querySelector('.city-info')

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


async function getGeoData(cityName){

    try {
        const response = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + cityName + "&count=10&language=en&format=json");
        const data = await response.json();
        cityNameContainer.textContent = data.results[0].name + ", " + data.results[0].country;
        return data.results[0];
    } catch (err) {
        console.error({code: 502, msg: "Bad Request: Location not found."})
        return {error: "Bad Request: Location not found."};
    }
}

async function getWeatherData(location) {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + location.latitude + "&longitude=" + location.longitude + "&current=temperature_2m,weather_code&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset");
    const data = await response.json();
    return data;
}

function clearWeatherMap () {
    const container = document.querySelector(".container");
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    };
}

function createWeatherCard (result, i) {
    const container = document.querySelector('.container');

    const date = new Date()
    console.log(weekdays[(date.getDay() + i) % 7])

    // Create the elements with Data
    const card = document.createElement('div');
    card.classList.add("card");

    if (i === 0) card.classList.add("main-card");

    container.appendChild(card);

    const imageBox = document.createElement('div');
    imageBox.classList.add("imgBx");
    card.appendChild(imageBox);

    const cardImg = document.createElement('img');
    WMO_CODES["name"]
    cardImg.src = WMO_CODES[result.daily.weather_code[i]].day.image;
    imageBox.appendChild(cardImg);
    
    const contentBox = document.createElement("div");
    contentBox.classList.add("contentBx");
    card.appendChild(contentBox);

    const cardHeader = document.createElement("h2");
    cardHeader.innerHTML = dayOfTheWeek;
    contentBox.appendChild(cardHeader);

    const tempDescription = document.createElement("h4");
    tempDescription.innerHTML = WMO_CODES[result.daily.weather_code[i]].day.description;
    contentBox.appendChild(tempDescription);

    const currentTempBox = document.createElement("div");
    currentTempBox.classList.add("color");
    contentBox.appendChild(currentTempBox)

    const currentTempHeader = document.createElement("h3");
    currentTempHeader.innerHTML = "Temp:"
    currentTempBox.appendChild(currentTempHeader);

    const currentTemp = document.createElement("span");
    currentTemp.classList.add("current-temp");
    let averageTemp = (result.daily.temperature_2m_min[i] + result.daily.temperature_2m_max[i]) / 2;
    if(i === 0) averageTemp = result.current.temperature_2m;
    currentTemp.innerHTML = averageTemp.toFixed(1) + "°C";
    currentTempBox.appendChild(currentTemp);

    const minMaxTemperatures = document.createElement("div");
    minMaxTemperatures.classList.add("details");
    contentBox.appendChild(minMaxTemperatures);

    const minMaxTempHeader = document.createElement("h3");
    minMaxTempHeader.innerHTML = "More:"
    minMaxTemperatures.appendChild(minMaxTempHeader);

    const minTemp = document.createElement("span");
    minTemp.classList.add("min-temp")
    minTemp.innerHTML = result.daily.temperature_2m_min[i]  + "°C";
    minMaxTemperatures.appendChild(minTemp);

    const maxTemp = document.createElement("span");
    maxTemp.classList.add("max-temp")
    maxTemp.innerHTML = result.daily.temperature_2m_max[i] + "°C";
    minMaxTemperatures.appendChild(maxTemp);
}

async function startWeatherApp() {
    const getCityInput = document.querySelector("#cityName").value;

    const geoData = await getGeoData(getCityInput);

    if(!geoData.error) {
        const weatherData = await getWeatherData(geoData);

        clearWeatherMap();

        for(let i= 0; i < 5; i++) {
            createWeatherCard(weatherData, i);
        }
    } else {
        alert("Hey are you sure you are not holding up your map upside down?")
    }
    console.log(geoData)
}

inputField.addEventListener('keyup', (event) => {
    if (event.code === "Enter" && document.getElementById('cityName').value.trim()) {
        startWeatherApp();
    }
})
button.addEventListener('click', startWeatherApp)