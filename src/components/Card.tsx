import { useState, useEffect } from "react";
import { Word } from "../types/wordsTypes";
import '../CSS/App.css';


export const Card: React.FC<Word> = ({en,rus}) => {
    const [ShowCardType, setShowCardType] = useState<'en' | 'rus'>('en')

   
    return (
        <div onClick={() => setShowCardType(type => type == 'en' ? 'rus' : 'en')}>
          
                <div className={ShowCardType === 'en' ? "front" : 'front frontReversed'}>
                    <span>{en}</span>
                </div>
                <div className={ShowCardType === 'en' ? "back backNormal" : 'back backReversed'}>
                    <span>{rus}</span>
                </div>

        </div>
    )
}