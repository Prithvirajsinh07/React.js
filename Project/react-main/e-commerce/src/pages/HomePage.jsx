// src/pages/HomePage.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import ProductCard from "../Components/ProductCard";
import axios from 'axios';


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  
  useEffect(() => {
    // Fetching products with error handling
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(err => {
        setError('Failed to load products. Please try again later.');
        setLoading(false); // Set loading to false even on error
      });
  }, []);

  return (
 <>


    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-6">
        {/* Loading and Error States */}
        {loading && <div className="text-center text-gray-500">Loading products...</div>}
        {error && <div className="text-center text-red-500">{error}</div>}
        
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </div>
 </>
  );
};

export default HomePage;
