
var submit = document.getElementById('submit');
var searchInput = document.getElementById('searchUser');
var currentWeather = document.getElementById('content');
var apiKey = '12a2165c663fd1ef8ae014039dcd5dd7';
var searchHistory = JSON.parse(localStorage.getItem('search-history')) || [];
submit.addEventListener('click', function (event) {
    event.preventDefault();
var searchTerm = searchInput.value;
    searchHistory.push(searchTerm);
  localStorage.setItem('search-history', JSON.stringify(searchHistory));
  console.log(searchHistory);
  getForecast(searchTerm);
});
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
//five day