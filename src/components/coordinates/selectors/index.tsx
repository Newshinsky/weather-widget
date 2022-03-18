import { WeatherReducerType } from "../../../types";

export const weatherDataSelector = (state: { weather: WeatherReducerType }) => state.weather.weatherData
export const weatherErrorSelector = (state: { weather: WeatherReducerType }) => state.weather.errors

