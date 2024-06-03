const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '131104',
    database: 'databarang'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

app.use(cors());
app.use(bodyParser.json());

// Fetch product details including sizes, colors, and stock
app.get('/api/product-details/:productId', (req, res) => {
    const productId = req.params.productId;

    const productQuery = 'SELECT * FROM products WHERE id = ?';
    const variantsQuery = `
        SELECT pv.*, c.color_name, s.size_name 
        FROM product_variants pv
        JOIN colors c ON pv.color_id = c.id
        JOIN sizes s ON pv.size_id = s.id
        WHERE pv.product_id = ?
    `;

    db.query(productQuery, [productId], (productErr, productResult) => {
        if (productErr) throw productErr;

        if (productResult.length === 0) {
            return res.status(404).send({ message: 'Product not found' });
        }

        db.query(variantsQuery, [productId], (variantsErr, variantsResult) => {
            if (variantsErr) throw variantsErr;

            const product = productResult[0];
            product.variants = variantsResult;
            res.send(product);
        });
    });
});

app.post('/api/add-to-cart', (req, res) => {
    const { userId, productId, sizeId, colorId, quantity } = req.body;

    // Here you would typically insert into a 'cart' table in your database
    const addToCartQuery = 'INSERT INTO cart (user_id, product_id, size_id, color_id, quantity) VALUES (?, ?, ?, ?, ?)';
    db.query(addToCartQuery, [userId, productId, sizeId, colorId, quantity], (err, result) => {
        if (err) throw err;
        res.send({ message: 'Product added to cart' });
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
