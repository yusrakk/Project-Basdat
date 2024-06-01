const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '131104', 
    database: 'databarang'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the MySQL database');
    }
});

app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching products');
        } else {
            res.json(results);
        }
    });
});

// Add to cart
app.post('/api/add-to-cart', (req, res) => {
    const { userId, productId, sizeId, colorId, quantity } = req.body;

    // Check stock availability
    db.query(
        'SELECT stock FROM product_variants WHERE product_id = ? AND size_id = ? AND color_id = ?',
        [productId, sizeId, colorId],
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error checking stock');
            } else if (results.length === 0 || results[0].stock < quantity) {
                res.status(400).send('Insufficient stock');
            } else {
                // Deduct stock and add to cart
                db.query(
                    'UPDATE product_variants SET stock = stock - ? WHERE product_id = ? AND size_id = ? AND color_id = ?',
                    [quantity, productId, sizeId, colorId],
                    (err) => {
                        if (err) {
                            console.error(err);
                            res.status(500).send('Error updating stock');
                        } else {
                            // Insert into cart table
                            db.query(
                                'INSERT INTO cart (user_id, product_id, size_id, color_id, quantity) VALUES (?, ?, ?, ?, ?)',
                                [userId, productId, sizeId, colorId, quantity],
                                (err) => {
                                    if (err) {
                                        console.error(err);
                                        res.status(500).send('Error adding to cart');
                                    } else {
                                        res.status(200).send('Product added to cart');
                                    }
                                }
                            );
                        }
                    }
                );
            }
        }
    );
});

// Fetch cart items
app.get('/api/cart', (req, res) => {
    const userId = req.query.userId;

    db.query(
        'SELECT c.id, p.name, p.price, s.size_name, c.quantity, col.color_name FROM cart c JOIN products p ON c.product_id = p.id JOIN sizes s ON c.size_id = s.id JOIN colors col ON c.color_id = col.id WHERE c.user_id = ?',
        [userId],
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error fetching cart items');
            } else {
                res.json(results);
            }
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
