const APIkey = "f7e2bea9d031e24a54f868dd3c5c89db";

async function getGeoData(city) {
  const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIkey}`;
  const geoData = await fetch(geocodingUrl);
  const jsonData = await geoData.json();
  if (jsonData.length === 0) {
    return false;
  } else {
    return jsonData[0];
  }
}

export { getGeoData };
