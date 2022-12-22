import { Word, objWords } from '../../types';
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { getItem, setItem ,checkItem} from '../../hooks';
import initialData from '../../store/startData/index.json';

checkItem('words',initialData)

const initialState: objWords = getItem('words')

const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {
        addWord: (state, action: PayloadAction<Word>) => {
         /*   state.words.unshift(action.payload)
            setItem('words',state.words)*/
        }
    }
})

export const { addWord } = wordsSlice.actions;
export default wordsSlice.reducer;

