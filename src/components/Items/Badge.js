const Badge = ({ list }) => {
  console.log(list);
  return (
    <div className="item">
      <a href={`/artist/${list.name}`}>{list.id}</a>
    </div>
  );
};

export default Badge;
