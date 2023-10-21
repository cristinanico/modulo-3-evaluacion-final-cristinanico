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
      <ul className='ul__container'>{renderCards}</ul>
    </>
  );
};

export default CardsList;
