import {
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
} from "./relevantDomElements";

function renderWeatherReport(geoData, weatherData) {
  const condition = weatherData.weather[0];
  const conditionGroup = condition.main.toLowerCase();
  const weatherState = conditionGroup === "clear"
    ? "clear"
    : conditionGroup === "clouds"
      ? "clouds"
      : conditionGroup === "rain" || conditionGroup === "drizzle"
        ? "rain"
        : conditionGroup === "thunderstorm"
          ? "storm"
          : conditionGroup === "snow"
            ? "snow"
            : "mist";

  weatherReport.className = `weather-display weather-${weatherState}`;
  cityName.textContent = geoData.name;
  temperature.textContent = `${Math.round(weatherData.main.temp)}°`;
  weatherDesc.textContent = condition.description;
  humidity.textContent = `${weatherData.main.humidity}%`;
  feelLike.textContent = `Feels like ${Math.round(weatherData.main.feels_like)}°`;
  windSpeed.textContent = `${Math.round(weatherData.wind.speed * 3.6)} km/h`;
  pressure.textContent = `${weatherData.main.pressure} hPa`;
  visibility.textContent = `${(weatherData.visibility / 1000).toFixed(1)} km`;
  weatherIcon.textContent = "";
  weatherReport.classList.remove("hidden");
}

export { renderWeatherReport };
