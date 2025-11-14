import { APIkey } from "./apiKey";

async function getGeoData(city) {
  const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIkey}`;
  try {
    const geoData = await fetch(geocodingUrl);
    const jsonData = await geoData.json();
    if (jsonData.length === 0) {
      return false;
    } else {
      return jsonData[0];
    }
  } catch (e) {
    console.error(e);
  }
}

export { getGeoData };
