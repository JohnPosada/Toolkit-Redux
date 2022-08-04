import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/counterSlices";

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
