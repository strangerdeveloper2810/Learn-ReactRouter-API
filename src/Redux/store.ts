import { configureStore } from "@reduxjs/toolkit";
import DemoReducer from "./reducer/DemoReducer";
const store = configureStore({
  reducer: {
    DemoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
