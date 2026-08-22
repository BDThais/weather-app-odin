import "./style.css";
import { getUserInput } from "./getUserInput";
import {
  inputForm,
  searchButton,
  statusMessage,
  weatherReport,
} from "./relevantDomElements";
import { getGeoData } from "./getGeoData";
import { getWeatherData } from "./getWeatherData";
import { renderWeatherReport } from "./renderWeatherReport";

function showStatus(message) {
  statusMessage.textContent = message;
  statusMessage.classList.remove("hidden");
  statusMessage.classList.add("error");
  weatherReport.classList.add("hidden");
}

function clearStatus() {
  statusMessage.textContent = "";
  statusMessage.classList.add("hidden");
  statusMessage.classList.remove("error");
}

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

searchButton.addEventListener("click", async function () {
  const userInput = getUserInput().trim();

  if (!userInput) {
    showStatus("Please enter a city name.");
    return;
  }

  try {
    const geoData = await getGeoData(userInput);

    if (!geoData) {
      showStatus("Location not found. Please try another city.");
      return;
    }

    const weatherData = await getWeatherData(geoData);
    clearStatus();
    renderWeatherReport(geoData, weatherData);
  } catch (error) {
    console.error(error);
    showStatus("Unable to fetch weather data. Please try again.");
  }
});
