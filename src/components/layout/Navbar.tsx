// import { Menu, X } from 'lucide-react';
// import { useState } from 'react';
// import { Logo } from '../common/Logo';

// export function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-black/95 fixed w-full z-50 border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           <Logo />
          
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               {['Home', 'Classes', 'Trainers', 'Membership', 'Contact'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
//                 >
//                   {item}
//                 </a>
//               ))}
//               <button className="bg-red-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors">
//                 Join Now
//               </button>
//             </div>
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-400 hover:text-white p-2"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isMenuOpen && (
//         <div className="md:hidden absolute w-full bg-black/95 border-b border-gray-800">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {['Home', 'Classes', 'Trainers', 'Membership', 'Contact'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//             <button className="bg-orange-500 text-white w-full px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-550 transition-colors">
//               Join Now
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// 2

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '../common/Logo';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/95 fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'Classes', 'Trainers', 'Membership', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="bg-[#ff5500] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#ff5500]/90 transition-colors">
                Join Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-black/95 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'Classes', 'Trainers', 'Membership', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-[#ff5500] text-white w-full px-4 py-2 rounded-md text-sm font-medium hover:bg-[#ff5500]/90 transition-colors">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}