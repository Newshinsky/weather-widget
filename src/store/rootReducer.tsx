import { combineReducers } from "redux";
import { getWeatherDataPageReducer } from "../components/coordinates/reducers";


export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
     weather: getWeatherDataPageReducer,
})



export default rootReducer