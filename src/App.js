import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Menu from './Menu';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import Cart from './Cart';
import { useState } from 'react';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prev => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }));
  };

  const removeFromCart = (item) => {
    setCartItems((prev) => {
      if (!prev[item.id]) return prev;
      const updated = { ...prev, [item.id]: prev[item.id] - 1 };
      if (updated[item.id] <= 0) delete updated[item.id];
      return updated;
    });
  };

  const totalCount = Object.values(cartItems).reduce((a, b) => a + b, 0);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Menu addToCart = {addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
      <Contact />
      <Cart cartCount={totalCount} />
      <Footer />
    </div>
  );
}

export default App;
