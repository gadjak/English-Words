import { Word } from './../types/wordsTypes';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function* generateWord(words: Word[]): Generator<Word> {
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

export const checkItem = (key: string):Boolean => {
    const item = getItem(key);
    if (!item) {
        setItem(key, []);
        return false;
    }
    return true;
}
