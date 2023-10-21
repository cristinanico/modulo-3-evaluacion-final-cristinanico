const YearFilter = ({ selectYear, handleSelect, years }) => {
  const handleChange = (event) => {
    handleSelect(event.target.value);
  };
  const renderYears = () => {
    return years.map((year, index) => (
      <option value={year} key={index}>
        {year}
      </option>
    ));
  };
  return (
    <section className="year__input">
      <label htmlFor="year">¿De qué año?</label>
      <select name="year" id="year" value={selectYear} onChange={handleChange}>
        <option value="" defaultChecked>
          Años
        </option>
        {renderYears()}
      </select>
    </section>
  );
};
export default YearFilter;
