const Search = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={onSearch}
      value={searchTerm}
      autoFocus
      style={{ width: '50%', lineHeight: 1.5 }}
    />
  );
};
export default Search;
