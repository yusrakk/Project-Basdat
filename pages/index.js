// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Blue Threads</h1>
        <p className="text-gray-600 mb-6">Temukan koleksi pakaian dan celana katun dengan beragam desain.</p>
        <div className="flex justify-center items-center space-x-2">
          <input type="text" placeholder="Cari Produk" className="px-4 py-2 border rounded-md"/>
          <button className="px-4 py-2 bg-black text-white rounded-md">Search</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
