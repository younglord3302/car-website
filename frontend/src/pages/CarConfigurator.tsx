import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Palette, Settings, DollarSign, ArrowLeft, Check } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';
import LoadingSpinner from '../components/LoadingSpinner';

interface Car {
  id: string;
  name: string;
  modelCode: string;
  category: string;
  price: number;
  originalPrice?: number;
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

const CarConfigurator: React.FC = () => {
  const { carId } = useParams<{ carId: string }>();
  const navigate = useNavigate();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedPackages, setSelectedPackages] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (carId) {
      fetchCarDetails(carId);
    }
  }, [carId]);

  const fetchCarDetails = async (id: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/cars/${id}`);
      if (response.ok) {
        const carData = await response.json();
        setCar(carData.data);
        if (carData.data.colors && carData.data.colors.length > 0) {
          setSelectedColor(carData.data.colors[0].name);
        }
      }
    } catch (error) {
      console.error('Error fetching car details:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePackageToggle = (packageName: string) => {
    const newSelected = new Set(selectedPackages);
    if (newSelected.has(packageName)) {
      newSelected.delete(packageName);
    } else {
      newSelected.add(packageName);
    }
    setSelectedPackages(newSelected);
  };

  const calculateTotalPrice = () => {
    if (!car) return 0;

    let total = car.price;

    // Add color price
    const selectedColorData = car.colors.find(c => c.name === selectedColor);
    if (selectedColorData?.price) {
      total += selectedColorData.price;
    }

    // Add package prices
    car.packages.forEach(pkg => {
      if (selectedPackages.has(pkg.name)) {
        total += pkg.price;
      }
    });

    return total;
  };

  const getSelectedColorHex = () => {
    if (!car) return '#000000';
    const color = car.colors.find(c => c.name === selectedColor);
    return color?.hex || '#000000';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Car Not Found</h2>
          <button
            onClick={() => navigate('/models')}
            className="bg-bmw-blue text-white px-6 py-3 rounded-lg hover:bg-bmw-blue-dark transition-colors"
          >
            Back to Models
          </button>
        </div>
      </div>
    );
  }

  const totalPrice = calculateTotalPrice();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={() => navigate('/models')}
              className="flex items-center text-bmw-blue hover:text-bmw-blue-dark transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Models
            </button>
            <h1 className="text-2xl font-bold text-gray-900">{car.name} Configurator</h1>
            <div className="text-right">
              <div className="text-2xl font-bold text-bmw-blue">${totalPrice.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Total Price</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Car Preview */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <ImageGallery
                images={car.images || []}
                alt={car.name}
                className="h-96"
              />
            </div>

            {/* Car Specs */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Engine</div>
                  <div className="font-medium">{car.specs.engine}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Power</div>
                  <div className="font-medium">{car.specs.power}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">0-60 mph</div>
                  <div className="font-medium">{car.specs.acceleration}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Top Speed</div>
                  <div className="font-medium">{car.specs.topSpeed}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Fuel Economy</div>
                  <div className="font-medium">{car.specs.fuelEconomy}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Transmission</div>
                  <div className="font-medium">{car.specs.transmission}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Configuration Options */}
          <div className="space-y-6">
            {/* Color Selection */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Palette className="h-5 w-5 text-bmw-blue mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Exterior Color</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {car.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-bmw-blue bg-bmw-blue bg-opacity-5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-full mx-auto mb-2 border-2 border-gray-300"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="text-sm font-medium text-gray-900">{color.name}</div>
                    {color.price && (
                      <div className="text-xs text-gray-500">+${color.price}</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Package Selection */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Settings className="h-5 w-5 text-bmw-blue mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Optional Packages</h3>
              </div>
              <div className="space-y-4">
                {car.packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedPackages.has(pkg.name)
                        ? 'border-bmw-blue bg-bmw-blue bg-opacity-5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handlePackageToggle(pkg.name)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h4 className="font-medium text-gray-900">{pkg.name}</h4>
                          {selectedPackages.has(pkg.name) && (
                            <Check className="h-4 w-4 text-bmw-blue ml-2" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{pkg.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {pkg.features.map((feature, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="font-semibold text-bmw-blue">+${pkg.price.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <DollarSign className="h-5 w-5 text-bmw-blue mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Price Summary</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Price</span>
                  <span className="font-medium">${car.price.toLocaleString()}</span>
                </div>
                {car.colors.find(c => c.name === selectedColor)?.price && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Color: {selectedColor}</span>
                    <span className="font-medium">
                      +${car.colors.find(c => c.name === selectedColor)?.price?.toLocaleString()}
                    </span>
                  </div>
                )}
                {Array.from(selectedPackages).map(pkgName => {
                  const pkg = car.packages.find(p => p.name === pkgName);
                  return pkg ? (
                    <div key={pkgName} className="flex justify-between">
                      <span className="text-gray-600">{pkgName}</span>
                      <span className="font-medium">+${pkg.price.toLocaleString()}</span>
                    </div>
                  ) : null;
                })}
                <hr className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-gray-900">Total Price</span>
                  <span className="text-bmw-blue">${totalPrice.toLocaleString()}</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-bmw-blue text-white py-3 px-6 rounded-lg hover:bg-bmw-blue-dark transition-colors font-semibold">
                Configure This BMW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarConfigurator;
