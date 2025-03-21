// src/pages/AdminDashboard.jsx
import { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [product, setProduct] = useState({ name: '', description: '', price: '', image: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/products', product)
      .then(response => {
        // Refresh product list
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" onChange={(e) => setProduct({ ...product, name: e.target.value })} />
      <input type="text" placeholder="Description" onChange={(e) => setProduct({ ...product, description: e.target.value })} />
      <input type="number" placeholder="Price" onChange={(e) => setProduct({ ...product, price: e.target.value })} />
      <input type="text" placeholder="Image URL" onChange={(e) => setProduct({ ...product, image: e.target.value })} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AdminDashboard;
