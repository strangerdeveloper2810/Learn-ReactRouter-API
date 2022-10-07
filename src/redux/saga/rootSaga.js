import { all } from "redux-saga/effects";
import * as TDLSagaAction from "./TodolistSagaActions"; 
export function* rootSaga() {
  yield all([
    TDLSagaAction.actionGetTaskApi(),
    TDLSagaAction.actionAddTaskApi(),
    TDLSagaAction.actionDeleteTaskApi(),
  ]);
}
