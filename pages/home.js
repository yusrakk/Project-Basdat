import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

    // Stok hampir habis
    const stock = parseInt(formData.stock);
    if (!isNaN(stock) && stock < 6) {
      alert('Stok barang hampir habis!');
    }

    setProducts([...products, { ...formData, id: Date.now() }]);
    resetFormData();
    setAddingProduct(false);
  };

  const validateFormData = (data) => {
    const { id, name, colors, stock } = data;
    if (!id || isNaN(parseInt(id)) || !name || !colors || !stock || isNaN(parseInt(stock))) {
      return { error: 'Data tidak lengkap atau salah' };
    }
    return { error: '' };
  };

  const editProduct = () => {
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

            </tbody>
          </table>
        </div>
        <div style={styles.formContainer}>
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
              <button onClick={addProduct} style={styles.button}>Tambah Produk</button>
              <button onClick={() => setAddingProduct(false)} style={styles.button}>Batal</button>
            </div>
          ) : (
            <button onClick={() => setAddingProduct(true)} style={styles.button}>Tambah Barang Baru</button>
          )}
        </div>
      </div>
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
  };
  
  export default Home;
  