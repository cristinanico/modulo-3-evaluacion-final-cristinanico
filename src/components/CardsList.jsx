import CardItem from './CardItem';

const CardsList = ({ cards }) => {
  const renderCards = cards.map((card) => {
    return (
      <li className="card" key={card.id}>
        <CardItem card={card}/>
      </li>
    );
  });

  return (
    <>
      <ul>{renderCards}</ul>
    </>
  );
};

export default CardsList;
