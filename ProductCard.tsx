import React from 'react';
import { ExternalLink, Plus } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const whatsappLink = `https://wa.me/+2348012345678?text=Hello, I'm interested in the ${encodeURIComponent(product.name)} from Living Gold Concept. Can you provide more information?`;

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => onOpenDetails(product)}
              className="bg-white/90 text-black px-6 py-2 rounded-full flex items-center space-x-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            >
              <Plus className="h-4 w-4" />
              <span>View Details</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gold-500 mb-4">{product.category}</p>
        
        <div className="flex justify-between items-center">
          <button
            onClick={() => onOpenDetails(product)}
            className="text-sm text-gray-600 hover:text-black transition-colors flex items-center gap-1"
          >
            <span>Details</span>
            <Plus className="h-4 w-4" />
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
            title="Inquire on WhatsApp"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};