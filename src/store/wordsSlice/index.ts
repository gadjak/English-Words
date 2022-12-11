import { RootState } from './../index';
import { InitialStateWords, Word } from './../../types/wordsTypes';
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import data from "../startData/index.json";



const initialState: InitialStateWords = {
    words: data
}

const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {
        addWord:(state,action:PayloadAction<Word>)=>{
            state.words.push(action.payload);
        }
    }
})

export const {addWord} = wordsSlice.actions;
export default wordsSlice.reducer;

