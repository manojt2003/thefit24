import React from 'react';
import { Button } from '../../common/Button';

export function HeroContent() {
  return (
    <div className="text-center px-4 pt-20">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 float-text">
        TRANSFORM YOUR BODY
        <br />
        <span className="text-red-600">TRANSFORM YOUR LIFE</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto float-text opacity-90">
        Join the ultimate fitness experience. World-class equipment, expert trainers, and a supportive community.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="primary" withArrow className="group">
          Start Your Journey
        </Button>
        <Button variant="secondary" className="group">
          View Classes
        </Button>
      </div>
    </div>
  );
}