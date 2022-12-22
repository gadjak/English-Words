import { Word,Options } from '../../types';
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { getItem, setItem,checkItem } from '../../hooks';

checkItem('options',{selectedGroups:['base']})
const initialState: Options = getItem('options');

 
const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        setSelectedGroups: (state, action: PayloadAction<string[]>) => {
            state.selectedGroups = action.payload
            setItem('options',state)
        }
    }
})

export const { setSelectedGroups } = optionsSlice.actions;
export default optionsSlice.reducer;

