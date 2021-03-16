import { FETCH_WEATHER } from "./types";

const initialState = {
  cityInfo: {},
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return { ...state, cityInfo: action.payload };
    default:
      return state;
  }
};
