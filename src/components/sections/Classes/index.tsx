import React from 'react';
import { ClassPanel } from './ClassPanel';
import { classesData } from './data';
import { AnimatedSection } from '../../common/AnimatedSection';

export function Classes() {
  return (
    <section className="py-20 bg-black" id="classes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 float-text">Our Classes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto float-text">
            Join our diverse range of classes led by certified personal trainers to achieve your fitness goals.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classesData.map((classItem, index) => (
            <AnimatedSection key={classItem.title} delay={index * 200}>
              <ClassPanel 
                classItem={classItem} 
                index={index}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}