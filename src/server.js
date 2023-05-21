const express = require('express');
const bodyParser = require('body-parser');



const app = express();
// Enable CORS
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


// Parse incoming request bodies
app.use(bodyParser.json());



// Endpoint for user authentication
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the provided username and password match the hardcoded values
  if (username === 'administrator' && password === 'Ashoka@000') {
    // Authentication successful
    res.status(200).json({ message: 'Authentication successful' });
  } else {
    // Authentication failed
    res.status(401).json({ message: 'Authentication failed' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
