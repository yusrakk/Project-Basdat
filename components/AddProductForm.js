const addProduct = () => {
    const validationResult = validateFormData(formData);
    if (validationResult.error) {
      setError(validationResult.error);
      return;
    }
  
    setProducts([...products, { ...formData, id: Date.now() }]);
    resetFormData();
    setAddingProduct(false);
  
    // Cek apakah stok hampir habis
    if (parseInt(formData.stock) < 6) {
      alert("Stok Barang Hampir Habis!");
    }
  };
  