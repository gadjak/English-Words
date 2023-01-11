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
                action.payload.group = item
                state.words[item].unshift(action.payload)
            })
            setItem('words', state.words)
        },
        delWord: (state, action: PayloadAction<Word>) => {
            state.words[action.payload.group] = state.words[action.payload.group].filter(
                (word) =>
                    word.key !== action.payload.key
            )
            setItem('words', state.words)
        },
        editWord: (state, action: PayloadAction<Word>) => {
            const word = action.payload;
            state.words[word.group] = state.words[word.group].map(
                (item) =>
                    item.key === word.key ?
                        (function () {
                            word.key = word.en + word.rus;
                            return word;
                        }())
                        : item
            )
            console.log(word)
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
                state.options.selectedGroups = state.options.selectedGroups.filter((item) => item !== nameGroup)
            }
            setItem('words', state.words)
            setItem('options', state.options)
        }
    }
})

export const { addWord, delWord, setSelectedGroups, addWordGroup, delWordGroup, editWord } = wordsSlice.actions;
export default wordsSlice.reducer;

