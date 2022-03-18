import { call, takeEvery, put } from "redux-saga/effects";
import { REQUEST_POSTFIXES } from "../constants/RequestPostfixes";
import CreateActionsWithPostfix from "../utils/CreateActionsWithPostfix";
import IsApiCallAction from "../utils/IsApiCallAction";
import apiCallMapping from "./apiCallMapping";

function* watchRequestWorker(action) {
    try {
        const findApiCall = apiCallMapping(action)
        const response = yield call(findApiCall, action.payload)

        yield put(CreateActionsWithPostfix(action, REQUEST_POSTFIXES.SUCCESS, response.data))
    } catch (error) {
        yield put(CreateActionsWithPostfix(action, REQUEST_POSTFIXES.FAIL, error.message))
    }

}

export function* watchRequest() {
    yield takeEvery(IsApiCallAction, watchRequestWorker)
}