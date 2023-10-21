const FilmFilter = ({searchFilm, handleChange}) => {
  const handleInputSearch = (event) => {
    handleChange(event.target.value);
  };
  return (
    <>
      <label htmlFor="search">Película</label>
      <input
        type="search"
        name="search"
        placeholder="Busca la peli"
        value={searchFilm}
        onChange={handleInputSearch}
      />
    </>
  );
};

export default FilmFilter;