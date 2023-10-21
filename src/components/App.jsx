// Dependencias, imágenes, componentes, estilos.
import { useEffect, useState } from 'react';
import '../styles/App.scss';
import CardsList from './CardsList';
import getDataFromAPI from '../services/api';
//import { Route, Routes } from 'react-router-dom'

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      setCards(cleanData);
    });
  }, []);

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Owen says WOW!</h1>
      </header>
      <main className="main">
        <h2 className="list__title">WOWs list</h2>
        <CardsList cards={cards} />
      </main>
    </div>
  );
}

export default App;
