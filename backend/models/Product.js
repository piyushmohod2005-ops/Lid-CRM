const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide product name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide price'],
      min: 0,
    },
    costPrice: {
      type: Number,
      min: 0,
      default: 0,
    },
    category: {
      type: String,
      required: [true, 'Please select category'],
      enum: [
        'amigurumi',
        'blankets',
        'hats',
        'scarves',
        'shawls',
        'bags',
        'home-decor',
        'accessories',
        'custom-orders',
      ],
    },
    images: [{
      url: String,
      altText: String,
    }],
    thumbnail: String,
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    lowStockAlert: {
      type: Number,
      default: 5,
    },
    colors: [String],
    sizes: [String],
    materials: [String],
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    sku: {
      type: String,
      unique: true,
      sparse: true,
    },
    handmade: {
      type: Boolean,
      default: true,
    },
    customizable: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    discount: {
      percentage: { type: Number, min: 0, max: 100, default: 0 },
      startDate: Date,
      endDate: Date,
    },
    tags: [String],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

// Index for search
productSchema.index({ name: 'text', description: 'text', category: 1 });

module.exports = mongoose.model('Product', productSchema);
