import React, { useState } from 'react';
import { MenuItem } from './MenuItem';
import { menuItems } from './data';
import { AnimatedSection } from '../../common/AnimatedSection';
import type { MenuItem as MenuItemType } from './types';

type Category = MenuItemType['category'];

export function RestoBar() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-black" id="restobar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Smoothie Resto Bar</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Refuel and recover with our selection of healthy smoothies, protein shakes, and nutritious snacks.
          </p>
        </AnimatedSection>

        <div className="flex justify-center mb-12 space-x-4">
          {['all', 'smoothies', 'protein-shakes', 'healthy-snacks'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as Category | 'all')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 200}>
              <MenuItem item={item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}