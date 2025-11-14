import {
  weatherReport,
  cityName,
  temperature,
  weatherDesc,
  humidity,
  feelLike,
} from "./relevantDomElements";

function renderWeatherReport(geoData, weatherData) {
  cityName.textContent = `The City of ${geoData.name}`;
  temperature.textContent = `Temperature: ${weatherData.main.temp}℃`;
  weatherDesc.textContent = `Weather: ${weatherData.weather[0].description}`;
  humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
  feelLike.textContent = `Feels like: ${weatherData.main.feels_like}℃`;
  weatherReport.classList.remove("hidden");
}

export { renderWeatherReport };
