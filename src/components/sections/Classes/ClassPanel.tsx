import { GradientBorder } from '../../common/GradientBorder';
import { ClassType } from './types';

interface ClassPanelProps {
  classItem: ClassType;
  index: number;
}

export function ClassPanel({ classItem, index }: ClassPanelProps) {
  const getPanelClasses = (index: number) => {
    const baseClasses = "relative overflow-hidden rounded-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1";
    const heightClasses = index === 0 ? "h-[600px]" : "h-[300px]";
    const widthClasses = index === 0 ? "md:col-span-2" : "md:col-span-1";
    return `${baseClasses} ${heightClasses} ${widthClasses}`;
  };

  return (
    <GradientBorder>
      <div className={getPanelClasses(index)}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={classItem.image}
            alt={classItem.title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                      flex flex-col justify-end p-6 hover:from-black/95 transition-all duration-300">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 transform transition-all duration-300 
                       group-hover:text-red-500">{classItem.title}</h3>
          <div className="space-y-1 text-gray-300">
            <p className="font-medium">Trainer: {classItem.trainer}</p>
            <p className="opacity-90">{classItem.time}</p>
          </div>
        </div>
      </div>
    </GradientBorder>
  );
}