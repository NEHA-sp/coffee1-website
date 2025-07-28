// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const pg = require('pg');
const cors = require('cors');

// Initialize Express app
const app = express();
const port = 3003;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
const client = new pg.Client({
    host: 'localhost',
    user: 'postgres',
    port: 5000,
    password: 'Nsp@2004',
    database: 'coffee_shop'
});

client.connect();

// Signup route

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if the user with the given email already exists
        const checkQuery = `SELECT * FROM dbo.login WHERE "email" = '${email}'`;
        const checkResult = await client.query(checkQuery);
        
        if (checkResult.rows.length > 0) {
            // If user with the given email already exists, return error
            return res.status(409).json({ message: "User with this email already exists" });
        }

        // If user with the given email doesn't exist, insert the new user data
        const insertQuery = `INSERT INTO dbo.login ("userName", "email") VALUES ('${name}', '${email}','${password}')`;
        await client.query(insertQuery);

        res.status(201).json({ message: "Signup successful" });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
