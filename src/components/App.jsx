import '../styles/App.scss';
import { useEffect, useState } from 'react';
import CardsList from './CardsList';
import getDataFromAPI from '../services/api';
import Filters from './filters';

function App() {
  const [cards, setCards] = useState([]);
  const [searchFilm, setSearchFilm] = useState('');
  const [selectYear, setSelectYear] = useState('');

  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      setCards(cleanData);
    });
  }, []);

  const handleChange = (value) => {
    setSearchFilm(value);
  };

  const filterCards = cards
    .filter((card) => card.movie.toLowerCase().includes(searchFilm))
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

  return (
    <div className="background">
      <header>
        <h1 className="h1__title">Owen says WOW! </h1>
      </header>
      <main>
        <h2 className="list__title">Pelis WOW!</h2>
        <Filters
          handleChange={handleChange}
          searchFilm={searchFilm}
          selectYear={selectYear}
          handleSelect={handleSelect}
          years={getYears()}
        />
        <CardsList cards={filterCards} />
      </main>
    </div>
  );
}

export default App;
