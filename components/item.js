const Item = ({ item, onRemoveItem }) => {
  return (
    <li className="item" key={item.objectID}>
      <span style={{ width: '45%' }}>
        <a href={item.url}>{item.title}</a>
      </span>
      <span style={{ width: '30%' }}>{item.author}</span>
      <span style={{ width: '10%' }}>{item.num_comments}</span>
      <span style={{ width: '10%' }}>{item.points}</span>
      <span style={{ width: '5%' }}>
        <button
          className="button button-small"
          type="button"
          onClick={() => onRemoveItem(item)}
        >
          Dissmis
        </button>
      </span>
    </li>
  );
};
export default Item;
