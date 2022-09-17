const Search = ({ searchTerm, onSearch, onSearchSubmit }) => {
  return (
    <form className="search-form" onSubmit={onSearchSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Search..."
        onChange={onSearch}
        value={searchTerm}
        autoFocus
        style={{ width: '20vw', marginRight: '10px' }}
      />
      <input
        className="button button-small"
        type="submit"
        value="recherche"
        disabled={!searchTerm}
      />
    </form>
  );
};
export default Search;
