const LastSearch = ({ lastSearches, onLastSearch }) => {
  return (
    <>
      {lastSearches.length > 1 && (
        <h5 style={{ marginRight: '10px' }}>Last Search: </h5>
      )}
      {lastSearches.map((searchTerm, index) => {
        if (searchTerm === '') return;
        return (
          <button
            key={searchTerm + index}
            type="button"
            className="button button-small"
            onClick={() => onLastSearch(searchTerm)}
          >
            {searchTerm}
          </button>
        );
      })}
    </>
  );
};
export default LastSearch;
