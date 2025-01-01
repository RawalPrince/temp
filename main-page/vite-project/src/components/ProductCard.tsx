import React from "react";
// import "/Users/princerawal/Desktop/project/main-page/vite-project/src/components/ProductCard.tsx";
import vegBurger from "../assets/vegBurger.jpeg"
// Define props type for the component
interface ProductCardProps {
  name: string;
  price: string;
  img: string;
}

// ProductCard component
const ProductCard: React.FC<ProductCardProps> = ({ name, price, img }) => {
  return (
    <div className="product-card">
      <img src={vegBurger} alt={name} style={{ width: "100px", height: "100px" }}/>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
