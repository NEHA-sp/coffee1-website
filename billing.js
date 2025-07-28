const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Endpoint to render billing page
app.get('/billing', (req, res) => {
    const { productId, productName, productPrice } = req.query;
    // Render billing page with selected product information
    res.render('billing', { productId, productName, productPrice });
});

// Endpoint to handle billing form submission
app.post('/checkout', (req, res) => {
    const { totalAmount, paymentMode, address } = req.body;
    // Handle checkout process (not implemented in this example)
    res.json({ message: 'Order placed successfully', totalAmount, paymentMode, address });
});

app.listen(port, () => {
    console.log(`Billing server running at http://localhost:${port}`);
});
