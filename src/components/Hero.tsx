import React from 'react';
import { ArrowRight, Leaf, Heart, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isAnimated, setIsAnimated] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Headline & Info */}
        <div className="flex-1 flex flex-col justify-center items-start text-center lg:text-left">
          <div className="flex items-center gap-2 text-green-600 font-medium mb-6">
            <Leaf className="h-5 w-5" />
            <span>Premium Plant Collection</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            <span className="block mb-3">Transform Your Space with</span>
            <span className="text-green-600 block mb-3 drop-shadow-[0_0_16px_rgba(34,197,94,0.5)]">Living Beauty</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg mb-8">
            Discover thousands of healthy, hand-picked plants delivered fresh to your door.<br />
            From beginner-friendly to exotic varieties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center gap-3 bg-green-50 rounded-lg px-4 py-3 shadow">
              <Heart className="h-5 w-5 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900">Healthy Guarantee</div>
                <div className="text-sm text-gray-600">30-day health promise</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-green-50 rounded-lg px-4 py-3 shadow">
              <Sparkles className="h-5 w-5 text-green-600" />
              <div>
                <div className="font-semibold text-gray-900">Expert Care Tips</div>
                <div className="text-sm text-gray-600">Free guidance included</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl shadow hover:bg-green-700 transition-all duration-300 text-lg font-semibold">
              Shop Plants
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl shadow hover:border-green-300 hover:text-green-700 transition-all duration-300 text-lg font-semibold">
              Plant Care Guide
            </button>
          </div>
        </div>

        {/* Right: Image Grid */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          <img
            src="https://images.pexels.com/photos/6208087/pexels-photo-6208087.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Beautiful plants"
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />
          <img
            src="https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Indoor plants"
            className="w-full h-48 object-cover rounded-2xl shadow-lg"
          />
          <img
            src="https://images.pexels.com/photos/6207946/pexels-photo-6207946.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Succulents"
            className="w-full h-48 object-cover rounded-2xl shadow-lg"
          />
          <img
            src="https://images.pexels.com/photos/1645668/pexels-photo-1645668.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Plant collection"
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 text-green-200 opacity-20">
        <Leaf className="h-32 w-32 transform rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 text-green-200 opacity-20">
        <Leaf className="h-24 w-24 transform -rotate-12" />
      </div>
    </section>
  );
};