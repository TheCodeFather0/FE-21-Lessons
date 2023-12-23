import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },

    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    vur2: (state) => {
      state.value *= 2;
    },
    kvadrat: (state) => {
      state.value *= state.value;
    },
    nan: (state) => {
      state.value = NaN;
    },
  },
});

export const { increment, decrement, reset, vur2, kvadrat, nan } =
  CounterSlice.actions;
export default CounterSlice.reducer;
