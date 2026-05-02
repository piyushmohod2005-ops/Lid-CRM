import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaHeart, FaStar } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to PiTaMi 🧶</h1>
          <p className="text-xl mb-8 opacity-90">Handmade Crochet Products Crafted with Love</p>
          <Link
            to="/products"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaShoppingBag className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Products</h3>
              <p className="text-gray-600">Each piece is handmade with premium materials and attention to detail.</p>
            </div>
            <div className="text-center">
              <FaHeart className="text-4xl text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Made with Love</h3>
              <p className="text-gray-600">Our crochet items are crafted with passion and care for every customer.</p>
            </div>
            <div className="text-center">
              <FaStar className="text-4xl text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer Reviews</h3>
              <p className="text-gray-600">Trusted by thousands of happy customers with 5-star ratings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Crochet Item?</h2>
          <p className="text-lg mb-8 opacity-90">Browse our collection of amigurumi, blankets, hats, and more!</p>
          <Link
            to="/products"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Explore Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
