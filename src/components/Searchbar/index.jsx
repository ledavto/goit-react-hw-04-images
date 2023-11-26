export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.searchInput.value);
  };

  return (
    <header className="searchbar">
      <form className="searchForm" onSubmit={handleSubmit}>
        <button type="submit" className="searchForm-button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="searchForm-input"
          type="text"
          name="searchInput"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
