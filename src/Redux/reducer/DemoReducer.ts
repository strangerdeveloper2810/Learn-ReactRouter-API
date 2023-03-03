import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
};

const DemoReducer = createSlice({
  name: "DemoReducer",
  initialState,
  reducers: {},
});

export const {} = DemoReducer.actions;

export default DemoReducer.reducer;
