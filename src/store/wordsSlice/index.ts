import { InitialStateWords, Word } from './../../types/wordsTypes';
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import data from "../startData/index.json";
import { checkItem, getItem, setItem } from '../../hooks';

const localStorageAlreadyCreated = checkItem('words');


const initialState: InitialStateWords = {
    words:localStorageAlreadyCreated? getItem('words') : [...getItem('words'), ...data ] 
}

const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {
        addWord: (state, action: PayloadAction<Word>) => {
            state.words.unshift(action.payload)
            setItem('words',state.words)
        }
    }
})

export const { addWord } = wordsSlice.actions;
export default wordsSlice.reducer;

