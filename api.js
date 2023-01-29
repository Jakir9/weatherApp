// api key: de9bd6f99b628a122f3be3f98428c81c

let weather = {
    'apiKey' : 'de9bd6f99b628a122f3be3f98428c81c',
    fetchWeather : function(){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q={BIRMINGHAM}&appid={de9bd6f99b628a122f3be3f98428c81c}&units=metric")
            .then((response) => response.json()) // gets weather data and represents it in json format
            .then((data) => console.log(data)); // displays data from api
    }
}

var date = new Date();
console.log(date);

var time = date.getTime();
console.log(time);
//api call for a city: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


