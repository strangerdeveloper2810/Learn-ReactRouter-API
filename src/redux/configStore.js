import { combineReducers, createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import demoReducer from "./reducer/demoReducer";
import TodolistReducer from "./reducer/TodolistReducer";
const rootReducer = combineReducers({
  // Reducer khai báo tại đây
  // demoReducer
  TodolistReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
