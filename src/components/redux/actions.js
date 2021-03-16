import { FETCH_WEATHER } from "./types";

const API_KEY = "bad46dfee1ae1125ec4faf31e63449de";

export function fetchWeather(city) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const json = await response.json();
      dispatch({ type: FETCH_WEATHER, payload: json });
    } catch (error) {
      console.log(error);
    }
  };
}
