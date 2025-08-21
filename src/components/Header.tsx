import React, { useState } from 'react';
import { ShoppingBag, MapPin, Menu, X, Leaf } from 'lucide-react';
import { PlantCategory } from '../types';

interface HeaderProps {
  onSearchChange: (search: string) => void;
  onCategoryChange: (category: PlantCategory | '') => void;
  selectedCategory: PlantCategory | '';
  cartItemsCount: number;
  onCartToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemsCount,
  onCartToggle
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(false), 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 animate-fadeInLeft">
            <Leaf className={`h-8 w-8 text-green-600${isAnimated ? ' animate-bounce-gentle' : ''}`} />
            <h1 className="text-2xl font-bold text-gray-900">Plant Paradise</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 animate-fadeInRight">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Free delivery downtown</span>
            </div>
            <button
              onClick={onCartToggle}
              className="relative p-2 text-gray-600"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className={`absolute -top-1 -right-1 h-5 w-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center${isAnimated ? ' animate-bounce-gentle' : ''}`}>
                  {cartItemsCount}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

  {/* Categories removed from navbar */}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fadeIn">
          <div className="px-4 py-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600 animate-fadeInLeft">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Free delivery downtown</span>
              </div>
              <button
                onClick={onCartToggle}
                className="relative p-2 text-gray-600 animate-fadeInRight"
              >
                <ShoppingBag className="h-6 w-6" />
                {cartItemsCount > 0 && (
                  <span className={`absolute -top-1 -right-1 h-5 w-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center${isAnimated ? ' animate-bounce-gentle' : ''}`}>
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};