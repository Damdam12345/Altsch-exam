const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve files from src directory
app.use(express.static(path.join(__dirname, 'src')));

// Status check route
app.get('/node-check', (req, res) => {
  res.send('Node.js is running and serving files!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
