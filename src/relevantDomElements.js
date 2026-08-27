const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#search-button");
const inputForm = document.querySelector("#city-form");
const statusMessage = document.querySelector("#status-message");
const weatherReport = document.querySelector(".weather-display");
const cityName = weatherReport.querySelector("#city-name");
const temperature = weatherReport.querySelector("#temperature");
const weatherDesc = weatherReport.querySelector("#weather-description");
const humidity = weatherReport.querySelector("#humidity");
const feelLike = weatherReport.querySelector("#feel-like");
const weatherIcon = weatherReport.querySelector("#weather-icon");
const windSpeed = weatherReport.querySelector("#wind-speed");
const pressure = weatherReport.querySelector("#pressure");
const visibility = weatherReport.querySelector("#visibility");
export {
  cityInput,
  searchButton,
  inputForm,
  statusMessage,
  weatherReport,
  cityName,
  temperature,
  weatherDesc,
  humidity,
  feelLike,
  weatherIcon,
  windSpeed,
  pressure,
  visibility,
};
