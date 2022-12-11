import { useState, useEffect } from "react";
import { Word } from "../types/wordsTypes";
import '../CSS/App.css';



interface stringObj{
word:string
}
export const Card: React.FC<Word> = ({en,rus}) => {
    const [ShowCardType, setShowCardType] = useState<'en' | 'rus'>('en')

   
    return (
        <div onClick={() => setShowCardType(type => type == 'en' ? 'rus' : 'en')}>
          
                <div className={ShowCardType === 'en' ? "front" : 'front frontReversed'}>
                    {en}
                </div>
                <div className={ShowCardType === 'en' ? "back backNormal" : 'back backReversed'}>
                    {rus}
                </div>

        </div>
    )
}