//Search and display city name + country
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