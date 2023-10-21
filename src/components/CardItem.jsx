const CardItem = ({ card }) => {
  return (
    <>
      <a className="card__link" href="#">
        <img src="{card.poster}" alt="poster film" />
        <h2>{card.movie}</h2>
        <p>{card.year}</p>
        <h3>{card.full_line}</h3>
      </a>
    </>
  );
};
export default CardItem;
