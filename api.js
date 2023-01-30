import 'style.css';
import 'index.html';

let key = "de9bd6f99b628a122f3be3f98428c81c";

let doc = document.getElementById("doc");
let location = getLocation();
const units = "metric";
var lon = document.getElementById('longitude').value;
var lat = document.getElementById('latitude').value;
let lang = 'en';
let url = "https://api.openweathermap.org/data/3.0/onecall?lat={" + lat + "}&lon={" + lon + "}&appid={"+ key +"}";

   
function getWeather(url) {
    fetch(url)
        .then((response) => response.json()) // gets weather data and represents it in json format
        .then((data) => console.log(data)); // displays data from api
}



function getLocation() {
   if(navigator.geolocation) {
    geolocation.getCurrentPosition(showPosition);

    } else { console.log('Geolocation unsupported'); 
}
}

function getCity(){
   return navigator.geolocation.getCity(getLocation)
}

function showPosition(position) {
    doc.innerHTML = "Latitude: " + position.coords.latitude +
    "<br> Longitude: " + position.coords.longitude;
  }

var date = new Date();
console.log(date);

var time = date.getTime();
console.log(time);
//api call for a city: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


