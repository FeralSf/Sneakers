import App from "../App";

function Card({title, price, imageUrl}) {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена</span>
          <b>{price}.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/+.svg" alt="add" />
        </button>
      </div>
    </div>

    
  );
}
export default Card;
