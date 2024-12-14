import React from 'react';
import { categories } from '../../data/categories';
import { CategoryButton } from '../ui/CategoryButton';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  totalCount: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
  totalCount
}) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap justify-center gap-4">
        <CategoryButton
          category="All"
          isSelected={selectedCategory === 'All'}
          onClick={() => onCategoryChange('All')}
        />
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isSelected={selectedCategory === category}
            onClick={() => onCategoryChange(category)}
          />
        ))}
      </div>
      <p className="text-center text-gray-600">
        {totalCount} {selectedCategory === 'All' ? 'Products' : `${selectedCategory} Products`}
      </p>
    </div>
  );
};