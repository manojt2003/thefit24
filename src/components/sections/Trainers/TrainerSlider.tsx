import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TrainerCard } from './TrainerCard';
import { TrainerType } from './types';

interface TrainerSliderProps {
  trainers: TrainerType[];
}

export function TrainerSlider({ trainers }: TrainerSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    if (sliderRef.current) {
      const scrollWidth = sliderRef.current.scrollWidth;
      const itemWidth = scrollWidth / trainers.length;
      sliderRef.current.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const itemWidth = sliderRef.current.scrollWidth / trainers.length;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative px-4">
      <div 
        ref={sliderRef}
        className="overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        <div className="flex gap-6">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.name}
              className="snap-center flex-shrink-0 w-full md:w-[350px]"
            >
              <TrainerCard trainer={trainer} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full 
                 hover:bg-black/70 transition-colors z-10"
        disabled={activeIndex === 0}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => scrollTo(Math.min(trainers.length - 1, activeIndex + 1))}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full 
                 hover:bg-black/70 transition-colors z-10"
        disabled={activeIndex === trainers.length - 1}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {trainers.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'w-6 bg-red-600' : 'bg-gray-600'
            }`}
            aria-label={`Go to trainer ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}