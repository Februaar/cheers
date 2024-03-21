const Badge = ({ artist }) => {
  return (
    <>
      {artist.map((image, index) => (
        <div className="item" key={index}>
          <a href="/cafe/1">
            <img src={image} alt="item-img" width={100} height={100} />
          </a>
        </div>
      ))}
    </>
  );
};

export default Badge;
