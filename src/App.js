import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

export const ShopContext = createContext();

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};
	const removeItem = item => {
		setCart(cart.filter(i => i.id !== item.id));
	}

	return (
		<div className="App">
			<ShopContext.Provider value={products, cart, addItem, removeItem}>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
			</ShopContext.Provider>
		</div>
	);
}

export default App;
