import { useState, useEffect } from "react";
import { Word } from "../types/wordsTypes";
import '../CSS/App.css';


const initialWordType: 'en' | 'rus' = 'en';

interface stringObj{
word:string
}
export const Card: React.FC<stringObj> = ({word}) => {
    //const [WordType, setWordType] = useState<'en' | 'rus'>(initialWordType);

   
    return (
        <div className="card">
            <div className="wordText" onClick={() => {
             //   setWordType((type) => type === 'en' ? 'rus' : 'en');
            }}>
                {/*WordType === 'en' ? en : rus*/word}
            </div>
        </div>
    )
}