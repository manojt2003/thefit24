import React from 'react';
import { OfferCard } from './OfferCard';
import { offersData } from './data';
import { AnimatedSection } from '../../common/AnimatedSection';

export function Offers() {
  return (
    <section className="py-20 bg-black" id="offers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Special Offers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take advantage of our limited-time offers and start your fitness journey today.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offersData.map((offer, index) => (
            <AnimatedSection key={offer.title} delay={index * 200}>
              <OfferCard offer={offer} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}