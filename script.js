async function logWeather() {
    const response = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=Gent&count=1&language=en&format=json");
    const weather = await response.json();
    //console.log(JSON.stringify(weather, null, 2));
    console.log("Name = " + weather.results[0].name);

}

logWeather();








//TODO: On clicking the SUBMIT button or pressing ENTER:
        //Use an api to define the city geo-location data from the user-input
        //Use an api to get the weather data for at least the next 5 days
        //Manipulate your DOM in order to display the weather for the next 5 days in your application.
//TODO: Find a way to make those API calls asynchronous.
//TODO: The application must be responsive, accessible and mobile friendly