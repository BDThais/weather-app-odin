import { APIkey } from "./apiKey";

async function getWeatherData(geoData) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&units=metric&appid=${APIkey}`;
  try {
    const weatherData = await fetch(weatherUrl);
    const jsonWeatherData = await weatherData.json();
    return jsonWeatherData;
  } catch (e) {
    console.error(e);
  }
}

export { getWeatherData };
