import { configureStore } from "@reduxjs/toolkit";
import wordsSlice from './wordsSlice';
import { checkItem } from "../hooks";



export const store = configureStore({
  reducer: {
    words: wordsSlice,
    options:[] as any
  }
});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
