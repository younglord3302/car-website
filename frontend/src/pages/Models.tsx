import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Filter, Search, Star, Heart, Settings, SlidersHorizontal } from 'lucide-react';

interface Car {
  id: string;
  name: string;
  modelCode: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
    fuelEconomy: string;
    transmission: string;
    drivetrain: string;
  };
  features: string[];
  images: string[];
  colors: Array<{
    name: string;
    hex: string;
    price?: number;
  }>;
  packages: Array<{
    name: string;
    description: string;
    price: number;
    features: string[];
  }>;
}

const Models: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cars, setCars] = useState<Car[]>([]);
  const [categories, setCategories] = useState<Array<{id: string, name: string}>>([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating' | 'name'>('rating');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCars, setSelectedCars] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchCars();
    fetchCategories();
    loadFavorites();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cars?limit=100');
      if (response.ok) {
        const data = await response.json();
        setCars(data.data);

        // Set price range based on available cars
        const prices = data.data.map((car: Car) => car.price);
        if (prices.length > 0) {
          setPriceRange([Math.min(...prices), Math.max(...prices)]);
        }
      }
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cars/categories');
      if (response.ok) {
        const data = await response.json();
        const categoryOptions = [
          { id: 'all', name: 'All Models' },
          ...data.data.map((cat: any) => ({
            id: cat.name,
            name: cat.name.charAt(0).toUpperCase() + cat.name.slice(1) + 's'
          }))
        ];
        setCategories(categoryOptions);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const loadFavorites = () => {
    const stored = localStorage.getItem('bmw-favorites');
    if (stored) {
      try {
        setFavorites(new Set(JSON.parse(stored)));
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    }
  };

  const toggleFavorite = (carId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(carId)) {
      newFavorites.delete(carId);
    } else {
      newFavorites.add(carId);
    }
    setFavorites(newFavorites);
    localStorage.setItem('bmw-favorites', JSON.stringify([...newFavorites]));
  };

  const toggleCarSelection = (carId: string) => {
    const newSelection = new Set(selectedCars);
    if (newSelection.has(carId)) {
      newSelection.delete(carId);
    } else {
      if (newSelection.size < 4) { // Limit to 4 cars for comparison
        newSelection.add(carId);
      }
    }
    setSelectedCars(newSelection);
  };

  const getCarImage = (car: Car) => {
    if (car.images && car.images.length > 0 && car.images[0].startsWith('http')) {
      return car.images[0];
    }

    // Fallback images based on model
    const fallbackImages: { [key: string]: string } = {
      // BMW Models
      'x5-m50i': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop',
      '3-series-330i': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
      'm3-competition': 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&h=400&fit=crop',
      'x7-m60i': 'https://images.unsplash.com/photo-1549399735-cef2e2c3f638?w=600&h=400&fit=crop',
      'i8-coupe': 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      'x3-m40i': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      '5-series-530i': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      'z4-m40i': 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&h=400&fit=crop',
      'x1-sdrive28i': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      'm4-competition': 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&h=400&fit=crop',
      'ix-xdrive50': 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop',
      '2-series-230i': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
      // Demo Models from other manufacturers
      'demo-audi-a4': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
      'demo-mercedes-c-class': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
      'demo-porsche-911': 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop',
      'demo-tesla-model-3': 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop',
      'demo-lamborghini-huracan': 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop'
    };

    return fallbackImages[car.id] || 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop';
  };

  const sortCars = (cars: Car[]) => {
    return [...cars].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  };

  const filteredCars = sortCars(
    cars.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           car.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || car.category === selectedCategory;
      const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    })
  );

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-bmw-text mb-4">
              Premium Models
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our complete range of luxury vehicles, from BMW performance models to premium brands like Audi, Mercedes-Benz, Porsche, Tesla, and Lamborghini.
            </p>
          </div>

          {/* Search and Controls */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search models..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  showFilters
                    ? 'bg-bmw-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-bmw-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-gray-50 rounded-lg p-6 mb-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                  </label>
                  <div className="px-2">
                    <input
                      type="range"
                      min={Math.min(...cars.map(c => c.price))}
                      max={Math.max(...cars.map(c => c.price))}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                </div>

                {/* Results Count */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    {filteredCars.length} of {cars.length} models
                  </span>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setPriceRange([Math.min(...cars.map(c => c.price)), Math.max(...cars.map(c => c.price))]);
                    }}
                    className="text-bmw-blue hover:text-bmw-dark transition-colors text-sm font-medium"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Comparison Bar */}
          {selectedCars.size > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-bmw-blue text-white rounded-lg p-4 mb-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  {selectedCars.size} car{selectedCars.size > 1 ? 's' : ''} selected for comparison
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedCars(new Set())}
                    className="text-white/80 hover:text-white text-sm underline"
                  >
                    Clear
                  </button>
                  <button className="bg-white text-bmw-blue px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm">
                    Compare Cars
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Car Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-bmw-blue"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`card group hover-lift relative ${
                  selectedCars.has(car.id) ? 'ring-2 ring-bmw-blue' : ''
                }`}
              >
                {/* Selection Checkbox */}
                <div className="absolute top-2 left-2 z-20">
                  <input
                    type="checkbox"
                    checked={selectedCars.has(car.id)}
                    onChange={() => toggleCarSelection(car.id)}
                    className="w-5 h-5 text-bmw-blue bg-white border-2 border-gray-300 rounded focus:ring-bmw-blue focus:ring-2"
                    disabled={!selectedCars.has(car.id) && selectedCars.size >= 4}
                  />
                </div>

                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(car.id);
                  }}
                  className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors z-20"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.has(car.id)
                        ? 'text-red-500 fill-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                <div className="relative">
                  <img
                    src={getCarImage(car)}
                    alt={car.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium capitalize">
                    {car.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-bmw-text">{car.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{car.rating}</span>
                    </div>
                  </div>

                  <p className="text-bmw-blue font-semibold text-lg mb-4">
                    ${car.price.toLocaleString()}
                  </p>

                  {/* Specs */}
                  <div className="mb-4 space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Engine:</span>
                      <span className="font-medium">{car.specs.engine.split(' ')[0]}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Power:</span>
                      <span className="font-medium">{car.specs.power.split(' ')[0]}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">0-60:</span>
                      <span className="font-medium">{car.specs.acceleration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {car.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-bmw-light text-bmw-blue text-xs rounded-full truncate max-w-full"
                          title={feature}
                        >
                          {feature.length > 15 ? `${feature.substring(0, 15)}...` : feature}
                        </span>
                      ))}
                      {car.features.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{car.features.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/configure/${car.id}`)}
                      className="flex-1 bg-bmw-blue text-white py-2 px-4 rounded-lg hover:bg-bmw-blue-dark transition-colors font-semibold text-sm flex items-center justify-center gap-2"
                    >
                      <Settings className="h-4 w-4" />
                      Configure
                    </button>
                    <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filteredCars.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No models found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search criteria or filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange([Math.min(...cars.map(c => c.price)), Math.max(...cars.map(c => c.price))]);
              }}
              className="btn-secondary"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Models;
