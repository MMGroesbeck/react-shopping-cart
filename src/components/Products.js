import React, { useContext } from 'react';

import { ShopContext } from "../App";

// Components
import Product from './Product';

const Products = props => {
	const { products, addItem } = useContext(ShopContext);
	// const { addItem } = useContext(ShopContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem(product)}
				/>
			))}
		</div>
	);
};

export default Products;
