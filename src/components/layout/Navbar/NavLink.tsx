import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
    >
      {children}
    </a>
  );
}