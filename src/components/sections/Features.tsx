// import { Calendar, Clock, Dumbbell, Users } from 'lucide-react';

// const features = [
//   {
//     icon: Users,
//     title: 'Expert Trainers',
//     description: 'Our certified trainers are here to guide and motivate you every step of the way.'
//   },
//   {
//     icon: Calendar,
//     title: 'Schedule Classes',
//     description: 'Choose from a wide variety of classes that fit your schedule and fitness goals.'
//   },
//   {
//     icon: Clock,
//     title: '16Hrs Access',
//     description: 'Train whenever you want with our round-the-clock facility access.'
//   },
//   {
//     icon: Dumbbell,
//     title: 'Modern Equipment',
//     description: 'State-of-the-art equipment to help you achieve your fitness goals.'
//   }
// ];

// export function Features() {
//   return (
//     <section className="py-20 bg-black" id="features">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             We provide everything you need to achieve your fitness goals in one place.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature) => (
//             <div
//               key={feature.title}
//               className="#ff5500 p-6 rounded-lg #ff5500 transition-colors border border-gray-800"
//             >
//               <feature.icon className="h-12 w-12 text-red-600 mb-4" />
//               <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
//               <p className="text-gray-400">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// 2
import { Calendar, Clock, Dumbbell, Users } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Our certified trainers are here to guide and motivate you every step of the way.'
  },
  {
    icon: Calendar,
    title: 'Schedule Classes',
    description: 'Choose from a wide variety of classes that fit your schedule and fitness goals.'
  },
  {
    icon: Clock,
    title: '16Hrs Access',
    description: 'Train whenever you want with our round-the-clock facility access.'
  },
  {
    icon: Dumbbell,
    title: 'Modern Equipment',
    description: 'State-of-the-art equipment to help you achieve your fitness goals.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-black" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide everything you need to achieve your fitness goals in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-black/50 p-6 rounded-lg hover:bg-black/70 transition-colors border border-gray-800"
            >
              <feature.icon className="h-12 w-12 text-[#ff5500] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}