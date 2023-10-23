import CardItem from './CardItem';
import { Link } from 'react-router-dom';

const CardsList = ({ cards }) => {
  const abcFilms = [...cards].sort((a, b) => a.movie.localeCompare(b.movie));

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
      {cards.length > 0 ? (
        <ul className="ul__container">{renderCards}</ul>
      ) : (
        <p className='try__again'>No hay ningun WOW para tu búsqueda. ¡Prueba otra vez!</p>
      )}
    </>
  );
};

export default CardsList;
