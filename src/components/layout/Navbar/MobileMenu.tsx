import React from 'react';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute w-full bg-black/95 border-b border-gray-800">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {['Home', 'Classes', 'Trainers', 'Membership', 'Contact'].map((item) => (
          <NavLink
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={onClose}
          >
            {item}
          </NavLink>
        ))}
        <button className="bg-red-600 text-white w-full px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors">
          Join Now
        </button>
      </div>
    </div>
  );
}