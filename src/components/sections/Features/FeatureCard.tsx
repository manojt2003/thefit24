import { Activity, Building, Droplets, Dumbbell, Lock } from 'lucide-react';
import { GradientBorder } from '../../common/GradientBorder';

const iconMap = {
  dumbbell: Dumbbell,
  activity: Activity,
  droplets: Droplets,
  lock: Lock,
  building: Building
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = iconMap[icon];

  return (
    <GradientBorder>
      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg 
                    hover:shadow-lg transition-all duration-300 h-full">
        <div className="relative flex items-center justify-center w-16 h-16 mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-25" />
          <div className="relative flex items-center justify-center w-full h-full rounded-lg bg-black">
            <Icon className="h-8 w-8 bg-[#ff5500]" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </GradientBorder>
  );
}