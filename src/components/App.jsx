// Dependencias, imágenes, componentes, estilos.
import { useEffect, useState } from 'react';
import '../styles/App.scss';
import CardsList from './CardsList';
import getDataFromAPI from '../services/api';
import Filters from './filters';
//import { Route, Routes } from 'react-router-dom'

function App() {
  const [cards, setCards] = useState([]);
  const [searchFilm, setSearchFilm] = useState('');

  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      setCards(cleanData);
    });
  }, []);

  const handleChange = (value) => {
    setSearchFilm(value);
  };

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Owen says WOW!</h1>
      </header>
      <main className="main">
        <h2 className="list__title">Pelis WOW!</h2>
        <Filters handleChange={handleChange} searchFilm={searchFilm} />
        <CardsList cards={cards} />
      </main>
    </div>
  );
}

export default App;
