import React, { useEffect, useState } from 'react';
import { getProducts } from '../../lib/products';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((error, data) => {
      if (error) {
        console.error('Error fetching products:', error);
        return;
      }
      setProducts(data);
    });
  }, []);

  return (
    <div className="products-container">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Size: {product.size}</p>
          <p>Color: {product.color}</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
