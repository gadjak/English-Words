import { useState, useEffect } from "react";
import { Word } from "../types/wordsTypes";
import '../CSS/App.css';

interface CardProps{
    word:Word,
    ShowCardType:'en'|'rus';
}
export const Card: React.FC<CardProps>= ({word,ShowCardType}) => {
    
    return (
        <div className='card' >
          
                <div className={ShowCardType === 'en' ? "front" : 'front frontReversed'}>
                    <span>{word.en}</span>
                </div>
                <div className={ShowCardType === 'en' ? "back backNormal" : 'back backReversed'}>
                    <span>{word.rus}</span>
                </div>

        </div>
    )
}