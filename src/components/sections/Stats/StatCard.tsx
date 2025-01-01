// import { Award, Star, Trophy, Users } from 'lucide-react';

// interface StatCardProps {
//   icon: 'trophy' | 'users' | 'star' | 'award';
//   value: string;
//   label: string;
// }

// export function StatCard({ icon, value, label }: StatCardProps) {
//   const icons = {
//     trophy: Trophy,
//     users: Users,
//     star: Star,
//     award: Award
//   };
  
//   const Icon = icons[icon];


//   return (
//     <div className="rounded-lg p-8 text-center transition-all duration-100">
//       <div className="flex justify-center mb-4">
//         <Icon className="w-12 h-12" style={{ color: '#ff5500' }} />
//       </div>
//       <div className="text-4xl font-bold text-white mb-2">{value}</div>
//       <div className="text-white/90">{label}</div>
//     </div>
//   );
// }

// 2

import { Award, Star, Trophy, Users } from 'lucide-react';

interface StatCardProps {
  icon: 'trophy' | 'users' | 'star' | 'award';
  value: string;
  label: string;
}

export function StatCard({ icon, value, label }: StatCardProps) {
  const icons = {
    trophy: Trophy,
    users: Users,
    star: Star,
    award: Award
  };
  
  const Icon = icons[icon];

  return (
    <div className="rounded-lg p-8 text-center transition-all duration-100 relative">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <div className="w-16 h-16 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 shadow-lg border border-white/10">
          <Icon className="w-8 h-8" style={{ color: '#ff5500' }} />
        </div>
      </div>
      <div className="mt-4">
        <div className="text-4xl font-bold text-white mb-2">{value}</div>
        <div className="text-white/90">{label}</div>
      </div>
    </div>
  );
}