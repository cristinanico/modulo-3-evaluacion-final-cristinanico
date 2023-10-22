import { Link } from 'react-router-dom';

const CardDetail = ({ card }) => {
  return (
    <>
      <section className='detail__section'>
        <img src={card.poster} alt="Póster de la película" className='detail__img' />
        <div className='detail__flex'>
        <h2 className='detail__h2'>{card.movie}</h2>
        <h3 className='detail__h3'>{card.quote}</h3>
        <p className='detail__p'>{card.year}</p>
        <Link target="_blank" to={card.audio} className='detail__audio'>
          Aquí está el WOW! 🔊
        </Link>
        </div>
      </section>
    </>
  );
};

export default CardDetail;