import './CSS/App.css'
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from './hooks';
import { CardList } from './components/CardList';
import { Route, Routes, NavLink } from 'react-router-dom';
import { CardAdder } from './components/CardsAdder';
import { AllCards } from './components/AllCards';
import { SelectCard } from './components/SelectCard';
const App = () => {

  const { words, options } = useAppSelector(state => state.words);
  useEffect(() => {

  }, [])
  console.log('rework ci/cd)')
  return (
    <div className="App">
        <div className='select-card'>
          <SelectCard options={options} words={words} />
        </div>
        <div className="links">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? 'activeLink Link' : 'Link'
          }>Учить</NavLink>
          <NavLink to="/addWords" className={({ isActive }) =>
            isActive ? 'activeLink Link' : 'Link'
          }>Добавлять</NavLink>
          <NavLink to="/allCards" className={({ isActive }) =>
            isActive ? 'activeLink Link' : 'Link'
          }>Мои слова</NavLink>
        </div>
    

   
        <Routes>
          <Route path='/' element={<CardList options={options} words={words} />} />
          <Route path='/addWords' element={<CardAdder />} />
          <Route path='/allCards' element={<AllCards options={options} words={words} />} />
        </Routes>

    

    </div>
  );


}

export default App;
