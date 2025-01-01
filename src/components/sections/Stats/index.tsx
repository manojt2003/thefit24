import { AnimatedSection } from '../../common/AnimatedSection';
import { StatCard } from './StatCard';
import { statsData } from './data';

export function Stats() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 200}>
              <StatCard {...stat} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}