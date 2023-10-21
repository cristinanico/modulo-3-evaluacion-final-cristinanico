import FilmFilter from './FilmFilter';

const Filters = (searchFilm, handleChange) => {
  const handleForm = (event) => {
    event.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleForm}>
        <FilmFilter searchFilm={searchFilm} handleChange={handleChange} />
      </form>
    </section>
  );
};

export default Filters;
