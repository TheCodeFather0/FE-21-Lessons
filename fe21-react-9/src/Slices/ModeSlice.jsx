import { createSlice } from "@reduxjs/toolkit";

export const ModeSlice = createSlice({
  name: "mode",
  initialState: localStorage.getItem("mode") || "light",
  reducers: {
    changeMode: (state) => {
      const changedMode = state === "dark" ? "light" : "dark";
      localStorage.setItem("mode", changedMode);
      return changedMode;
    },
  },
});

export const { changeMode } = ModeSlice.actions;
export default ModeSlice.reducer;
