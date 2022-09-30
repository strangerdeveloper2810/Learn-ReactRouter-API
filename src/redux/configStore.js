import {combineReducers, createStore} from "redux";
import demoReducer from "./reducer/demoReducer";
const rootReducer = combineReducers({
    // Reducer khai báo tại đây
    demoReducer
});

const store = createStore(rootReducer);


export default store;