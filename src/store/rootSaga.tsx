import { all } from "redux-saga/effects";
import "regenerator-runtime/runtime";
import { watchRequest } from "../api/watchRequest";
//import { pokemonsPageWatcher } from "../pages/PokemonsPage/sagas";

function* rootSaga() {
    //yield all([pokemonsPageWatcher()])
    yield all([watchRequest()])
}

export default rootSaga