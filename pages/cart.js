import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productDetails, setProductDetails] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);
    const handleAddToCart = (productId) => {
        axios.get(`http://localhost:5000/api/product-details/${productId}`)
            .then(response => {
                setSelectedProduct(productId);
                setProductDetails(response.data);
            })
            .catch(error => console.error(error));
    };

    const confirmAddToCart = () => {
        const userId = 1; // Replace with actual user ID

        axios.post('http://localhost:5000/api/add-to-cart', {
            userId,
            productId: selectedProduct,
            sizeId: selectedSize,
            colorId: selectedColor,
            quantity
        })
            .then(() => {
                alert('Product added to cart');
                setSelectedProduct(null);
                setProductDetails(null);
                setSelectedSize('');
                setSelectedColor('');
                setQuantity(1);
            })
            .catch(err => {
                console.error(err);
                alert('Failed to add product to cart');
            });
    };

    return (
        <div>
            <header className="relative w-full h-[850px] overflow-hidden p-10">
                <div className="w-full h-full overflow-hidden relative rounded-lg">
                    <img src="/images/orang.jpeg" alt="Header Image" className="w-full h-full object-cover rounded-lg" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-white">Blue Threads</h1>
                            <p className="text-white mt-2">Temukan koleksi pakaian dan celana katun dengan beragam desain.</p>
                            <div className="mt-4 flex justify-center">
                                <input type="text" placeholder="Cari Produk" className="px-4 py-2 border rounded-l-md" />
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
                        <select className="border rounded-md px-4 py-2">
                            <option>Semua pakaian</option>
                        </select>
                        <select className="border rounded-md px-4 py-2">
                            <option>Semua Harga</option>
                        </select>
                        <select className="border rounded-md px-4 py-2">
                            <option>Ukuran</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white shadow-md rounded-md p-4">
                            <div className="w-full h-60 overflow-hidden rounded-md">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-bold">{product.name}</h2>
                                <p className="text-gray-600">Rating: {product.rating}</p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-xl font-bold">${product.price}</span>
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                        onClick={() => handleAddToCart(product.id)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedProduct && productDetails && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-md w-96">
                            <h2 className="text-xl font-bold mb-4">Add to Cart</h2>
                            <p className="mb-2">Product: {productDetails.name}</p>
                            <p className="mb-2">Price: ${productDetails.price}</p>
                            <div className="mb-2">
                                <label className="block">Size:</label>
                                <select
                                    value={selectedSize}
                                    onChange={(e) => setSelectedSize(e.target.value)}
                                    className="border rounded-md px-4 py-2 w-full mt-1"
                                >
                                    <option value="">Select Size</option>
                                    {productDetails.variants.map(variant => (
                                        <option key={variant.id} value={variant.size_id}>{variant.size_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block">Color:</label>
                                <select
                                    value={selectedColor}
                                    onChange={(e) => setSelectedColor(e.target.value)}
                                    className="border rounded-md px-4 py-2 w-full mt-1"
                                >
                                    <option value="">Select Color</option>
                                    {productDetails.variants.map(variant => (
                                        <option key={variant.id} value={variant.color_id}>{variant.color_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block">Quantity:</label>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    className="border rounded-md px-4 py-2 w-full mt-1"
                                    min="1"
                                    max={productDetails.variants.find(variant => variant.size_id === selectedSize && variant.color_id === selectedColor)?.stock || 1}
                                />
                            </div>
                            <button
                                onClick={confirmAddToCart}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={() => {
                                    setSelectedProduct(null);
                                    setProductDetails(null);
                                    setSelectedSize('');
                                    setSelectedColor('');
                                    setQuantity(1);
                                }}
                                className="mt-2 text-red-500 w-full text-center"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Home;
