import * as TDLSagaAction from "./TodolistSagaAction";
import {all} from "redux-saga/effects"
export function * rootSaga() {
    yield all([
        TDLSagaAction.actionGetTaskApi(),
        TDLSagaAction.actionAddTaskApi(),
    ]);
}