import React, { useEffect } from 'react';
import './CSS/App.css'
import { useAppDispatch, useAppSelector } from './hooks';
import { addWord } from './store/wordsSlice';
import { CardList } from './components/CardList';
import { Word } from "./types/wordsTypes"


const App = () => {
  const dispatch = useAppDispatch()
  const { words } = useAppSelector(state => state.words);

  function Addword() {
    dispatch(addWord(
      { rus: "Мяч", en: "Ball", id: 0 }
    ))
    dispatch(addWord(
      { rus: "Дверь", en: "Door", id: 0 }
    ))
    dispatch(addWord(
      { rus: "Окно", en: "Window", id: 0 }
    ))
  }

  useEffect(() => {




  }, []);


  if (words && words.length !== 0) {
    return (
      <div className="App">
        <div onClick={()=>Addword()}>Добавить</div>
        <CardList words={words} />
      </div>
    );
  } else {
    return (
      <div>
        <div onClick={()=>Addword()}>Добавить</div>
        Loading
      </div>
    )
  }

}

export default App;
