import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import demoReducer from "./reducer/demoReducer";
import TodolistReducer from "./reducer/TodolistReducer";

// middleware saga
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  // Reducer khai báo tại đây
  // demoReducer
  TodolistReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

// gọi saga
sagaMiddleware.run(rootSaga);

export default store;
