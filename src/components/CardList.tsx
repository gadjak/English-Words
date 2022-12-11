import { objWords, Word } from "../types/wordsTypes"
import { useState, useEffect } from "react"
import { Card } from "./Card";
import { generateWord } from "../hooks";



export const CardList: React.FC<objWords> = ({ words }) => {

    const [genWord] = useState<Generator<Word>>(generateWord(...words))
    const [word, setWord] = useState<Word>(words[0]);

    return (
        <div>
            <div className="cards">
                <div className="front">
                    <Card word={word.en} />
                </div>
                <div className="back">
                    <Card word={word.rus} />
                </div>

            </div>

            <div onClick={() => {
                let next = genWord.next()
                if (!next.done) {
                    setWord(next.value)
                }
            }}>
                Next
            </div>
        </div>
    )
}