import { useState, useEffect } from "react";
import { Word, Store } from "../types";
import '../CSS/App.css';

//let words:Word[] = []

export const AllCards: React.FC<Store> = ({ words, options }) => {
    useEffect(() => {
        // console.log('rerender Card')
    }, [])
    const Cards = () => {

        let selectedWords = []

        for (let name of options.selectedGroups) {
            selectedWords.push(...words[name])
        }


        return <>
            {selectedWords.map((word) =>
                <div className='single-card' >
                    <span>En: {word.en}</span>
                    <span>Rus: {word.rus}</span>
                </div>
            )}
        </>
    }
    return (

        <div className='all-cards' >
            <Cards />
        </div>

    )
}