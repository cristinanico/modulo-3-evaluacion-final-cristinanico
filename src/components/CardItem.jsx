const CardItem = ({ card }) => {
  return (
    <>
      <a className="card__link" href="#">
        <img className="card__image" src={card.poster} alt="poster film" />
        <h2 className="card__h2">{card.movie}</h2>
        <p className="card__p">{card.year}</p>
        <h3 className="card__h3">{card.quote}</h3>
      </a>
    </>
  );
};
export default CardItem;
