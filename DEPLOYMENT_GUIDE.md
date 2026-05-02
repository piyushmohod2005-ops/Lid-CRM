# PiTaMi - Development & Deployment Guide

## Local Development

### Using Docker Compose (Recommended)

```bash
# Clone repository
git clone https://github.com/piyushmohod2005-ops/Lid-CRM.git
cd Lid-CRM

# Copy environment file
cp .env.example .env

# Start all services
docker-compose up --build

# Stop services
docker-compose down

# View logs
docker-compose logs -f backend
```

### Manual Setup

#### 1. Backend

```bash
cd backend
npm install

# Create .env file
cp .env.example .env

# Update .env with:
# - MONGODB_URI (local or remote)
# - JWT_SECRET (generate a secure key)
# - Email/Stripe credentials if needed

# Start development server
npm run dev
# Server runs on http://localhost:5000
```

#### 2. Frontend

```bash
cd frontend
npm install

# Create .env.local file
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env.local

# Start development server
npm start
# Store runs on http://localhost:3000
```

#### 3. Admin Panel

```bash
cd admin-panel
npm install

# Create .env.local file
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env.local

# Start development server
npm start
# Admin runs on http://localhost:3001
```

## Database Setup

### Using MongoDB Atlas (Cloud)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster
4. Get connection string
5. Update `.env` with connection string

### Using Local MongoDB

```bash
# Install MongoDB
# On macOS with Homebrew:
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# Connection string:
MONGODB_URI=mongodb://localhost:27017/pitami
```

## Initial Data Setup

### Create Admin User

```bash
# Register via API or admin panel
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Admin",
    "lastName": "User",
    "email": "admin@pitami.com",
    "password": "Admin@123",
    "confirmPassword": "Admin@123"
  }'
```

### Seed Sample Products

```bash
# Create sample products via API
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Cute Amigurumi",
    "description": "Handmade adorable amigurumi",
    "price": 25.99,
    "category": "amigurumi",
    "stock": 15
  }'
```

## Testing

### Backend Tests

```bash
cd backend
npm test
```

### Frontend Tests

```bash
cd frontend
npm test
```

## Build for Production

### Frontend

```bash
cd frontend
npm run build
# Output in build/ directory
```

### Admin Panel

```bash
cd admin-panel
npm run build
# Output in build/ directory
```

### Backend

```bash
cd backend
# Use production dependencies
NODE_ENV=production npm install
```

## Deployment

### Docker Hub Push

```bash
# Build images
docker build -t yourusername/pitami-backend:latest ./backend
docker build -t yourusername/pitami-frontend:latest ./frontend
docker build -t yourusername/pitami-admin:latest ./admin-panel

# Push to Docker Hub
docker push yourusername/pitami-backend:latest
docker push yourusername/pitami-frontend:latest
docker push yourusername/pitami-admin:latest
```

### AWS Deployment

```bash
# 1. Create EC2 instance
# 2. Install Docker
# 3. Clone repository
# 4. Configure environment variables
# 5. Run docker-compose up
```

### Heroku Deployment

```bash
# Install Heroku CLI
# Login: heroku login
# Create app: heroku create pitami-api
# Deploy: git push heroku main
```

## Performance Optimization

### Frontend Optimization

```bash
# Code splitting
# Lazy loading routes
# Image optimization
# CSS minification
```

### Backend Optimization

```bash
# Database indexing
# Query optimization
# Caching with Redis (optional)
# API rate limiting
```

## Monitoring & Logs

### Docker Logs

```bash
# View all logs
docker-compose logs

# View specific service
docker-compose logs backend

# Follow logs
docker-compose logs -f

# View last 100 lines
docker-compose logs --tail=100
```

### Health Checks

```bash
# Check API health
curl http://localhost:5000/api/health

# Check database connection
curl http://localhost:5000/api/admin/dashboard
```

## Security Checklist

- [ ] Change default passwords
- [ ] Update JWT_SECRET
- [ ] Enable HTTPS
- [ ] Configure CORS properly
- [ ] Use environment variables
- [ ] Implement rate limiting
- [ ] Add CSRF protection
- [ ] Enable MongoDB authentication
- [ ] Set up SSL certificates
- [ ] Regular security audits

## Backup & Recovery

### MongoDB Backup

```bash
# Backup database
mongodump --uri "mongodb://admin:password123@localhost:27017/pitami" --out ./backup

# Restore database
mongorestore --uri "mongodb://admin:password123@localhost:27017/pitami" ./backup
```

## Troubleshooting

### Issue: Cannot connect to MongoDB

**Solution:**
```bash
# Check MongoDB service
docker-compose ps mongo

# Restart MongoDB
docker-compose restart mongo

# Check logs
docker-compose logs mongo
```

### Issue: Port 5000 already in use

**Solution:**
```bash
# Find process using port
lsof -i :5000

# Kill process
kill -9 <PID>

# Or change port in docker-compose.yml
```

### Issue: CORS errors

**Solution:**
```bash
# Update backend/.env
FRONTEND_URL=http://localhost:3000
ADMIN_URL=http://localhost:3001

# Restart backend
docker-compose restart backend
```

## Support

For help:
1. Check GitHub issues
2. Create new issue with details
3. Include error messages and logs

---

**Happy coding! 🎉**
