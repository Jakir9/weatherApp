var key;

var longitude;
var latitude; 
var city;
key = "de9bd6f99b628a122f3be3f98428c81c";

getWeather();
function getWeather(){
 getLocation(); //Gets Current Location & returns weather
  
}

function getLocation() {
   if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(showPosition);

   
  } else {
   console.log("Gelocation is not available");
  }

}

function showPosition(position) {
  longitude = position.coords.longitude;
  latitude = position.coords.latitude;
    console.log("Latitude: " + position.coords.latitude +
    " Longitude: " + position.coords.longitude);  

  fetch("https://api.openweathermap.org/data/2.5/weather?lon=" + longitude + "&lat="+ latitude+ "&appid="+ key +"&units=metric")
  .then((response) => response.json()) // gets weather data and represents it in json format
  .then((data) => this.displayWeather(data)) // displays data from api

}

function displayWeather(json){
const {name} = json;
const {description,icon} = json.weather[0];
const {temp, feels_like} = json.main;
const {speed} = json.wind;
const{sunset,sunrise} = json.sys;
const date = new Date().toTimeString().split(" ")[0];


const sun_set = new Date(sunset*1000).toTimeString().split(" ")[0];
const sun_rise = new Date(sunrise*1000).toTimeString().split(" ")[0];

console.log(name, description, icon, temp, feels_like, speed, date, sunset,sunrise);

document.querySelector(".location").innerText = "Weather in " + name;
document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
document.querySelector(".description").innerText = description.toUpperCase();
document.querySelector(".temp").innerText = "Temp: " + temp + "°C";
document.querySelector(".feelsLike").innerText = "Feels Like: " + feels_like + "°C";
document.querySelector(".wind").innerText = "Wind: " + speed + " mph";
document.querySelector(".lastUpdated").innerText = "Last Updated: " + date;
document.querySelector(".sunrise").innerText = "Sunrise: " + sun_rise;
document.querySelector(".sunset").innerText = "Sunset: " + sun_set;
}

// document.querySelector(".search button").addEventListener("click", function(){
//  search();
// }
// )

document.querySelector(".search-btn").addEventListener("click", function(){
  search();
}
);

document.querySelector(".search-bar").addEventListener('keyUp', function(event){
  if (event.key == "Enter") {
     search();
  }
  else {
    console.log('fail');
  }
}
);

function search(){
 this.getCityWeather(document.querySelector(".search-bar").value);
};

function getCityWeather(city){

  fetch("http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=1"+"&appid=" + key
  )
  .then((response) => response.json()) // gets weather data and represents it in json format
  .then((data) => this.getCoords(data)) // displays data from api

};

function getCoords(json){
  const {lat} = json[0];
  const {lon} = json[0];
 latitude = lat;
 longitude = lon;
 key = "de9bd6f99b628a122f3be3f98428c81c";

 fetch("https://api.openweathermap.org/data/2.5/weather?lon=" + longitude + "&lat="+ latitude+ "&appid="+ key +"&units=metric"
  )
  .then((response) => response.json()) // gets weather data and represents it in json format
  .then((data) => this.displayWeather(data)) // displays data from api

}


