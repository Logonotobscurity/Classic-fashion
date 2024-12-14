import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Share2, ExternalLink } from 'lucide-react';
import type { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  const whatsappLink = `https://wa.me/1234567890?text=I'm interested in the ${product.name}`;

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto max-w-2xl w-full rounded-xl bg-white shadow-2xl transform transition-all">
                {/* Header */}
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 sm:h-80 object-cover rounded-t-xl"
                  />
                  <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Dialog.Title className="text-2xl font-bold text-gray-900">
                        {product.name}
                      </Dialog.Title>
                      <p className="text-gold-500 font-medium mt-1">{product.category}</p>
                    </div>
                    <button 
                      className="text-gray-500 hover:text-gray-700 p-2"
                      onClick={() => navigator.share?.({
                        title: product.name,
                        text: product.description,
                        url: window.location.href
                      })}
                    >
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Description</h4>
                      <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Features</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Inquire on WhatsApp
                      </a>
                      <button
                        onClick={onClose}
                        className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};