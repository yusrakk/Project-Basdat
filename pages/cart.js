// pages/cart.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';

export default function Cart() {
  const cartItems = [
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      size: 'Large',
      color: 'White',
      price: 145,
      image: '/path/to/image1.jpg', // ganti dengan path gambar yang sesuai
    },
    {
      id: 2,
      name: 'Checkered Shirt',
      size: 'Medium',
      color: 'Red',
      price: 180,
      image: '/path/to/image2.jpg', // ganti dengan path gambar yang sesuai
    },
    {
      id: 3,
      name: 'Skinny Fit Jeans',
      size: 'Large',
      color: 'Blue',
      price: 240,
      image: '/path/to/image3.jpg', // ganti dengan path gambar yang sesuai
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 rounded-full bg-black text-white text-center">1</span>
              <span>Shopping cart</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 rounded-full border border-black text-center">2</span>
              <span>Checkout details</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 rounded-full border border-black text-center">3</span>
              <span>Order complete</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <OrderSummary 
            subtotal={subtotal} 
            discount={discount} 
            deliveryFee={deliveryFee} 
            total={total} 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
