import "./../styles.css";

export default function ProductCard({ image, name, price, description, onBuy }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <p className="card-price">₱{price}</p>
        <button 
          className="buy-button"
          onClick={() => onBuy(name)}
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}
