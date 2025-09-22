import React, { useState } from 'react';
import './App.css'; 

function App() {
  const products = [
    { id: 1, name: 'Sách', price: 10000 },
    { id: 2, name: 'Bút', price: 5000 },
    { id: 3, name: 'Vở', price: 7000 },
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="container">
      <h1>Bài 3: Giỏ hàng</h1>

      {/* Phần sản phẩm */}
      <h2>Sản phẩm</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <span>
              {product.name} - {product.price}đ
            </span>
            <button onClick={() => handleAddToCart(product)}>Thêm vào giỏ</button>
          </div>
        ))}
      </div>

      <hr />

      {/* Phần giỏ hàng */}
      <h2>Giỏ hàng</h2>
      <div className="cart-list">
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}đ
              </li>
            ))}
          </ul>
        ) : (
          <p>Giỏ hàng trống.</p>
        )}
      </div>

      <h3>Tổng tiền: {calculateTotal()}đ</h3>
    </div>
  );
}

export default App;