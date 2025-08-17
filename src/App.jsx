import ProductCard from "./components/ProductCard";
import "./styles.css"; 

function App() {
  const products = [
    {
      id: 1,
      image: "https://d2cva83hdk3bwc.cloudfront.net/hirono-amneria--the-other-one-series--1.jpg",
      name: "Amnesia",
      price: "1,899",
      description: "Series 1: The Other One",
    },
    {
      id: 2,
      image: "https://d2cva83hdk3bwc.cloudfront.net/pop-mart-manacle--hirono-little-mischief-series--1.jpg",
      name: "Manacle",
      price: "1,099",
      description: "Series 2: Little Mischief",
    },
    {
      id: 3,
      image: "https://d2cva83hdk3bwc.cloudfront.net/pop-mart-seeker--hirono-mime-series-figures--1.jpg",
      name: "Seeker",
      price: "1,299",
      description: "Series 4: Mime",
    },
    {
      id: 4,
      image: "https://d2cva83hdk3bwc.cloudfront.net/pop-mart-voyage--hirono-reshape-series-figures--1.jpg",
      name: "Voyage",
      price: "800",
      description: "Series 5: Reshape",
    },
    {
      id: 5,
      image: "https://d2cva83hdk3bwc.cloudfront.net/pop-mart-sunny-doll-hirono-shelter-series-figures-1.jpg",
      name: "Sunny Doll",
      price: "1,100",
      description: "Series 6: Shelter",
    },
    {
      id: 6,
      image: "https://d2cva83hdk3bwc.cloudfront.net/pop-mart-the-switchman-hirono-le-petit-prince-series-figures-1.jpg",
      name: "The Switchman",
      price: "699",
      description: "Series 7: Le Petit Prince",
    },
  ];

  const handleBuy = (productName) => {
    console.log(`You Buy: ${productName}`);
    alert(`You Buy: ${productName}`);
  };
  

  return (
    <div className="app">
      <h1 className="app-title">Genuine Hirono</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            onBuy={handleBuy}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
