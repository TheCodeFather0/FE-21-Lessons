import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Slices/CounterSlice";
import ModeSlice from "../Slices/ModeSlice";

export const store = configureStore({
  reducer: {
    count: CounterSlice,
    mode: ModeSlice,
  },
});
