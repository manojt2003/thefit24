// import { AnimatedSection } from '../../common/AnimatedSection';
// import { FeatureCard } from './FeatureCard';
// import { featuresData } from './data';

// export function Features() {
//   return (
//     <section className="py-20 bg-black" id="features">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatedSection className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">Modern Amenities</h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             State-of-the-art facilities for your comfort
//           </p>
//         </AnimatedSection>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {featuresData.map((feature, index) => (
//             <AnimatedSection key={feature.title} delay={index * 200}>
//               <FeatureCard
//                 title={feature.title}
//                 description={feature.description}
//                 icon={feature.icon}
//               />
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// 2
import { AnimatedSection } from '../../common/AnimatedSection';
import { FeatureCard } from './FeatureCard';
import { featuresData } from './data';

export function Features() {
  const iconColor = "#ff5500";  // Define the icon color

  return (
    <section className="py-20 bg-black" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Modern Amenities</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            State-of-the-art facilities for your comfort
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 200}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                iconColor={iconColor}  // Pass the icon color as a prop
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}