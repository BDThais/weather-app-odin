import "./style.css";
import { getUserInput } from "./getUserInput";
import { inputForm, searchButton } from "./relevantDomElements";
import { getGeoData } from "./getGeoData";
import { getWeatherData } from "./getWeatherData";
import { renderWeatherReport } from "./renderWeatherReport";

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

searchButton.addEventListener("click", async function () {
  const userInput = getUserInput();
  if (userInput === "") {
    alert("Can't find the void")
  } else {
    try {
      const geoData = await getGeoData(userInput);
      if (!geoData) {
        alert("Invalid input");
      } else {
        const weatherData = await getWeatherData(geoData);
        renderWeatherReport(geoData,weatherData);
      }
    } catch (error) {
      console.error(error);
    }
  }
});
