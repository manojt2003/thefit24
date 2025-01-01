// import React from 'react';
// import { Check } from 'lucide-react';
// import { PlanType, PlanDuration } from './types';

// interface PlanCardProps {
//   plan: PlanType;
//   duration: PlanDuration;
// }

// export function PlanCard({ plan, duration }: PlanCardProps) {
//   return (
//     <div className={`w-full max-w-sm mx-auto rounded-2xl p-8 ${plan.backgroundColor} 
//                     backdrop-blur-sm shadow-xl flex flex-col`}>
//       <h3 className="text-3xl font-bold mb-6">{plan.name}</h3>
      
//       <div className="flex items-baseline gap-2 mb-4">
//         <span className="text-6xl font-bold">{duration.months}</span>
//         <span className="text-2xl">Months</span>
//       </div>

//       <div className="space-y-1 mb-6">
//         <div className="text-2xl">₹{duration.price}</div>
//         <div>({duration.monthlyPrice}/Month)</div>
//         <div className="text-sm">
//           + Gst {duration.gst.amount} = Total ₹{duration.gst.total}
//         </div>
//       </div>

//       <div className="h-px bg-white/20 my-6" />

//       <div className="flex-grow">
//         <div className="font-semibold mb-4">{plan.accessType}</div>
//         <ul className="space-y-3">
//           {plan.features.map((feature, index) => (
//             <li key={index} className="flex items-start gap-3">
//               <Check className="w-5 h-5 mt-1 flex-shrink-0" />
//               <span>{feature}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <button className="w-full py-4 mt-8 rounded-lg bg-white/10 hover:bg-white/20 
//                        backdrop-blur-sm transition-all duration-300
//                        border border-white/30 font-semibold
//                        hover:scale-105 active:scale-95">
//         Buy Plan
//       </button>
//     </div>
//   );
// }

// 2

interface Duration {
  months: number;
  price: number;
  monthlyPrice: number;
  gst: number;
  total: number;
  access: string;
}

interface Plan {
  name: string;
  durations: Duration[];
}

interface PlanCardProps {
  plan: Plan;
  duration: Duration;
}

export function PlanCard({ plan, duration }: PlanCardProps) {
  const getBgColor = (planName: string) => {
    switch (planName) {
      case "Classic":
        return "bg-amber-100";
      case "Premium":
        return "bg-gray-400";
      case "Standard":
        return "bg-gray-500";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className={`${getBgColor(plan.name)} rounded-lg p-8 w-full max-w-sm text-black`}>
      <h3 className="text-2xl font-bold mb-6">{plan.name}</h3>
      
      <div className="mb-6 flex items-baseline gap-2">
        <div className="text-6xl font-bold">
          {String(duration.months).padStart(2, '0')}
        </div>
        <div className="text-xl">Months</div>
      </div>

      <div className="mb-8">
        <div className="text-2xl font-bold">₹{duration.price}</div>
        <div className="text-gray-700">({duration.monthlyPrice}/Month)</div>
        <div className="text-sm text-gray-700">
          + Gst {duration.gst} = Total ₹{duration.total}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        <li>{duration.access}</li>
        <li>No Cost General Training</li>
        <li>One Demo Free Session For Personal Training</li>
        <li>80% Off On Steam And BMI</li>
        <li>+ Attractive Complimentary Gift</li>
      </ul>

      {/* <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors font-semibold backdrop-blur-sm">
        Buy Plan
      </button> */}
    </div>
  );
}