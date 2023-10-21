import FilmFilter from './FilmFilter';
import YearFilter from './YearFilter';

const Filters = ({
  searchFilm,
  handleChange,
  selectYear,
  handleSelect,
  years,
}) => {
  const handleForm = (event) => {
    event.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleForm}>
        <FilmFilter searchFilm={searchFilm} handleChange={handleChange} />
        <YearFilter
          selectYear={selectYear}
          handleSelect={handleSelect}
          years={years}
        />
      </form>
    </section>
  );
};

export default Filters;
