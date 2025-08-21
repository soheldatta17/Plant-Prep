import React from 'react';
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const [isAnimated, setIsAnimated] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <footer className="bg-gray-900 text-white animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeInUp">
          {/* Company Info */}
          <div className="space-y-4 animate-fadeInUp animate-delay-100">
            <div className="flex items-center space-x-2 animate-scaleIn">
              <Leaf className={`h-8 w-8 text-green-400${isAnimated ? ' animate-bounce-gentle' : ''}`} />
              <h3 className="text-xl font-bold">Plant Paradise</h3>
            </div>
            <p className="text-gray-300 animate-fadeInUp animate-delay-200">
              Your trusted partner in bringing nature home. We source the healthiest plants 
              and deliver them with care to plant lovers everywhere.
            </p>
            <div className="flex space-x-4 animate-fadeInUp animate-delay-300">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-125" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-125" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-125" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fadeInUp animate-delay-200">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2">Shop All Plants</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2">Indoor Plants</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2">Outdoor Plants</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2">Plant Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2">About Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4 animate-fadeInUp animate-delay-300">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2">Plant Guarantee</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-2">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fadeInUp animate-delay-400">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-gray-300 animate-fadeInUp animate-delay-500">
              <div className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                <MapPin className={`h-5 w-5 text-green-400${isAnimated ? ' animate-pulse-gentle' : ''}`} />
                <span>123 Garden Street, Green City, GC 12345</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                <Phone className={`h-5 w-5 text-green-400${isAnimated ? ' animate-pulse-gentle animate-delay-100' : ''}`} />
                <span>(555) 123-PLANT</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors duration-300">
                <Mail className={`h-5 w-5 text-green-400${isAnimated ? ' animate-pulse-gentle animate-delay-200' : ''}`} />
                <span>hello@plantparadise.com</span>
              </div>
            </div>
            <div className="bg-green-600 text-white p-3 rounded-lg hover-lift animate-fadeInUp animate-delay-600">
              <p className="text-sm font-medium">🕐 Customer Service Hours</p>
              <p className="text-sm">Mon-Fri: 8AM-8PM</p>
              <p className="text-sm">Sat-Sun: 9AM-6PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fadeIn animate-delay-700">
          <p>&copy; 2024 Plant Paradise. All rights reserved. Made with 🌱 for plant lovers.</p>
        </div>
      </div>
    </footer>
  );
};