import './CSS/App.css'
import {useEffect  } from "react";
import { useAppDispatch, useAppSelector } from './hooks';
import { CardList } from './components/CardList';
import { Route, Routes, NavLink } from 'react-router-dom';
import { CardAdder } from './components/CardsAdder';
import {SelectCard} from './components/SelectCard';
const App = () => {

  const {words,options} = useAppSelector(state => state);
  useEffect(()=>{
   /* console.log(words)
    console.log(options)*/
  },[])

  return (
    <div className="App">
      <div className="description">
        
        <span>Левая кнопка мыши - перевернуть карточку</span> 
        <span> Правая кнопка мыши - показать следующую карточку</span>
        
      </div>
      <div>
               <SelectCard options={options} words={words}/>
            </div>
      <div className="links">
        <NavLink to="/" className={({ isActive }) =>
          isActive ? 'activeLink Link' : 'Link'
        }>Учить</NavLink>
        <NavLink to="/addWords" className={({ isActive }) =>
          isActive ? 'activeLink Link' : 'Link'
        }>Добавлять</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<CardList options={options} words={words} />} />
        <Route path='/addWords' element={<CardAdder />} />
      </Routes>
    </div>
  );


}

export default App;
