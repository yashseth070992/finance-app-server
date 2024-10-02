const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // To parse incoming request bodies

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // To parse JSON request bodies

// Simple route for home page
app.get('/', (req, res) => {
  res.send('Hello, GCP!');
});

// Route for /signup
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Here you can add logic to register the user in your database
  // For now, just return a simple response
  if (username && password) {
    res.json({ message: 'User signed up successfully!', user: { username } });
  } else {
    res.status(400).json({ error: 'Username and password are required!' });
  }
});

// Route for /login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Here you can add logic to authenticate the user
  // For now, we'll return a simple response
  if (username === 'testuser' && password === 'testpass') {
    res.json({ message: 'Login successful!', token: 'sample-token-123' });
  } else {
    res.status(401).json({ error: 'Invalid username or password!' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});