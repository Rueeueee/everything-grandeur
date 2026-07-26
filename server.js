// server.js
// Entry point for the Everything Grandeur backend.
// Serves the static frontend AND a small JSON API for the product catalog.

const express = require('express');
const path = require('path');
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve the frontend (public/index.html and any future assets) as static files
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/products', productsRouter);

// Simple health check, useful once this is deployed
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Everything Grandeur server running at http://localhost:${PORT}`);
});
