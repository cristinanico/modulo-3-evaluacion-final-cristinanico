import CardItem from './CardItem';
import { Link } from 'react-router-dom';

const CardsList = ({ cards }) => {

  const abcFilms = [...cards].sort((a, b) =>
  a.movie.localeCompare(b.movie)
);

  const renderCards = abcFilms.map((card) => {
    return (
      <Link key={card.id} to={'/card/' + card.id} className="card__link">
        <li className="card" key={card.id}>
          <CardItem card={card} />
        </li>
      </Link>
    );
  });

  return (
    <>
      <ul className="ul__container">{renderCards}</ul>
    </>
  );
};

export default CardsList;