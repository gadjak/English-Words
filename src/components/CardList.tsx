import { objWords, Word } from "../types/wordsTypes"
import { useState, useEffect } from "react"
import { Card } from "./Card";
import { generateWord } from "../hooks";



export const CardList: React.FC<objWords> = ({ words }) => {

    const [genWord] = useState<Generator<Word>>(() => generateWord(words))
    const [wordNext, setWordNext] = useState<Word>(() => genWord.next().value);
    const [wordPrev, setWordPrev] = useState<Word>(() => wordNext);
    const [cardSkip, setCardSkip] = useState<Boolean>(false);

    const [ShowCardType, setShowCardType] = useState<'en' | 'rus'>('en')

    useEffect(() => {
        //блокируем нажатие провой кнопки мыши
        try {
            document.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            }, false);
        } catch (e) {
            console.log(e);
        }
        
        
    },[])

    return (
        <div>

            <div className="cards" onClick={() => setShowCardType(type => type == 'en' ? 'rus' : 'en')} onContextMenu={() => {
               
                setWordPrev(wordNext)
               
                let next = genWord.next()
                if (!next.done) {
                    setCardSkip(false)
                    setTimeout(()=>setCardSkip(true),20) 
                    setWordNext(next.value)
                }

            }} >



                <div className={cardSkip ? 'card-skip-prev' :'card-prev'} >
                    <Card word={wordPrev} ShowCardType={ShowCardType} />
                </div>

                <div className={cardSkip ? 'card-skip-next' : 'card-next'} >
                    <Card word={wordNext} ShowCardType={ShowCardType} />
                </div>



            </div>

        </div>
    )
}