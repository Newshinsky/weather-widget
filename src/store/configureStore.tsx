import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware()

export function configureStore() {

    const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleWare)))

    sagaMiddleWare.run(rootSaga)
    return store
}