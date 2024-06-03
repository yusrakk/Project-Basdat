import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TambahProduk = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    colors: "",
    sizes: [],
    description: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/barang");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const addProduct = async () => {
    const validationResult = validateFormData(formData);
    if (validationResult.error) {
      setError(validationResult.error);
      return;
    }

    try {
      const response = await fetch("/api/barang", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          namaBarang: formData.name,
          hargaBarang: formData.price,
          warnaBarang: formData.colors,
          ukuranBarang: formData.sizes.join(", "),
          deskripsiBarang: formData.description,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to add product:", errorData);
        throw new Error("Failed to add product");
      }
      const newProduct = await response.json();
      setProducts([...products, newProduct]);
      resetFormData();
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  const validateFormData = (data) => {
    const { name, price, colors, sizes, description } = data;
    if (!name || !price || !colors || sizes.length === 0 || !description) {
      return { error: "Data tidak lengkap atau salah" };
    }
    return { error: "" };
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      price: "",
      colors: "",
      sizes: [],
      description: "",
    });
    setError("");
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Nama Barang</th>
                <th style={styles.tableHeader}>Harga Barang</th>
                <th style={styles.tableHeader}>Warna Barang</th>
                <th style={styles.tableHeader}>Ukuran Barang</th>
                <th style={styles.tableHeader}>Deskripsi Barang</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td style={styles.tableData}>{product.namaBarang}</td>
                  <td style={styles.tableData}>{product.hargaBarang}</td>
                  <td style={styles.tableData}>{product.warnaBarang}</td>
                  <td style={styles.tableData}>{product.ukuranBarang}</td>
                  <td style={styles.tableData}>{product.deskripsiBarang}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={styles.formContainer}>
          <div style={styles.form}>
            <h2 style={styles.heading}>Tambah Produk Baru</h2>
            {error && (
              <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
            )}
            <label style={styles.label}>Nama Barang:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              style={styles.input}
            />
            <label style={styles.label}>Harga Barang:</label>
            <input
              type="text"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              style={styles.input}
            />
            <label style={styles.label}>Warna Barang:</label>
            <input
              type="text"
              value={formData.colors}
              onChange={(e) =>
                setFormData({ ...formData, colors: e.target.value })
              }
              style={styles.input}
            />
            <label style={styles.label}>Ukuran Barang:</label>
            <select
              multiple
              value={formData.sizes}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  sizes: Array.from(
                    e.target.selectedOptions,
                    (option) => option.value
                  ),
                })
              }
              style={styles.input}
            >
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
            </select>
            <label style={styles.label}>Deskripsi Barang:</label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              style={styles.textarea}
            />
            <button onClick={addProduct} style={styles.button}>
              Tambah Produk
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    padding: "20px",
  },
  tableContainer: {
    flex: 1,
    marginRight: "20px",
  },
  formContainer: {
    width: "400px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    marginBottom: "10px",
  },
  label: {
    marginBottom: "5px",
  },
  input: {
    marginBottom: "10px",
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  },
  textarea: {
    marginBottom: "10px",
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "3px",
    minHeight: "100px",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    cursor: "pointer",
  },
  table: {
    borderCollapse: "collapse",
    width: "100%",
    border: "1px solid #ccc",
  },
  tableHeader: {
    borderBottom: "1px solid #ccc",
    padding: "10px",
    textAlign: "left",
    fontWeight: "bold",
  },
  tableData: {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "left",
  },
};

export default TambahProduk;
