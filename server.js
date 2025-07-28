const pg = require('pg');
const express = require('express');
const bcrypt = require('bcrypt');

const cors = require('cors');


// Allow all origins

const app = express();
const port = 3002;
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
app.post('/login', async (req, res) => {
    console.log(req.body)
    const { username,password } = req.body;
    try {
        const query = `SELECT * FROM dbo.login WHERE "userName" = '${username}' limit 1;`;
                
        const { rows } = await client.query(query);

        if (rows.length > 0) {

            if (password === rows[0].password) {
                res.status(200).json({ message: "Login successful",username: username });
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 