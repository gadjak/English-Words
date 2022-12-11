import { objWords, Word } from "../types/wordsTypes"
import { useState, useEffect } from "react"
import { Card } from "./Card";
import { generateWord } from "../hooks";



export const CardList: React.FC<objWords> = ({ words }) => {

    const [genWord] = useState<Generator<Word>>(generateWord(...words))
    const [word, setWord] = useState<Word>(words[0]);



    useEffect(() => {
        //блокируем нажатие провой кнопки мыши
        try {
            document.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            }, false);
        } catch (e) {
            console.log(e);
        }
    })
    return (
        <div>
            <div className='cards' onContextMenu={() => {
                let next = genWord.next()
                if (!next.done) {
                    setWord(next.value)
                }
            }}>
                <Card {...word} />

            </div>
        </div>
    )
}