var APIKey = "6d3d98140ed68a7b3a4c052231a4ef50";
var city;
var searchBtn = document.querySelector("#search-Btn");
var input = document.querySelector("#city-input");
var prevSearch = document.querySelector("#previous-search");


searchBtn.addEventListener("click", () => {
    var userInput = input.value.trim().toLowerCase();
    console.log(input);
    getCity(userInput, APIKey);
})

function getCity(city, APIKey) {
    var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
   console.log(queryURL);
    fetch(queryURL)
    
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(data) {
            var cityName = data.name;
            var currentTemp = Math.round(data.main.temp);
            var currentWind = data.wind.speed;
            var currentHumidity = data.main.humidity;
            var currentIcon = data.weather[0].icon;
            console.log(currentTemp);
            function currentWeather() {
                $("#city-name").text(cityName);
                $("#temp").text(9/5 * (currentTemp - 273)+32);
                $("#wind").text(currentWind);
                $("#humidity").text(currentHumidity);
                var iconHTML = ``;
            document.getElementById("icon").innerHTML = "";
            iconHTML = `<img src="http://openweathermap.org/img/wn/${currentIcon}.png" alt="icon of current weather" id="icon">`;
            document.getElementById("icon").innerHTML += iconHTML;
            }
            currentWeather();
        }) 
}
