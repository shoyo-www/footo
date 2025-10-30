// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('🚀 Express server is running!');
});

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Express API!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
