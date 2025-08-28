import react from "react"
import Navbar from "./Navbar"
import { useState } from "react"

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    price: "$3.50",
    description: "Rich and bold single shot of espresso",
    image: "https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "$4.25",
    description: "Espresso with steamed milk and foam",
    image: "https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.jpg?s=612x612&w=0&k=20&c=h7v8kAfWOpRapv6hrDwmmB54DqrGQWxlhP_mTeqTQPA=",
  },
  {
    id: 3,
    name: "Latte",
    price: "$4.75",
    description: "Smooth espresso with steamed milk",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNw7oOeCCCIv_D1ok78I61XqgUl1ZU_S2DA&s",
  },
  {
    id: 4,
    name: "Americano",
    price: "$3.75",
    description: "Espresso with hot water",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDh5Wvp_7Gw7P0COx3IO7hmb8D4-wqiHrtFQ&s",
  },
  {
    id: 5,
    name: "Mocha",
    price: "$5.25",
    description: "Espresso with chocolate and steamed milk",
    image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/the_perfect_mocha_coffee_29100_16x9.jpg",
  },
  {
    id: 6,
    name: "Cold Brew",
    price: "$4.00",
    description: "Smooth cold-brewed coffee served over ice",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkP2h1edPO_f266LRgJ6B9lDuJewhn3Omxkg&s",
  },
]

function Menu({ addToCart, removeFromCart, cartItems }) {
  return (
    <>
      <Navbar />
      <section id="menu" className="menu">
        <div className="container">
          <h2>Our Menu</h2>
          <p className="section-subtitle">Crafted with love, served with passion</p>
          <div className="menu-grid">
            {menuItems.map((item) => {
              const quantity = cartItems[item.id] || 0;

              return (
                <div key={item.id} className="menu-item">
                  <img src={item.image} alt={item.name} />
                  <div className="menu-item-content">
                    <h3>{item.name}</h3>
                    <p className="description">{item.description}</p>

                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span className="price">{item.price}</span>

                      {quantity === 0 ? (
                        <button
                          onClick={() => addToCart(item)}
                          className="add-to-cart-btn"
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "134px" }}>
                          <button
                            onClick={() => removeFromCart(item)}
                            className="quantity-btn"
                          >
                            –
                          </button>
                          <span
                            style={{
                              color: "white",
                              backgroundColor: "#8b4513",
                              borderRadius: "50%",
                              padding: "5px 12px",
                              fontSize: "0.9rem",
                              fontWeight: "bold",
                            }}
                          >
                            {quantity}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="quantity-btn"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;