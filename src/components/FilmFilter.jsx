const FilmFilter = ({searchFilm, handleChange}) => {
  const handleInputSearch = (event) => {
    handleChange(event.target.value);
  };
  return (
    <fieldset className="form">
      <label htmlFor="search" className="search">Película 🎬</label>
      <input
        type="search"
        name="search"
        placeholder="Busca la peli"
        value={searchFilm}
        onChange={handleInputSearch}
      />
    </fieldset>
  );
};

export default FilmFilter;