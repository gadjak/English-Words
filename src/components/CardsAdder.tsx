
import { useEffect, useState } from 'react';
import { idText } from 'typescript';
import '../CSS/App.css';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addWord } from '../store/wordsSlice';
import { Word } from '../types';


export const CardAdder: React.FC = () => {
    const dispatch = useAppDispatch();
    const [en, setEn] = useState<string>('');
    const [rus, setRus] = useState<string>('');

    const setWord = () => {
        const word: Word = {
            rus: rus,
            en: en,
            key: en + rus,
            group: '',
        }
        if (en != '' && rus != '') {
            setEn('')
            setRus('')
            dispatch(addWord(word));
        }

    }

    useEffect(() => {


    })
    return (
        <div className="up-cards">
            <div className='wordAdder'>
                <div className='form-row'>
                    <input id='en' value={en} onChange={(e) => setEn(e.target.value)} type="text" /> <label className={en !== '' ? 'Ilabel focused' : 'Ilabel'} htmlFor="en">en:</label>
                </div>
                <div className='form-row'>
                    <input id='rus' value={rus} onChange={(e) => setRus(e.target.value)} type="text" /><label className={rus !== '' ? 'Ilabel focused' : 'Ilabel'} htmlFor="rus">rus:</label>
                </div>
                <button type='submit' onClick={setWord}>Добавить</button>
            </div>
        </div>

    )
}