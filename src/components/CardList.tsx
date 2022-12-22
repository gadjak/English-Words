import { CardProps, Word } from "../types"
import { useState, useEffect } from "react"
import { Card } from "./Card";
import { generateWord } from "../hooks";


export const CardList: React.FC<CardProps> = ({ words, options }) => {
    const [genWord, setGenWord] = useState<Generator<Word>>(/*() => generateWord(words, options.selectedGroups)*/);
    const [wordNext, setWordNext] = useState<Word>(/*() => genWord.next().value*/);
    const [wordPrev, setWordPrev] = useState<Word>(/*() => wordNext*/);
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
        console.log('rerender CardList')

        let gen = generateWord(words, options.selectedGroups);
        setGenWord(() => gen)
        let word = gen.next().value;
        setWordNext(() => word)
        setWordPrev(() => word)

    }, [options])

    const changeCard = () => {
        if (genWord) {
            let next = genWord.next()
            console.log(next.value)
            if (!next.done) {
                setWordPrev(wordNext)
                setCardSkip(false)
                setTimeout(() => setCardSkip(true), 20)
                setWordNext(next.value)
            }
            console.log(wordPrev)
        }

    }
    if (genWord && wordPrev && wordNext) {
        return (
            <div>

                <div className="cards"
                    onClick={() => setShowCardType(type => type == 'en' ? 'rus' : 'en')}
                    onContextMenu={() => changeCard()} >

                    <div className={cardSkip ? 'card-skip-prev' : 'card-prev'} >
                        <Card word={wordPrev} ShowCardType={ShowCardType} />
                    </div>

                    <div className={cardSkip ? 'card-skip-next' : 'card-next'} >
                        <Card word={wordNext} ShowCardType={ShowCardType} />
                    </div>

                </div>

            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }

}