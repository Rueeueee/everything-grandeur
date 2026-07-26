// routes/products.js
// Handles everything related to reading and managing the product catalog.

const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataPath = path.join(__dirname, '..', 'data', 'products.json');

// Small helper so we don't repeat this file-read logic everywhere
function readProducts() {
  const raw = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(raw);
}

// GET /api/products  -> list every product
router.get('/', (req, res) => {
  const products = readProducts();
  res.json(products);
});

// GET /api/products/:id  -> a single product by id
router.get('/:id', (req, res) => {
  const products = readProducts();
  const product = products.find(p => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
});

module.exports = router;
