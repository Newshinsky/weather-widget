import { AxiosResponse } from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import { REQUEST_POSTFIXES } from "../constants/RequestPostfixes";
import CreateActionsWithPostfix, { CreateActionsWithPostfixType } from "../utils/CreateActionsWithPostfix";
import IsApiCallAction from "../utils/IsApiCallAction";
import apiCallMapping from "./apiCallMapping";

function* watchRequestWorker(action: CreateActionsWithPostfixType) {
    try {
        const findApiCall = apiCallMapping(action)
        const response: AxiosResponse<[]> = yield call(findApiCall, action.payload)

        yield put(CreateActionsWithPostfix(action, REQUEST_POSTFIXES.SUCCESS, response.data))
    } catch (error: any) {
        yield put(CreateActionsWithPostfix(action, REQUEST_POSTFIXES.FAIL, error.message))
    }

}

export function* watchRequest() {
    yield takeEvery(IsApiCallAction, watchRequestWorker)
}