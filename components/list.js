import Item from './item';
const List = ({ onRemoveItem, sortedList, onHandleSort }) => {
  return (
    <>
      {sortedList.map((item, index) => (
        <Item key={index} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </>
  );
};
export default List;
