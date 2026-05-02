# PiTaMi - Complete E-Commerce & Admin Setup Guide

## 🎯 Project Overview

**PiTaMi** is a full-stack e-commerce solution for handmade crochet products with a comprehensive admin panel. It includes:
- **Customer Store** - Browse and purchase crochet items
- **Admin Dashboard** - Manage products, orders, customers, and analytics
- **RESTful API** - Complete backend with authentication
- **Docker Setup** - Easy deployment with Docker Compose

## 📁 Project Structure

```
PiTaMi/
├── backend/              # Node.js Express API
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── server.js        # Main server file
│   ├── package.json
│   └── Dockerfile
├── frontend/            # Customer React app
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── redux/       # State management
│   │   ├── services/    # API services
│   │   └── App.js
│   ├── package.json
│   └── Dockerfile
├── admin-panel/         # Admin React dashboard
│   ├── src/
│   │   ├── components/  # Admin components
│   │   ├── pages/       # Admin pages
│   │   ├── redux/       # State management
│   │   ├── services/    # API services
│   │   └── App.js
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml   # Docker orchestration
├── .env.example         # Environment variables
└── README.md
```

## 🚀 Quick Start (Docker)

### Prerequisites
- Docker & Docker Compose installed
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/piyushmohod2005-ops/Lid-CRM.git
   cd Lid-CRM
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start all services**
   ```bash
   docker-compose up --build
   ```

4. **Access the applications**
   - **Customer Store**: http://localhost:3000
   - **Admin Panel**: http://localhost:3001
   - **API**: http://localhost:5000/api
   - **API Health**: http://localhost:5000/api/health

## 📋 Default Admin Credentials

```
Email: admin@pitami.com
Password: Admin@123
```

⚠️ **Change these immediately in production!**

## 🛠️ Manual Setup (Without Docker)

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env

# Configure .env with your MongoDB URI
# Then run:
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Admin Panel Setup

```bash
cd admin-panel
npm install
npm start
```

## 📚 API Documentation

### Authentication

**Register**
```bash
POST /api/auth/register
Body: {
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

**Login**
```bash
POST /api/auth/login
Body: {
  "email": "john@example.com",
  "password": "password123"
}
```

### Products

**Get All Products**
```bash
GET /api/products?category=amigurumi&sort=newest&page=1&limit=12
```

**Get Single Product**
```bash
GET /api/products/:id
```

**Create Product (Admin)**
```bash
POST /api/products
Body: {
  "name": "Cute Amigurumi",
  "description": "Handmade with love",
  "price": 29.99,
  "category": "amigurumi",
  "stock": 10
}
```

### Orders

**Get User Orders**
```bash
GET /api/orders/user/:userId
```

**Create Order**
```bash
POST /api/orders
Body: {
  "user": "userId",
  "items": [...],
  "shippingAddress": {...},
  "total": 99.99
}
```

### Admin Dashboard

**Get Dashboard Stats**
```bash
GET /api/admin/dashboard
```

**Get Sales Analytics**
```bash
GET /api/admin/analytics/sales
```

**Get All Users**
```bash
GET /api/admin/users?page=1&limit=20
```

**Get All Orders**
```bash
GET /api/admin/orders?page=1&limit=20&status=pending
```

## 💳 Features by Role

### Customer Features
- ✅ User registration and login
- ✅ Product browsing with filters
- ✅ Shopping cart management
- ✅ Product search
- ✅ Order placement
- ✅ Order history and tracking
- ✅ User profile management
- ✅ Wishlist (coming soon)
- ✅ Product reviews (coming soon)

### Admin Features
- ✅ Dashboard with key metrics
- ✅ Product management (CRUD)
- ✅ Order management and status updates
- ✅ Customer management
- ✅ Sales analytics and reports
- ✅ Inventory tracking
- ✅ Admin user management
- ✅ Revenue tracking
- ✅ Settings and configuration

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- CORS enabled for frontend/admin
- Environment variables for sensitive data
- Request validation
- SQL injection protection (MongoDB)

## 📦 Dependencies

### Backend
- **Express** - Web framework
- **MongoDB/Mongoose** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Stripe** - Payment processing
- **Nodemailer** - Email notifications

### Frontend & Admin
- **React 18** - UI library
- **Redux Toolkit** - State management
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Router** - Navigation
- **Recharts** - Data visualization

## 🌐 Deployment

### Docker Deployment

1. **Build images**
   ```bash
   docker-compose build
   ```

2. **Run in production**
   ```bash
   docker-compose up -d
   ```

3. **View logs**
   ```bash
   docker-compose logs -f
   ```

### Cloud Deployment (AWS, Heroku, etc.)

1. Set up environment variables on your cloud platform
2. Push to your cloud provider
3. Configure database connection
4. Deploy containers

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Check MongoDB container
docker-compose ps

# Restart MongoDB
docker-compose restart mongo
```

### Port Already in Use
```bash
# Change ports in docker-compose.yml
# Or kill existing process
lsof -i :5000  # Check what's using port 5000
kill -9 <PID>
```

### Dependencies Not Installed
```bash
# Rebuild containers
docker-compose down
docker-compose up --build
```

## 📝 Environment Variables

See `.env.example` for all available variables:

```env
# Backend
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://admin:password123@mongo:27017/pitami
JWT_SECRET=your_secret_key

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLIC_KEY=pk_test_...
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Create a pull request
4. Wait for review

## 📞 Support

For issues and questions:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include error messages and logs

## 📄 License

Private - All rights reserved to PiTaMi

## 🎉 What's Next?

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Email notifications
- [ ] Shipping integration
- [ ] Product reviews system
- [ ] Wishlist feature
- [ ] Mobile app (React Native)
- [ ] Advanced analytics
- [ ] Inventory alerts
- [ ] Customer support chat
- [ ] Social media integration

---

**Built with ❤️ for PiTaMi Crochet Store**
