const FilmFilter = ({searchFilm, handleChange}) => {
  const handleInputSearch = (event) => {
    handleChange(event.target.value);
  };
  return (
    <form className="form">
      <label htmlFor="search" className="search">Película 🎬</label>
      <input
        type="search"
        name="search"
        placeholder="Busca la peli"
        value={searchFilm}
        onChange={handleInputSearch}
      />
    </form>
  );
};

export default FilmFilter;