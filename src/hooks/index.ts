import { objWords, Word } from '../types';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function* generateWord(wordGroups: objWords, selectedNames: Array<string>): Generator<Word> {

    let words = selectedNames.reduce<Word[]>(
        (acc, name) => [...acc, ...wordGroups[name]],
        []
    )

    let uniqueWords = new Set(words.map((item) => JSON.stringify(item)))
    words = Array.from(uniqueWords).map((item) => JSON.parse(item))

    if (words.length === 0) yield { en: '!!!Choose group!!!', rus: '!!!Выберете группу!!!', id: 0 }

    for (let word of words) {
        yield word;
    }
}

export const getItem = (key: string) => {

    const item = localStorage.getItem(key);
    if (!item) {
        return null;
    }
    return JSON.parse(item);
};

export const checkItem = (key: string, initialData: any ) => {
    const item = localStorage.getItem(key);

    if (!item) {
        setItem(key, initialData);
        return initialData;
    }
    return JSON.parse(item);
}




export const setItem = (key: string, item: any) => localStorage.setItem(key, JSON.stringify(item));

