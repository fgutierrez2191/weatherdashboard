
var submit = document.getElementById('submit');
var searchInput = document.getElementById('searchUser');
var currentWeather = document.getElementById('content');
var currentHumidity = document.getElementById('humidity');
var currentWindSpeed = document.getElementById('windspeed');
var currentFeelsLike = document.getElementById('feelslike');
var currentFiveDay = document.getElementById('five-day');
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
  getFiveDay(searchTerm);

});
//temperature
function getForecast(city) {
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
      //create all elements and add text content
      var tempEl = document.createElement('h2');
      tempEl.textContent = 'Current Temperature: ' + data.main.temp;
      //append all created elements
      currentWeather.appendChild(tempEl);
    });
}
//humidity
function getHumidity(city) {
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
        //create all elements and add text content
        var humidEl = document.createElement('h2');
        humidEl.textContent = 'Current humidity: ' + data.main.humidity;
        //append all created elements
        currentHumidity.appendChild(humidEl);
      });
  }
  //windspeed
  function getWindSpeed(city) {
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
        console.log(data);
        currentWindSpeed.textContent = '';
        //create all elements and add text content
        var windSpeedEl = document.createElement('h2');
        windSpeedEl.textContent = 'Wind Speed: ' + data.wind.speed;
        //append all created elements
        currentWindSpeed.appendChild(windSpeedEl);
      });
  }
  //feels like
    function feelsLike(city) {
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
        //create all elements and add text content
        var feelsLikeEl = document.createElement('h2');
        feelsLikeEl.textContent = 'Feels like: ' + data.main.feels_like;
        //append all created elements
        currentFeelsLike.appendChild(feelsLikeEl);
      });
  }
  //five day forecast using a saved cityname
 function getFiveDay(city) {
   fetch(
    'http://api.openweathermap.org/data/2.5/forecast?q=' +
    city +
    '&appid=' +
    apiKey +
    '&units=imperial'
  )
  .then(function (response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    currentFiveDay.textContent = '';
    //create all elements and add text content
    for (var i=0; i<data.list.length; i++){
      if (data.list[i].dt_txt.indexOf("00:00:00") !== -1) {
        var card = document.createElement("div")
        card.setAttribute("class", "col-sm-2 bg-primary forecast text-white ml-2 mb-3 p-2 mt-2 rounded");
        var temp = document.createElement("p")
        temp.textContent = "Temp:" + data.list[i].main.temp
        var humidity = document.createElement("p")
        humidity.textContent = "Humidity:" + data.list[i].main.humidity

        card.appendChild(temp);
        card.appendChild(humidity);
        //add eveything to the card and then append card to page
        currentFiveDay.appendChild(card);
      }
    }


  });

 }

//  <div class="col-sm-2 bg-primary forecast text-white ml-2 mb-3 p-2 mt-2 rounded" >
//  <p id="fDate1"></p>
//  <p id="fImg1"></p>
//    <p>Temp:<span id="fTemp1"></span></p>
//    <p>Humidity:<span id="fHumidity1"></span></p>
// </div>