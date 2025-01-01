import React from 'react';
import { TrainerType } from './types';

interface TrainerCardProps {
  trainer: TrainerType;
}

export function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={trainer.image}
        alt={trainer.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
        <p className="text-red-500">{trainer.specialization}</p>
      </div>
    </div>
  );
}