import { all } from "redux-saga/effects";
import * as TodolistSaga from "./TodolistSagaActions"; 
export function* rootSaga() {
  yield all([
    TodolistSaga.actionTodolistSaga(),
    
  ]);
}
