import { Options } from './../../types/index';
import { Word, Store } from '../../types';
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { getItem, setItem, checkItem, useAppSelector } from '../../hooks';
import initialData from '../../store/startData/index.json';


checkItem('words', initialData)
checkItem('options', { selectedGroups: ['base'] })

const initialState: Store = {
    words: getItem('words'),
    options: getItem('options')
}


const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {
        addWord: (state, action: PayloadAction<Word>) => {
            state.options.selectedGroups.forEach((item) => {
                state.words[item].unshift(action.payload)
            })
            setItem('words', state.words)
        },
        setSelectedGroups: (state, action: PayloadAction<Options["selectedGroups"]>) => {
            state.options.selectedGroups = action.payload
            setItem('options', state.options)
        },
        addWordGroup: (state, action: PayloadAction<string>) => {
            state.words[action.payload] = [];
            setItem('words', state.words)
        },
        delWordGroup: (state) => {
            for (var nameGroup in state.words) {
                if (state.options.selectedGroups.includes(nameGroup))
                    delete state.words[nameGroup]
                    state.options.selectedGroups = state.options.selectedGroups.filter((item)=>item!==nameGroup)
            }
            setItem('words', state.words)
            setItem('options', state.options)
        }
    }
})

export const { addWord, setSelectedGroups, addWordGroup, delWordGroup } = wordsSlice.actions;
export default wordsSlice.reducer;

