const Card = ({ sekil, basliq, aciqlama }) => {
  return (
    <div className="card">
      <img src={sekil} />
      <h3>{basliq}</h3>
      <p>{aciqlama}</p>
    </div>
  );
};
export default Card;
