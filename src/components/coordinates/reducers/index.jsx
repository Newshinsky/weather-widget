import { handleActions, combineActions } from "redux-actions";
import * as actions from "../actions/index"



const defaultState = {
  coordinates: {
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


export const getCoordinatesPageReducer = handleActions({

  [combineActions(actions.GET_COORDINATES_REQUEST.toString())]: (state) => {
    return { ...state, isLoading: true };
  },
  [actions.GET_COORDINATES_SUCCESS.toString()]: (state, { payload }) => {

    console.log(payload.response)
    return {
      ...state,
      isLoading: false,
      coordinates: payload.response
    }
  },
  [combineActions(actions.GET_COORDINATES_FAIL.toString())]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response
    }
  }

}, defaultState)

