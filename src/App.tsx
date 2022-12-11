import './CSS/App.css'
import { useAppDispatch, useAppSelector } from './hooks';
import { CardList } from './components/CardList';
import { Route, Routes, NavLink } from 'react-router-dom';
import { CardAdder } from './components/CardsAdder';

const App = () => {
  const dispatch = useAppDispatch()
  const { words } = useAppSelector(state => state.words);

  return (
    <div className="App">
      <NavLink to="/" className={({ isActive }) =>
        isActive ? 'activeLink' : undefined
      }>Учить</NavLink>
      <NavLink to="/addWords" className={({ isActive }) =>
        isActive ? 'activeLink' : undefined
      }>Добавлять</NavLink>
      <Routes>
        <Route path='/' element={<CardList words={words} />} />
        <Route path='/addWords' element={<CardAdder />} />
      </Routes>
    </div>
  );


}

export default App;
