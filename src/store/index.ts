import { configureStore } from "@reduxjs/toolkit";
import optionsSlice from "./optionsSlice";
import wordsSlice from './wordsSlice';



export const store = configureStore({
  reducer: {
    words: wordsSlice,
    options:optionsSlice
  }
});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
