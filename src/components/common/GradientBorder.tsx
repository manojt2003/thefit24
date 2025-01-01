import React, { ReactNode } from 'react';

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
}

export function GradientBorder({ children, className = '' }: GradientBorderProps) {
  return (
    <div className={`group relative ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-25 
                    group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}