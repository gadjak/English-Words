import { Word } from './../types/wordsTypes';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function* generateWord(words: Word[]): Generator<Word> {
    if(words.length === 0) return {en:'' , ru:'', id:0}
    for (let word of words) {
        yield word;
    }
}

export const getItem = (key: string) => {
    const item = localStorage.getItem(key);
    if (item) return JSON.parse(item);
    return null;
};

export const setItem = (key: string, item: any) => localStorage.setItem(key, JSON.stringify(item));

export const checkItem = (key: string , initialData:Word[]):Boolean => {
    const item = getItem(key);
    if (!item) {
        setItem(key, initialData);
        return false;
    }
    return true;
}
