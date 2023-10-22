const CardItem = ({ card }) => {
  return (
    <div className="cards">
      <img className="card__image" src={card.poster} alt="poster film" />
      <h2 className="card__h2">{card.movie}</h2>
      <p className="card__p">{card.year}</p>
      <h3 className="card__h3">{card.quote}</h3>
    </div>
  );
};
export default CardItem;