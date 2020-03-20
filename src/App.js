import React, { useState, useContext } from "react";
import { Route } from "react-router-dom";
import data from "./data";

import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);
  const addItem = item => {
	  console.log("Adding ", item);
    // add the given item to the cart
	setCart([...cart, item]);
	console.log("New cart: ", cart);
  };
  const removeItem = item => {
    setCart(cart.filter(i => i.id !== item.id));
  };
  console.log("In App: ", products);

  return (
    <div className="App">
      <Navigation cart={cart} />

      {/* Routes */}
      <ProductContext.Provider value={{ products, addItem }}>
        <Route exact path="/">
          <Products />
        </Route>
      </ProductContext.Provider>

      <CartContext.Provider value={{ cart, removeItem }}>
        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </CartContext.Provider>
    </div>
  );
}

export default App;
