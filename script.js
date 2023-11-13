//Display city information + forecast
async function searchCity () {
    let inputCity = document.querySelector("input").value;
    let chosenCity = await fetch ("https://geocoding-api.open-meteo.com/v1/search?name=" + encodeURIComponent(inputCity));
    let cityInformation = await chosenCity.json();
    //Name
    let cityName = document.createElement("h2");
    document.body.append(cityName);
    cityName.textContent = cityInformation.results[0].name;
    //Country
    let cityCountry = document.createElement("h3");
    document.body.append(cityCountry);
    cityCountry.textContent = cityInformation.results[0].country;
    //Lattitude
    let cityLatitude = document.createElement("h4");
    document.body.append(cityLatitude);
    cityLatitude.textContent = cityInformation.results[0].latitude;
    //Longitude
    let cityLongitude = document.createElement("h4");
    document.body.append(cityLongitude);
    cityLongitude.textContent = cityInformation.results[0].longitude;
    //All info
    //console.log(JSON.stringify(cityInformation, null, 2));

    //Forecast
    let cityForecast = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + encodeURIComponent(cityLatitude.textContent) + "&longitude=" + encodeURIComponent(cityLongitude.textContent) + "&hourly=temperature_2m&daily=weather_code");
    
    //https://api.open-meteo.com/v1/forecast?latitude=48.2085&longitude=16.3721&hourly=temperature_2m&daily=weather_code
    let forecastInformation = await cityForecast.json();
    console.log(forecastInformation);

    //let todayForecast =

}

const searchButton = document.querySelector("button");
searchButton.addEventListener("click", () => {
    searchCity();
})

/*PRESSENTER FUNCTION pressEnter.addEventListener("keyup", (event) => {
    if (event.isComposing || event.keyCode === 13) {
        //code to execute
    }
})*/




//TODO: On clicking the SUBMIT button or pressing ENTER:
        //Use an api to define the city geo-location data from the user-input
        //Use an api to get the weather data for at least the next 5 days
        //Manipulate your DOM in order to display the weather for the next 5 days in your application.
//TODO: Find a way to make those API calls asynchronous.
//TODO: The application must be responsive, accessible and mobile friendly