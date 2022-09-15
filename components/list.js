const List = ({ onRemoveItem, stories }) => {
  return (
    <ul>
      {stories.map((item) => (
        <li
          key={item.objectID}
          style={{
            width: '50vw',
            display: 'flex',
          }}
        >
          <span style={{ width: '5%' }}>{item.objectID}</span>
          <span style={{ width: '20%' }}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span style={{ width: '35%' }}>{item.author}</span>
          <span style={{ width: '16%' }}>{item.num_comments}</span>
          <span style={{ width: '16%' }}>{item.points}</span>
          <span style={{ width: '8%' }}>
            <button type="button" onClick={() => onRemoveItem(item)}>
              Dissmis
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};
export default List;
