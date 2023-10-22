import { Link } from 'react-router-dom';

const CardDetail = ({ card }) => {
  return (
    <>
      <section>
        <img src={card.poster} alt="Póster de la película" />
        <h2>{card.movie}</h2>
        <h3>{card.quote}</h3>
        <p>{card.year}</p>
        <Link target="_blank" to={card.audio}>
          Aquí está el WOW!
        </Link>
      </section>
    </>
  );
};

export default CardDetail;