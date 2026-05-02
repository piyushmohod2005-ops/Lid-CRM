# PiTaMi - Premium Crochet Store

A complete e-commerce solution for handmade crochet products with a powerful admin panel.

## Features

### Customer Features
- Beautiful product catalog with crochet items
- Advanced search and filtering by product type, color, size
- Shopping cart and wishlist management
- Secure checkout with multiple payment options
- Order tracking and history
- User account with order management
- Product reviews and ratings
- Newsletter subscription

### Admin Features
- Complete product management (CRUD)
- Inventory tracking for crochet items
- Order management and fulfillment
- Customer management
- Sales analytics and revenue reports
- Discount and coupon management
- Email templates and notifications
- Website content management (banners, pages)
- Admin user roles and permissions
- Dashboard with key metrics

## Tech Stack

- **Frontend**: React 18+, Redux Toolkit, Tailwind CSS
- **Admin Panel**: React, Recharts for analytics, React Table
- **Backend**: Node.js, Express, MongoDB, JWT Authentication
- **Database**: MongoDB
- **Payment**: Stripe integration ready
- **Deployment**: Docker, Docker Compose

## Project Structure

```
PiTaMi/
├── backend/              # Node.js Express API
├── frontend/             # Customer React app
├── admin-panel/          # Admin dashboard
├── docker-compose.yml    # Docker orchestration
├── .env.example          # Environment variables template
└── README.md
```

## Quick Start

### Using Docker (Recommended)
```bash
# 1. Clone the repository
git clone https://github.com/piyushmohod2005-ops/Lid-CRM.git
cd Lid-CRM

# 2. Set up environment variables
cp .env.example .env

# 3. Start all services
docker-compose up
```

### Access Points
- **Customer Store**: http://localhost:3000
- **Admin Panel**: http://localhost:3001
- **API**: http://localhost:5000/api
- **MongoDB**: localhost:27017

## Default Admin Credentials
Email: admin@pitami.com
Password: Admin@123 (Change immediately in production)

## Installation & Setup

See individual README files:
- [Backend Setup](./backend/README.md)
- [Frontend Setup](./frontend/README.md)
- [Admin Panel Setup](./admin-panel/README.md)

## Features Roadmap
- [ ] Custom crochet order builder
- [ ] Size and color customization
- [ ] Customer review with photos
- [ ] Refund management system
- [ ] Shipping integration (multiple carriers)
- [ ] Newsletter with email campaigns
- [ ] Social media integration
- [ ] Mobile app (React Native)

## Support

For issues and questions, please create an issue in the GitHub repository.

## License

Private - All rights reserved to PiTaMi
