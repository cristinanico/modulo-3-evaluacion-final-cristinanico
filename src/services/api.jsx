import uuid from 'react-uuid';

const getDataFromAPI = () => {
  return fetch(
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((card) => {
        return {
          id: uuid(),
          poster: card.poster,
          movie: card.movie,
          quote: card.full_line,
          year: card.year,
          audio: card.audio,
          director: card.director
        };
      });
      localStorage.setItem('cards', JSON.stringify(cleanData));
      return cleanData;
    });
};

export default getDataFromAPI;