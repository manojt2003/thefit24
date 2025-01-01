// // import React, { useState, useRef, useEffect } from 'react';
// // import { ChevronLeft, ChevronRight } from 'lucide-react';
// // import { PlanCard } from './PlanCard';
// // import { membershipPlans } from './data';
// // import { AnimatedSection } from '../../common/AnimatedSection';

// // export function Membership() {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const scrollRef = useRef<HTMLDivElement>(null);

// //   const scrollTo = (index: number) => {
// //     if (scrollRef.current) {
// //       const element = scrollRef.current.children[index] as HTMLElement;
// //       element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
// //       setActiveIndex(index);
// //     }
// //   };

// //   const handleScroll = () => {
// //     if (scrollRef.current) {
// //       const scrollLeft = scrollRef.current.scrollLeft;
// //       const elementWidth = scrollRef.current.clientWidth;
// //       const newIndex = Math.round(scrollLeft / elementWidth);
// //       setActiveIndex(newIndex);
// //     }
// //   };

// //   // Handle keyboard navigation
// //   useEffect(() => {
// //     const handleKeyDown = (e: KeyboardEvent) => {
// //       if (e.key === 'ArrowLeft') {
// //         setActiveIndex(prev => Math.max(0, prev - 1));
// //       } else if (e.key === 'ArrowRight') {
// //         setActiveIndex(prev => Math.min(membershipPlans.length * 3 - 1, prev + 1));
// //       }
// //     };

// //     window.addEventListener('keydown', handleKeyDown);
// //     return () => window.removeEventListener('keydown', handleKeyDown);
// //   }, []);

// //   return (
// //     <section className="py-20 bg-black" id="membership">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <AnimatedSection className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-white mb-4">Membership Plans</h2>
// //           <p className="text-gray-400 max-w-2xl mx-auto">
// //             Choose the perfect plan that fits your fitness journey
// //           </p>
// //         </AnimatedSection>

// //         <div className="relative">
// //           <div 
// //             ref={scrollRef}
// //             className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4"
// //             onScroll={handleScroll}
// //           >
// //             {membershipPlans.map((plan) => (
// //               plan.durations.map((duration, index) => (
// //                 <div key={`${plan.name}-${duration.months}`} className="snap-center flex-shrink-0 w-full">
// //                   <PlanCard plan={plan} duration={duration} />
// //                 </div>
// //               ))
// //             ))}
// //           </div>

// //           {/* Navigation Arrows */}
// //           <button 
// //             onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
// //             disabled={activeIndex === 0}
// //             className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full 
// //                        bg-white/10 backdrop-blur-sm transition-all duration-300
// //                        ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
// //           >
// //             <ChevronLeft className="w-6 h-6" />
// //           </button>
// //           <button 
// //             onClick={() => scrollTo(Math.min(membershipPlans.length * 3 - 1, activeIndex + 1))}
// //             disabled={activeIndex === membershipPlans.length * 3 - 1}
// //             className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full 
// //                        bg-white/10 backdrop-blur-sm transition-all duration-300
// //                        ${activeIndex === membershipPlans.length * 3 - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
// //           >
// //             <ChevronRight className="w-6 h-6" />
// //           </button>

// //           {/* Navigation Dots */}
// //           <div className="flex justify-center gap-2 mt-8">
// //             {Array.from({ length: membershipPlans.length * 3 }).map((_, index) => (
// //               <button
// //                 key={index}
// //                 onClick={() => scrollTo(index)}
// //                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
// //                   activeIndex === index ? 'bg-red-600 w-6' : 'bg-gray-600 hover:bg-gray-500'
// //                 }`}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // 2

// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';
// import { AnimatedSection } from '../../common/AnimatedSection';
// import { PlanCard } from './PlanCard';
// import { membershipPlans } from './data';

