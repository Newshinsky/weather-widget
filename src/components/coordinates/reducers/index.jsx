import { handleActions } from "redux-actions";
import * as actions from "../actions/index";




const defaultState = {
  weatherData: {
    country: "",
    lat: "",
    lon: "",
    name: "",
    current: {
      weather: [{ description: "" }],
      temp: ""
    },
    dayly: [
      {
        weather: [{ description: "" }],
        min: "",
        max: ""
      }
    ]
  },
  isLoading: false,
  errors: ""
}


export const getWeatherDataPageReducer = handleActions({

  [actions.GET_COORDINATES_REQUEST.toString()]: (state) => {
    return {
      ...state,
      isLoading: true,
      errors: null
    };
  },
  [actions.GET_COORDINATES_SUCCESS.toString()]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      weatherData: payload.response
    }
  },
  [actions.GET_COORDINATES_FAIL.toString()]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response
    }
  }
}, defaultState)

