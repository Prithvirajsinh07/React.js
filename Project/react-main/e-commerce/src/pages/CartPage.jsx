// src/pages/CartPage.jsx
import { useState } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div>
      <header className="p-4 bg-gray-800 text-white">
        <h1>Your Cart</h1>
      </header>
      <section>
        {cart.map(item => (
          <div key={item.id} className="flex justify-between p-4">
            <span>{item.name}</span>
            <button onClick={() => removeItem(item.id)} className="text-red-500">Remove</button>
          </div>
        ))}
      </section>
      <footer className="p-4 bg-gray-800 text-white">
        Total Price: {/* Calculate total */}
      </footer>
    </div>
  );
};

export default CartPage;
