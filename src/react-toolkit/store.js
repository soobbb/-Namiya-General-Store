import { configureStore } from "@reduxjs/toolkit";
import counselorSlice from "./counselorSlice"

const store = configureStore({
  reducer: {
    counselorSlice: counselorSlice.reducer,
  }
})

export default store;
