import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/logo.png" 
              alt="Living Gold Concept" 
              className="h-16 w-16 object-contain mb-4" 
            />
            <p className="text-gray-400">
              Premium chandelier craftsmanship for your elegant spaces.
            </p>
          </div>
          
          <div>
            <h3 className="text-gold-500 font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-gold-500" />
                <p>Building materials, Okpanam, Asaba, Nigeria 320107</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gold-500" />
                <a href="tel:+234" className="hover:text-gold-500">+234</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gold-500" />
                <a href="mailto:info@livinggold.com" className="hover:text-gold-500">
                  info@livinggold.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-gold-500 font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gold-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gold-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Living Gold Concept. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};