// export function Membership() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scrollTo = (index: number) => {
//     if (scrollRef.current) {
//       const element = scrollRef.current.children[index] as HTMLElement;
//       element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
//       setActiveIndex(index);
//     }
//   };

//   const handleScroll = () => {
//     if (scrollRef.current) {
//       const scrollLeft = scrollRef.current.scrollLeft;
//       const elementWidth = scrollRef.current.clientWidth;
//       const newIndex = Math.round(scrollLeft / elementWidth);
//       setActiveIndex(newIndex);
//     }
//   };

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'ArrowLeft') {
//         setActiveIndex(prev => Math.max(0, prev - 1));
//       } else if (e.key === 'ArrowRight') {
//         setActiveIndex(prev => Math.min(membershipPlans.length * 3 - 1, prev + 1));
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   return (
//     <section className="py-20 bg-black" id="membership">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatedSection className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">Membership Plans</h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Choose the perfect plan that fits your fitness journey
//           </p>
//         </AnimatedSection>

//         <div className="relative">
//           <div 
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto scrollbar-hide py-4"
//             style={{
//               scrollSnapType: 'none',
//               scrollBehavior: 'smooth'
//             }}
//             onScroll={handleScroll}
//           >
//             {membershipPlans.map((plan) => (
//               plan.durations.map((duration, index) => (
//                 <div 
//                   key={`${plan.name}-${duration.months}`} 
//                   className="flex-shrink-0 w-full"
//                   style={{
//                     scrollSnapAlign: 'center'
//                   }}
//                 >
//                   <PlanCard plan={plan} duration={duration} />
//                 </div>
//               ))
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           <button 
//             onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
//             disabled={activeIndex === 0}
//             className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full 
//                        bg-white/10 backdrop-blur-sm transition-all duration-300
//                        ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button 
//             onClick={() => scrollTo(Math.min(membershipPlans.length * 3 - 1, activeIndex + 1))}
//             disabled={activeIndex === membershipPlans.length * 3 - 1}
//             className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full 
//                        bg-white/10 backdrop-blur-sm transition-all duration-300
//                        ${activeIndex === membershipPlans.length * 3 - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>

//           {/* Navigation Dots */}
//           <div className="flex justify-center gap-2 mt-8">
//             {Array.from({ length: membershipPlans.length * 3 }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => scrollTo(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   activeIndex === index ? 'bg-red-600 w-6' : 'bg-gray-600 hover:bg-gray-500'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { AnimatedSection } from '../../common/AnimatedSection';
import { PlanCard } from './PlanCard';
import { membershipPlans } from './data';

export function Membership() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const element = scrollRef.current.children[index] as HTMLElement;
      element.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      setActiveIndex(index);
    }
  };

  const totalPlans = membershipPlans.reduce((acc, plan) => acc + plan.durations.length, 0);

  return (
    <section className="py-20 bg-black" id="membership">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Membership Plans</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan that fits your fitness journey
          </p>
        </AnimatedSection>

        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth'
            }}
            onScroll={(e) => {
              const container = e.currentTarget;
              const scrollLeft = container.scrollLeft;
              const itemWidth = container.clientWidth;
              const newIndex = Math.round(scrollLeft / itemWidth);
              setActiveIndex(newIndex);
            }}
          >
            {membershipPlans.map((plan) =>
              plan.durations.map((duration) => (
                <div
                  key={`${plan.name}-${duration.months}`}
                  className="flex-shrink-0 min-w-full md:min-w-[calc(33.333%-1rem)]"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <PlanCard plan={plan} duration={duration} />
                </div>
              ))
            )}
          </div>

          <button 
            onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full 
                       bg-white/10 backdrop-blur-sm transition-all duration-300
                       ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button 
            onClick={() => scrollTo(Math.min(totalPlans - 1, activeIndex + 1))}
            disabled={activeIndex === totalPlans - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full 
                       bg-white/10 backdrop-blur-sm transition-all duration-300
                       ${activeIndex === totalPlans - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}