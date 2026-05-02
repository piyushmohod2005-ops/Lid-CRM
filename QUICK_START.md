# 🚀 PiTaMi - Quick Start Checklist

## ✅ Pre-Installation

- [ ] Install Docker & Docker Compose
- [ ] Install Git
- [ ] Have a text editor ready (VS Code recommended)
- [ ] Ensure ports 3000, 3001, 5000, 27017 are available
- [ ] Have 2GB+ free disk space

## 📥 Installation Steps

### Step 1: Clone Repository
```bash
git clone https://github.com/piyushmohod2005-ops/Lid-CRM.git
cd Lid-CRM
```
- [ ] Repository cloned successfully
- [ ] Confirmed main branch is checked out

### Step 2: Configure Environment
```bash
cp .env.example .env
# Edit .env file with your settings
```
- [ ] `.env` file created
- [ ] JWT_SECRET updated (use a secure random string)
- [ ] MongoDB URI configured (defaults to Docker MongoDB)
- [ ] Email settings configured (optional)
- [ ] Stripe keys added (optional)

### Step 3: Start Services
```bash
docker-compose up --build
```
- [ ] MongoDB started successfully
- [ ] Backend API running (http://localhost:5000)
- [ ] Frontend loading (http://localhost:3000)
- [ ] Admin panel loading (http://localhost:3001)
- [ ] No errors in console

## 🔍 Verification

### Backend API
```bash
curl http://localhost:5000/api/health
```
- [ ] Returns `{"status":"API is running"}`

### Frontend
- [ ] Open http://localhost:3000 in browser
- [ ] PiTaMi store loads
- [ ] Navigation bar visible
- [ ] No console errors

### Admin Panel
- [ ] Open http://localhost:3001 in browser
- [ ] Admin login page displays
- [ ] Demo credentials shown

## 👤 Initial Setup

### Login to Admin Panel
- [ ] Go to http://localhost:3001
- [ ] Email: `admin@pitami.com`
- [ ] Password: `Admin@123`
- [ ] Admin dashboard loads

### Change Admin Password
- [ ] Click Settings
- [ ] Update admin password
- [ ] Save changes
- [ ] Logout and login with new password

### Add Sample Products
- [ ] Click Products menu
- [ ] Click "Add Product"
- [ ] Fill in product details
- [ ] Create at least 3 sample products
- [ ] Verify products appear in frontend store

## 🛒 Customer Store Testing

### Register as Customer
- [ ] Go to http://localhost:3000/register
- [ ] Create test account
- [ ] Receive success message
- [ ] Redirect to home page

### Browse Products
- [ ] Click "Shop" or "Products"
- [ ] See list of products
- [ ] Filter by category
- [ ] Sort by price/rating

### Shopping Cart
- [ ] Click on product
- [ ] Click "Add to Cart"
- [ ] See item in cart badge
- [ ] Go to cart page
- [ ] Verify item shows in cart
- [ ] Update quantity
- [ ] Remove item

## 📊 Admin Features Testing

### Products
- [ ] View all products
- [ ] Create new product
- [ ] Edit product
- [ ] Delete product
- [ ] Update stock levels
- [ ] Set discount percentage

### Orders (Create test order first)
- [ ] View orders list
- [ ] Update order status
- [ ] Add order notes
- [ ] View customer details
- [ ] Filter by status

### Dashboard
- [ ] View total users count
- [ ] View total products count
- [ ] View total orders count
- [ ] View total revenue
- [ ] Check recent activity

### Analytics
- [ ] View sales chart
- [ ] Check revenue data
- [ ] View order trends
- [ ] Export reports (if available)

## 🔒 Security Checklist

- [ ] Changed default admin password
- [ ] Updated JWT_SECRET in .env
- [ ] Configured CORS origins
- [ ] MongoDB has authentication
- [ ] API validation enabled
- [ ] HTTPS enabled (production)
- [ ] Rate limiting configured (production)

## 📱 API Testing

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName":"Test",
    "lastName":"User",
    "email":"test@example.com",
    "password":"Test@123",
    "confirmPassword":"Test@123"
  }'
```
- [ ] Returns user data and token

### Login User
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email":"test@example.com",
    "password":"Test@123"
  }'
```
- [ ] Returns token in response

### Get Products
```bash
curl http://localhost:5000/api/products?limit=10
```
- [ ] Returns products array
- [ ] Each product has required fields

## 🐛 Troubleshooting

If you encounter issues:

### Port Already in Use
```bash
# Change ports in docker-compose.yml
# Or kill the process
lsof -i :PORT_NUMBER
kill -9 PID
```
- [ ] Ports freed up
- [ ] Services restarted

### MongoDB Connection Error
```bash
# Check MongoDB is running
docker-compose ps mongo

# Restart MongoDB
docker-compose restart mongo
```
- [ ] MongoDB container running
- [ ] Backend connected to database

### Build Issues
```bash
# Clean rebuild
docker-compose down
docker system prune -a
docker-compose up --build
```
- [ ] Clean build completed
- [ ] All services running

## 📚 Documentation to Read

- [ ] Read `README.md` for overview
- [ ] Read `SETUP_GUIDE.md` for detailed setup
- [ ] Read `DEPLOYMENT_GUIDE.md` for production deployment
- [ ] Read `ADMIN_GUIDE.md` for admin panel features
- [ ] Check backend/README.md for API details
- [ ] Check frontend/README.md for frontend structure
- [ ] Check admin-panel/README.md for admin setup

## 🎯 Next Steps

1. **Customize Branding**
   - [ ] Update store name in code
   - [ ] Change colors in Tailwind config
   - [ ] Update logo/images
   - [ ] Customize email templates

2. **Add Features**
   - [ ] Implement payment gateway (Stripe)
   - [ ] Add email notifications
   - [ ] Setup shipping integration
   - [ ] Add product reviews
   - [ ] Create wishlist feature

3. **Deploy**
   - [ ] Choose hosting provider (AWS, Heroku, etc.)
   - [ ] Configure production database
   - [ ] Set up domain name
   - [ ] Configure SSL certificate
   - [ ] Deploy to production

4. **Go Live**
   - [ ] Final security audit
   - [ ] Load testing
   - [ ] Backup configuration
   - [ ] Monitor system
   - [ ] Launch store

## 📞 Support & Help

- **Documentation**: Check README files in each folder
- **GitHub Issues**: Report bugs or request features
- **Community**: Join discussions
- **Email**: Contact support team

## 🎉 Success!

Once all checkboxes are marked, you have a fully functional:

✅ E-commerce store for customers
✅ Admin panel for management
✅ RESTful API backend
✅ MongoDB database
✅ Docker containerization

**Your PiTaMi Crochet Store is ready!** 🧶

---

**Last Updated**: May 2, 2026
**Version**: 1.0.0
