import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import demoReducer from "./reducer/demoReducer";
// import TodolistReducer from "./reducer/TodolistReducer";
import LoadingReducer from "./reducer/LoadingReducer";
// import ModalReducer from "./reducer/ModalReducer";
// middleware saga
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  // Reducer khai báo tại đây
  // demoReducer
  // TodolistReducer,
  LoadingReducer,
  // ModalReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

// gọi saga
sagaMiddleware.run(rootSaga);

export default store;
