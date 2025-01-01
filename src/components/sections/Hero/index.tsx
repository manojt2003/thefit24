import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <HeroBackground />
      <div className="relative h-screen flex items-center justify-center">
        <HeroContent />
      </div>
    </div>
  );
}