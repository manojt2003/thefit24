import React from 'react';
import { TrainerSlider } from './TrainerSlider';
import { trainersData } from './data';
import { AnimatedSection } from '../../common/AnimatedSection';

export function Trainers() {
  return (
    <section className="py-20 bg-black" id="trainers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Expert Trainers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet our team of experienced and certified fitness professionals dedicated to helping you achieve your goals.
          </p>
        </AnimatedSection>

        <TrainerSlider trainers={trainersData} />
      </div>
    </section>
  );
}