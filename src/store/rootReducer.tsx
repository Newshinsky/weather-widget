import { combineReducers } from "redux";
import { getCoordinatesPageReducer } from "../components/coordinates/reducers";


export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
     coordinateName: getCoordinatesPageReducer,

})



export default rootReducer