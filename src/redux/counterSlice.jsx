import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

let counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.count += 1;
    },
    decrease: (state, action) => {
      state.count -= 1;
    },
    increaseByValue: (state, action) => {
      state.count += action.payload;
    },
  },
});

const counterReducer = counterSlice.reducer;

export default counterReducer;
export let { increase, decrease, increaseByValue } = counterSlice.actions;
