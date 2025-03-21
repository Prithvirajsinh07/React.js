// src/components/ProductCard.jsx
const ProductCard = ({ product }) => {
    return (
      <div className="bg-white shadow-lg p-4">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>{product.price}</span>
        <button className="bg-blue-500 text-white p-2 mt-2">Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;
  