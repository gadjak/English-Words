import { Word } from './../types/wordsTypes';
import { useDispatch, useSelector,TypedUseSelectorHook } from "react-redux";
import { RootState,AppDispatch } from "../store";

export const useAppDispatch = ()=>useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;
    
export function* generateWord(...words: Word[]): Generator<Word> { 

    words.shift()
    for (let word of words) {
        yield word;
    }
    
}