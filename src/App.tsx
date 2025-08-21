import { useState, useMemo } from 'react';
import { FadeInOnScroll } from './components/FadeInOnScroll';
import { Header } from './components/Header';
import { LocationBanner } from './components/LocationBanner';
import { Hero } from './components/Hero';
import { PlantCard } from './components/PlantCard';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { useCart } from './hooks/useCart';
import { plants } from './data/plants';
import { PlantCategory } from './types';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PlantCategory | ''>('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartItemsCount
  } = useCart();

  const filteredPlants = useMemo(() => {
    return plants.filter(plant => {
      const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          plant.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || plant.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);


  const handleAddToCart = (plant: any) => {
    addToCart(plant);
    // Optional: Show a toast notification here
  };

  return (
  <FadeInOnScroll>
  <div className="min-h-screen bg-gray-50">
      <Header
        onSearchChange={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        selectedCategory={selectedCategory}
        cartItemsCount={getCartItemsCount()}
        onCartToggle={() => setIsCartOpen(true)}
      />
      <LocationBanner />
      <Hero />
      {/* Plants Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedCategory ? 
                  `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Plants` : 
                  'Featured Plants'
                }
              </h2>
              <p className="text-gray-600">
                {filteredPlants.length} plant{filteredPlants.length !== 1 ? 's' : ''} available
              </p>
            </div>
          </FadeInOnScroll>
          {/* Search Bar for All Plants section */}
          <FadeInOnScroll>
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="relative max-w-md w-full md:w-72">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input
                  type="text"
                  placeholder="Search plants..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {['', 'indoor', 'outdoor', 'succulents', 'flowering', 'herbs'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category as PlantCategory | '')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-green-100 text-green-800 border border-green-200'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-green-700'
                    }`}
                  >
                    {category === '' ? 'All Plants' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </FadeInOnScroll>
          {filteredPlants.length === 0 ? (
            <FadeInOnScroll>
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No plants found</h3>
                <p className="text-gray-600">Try adjusting your search or category filter</p>
              </div>
            </FadeInOnScroll>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {filteredPlants.map((plant, index) => (
                <FadeInOnScroll key={plant.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <PlantCard
                    plant={plant}
                    onAddToCart={handleAddToCart}
                  />
                </FadeInOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
    </FadeInOnScroll>
  );
}

export default App;