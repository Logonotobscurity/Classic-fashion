import React from 'react';
import { ProductCard } from './ProductCard';
import { CategoryFilter } from '../filters/CategoryFilter';
import { LoadMoreButton } from '../ui/LoadMoreButton';
import { useProductFiltering } from '../../hooks/useProductFiltering';
import type { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  onOpenDetails: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onOpenDetails }) => {
  const {
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    hasMore,
    loadMore,
    totalCount
  } = useProductFiltering(products);

  return (
    <div className="space-y-8">
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        totalCount={totalCount}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpenDetails={onOpenDetails}
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8">
          <LoadMoreButton onClick={loadMore} />
          <p className="text-center text-gray-500 mt-2">
            Showing {filteredProducts.length} of {totalCount} products
          </p>
        </div>
      )}
    </div>
  );
};