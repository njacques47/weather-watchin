var saveCity = function (event) {
    //this will prevent default behavior of the form
    event.preventDefault()
    console.log("click");
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=285e6386952cc303066133f9b9208b04").then(function(response) {
        return response.json()
    }).then(function (weatherData){
        console.log(weatherData.name)
    });

}

// // define btn variable & add event listener
// document.getElementById("btn").addEventListener ("click", saveCity);
// //api placeholder thing above. an example from tutoring;; will return the **value** of the cityName in the fetch
// document.getElementById("cityName").value;



// // add current city to page display
//     // display temp
//     // display wind
//     // display humidity
//     // display UV index

// var api = https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=285e6386952cc303066133f9b9208b04


// get the current weather 
    // display temp
    // display wind
    // display humidity
    // display UV index


// create a function that will display the weather for the next 10 days
    // grab icon element
    // grab temp element
        // convert to farenheight
    // grab desricpton element
    // grab location element

const KELVIN = 273;
const key = "285e6386952cc303066133f9b9208b04";

const tempElement = document.querySelector(".temperature-value");
const humidityElement = document.querySelector(".temperature-value");
const windElement = document.querySelector(".temperature-value");
const indexElement = document.querySelector(".temperature-value");

const weather = {
    temperature : {
        value : 18,
        unit : "farenheight"
    },
    city : "Atlanta",
    state : "GA"
    
};

function getWeather(city, name, state){
    let api = `api.openweathermap.org/data/2.5/weather?q={city},{state}&appid={key}`;
    fetch (api);
    console.log(api)
    
};

// API Stuff
const apiCurrent = api.openweathermap.org/data/2.5/weather?q=${city},{state}&appid={apiKey}
const apiForecast = api.openweathermap.org/data/2.5/forecast?q={city name},{state code}&appid={apiKey}
const apiKey = 285e6386952cc303066133f9b9208b04;

let pastLocation = []; //hopefully an empty array that can be changed

// store searched locations
function storeLocation() {
    localStorage.setItem('pastLocation', JSON.stringify(pastLocation))
}
