function displayCity(event) {
  event.preventDefault();
  let city = document.querySelector("#current-city");
  let input = document.querySelector("#search-city");
  city.innerHTML = `${input.value}`;
  let apiKey = "secret";
  let cityName = input.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemp);
}

function showTemp(response) {
  let currentTemperature = document.querySelector("#degrees");
  let currentDegrees = Math.round(response.data.main.temp);
  currentTemperature.innerHTML = `${currentDegrees}°C`;
}
function getPosition(position) {
  let apiKey = "secret";
  let currentLatitude = position.coords.latitude;
  let currentLongitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showCurrentTemp);
}

function showCurrentTemp(response) {
  let newHeading = document.querySelector("h1");
  let localDegrees = Math.round(response.data.main.temp);
  newHeading.innerHTML = `It is ${localDegrees}°C`;
}
function getNavigator(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getPosition);
}

let searchEngine = document.querySelector("form");

searchEngine.addEventListener("submit", displayCity);

function changeUnitC(event) {
  event.preventDefault();
  let degrees = document.querySelector("#degrees");
  degrees.innerHTML = `19°C`;
}

function changeUnitF(event) {
  event.preventDefault();
  let degrees = document.querySelector("#degrees");
  degrees.innerHTML = `66°F`;
}

let conversionC = document.querySelector("#conversion-C");
let conversionF = document.querySelector("#conversion-F");
conversionC.addEventListener("click", changeUnitC);
conversionF.addEventListener("click", changeUnitF);

let currentLocation = document.querySelector("#location-button");
currentLocation.addEventListener("click", getNavigator);
