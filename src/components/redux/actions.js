import { FETCH_WEATHER } from "./types";
import axios from "axios";

const API_KEY = "bad46dfee1ae1125ec4faf31e63449de";

export const fetchWeather = (city) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log(response);
      dispatch({ type: FETCH_WEATHER, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_WEATHER, payload: error.response.data });
    }
  };
};
