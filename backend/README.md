# PiTaMi - Backend API

Node.js Express API for the PiTaMi Crochet Store

## Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## API Endpoints

### Products
- GET /api/products - Get all products
- GET /api/products/:id - Get product details
- POST /api/products - Create product (Admin)
- PUT /api/products/:id - Update product (Admin)
- DELETE /api/products/:id - Delete product (Admin)

### Orders
- GET /api/orders - Get user orders
- POST /api/orders - Create order
- PUT /api/orders/:id - Update order (Admin)

### Users
- POST /api/auth/register - Register
- POST /api/auth/login - Login
- GET /api/users/profile - Get profile
- PUT /api/users/profile - Update profile

### Admin
- GET /api/admin/dashboard - Dashboard stats
- GET /api/admin/sales - Sales reports
- GET /api/admin/inventory - Inventory status
