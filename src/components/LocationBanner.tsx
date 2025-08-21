import React, { useState } from 'react';
import { MapPin, Truck, Clock, ChevronDown } from 'lucide-react';
import { deliveryZones } from '../data/deliveryZones';

export const LocationBanner: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState(deliveryZones[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setIsAnimated] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 border-b animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4 animate-fadeInUp">
          <div className="flex items-center gap-6 animate-fadeInLeft">
            <div className="flex items-center gap-2 animate-scaleIn">
              <MapPin className={`h-5 w-5 text-green-600${isAnimated ? ' animate-bounce-gentle' : ''}`} />
              <span className="font-medium text-gray-900">Delivery to:</span>
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2 px-3 py-1 bg-white rounded-lg border hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="font-medium">{selectedZone.name}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border rounded-lg shadow-lg z-10 animate-fadeIn animate-scaleIn">
                    {deliveryZones.map((zone) => (
                      <button
                        key={zone.id}
                        onClick={() => {
                          setSelectedZone(zone);
                          setIsOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b last:border-b-0 transition-all duration-200 hover:translate-x-1"
                      >
                        <div className="font-medium">{zone.name}</div>
                        <div className="text-sm text-gray-600">
                          ${zone.deliveryFee === 0 ? 'FREE' : zone.deliveryFee} delivery • {zone.estimatedDays} day{zone.estimatedDays > 1 ? 's' : ''}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600 animate-fadeInUp animate-delay-200">
              <div className="flex items-center gap-1 hover:text-green-600 transition-colors duration-200">
                <Truck className={`h-4 w-4${isAnimated ? ' animate-bounce-gentle animate-delay-100' : ''}`} />
                <span>{selectedZone.deliveryFee === 0 ? 'FREE' : `$${selectedZone.deliveryFee}`} delivery</span>
              </div>
              <div className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
                <Clock className={`h-4 w-4${isAnimated ? ' animate-pulse-gentle' : ''}`} />
                <span>{selectedZone.estimatedDays} day{selectedZone.estimatedDays > 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>

          <div className="text-sm text-green-700 font-medium animate-fadeInRight bg-gradient-to-r from-green-100 to-green-50 rounded animate-shimmer">
            <span className="animate-pulse-gentle">🌱 Free delivery on orders over $50!</span>
          </div>
        </div>
      </div>
    </div>
  );
};