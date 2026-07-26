# Everything Grandeur

Website and backend for **Everything Grandeur**, a boutique in Gweru, Zimbabwe
offering stylish fashion, luxury-inspired gifts, and timeless pieces.

## Stack

- **Frontend:** HTML, CSS, vanilla JS
- **Backend:** Node.js + Express
- **Data:** JSON file (to be migrated to a real database)

## Project structure

```
everything-grandeur/
├── public/
│   └── index.html      # the website
├── routes/
│   └── products.js     # /api/products endpoints
├── data/
│   └── products.json   # product catalog (temporary data store)
├── server.js            # Express app entry point
└── package.json
```

## Running locally

```bash
npm install
npm start
```

Then open http://localhost:3000

## API

| Method | Route              | Description              |
|--------|--------------------|--------------------------|
| GET    | `/api/products`    | List all products        |
| GET    | `/api/products/:id`| Get a single product     |
| GET    | `/api/health`       | Health check             |

## Roadmap

- [ ] Connect a real database (PostgreSQL or MongoDB)
- [ ] Add an order/checkout endpoint
- [ ] Add an admin panel for managing products
- [ ] Deploy to a custom domain
