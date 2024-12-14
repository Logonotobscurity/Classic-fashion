import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1543071293-d91175a68672"
          alt="Luxury Chandelier"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Illuminate Your Space with <span className="text-gold-500">Elegance</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-200">
            Discover our stunning collection of premium chandeliers crafted to transform your space into a masterpiece of luxury and sophistication.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center bg-gold-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            View Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};