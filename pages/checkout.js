import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        const formattedProducts = response.data.reduce((acc, curr) => {
          const productIndex = acc.findIndex(p => p.id === curr.id);
          if (productIndex !== -1) {
            acc[productIndex].variants.push({
              sizeId: curr.size_id,
              sizeName: curr.size_name,
              colorId: curr.color_id,
              colorName: curr.color_name,
              stock: curr.stock
            });
          } else {
            acc.push({
              id: curr.id,
              name: curr.name,
              price: curr.price,
              rating: curr.rating,
              image: curr.image,
              variants: [{
                sizeId: curr.size_id,
                sizeName: curr.size_name,
                colorId: curr.color_id,
                colorName: curr.color_name,
                stock: curr.stock
              }]
            });
          }
          return acc;
        }, []);
        setProducts(formattedProducts);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleAddToCart = (productId, sizeId, colorId) => {
    const userId = 1; // Replace with actual user ID
    const quantity = 1;

    axios.post('http://localhost:5000/api/add-to-cart', { userId, productId, sizeId, colorId, quantity })
      .then(() => {
        alert('Product added to cart');
      })
      .catch(err => {
        console.error(err);
        alert('Failed to add product to cart');
      });
  };

  const handleViewCart = () => {
    const userId = 1; // Replace with actual user ID
    axios.get(`http://localhost:5000/api/cart/${userId}`)
      .then(response => {
        setCart(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <header className="relative w-full h-[850px] md:h-[750px] lg:h-[650px] xl:h-[600px] overflow-hidden p-10">
        <div className="w-full h-full overflow-hidden relative rounded-lg">
          <img
            src="images/orang.jpeg"
            alt="Header Image"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white">Blue Threads</h1>
              <p className="text-white mt-2">Temukan koleksi pakaian dan celana katun dengan beragam desain.</p>
              <div className="mt-4 flex justify-center">
                <input
                  type="text"
                  placeholder="Cari Produk"
                  className="px-4 py-2 border rounded-l-md"
                />
                <button className="px-4 py-2 bg-sky-500 text-white rounded-r-md">Search</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="text-3xl font-bold">Casual</div>
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-sky-500 text-white rounded-md"
              onClick={handleViewCart}
            >
              View Cart
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-md p-4">
              <div className="w-full h-60 md:h-72 lg:h-80 xl:h-96 overflow-hidden rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-600">Rating: {product.rating}</p>
                {product.variants.map(variant => (
                  <div key={`${variant.sizeId}-${variant.colorId}`} className="mt-2">
                    <p className="text-gray-600">Size: {variant.sizeName}, Color: {variant.colorName}</p>
                    <p className="text-gray-600">Stock: {variant.stock}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xl font-bold">${product.price}</span>
                      <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                        onClick={() => handleAddToCart(product.id, variant.sizeId, variant.colorId)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Cart</h2>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-gray-600">Size: {item.size_name}, Color: {item.color_name}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="text-xl font-bold">${item.price}</div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
