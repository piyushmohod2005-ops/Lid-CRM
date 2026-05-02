# 🎨 PiTaMi Admin Panel - Features & Usage

## Admin Dashboard Overview

The admin panel is a comprehensive management system for PiTaMi Crochet Store.

### Access
- **URL**: http://localhost:3001
- **Default Email**: admin@pitami.com
- **Default Password**: Admin@123

## Dashboard Features

### 1. Dashboard (Home)

**Overview Statistics:**
- Total Users
- Total Products
- Total Orders
- Total Revenue
- Recent Activity Feed

**Quick Actions:**
- Add new product
- View pending orders
- Add new admin
- View analytics

### 2. Product Management

**Features:**
- ✅ View all products
- ✅ Add new products
- ✅ Edit product details
- ✅ Delete products
- ✅ Manage inventory/stock
- ✅ Set discounts
- ✅ Categorize products
- ✅ Upload product images
- ✅ Bulk actions

**Product Fields:**
```
- Name
- Description
- Price
- Cost Price
- Category (amigurumi, blankets, hats, scarves, etc.)
- Stock Quantity
- Low Stock Alert
- Colors
- Sizes
- Materials
- Images/Thumbnail
- SKU
- Handmade (Yes/No)
- Customizable (Yes/No)
- Featured (Yes/No)
- Discount (%)
- Tags
```

**Example Product Creation:**
```json
{
  "name": "Cute Bunny Amigurumi",
  "description": "Adorable handmade bunny plush",
  "price": 35.99,
  "costPrice": 12.00,
  "category": "amigurumi",
  "stock": 20,
  "colors": ["Pink", "Blue", "Yellow"],
  "sizes": ["Small", "Medium"],
  "materials": ["Acrylic Yarn", "Stuffing"],
  "customizable": true,
  "isFeatured": true
}
```

### 3. Order Management

**Features:**
- ✅ View all orders
- ✅ Filter by status
- ✅ Update order status
- ✅ Add order notes
- ✅ View customer details
- ✅ Print shipping labels
- ✅ Track fulfillment

**Order Statuses:**
- Pending (Awaiting payment/confirmation)
- Confirmed (Payment received)
- Processing (Preparing for shipment)
- Shipped (In transit)
- Delivered (Completed)
- Cancelled (Order cancelled)

**Order Details View:**
- Order number and date
- Customer information
- Items ordered with quantities
- Shipping address
- Billing address
- Payment status
- Order timeline
- Customer notes
- Admin notes

### 4. Customer Management

**Features:**
- ✅ View all customers
- ✅ Search customers
- ✅ View customer details
- ✅ View order history
- ✅ Send messages
- ✅ View preferences
- ✅ Manage account status
- ✅ Export customer data

**Customer Information:**
- Name
- Email
- Phone
- Address
- Registration date
- Total orders
- Total spent
- Account status
- Newsletter subscription
- Last login

### 5. Analytics & Reports

**Dashboard Analytics:**
- Sales chart (last 30 days)
- Revenue trends
- Order volume
- Top products
- Customer growth
- Conversion rates

**Export Reports:**
- Daily sales report
- Monthly revenue report
- Customer acquisition report
- Product performance report
- Order fulfillment report

**Data Visualization:**
- Line charts for trends
- Bar charts for comparisons
- Pie charts for distribution
- Tables with sorting/filtering

### 6. Settings & Configuration

**Store Information:**
- Store name
- Contact email
- Store address
- Phone number
- Business hours
- Store policies

**Payment Gateway:**
- Stripe API keys
- PayPal configuration
- Payment methods enabled

**Email Configuration:**
- SMTP settings
- Email templates
- Notification preferences

**Shipping Settings:**
- Shipping methods
- Shipping zones
- Rates configuration
- Carrier integration

**Tax Configuration:**
- Tax rates
- Tax regions
- Tax exemptions

## Navigation

```
Sidebar Menu:
├── Dashboard
├── Products
├── Orders
├── Customers
├── Analytics
├── Settings
└── Logout
```

## Common Tasks

### Add a New Product

1. Click "Products" in sidebar
2. Click "Add Product" button
3. Fill in product details
4. Set price and category
5. Upload images
6. Click "Create Product"

### Update Order Status

1. Click "Orders" in sidebar
2. Find the order
3. Click status dropdown
4. Select new status
5. Add admin notes (optional)
6. Status updates automatically

### View Customer Orders

1. Click "Customers" in sidebar
2. Click on customer name
3. View "Order History" section
4. Click order to view details

### Generate Reports

1. Click "Analytics" in sidebar
2. Select report type
3. Choose date range
4. Click "Generate"
5. Download as PDF/CSV

## User Roles & Permissions

### Admin Role
- Full access to all features
- Can manage other admin users
- Can access all settings
- Can delete orders/products

### Manager Role (Coming Soon)
- Product management
- Order management
- Customer support
- View analytics
- Cannot access settings

### Staff Role (Coming Soon)
- Order fulfillment
- Customer support
- Limited view access
- No deletion permissions

## Tips & Best Practices

✅ **Do:**
- Regularly backup your data
- Keep passwords secure
- Use descriptive product names
- Update stock regularly
- Monitor sales analytics
- Respond to customer inquiries
- Use order notes for tracking

❌ **Don't:**
- Share admin credentials
- Use weak passwords
- Forget to update inventory
- Ignore customer feedback
- Skip security updates
- Use placeholder product descriptions

## Keyboard Shortcuts (Coming Soon)

```
Ctrl/Cmd + K    - Open search
Ctrl/Cmd + /    - Help menu
Ctrl/Cmd + S    - Save
/products       - Go to products
/orders         - Go to orders
/customers      - Go to customers
```

## Support

For admin panel help:
- Check documentation
- View video tutorials (coming soon)
- Contact support team
- Report bugs on GitHub

---

**Admin Panel v1.0** 🎉
