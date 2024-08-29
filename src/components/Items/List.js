const ListItem = ({ list, onClick }) => {
  console.log(list);
  return (
    <div className="list">
      <div className="poster" onClick={onClick}>
        <img src={list.cafeImage[0]} alt="poster" width={420} height={600} />
      </div>
      <div className="tags">
        <span>#{list.name}</span>
        <span>#{list.char}</span>
        <span>#{list.station}</span>
      </div>
    </div>
  );
};

export default ListItem;
