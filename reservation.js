const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse incoming request body
app.use(bodyParser.json());

// Define reservation endpoint
app.post('/reservations', (req, res) => {
  // Handle reservation creation logic here
  console.log('Received reservation request:', req.body);
  res.status(200).json({ message: 'Reservation received!' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
