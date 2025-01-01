import React from 'react';
import { Clock, Calendar, Check } from 'lucide-react';
import { GradientBorder } from '../../common/GradientBorder';
import { OfferType } from './types';

interface OfferCardProps {
  offer: OfferType;
}

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <GradientBorder>
      <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg relative overflow-hidden group">
        {offer.featured && (
          <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-lg">
            Featured
          </div>
        )}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
            <p className="text-gray-400">{offer.description}</p>
          </div>
          <div className="text-3xl font-bold text-red-500">
            ₹{offer.price}
            <span className="text-sm text-gray-400 ml-1">/mo</span>
          </div>
        </div>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center text-gray-300">
            <Clock className="h-5 w-5 text-red-500 mr-3" />
            <span>{offer.duration}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Calendar className="h-5 w-5 text-red-500 mr-3" />
            <span>{offer.validity}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {offer.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <Check className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className="w-full bg-red-600 text-white px-6 py-3 rounded-md font-medium 
                         hover:bg-red-700 transition-colors">
          Claim Offer
        </button>
      </div>
    </GradientBorder>
  );
}