import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const products = [
  {
    id: 1,
    name: 'Gradient Graphic T-shirt',
    price: 145,
    image: '/path/to/image1.jpg',
    size: 'Large',
    color: 'White',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Checkered Shirt',
    price: 180,
    image: '/path/to/image2.jpg',
    size: 'Medium',
    color: 'Red',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Skinny Fit Jeans',
    price: 240,
    image: '/path/to/image3.jpg',
    size: 'Large',
    color: 'Blue',
    rating: 4.3,
  },
  {
    id: 4,
    name: 'Denim Jacket',
    price: 350,
    image: '/path/to/image4.jpg',
    size: 'Medium',
    color: 'Black',
    rating: 4.8,
  },
  {
    id: 5,
    name: 'Striped T-shirt',
    price: 120,
    image: '/path/to/image5.jpg',
    size: 'Small',
    color: 'Green',
    rating: 4.2,
  },
  {
    id: 6,
    name: 'Chino Pants',
    price: 220,
    image: '/path/to/image6.jpg',
    size: 'Large',
    color: 'Khaki',
    rating: 4.4,
  },
  {
    id: 7,
    name: 'Hoodie',
    price: 300,
    image: '/path/to/image7.jpg',
    size: 'Medium',
    color: 'Grey',
    rating: 4.7,
  },
  {
    id: 8,
    name: 'Leather Jacket',
    price: 500,
    image: '/path/to/image8.jpg',
    size: 'Large',
    color: 'Brown',
    rating: 4.9,
  },
  {
    id: 9,
    name: 'Shorts',
    price: 100,
    image: '/path/to/image9.jpg',
    size: 'Medium',
    color: 'Navy',
    rating: 4.3,
  },
];

const Home = () => {
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
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
              <div className="mt-4">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-600">Size: {product.size}</p>
                <p className="text-gray-600">Color: {product.color}</p>
                <p className="text-gray-600">Rating: {product.rating}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
