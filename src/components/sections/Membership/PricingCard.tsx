import { Check } from 'lucide-react';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import { PricingPlan } from './types';

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className={`flex-shrink-0 w-full md:w-[400px] p-8 rounded-2xl ${plan.backgroundColor} 
                    shadow-xl transform transition-all duration-300`}>
      <h3 className="text-3xl font-bold mb-8">{plan.type}</h3>
      
      <div className="mb-8">
        <div className="flex items-baseline gap-2">
          <span className="text-6xl font-bold">{plan.duration.months}</span>
          <span className="text-2xl">Months</span>
        </div>
        <div className="mt-4 space-y-1">
          <div className="text-2xl">₹{plan.duration.totalPrice}</div>
          <div className="text-lg">({plan.duration.monthlyPrice}/Month)</div>
          <div className="text-lg">
            + Gst {plan.gst.amount} = Total ₹{plan.gst.total}
          </div>
        </div>
      </div>

      <div className="h-px bg-white/20 my-6" />

      <ul className="space-y-4 mb-8">
        <li className="text-lg font-semibold">{plan.accessType}</li>
        {plan.features.map((feature: { text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 mt-1 flex-shrink-0" />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>

      <button className="w-full py-4 rounded-lg bg-white/10 hover:bg-white/20 
                       backdrop-blur-sm transition-all duration-300 font-semibold
                       border border-white/30">
        Buy Plan
      </button>
    </div>
  );
}