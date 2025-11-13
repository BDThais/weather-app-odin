import { cityInput } from "./relevantDomElements";

function getUserInput() {
  let city;
  city = cityInput.value;
  return city;
}

export { getUserInput };
