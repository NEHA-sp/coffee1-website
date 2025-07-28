const pg = require('pg');
const express = require('express');
const bcrypt = require('bcrypt');

const cors = require('cors');


// Allow all origins

const app = express();
const port = 3001;
console.log("start");
// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

const client = new pg.Client({
    host: "localhost",
    user: "postgres",
    port: 5000,
    password: "Nsp@2004",
    database: "coffee_shop"
});

client.connect();

//Health
app.get('/health', async(req, res) => {
    res.status(200).json({ message: "OK" });
});



// Login route
app.post('/product', async (req, res) => {
    console.log(req.body)
    const { pname, price, quantity } = req.body; // Destructuring to extract pname, price, and quantity
    try {
        const query = `SELECT pname, price, quantity FROM dbo.product WHERE pname = '${pname}' LIMIT 1;`;

        const { rows } = await client.query(query);

        if (rows.length > 0) {
            if (quantity === rows[0].quantity) {
                // Read the price value from rows[0].price
                const productPrice = rows[0].price;
                res.status(200).json({ message: "Successful", productPrice });
            } else {
                res.status(401).json({ message: "Invalid quantity" });
            }
        } else {
            res.status(404).json({ message: "Item not found" });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Internal server error" });
    }
})// Login route
app.post('/product', async (req, res) => {
    console.log(req.body)
    const { pname, price, quantity } = req.body; // Destructuring to extract pname, price, and quantity
    try {
        const query = `SELECT pname, price, quantity FROM dbo.product WHERE pname = '${pname}' LIMIT 1;`;

        const { rows } = await client.query(query);

        if (rows.length > 0) {
            if (quantity === rows[0].quantity) {
                const productPrice = rows[0].price;
                console.log(`Product price: ${price}`); // Logging the price
                res.status(200).json({ message: "Successful", productPrice }); // Returning price in the response
            } else {
                res.status(401).json({ message: "Invalid quantity" });
            }
        } else {
            res.status(404).json({ message: "Item not found" });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 