import { useState,useEffect } from "react"
import { Word } from "../types/wordsTypes"

let WordType:('en'|'rus') = 'en';


export const Card : React.FC<Word> = ({en,rus})=>{
    console.log(rus);
    const [word,setWord] = useState(WordType === 'en'? en : rus);
    
    return (
        <div>
            <div className="wordText" onClick={()=>setWord(() => word === en ? rus : en)}>{word}</div>
        </div>
    )
}