import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import CardsList from './CardsList';
import getDataFromAPI from '../services/api';
import Filters from './filters';
import CardDetail from './CardDetail';
import LocalStorage from '../services/localStorage';

function App() {
  const [cards, setCards] = useState(localStorage.get, []);
  const [searchFilm, setSearchFilm] = useState(localStorage.get('search', ''));
  const [selectYear, setSelectYear] = useState('');

  useEffect(() => {
    if (cards.length === 0) {
      getDataFromAPI().then((cleanData) => {
        setCards(cleanData);
      });
    }
  }, [cards]);

  const handleChange = (value) => {
    setSearchFilm(value);
    localStorage.set('search', value);
  };

  const filterCards = cards
    .filter((card) =>
      card.movie.toLowerCase().includes(searchFilm.toLocaleLowerCase())
    )
    .filter((CardItem) => {
      if (selectYear === '') {
        return true;
      } else {
        return selectYear === CardItem.year.toString();
      }
    });

  const handleSelect = (value) => {
    setSelectYear(value);
  };

  const getYears = () => {
    const years = cards.map((card) => card.year);
    const uniquesYears = new Set(years);
    const uniquesArray = [...uniquesYears];
    return uniquesArray;
  };

  const { pathname } = useLocation();
  const routeData = matchPath('/card/:id', pathname);
  const cardId = routeData !== null ? routeData.params.id : '';

  const cardData = cards.find((card) => card.id === cardId);

  return (
    <div className="background">
      <header>
        <h1 className="h1__title">Owen says WOW! </h1>
      </header>
      <main>
        <h2 className="list__title">Pelis WOW!</h2>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleChange={handleChange}
                  searchFilm={searchFilm}
                  selectYear={selectYear}
                  handleSelect={handleSelect}
                  years={getYears()}
                />
                <CardsList cards={filterCards} searchFilm={searchFilm} />
              </>
            }
          />
          <Route
            path="/card/:id"
            element={
              <>
                <CardDetail card={cardData} />
                <Link className="back" to="/">
                  🔙 Volver atrás
                </Link>
              </>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
