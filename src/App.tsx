import './CSS/App.css'
import { useAppDispatch, useAppSelector } from './hooks';
import { CardList } from './components/CardList';
import { Route, Routes, NavLink } from 'react-router-dom';
import { CardAdder } from './components/CardsAdder';

const App = () => {

  const { words } = useAppSelector(state => state.words);


  return (
    <div className="App">
      <div className="description">
        
        <span>Левая кнопка мыши - перевернуть карточку</span> 
        <span> Правая кнопка мыши - показать следующую карточку</span>
        
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
        <Route path='/' element={<CardList words={words} />} />
        <Route path='/addWords' element={<CardAdder />} />
      </Routes>
    </div>
  );


}

export default App;
