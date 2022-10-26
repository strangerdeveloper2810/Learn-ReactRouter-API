import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import TodolistReducer from "./reducer/TodolistReducer";
import LoadingReducer from "./reducer/LoadingReducer";
// import ModalReducer from "./reducer/ModalReducer";
import HistoryReducer from "./reducer/HistoryReducer";
import UserJiraReducer from "./reducer/UserJiraReducer";
import JiraProjectCategoryReducer from "./reducer/JiraProjectCategoryReducer";
import ProjectListReducer from "./reducer/ProjectListJiraReducer";
import ModalJiraReducer from "./reducer/ModalJiraReducer";
// middleware saga
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  // Reducer khai báo tại đây
  // TodolistReducer,
  LoadingReducer,
  // ModalReducer,
  HistoryReducer, 
  UserJiraReducer,
  JiraProjectCategoryReducer,
  ProjectListReducer,
  ModalJiraReducer

});

const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

// gọi saga
sagaMiddleware.run(rootSaga);

export default store;
