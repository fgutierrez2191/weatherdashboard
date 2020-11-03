
var submit = document.getElementById('submit');
var searchInput = document.getElementById('searchUser');
var currentWeather = document.getElementById('content');
var currentHumidity = document.getElementById('humidity');
var currentWindSpeed = document.getElementById('windspeed');
var currentFeelsLike = document.getElementById('feelslike');
var apiKey = '12a2165c663fd1ef8ae014039dcd5dd7';
var searchHistory = JSON.parse(localStorage.getItem('search-history')) || [];
submit.addEventListener('click', function (event) {
    event.preventDefault();
var searchTerm = searchInput.value;
    searchHistory.push(searchTerm);
  localStorage.setItem('search-history', JSON.stringify(searchHistory));
  console.log(searchHistory);
  //call functions to get different aspects of weather 
  getForecast(searchTerm);
  getHumidity(searchTerm);
  getWindSpeed(searchTerm);
  feelsLike(searchTerm);
});
//temperature
function getForecast(city) {
  console.log(city);
  fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&appid=' +
      apiKey +
      '&units=imperial'
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      currentWeather.textContent = '';
      console.log(data);
      //create all elements and add text content
      var tempEl = document.createElement('h2');
      tempEl.textContent = 'Current Temperature: ' + data.main.temp;
      //append all created elements
      currentWeather.appendChild(tempEl);
    });
}
//humidity
function getHumidity(city) {
    console.log(city);
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&appid=' +
        apiKey +
        '&units=imperial'
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        currentHumidity.textContent = '';
        console.log(data);
        //create all elements and add text content
        var humidEl = document.createElement('h2');
        humidEl.textContent = 'Current humidity: ' + data.main.humidity;
        //append all created elements
        currentHumidity.appendChild(humidEl);
      });
  }
  //windspeed
  function getWindSpeed(city) {
    console.log(city);
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&appid=' +
        apiKey +
        '&units=imperial'
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        currentWindSpeed.textContent = '';
        console.log(data);
        //create all elements and add text content
        var windSpeedEl = document.createElement('h2');
        windSpeedEl.textContent = 'Wind Speed: ' + data.wind.speed;
        //append all created elements
        currentWindSpeed.appendChild(windSpeedEl);
      });
  }
  //feels like
    function feelsLike(city) {
    console.log(city);
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&appid=' +
        apiKey +
        '&units=imperial'
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        currentFeelsLike.textContent = '';
        console.log(data);
        //create all elements and add text content
        var feelsLikeEl = document.createElement('h2');
        feelsLikeEl.textContent = 'Feels like: ' + data.main.feels_like;
        //append all created elements
        currentFeelsLike.appendChild(feelsLikeEl);
      });
  }
