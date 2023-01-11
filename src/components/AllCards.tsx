
import { Word, Store } from "../types";
import '../CSS/App.css';

import { Card } from "./Card";
//let words:Word[] = []

export const AllCards: React.FC<Store> = ({ words, options }) => {



    const Cards = () => {

        let selectedWords = options.selectedGroups.reduce<Word[]>((acc, name) => {
            acc.push(...words[name])
            return acc;
        }, [])

        return (
            <>

                {selectedWords.map((word) =>

                    <div key={word.en}><Card word={word} /></div>

                )}
            </>
        )

    }


    return (

        <div className='all-cards' >
            <Cards />
        </div>

    )
}