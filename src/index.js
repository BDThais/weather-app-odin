import "./style.css";
import { getUserInput } from "./getUserInput";
import { inputForm, searchButton } from "./relevantDomElements";
import { getGeoData } from "./getGeoData";

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
searchButton.addEventListener("click", async function () {
  const userInput = getUserInput();
  if (userInput === "") {
    //render "can't find the void :)"
  } else {
    try {
      const geoData = await getGeoData(userInput);
      if (!geoData) {
        alert("Invalid input");
        //maybe write the code to render "can't find location" here?
      } else {
        //call weather api and render result in here
        console.log(geoData);
      }
    } catch (error) {
      console.error(error);
    }
  }
});
