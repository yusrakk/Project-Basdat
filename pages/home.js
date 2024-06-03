<<<<<<< HEAD
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
=======
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
=======
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
>>>>>>> 6428d8f (second commit config login to database)

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
>>>>>>> 73931b6 (config login to database)
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094

const Home = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    sizes: [],
    colors: [],
    stock: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [addingProduct, setAddingProduct] = useState(false);
  const [error, setError] = useState('');

  const addProduct = () => {
    const validationResult = validateFormData(formData);
    if (validationResult.error) {
      setError(validationResult.error);
      return;
    }

<<<<<<< HEAD
=======
    // Stok hampir habis
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094
    const stock = parseInt(formData.stock);
    if (!isNaN(stock) && stock < 6) {
      alert('Stok barang hampir habis!');
    }

    setProducts([...products, { ...formData, id: Date.now() }]);
    resetFormData();
    setAddingProduct(false);
  };

  const validateFormData = (data) => {
<<<<<<< HEAD
    const { name, colors, stock } = data;
    if (!name || !colors || !stock || isNaN(parseInt(stock))) {
=======
    const { id, name, colors, stock } = data;
    if (!id || isNaN(parseInt(id)) || !name || !colors || !stock || isNaN(parseInt(stock))) {
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094
      return { error: 'Data tidak lengkap atau salah' };
    }
    return { error: '' };
  };

  const editProduct = () => {
<<<<<<< HEAD
    const validationResult = validateFormData(formData);
    if (validationResult.error) {
      setError(validationResult.error);
      return;
    }

=======
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094
    setProducts(products.map((product) =>
      product.id === formData.id ? formData : product
    ));
    resetFormData();
    setIsEditing(false);
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleEditClick = (product) => {
    setFormData(product);
    setIsEditing(true);
<<<<<<< HEAD
    setAddingProduct(false); // hide add product form if it's open
=======
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094
  };

  const resetFormData = () => {
    setFormData({
      id: '',
      name: '',
      price: '',
      sizes: [],
      colors: [],
      stock: ''
    });
    setError('');
  };

  return (
    <>
      <Navbar />
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094
      <div style={styles.container}>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>ID Barang</th>
                <th style={styles.tableHeader}>Nama Barang</th>
                <th style={styles.tableHeader}>Harga Barang</th>
                <th style={styles.tableHeader}>Ukuran Barang</th>
                <th style={styles.tableHeader}>Warna Barang</th>
                <th style={styles.tableHeader}>Stok Barang</th>
                <th style={styles.tableHeader}>Aksi</th>
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
              {products.map((product) => (
                <tr key={product.id}>
                  <td style={styles.tableData}>{product.id}</td>
                  <td style={styles.tableData}>{product.name}</td>
                  <td style={styles.tableData}>{product.price}</td>
                  <td style={styles.tableData}>{product.sizes.join(', ')}</td>
                  <td style={styles.tableData}>{product.colors}</td>
                  <td style={{ ...styles.tableData, color: product.stock < 6 ? 'red' : 'inherit' }}>
                    {product.stock}
                    {product.stock < 6 && <span> (Stok Rendah)</span>}
                  </td>
                  <td style={styles.tableData}>
                    <button onClick={() => handleEditClick(product)} style={{ ...styles.button, backgroundColor: 'blue', marginRight: '5px' }}>
                      <i className="fas fa-pencil-alt" style={{ marginRight: '5px' }}></i>Edit
                    </button>
                    <button onClick={() => deleteProduct(product.id)} style={{ ...styles.button, backgroundColor: 'red' }}>
                      <i className="fas fa-trash-alt" style={{ marginRight: '5px' }}></i>Delete
                    </button>
                  </td>
                </tr>
              ))}
=======
            {products.map((product) => (
            <tr key={product.id}>
                <td style={styles.tableData}>{product.id}</td>
                <td style={styles.tableData}>{product.name}</td>
                <td style={styles.tableData}>{product.price}</td>
                <td style={styles.tableData}>{product.sizes.join(', ')}</td>
                <td style={styles.tableData}>{product.colors}</td>
                <td style={{ ...styles.tableData, color: product.stock < 6 ? 'red' : 'inherit' }}>
                {product.stock}
                {product.stock < 6 && <span> (Stok Rendah)</span>}
                </td>
                <td style={styles.tableData}>
                <button onClick={() => handleEditClick(product)} style={{ ...styles.button, backgroundColor: 'blue', marginRight: '5px' }}>
                    <i className="fas fa-pencil-alt" style={{ marginRight: '5px' }}></i>Edit
                </button>
                <button onClick={() => deleteProduct(product.id)} style={{ ...styles.button, backgroundColor: 'red' }}>
                    <i className="fas fa-trash-alt" style={{ marginRight: '5px' }}></i>Delete
                </button>
                </td>
            </tr>
            ))}

>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094
            </tbody>
          </table>
        </div>
        <div style={styles.formContainer}>
<<<<<<< HEAD
          {(addingProduct || isEditing) && (
            <div style={styles.form}>
              <h2 style={styles.heading}>{isEditing ? 'Edit Produk' : 'Tambah Produk Baru'}</h2>
              {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
=======
          {addingProduct ? (
            <div style={styles.form}>
              <h2 style={styles.heading}>Tambah Produk Baru</h2>
              {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
              <label style={styles.label}>ID Barang:</label>
              <input
                type="text"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                style={styles.input}
              />
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094
              <label style={styles.label}>Nama Barang:</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={styles.input}
              />
              <label style={styles.label}>Harga Barang:</label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                style={styles.input}
              />
              <label style={styles.label}>Ukuran Barang:</label>
              <select
                multiple
                value={formData.sizes}
                onChange={(e) => setFormData({ ...formData, sizes: Array.from(e.target.selectedOptions, option => option.value) })}
                style={styles.input}
              >
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
              </select>
              <label style={styles.label}>Warna Barang:</label>
              <input
                type="text"
                value={formData.colors}
                onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
                style={styles.input}
              />
              <label style={styles.label}>Stok Barang:</label>
              <input
                type="text"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                style={styles.input}
              />
<<<<<<< HEAD
              <button onClick={isEditing ? editProduct : addProduct} style={styles.button}>
                {isEditing ? 'Edit Produk' : 'Tambah Produk'}
              </button>
              <button onClick={() => { resetFormData(); setIsEditing(false); setAddingProduct(false); }} style={styles.button}>
                Batal
              </button>
            </div>
          )}
          {!isEditing && !addingProduct && (
            <button onClick={() => setAddingProduct(true)} style={styles.button}>Tambah Barang Baru</button>
          )}
        </div>
      </div>
=======
              <button onClick={addProduct} style={styles.button}>Tambah Produk</button>
              <button onClick={() => setAddingProduct(false)} style={styles.button}>Batal</button>
=======
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
>>>>>>> 73931b6 (config login to database)
            </div>
          ) : (
            <button onClick={() => setAddingProduct(true)} style={styles.button}>Tambah Barang Baru</button>
          )}
        </div>
<<<<<<< HEAD
      </div>
=======
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
          ) : (
            <button onClick={() => setAddingProduct(true)} style={styles.button}>Tambah Barang Baru</button>
          )}
        </div>
<<<<<<< HEAD
      </main>
>>>>>>> 73931b6 (config login to database)
=======
      </div>
>>>>>>> 6428d8f (second commit config login to database)
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    padding: '20px',
  },
  tableContainer: {
    flex: 1,
    marginRight: '20px',
  },
  formContainer: {
    width: '300px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
<<<<<<< HEAD
=======
   
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    marginBottom: '10px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    marginBottom: '10px',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  button: {
    marginBottom: '10px',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    cursor: 'pointer',
  },
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    border: '1px solid #ccc',
  },
  tableHeader: {
    borderBottom: '1px solid #ccc',
    padding: '10px',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  tableData: {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'left',
  },
<<<<<<< HEAD
};

export default Home;
=======
  };
  
  export default Home;
  
>>>>>>> fec4d51fd910e729239c3ebd80b42066b24f9094
