import { Word } from "../types/wordsTypes"
import { useState, useEffect } from "react"
import { Card } from "./Card";
import { iteratorSymbol } from "immer/dist/internal";
import { idText } from "typescript";

interface objWords {
    words: Array<Word>
}
function* generateWord(words:Word[]): Generator<Word> {


    for (let word of words) {
      //  console.log(word.rus)
        yield word;
    }


}

export const CardList: React.FC<objWords> = ({ words }) => {


    const [word, setWord] = useState<Word>(words[0]);
    const [genWord] = useState<Generator<Word>>(generateWord(words))
   
    //const 
    useEffect(() => {
       
    }, [])

    {console.log(word)}
    return (
        <div>
           
          <Card rus={word.rus} en={word.en} id={word.id} />
         
            <div onClick={() => {
                    let next = genWord.next()
                    if(!next.done){
                    //console.log(next.value);
                
                        setWord(next.value)
                       
                       
                    }
                   // console.log(next.value);
                 
                   
                
                
            }}>

                Next
            </div>
        </div>
    )
// 

    // 
}