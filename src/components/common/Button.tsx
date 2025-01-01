import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  withArrow?: boolean;
  onClick?: () => void;
}

export function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  withArrow = false,
  onClick 
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "border-2 border-white text-white hover:bg-white hover:text-black"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {withArrow && <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
}