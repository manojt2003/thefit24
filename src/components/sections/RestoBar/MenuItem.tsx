import { GradientBorder } from '../../common/GradientBorder';
import type { MenuItem as MenuItemType } from './types';

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <GradientBorder>
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden group">
        <div className="relative h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white">{item.name}</h3>
            {/* <span className="text-red-500 font-bold">₹{item.price}</span> */}
          </div>
          <p className="text-gray-400 mb-4">{item.description}</p>
          {item.nutritionalInfo && (
            <div className="flex justify-between text-sm text-gray-500 border-t border-gray-800 pt-4">
              <span>Calories: {item.nutritionalInfo.calories}</span>
              <span>Protein: {item.nutritionalInfo.protein}g</span>
              <span>Carbs: {item.nutritionalInfo.carbs}g</span>
            </div>
          )}
        </div>
      </div>
    </GradientBorder>
  );
}