import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import TodolistReducer from "./reducer/TodolistReducer";
import LoadingReducer from "./reducer/LoadingReducer/LoadingReducer";
// import ModalReducer from "./reducer/ModalReducer";
import HistoryReducer from "./reducer/HistoryReducer/HistoryReducer";
import UserJiraReducer from "./reducer/JiraReducer/UserJiraReducer";
import JiraProjectCategoryReducer from "./reducer/JiraReducer/JiraProjectCategoryReducer";
import ProjectListReducer from "./reducer/JiraReducer/ProjectListJiraReducer";
import ModalJiraReducer from "./reducer/JiraReducer/ModalJiraReducer";
import JiraProjectReducer from "./reducer/JiraReducer/JiraProjectReducer";
// middleware saga
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  // Reducer khai báo tại đây
  // TodolistReducer,
  // ModalReducer,
  LoadingReducer,
  HistoryReducer,
  UserJiraReducer,
  JiraProjectCategoryReducer,
  ProjectListReducer,
  ModalJiraReducer,
  JiraProjectReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

// gọi saga
sagaMiddleware.run(rootSaga);

export default store;
