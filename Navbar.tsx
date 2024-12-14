import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-black text-gold-500 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Living Gold Concept" className="h-16 w-16 object-contain" />
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/products" className="hover:text-yellow-400 transition">Products</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          <a href="tel:+234" className="hover:text-yellow-400">
            <Phone className="h-6 w-6" />
          </a>
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};