import { objWords, Word } from '../types';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function* generateWord(wordGroups:objWords,selectedNames:Array<string>): Generator<Word> {
    
    let words:Array<Word> = [];
    selectedNames.forEach((name)=>{
       words = words.concat(wordGroups[name])
    })
    let uniqueWords = new Set(words)
    words = Array.from(uniqueWords)
    /*[...new Set(words.map(JSON.stringify))].map(JSON.parse)*/;

    if(words.length === 0) yield {en:'!!!Choose group!!!' , rus:'!!!Выберете групу!!!', id:0}
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

export const checkItem = (key: string, initialData: any | null) => {
    const item = localStorage.getItem(key);
    
    if (!item) {
        setItem(key, initialData);
        return initialData;
    }
    return JSON.parse(item);
}




export const setItem = (key: string, item: any) => localStorage.setItem(key, JSON.stringify(item));

