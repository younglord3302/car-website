import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Star, Search, Filter, Navigation, ExternalLink } from 'lucide-react';

interface Dealer {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  website: string;
  latitude: number;
  longitude: number;
  services: string[];
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  rating: number;
  reviewCount: number;
  distance?: number;
  image: string;
  certified: boolean;
  emergencyService: boolean;
}

const Dealers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState('all');
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [dealers, setDealers] = useState<Dealer[]>([]);
  const [filteredDealers, setFilteredDealers] = useState<Dealer[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock dealer data - in a real app, this would come from an API
  const mockDealers: Dealer[] = [
    {
      id: 'dealer-1',
      name: 'BMW of Manhattan',
      address: '555 5th Avenue',
      city: 'New York',
      state: 'NY',
      zipCode: '10017',
      phone: '(212) 555-0123',
      email: 'info@bmwofmanhattan.com',
      website: 'https://www.bmwofmanhattan.com',
      latitude: 40.7589,
      longitude: -73.9851,
      services: ['Sales', 'Service', 'Parts', 'Collision Repair'],
      hours: {
        monday: '9:00 AM - 8:00 PM',
        tuesday: '9:00 AM - 8:00 PM',
        wednesday: '9:00 AM - 8:00 PM',
        thursday: '9:00 AM - 8:00 PM',
        friday: '9:00 AM - 8:00 PM',
        saturday: '9:00 AM - 6:00 PM',
        sunday: '11:00 AM - 5:00 PM'
      },
      rating: 4.8,
      reviewCount: 234,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      certified: true,
      emergencyService: true
    },
    {
      id: 'dealer-2',
      name: 'BMW North Scottsdale',
      address: '12345 North Scottsdale Road',
      city: 'Scottsdale',
      state: 'AZ',
      zipCode: '85254',
      phone: '(480) 555-0456',
      email: 'sales@bmwnorthscottsdale.com',
      website: 'https://www.bmwnorthscottsdale.com',
      latitude: 33.6149,
      longitude: -111.9261,
      services: ['Sales', 'Service', 'Parts', 'Detailing'],
      hours: {
        monday: '9:00 AM - 8:00 PM',
        tuesday: '9:00 AM - 8:00 PM',
        wednesday: '9:00 AM - 8:00 PM',
        thursday: '9:00 AM - 8:00 PM',
        friday: '9:00 AM - 8:00 PM',
        saturday: '9:00 AM - 6:00 PM',
        sunday: 'Closed'
      },
      rating: 4.6,
      reviewCount: 189,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      certified: true,
      emergencyService: false
    },
    {
      id: 'dealer-3',
      name: 'BMW of Beverly Hills',
      address: '9876 Wilshire Boulevard',
      city: 'Beverly Hills',
      state: 'CA',
      zipCode: '90210',
      phone: '(310) 555-0789',
      email: 'contact@bmwofbeverlyhills.com',
      website: 'https://www.bmwofbeverlyhills.com',
      latitude: 34.0696,
      longitude: -118.4004,
      services: ['Sales', 'Service', 'Parts', 'Customization'],
      hours: {
        monday: '9:00 AM - 7:00 PM',
        tuesday: '9:00 AM - 7:00 PM',
        wednesday: '9:00 AM - 7:00 PM',
        thursday: '9:00 AM - 7:00 PM',
        friday: '9:00 AM - 7:00 PM',
        saturday: '9:00 AM - 6:00 PM',
        sunday: '11:00 AM - 5:00 PM'
      },
      rating: 4.9,
      reviewCount: 312,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      certified: true,
      emergencyService: true
    },
    {
      id: 'dealer-4',
      name: 'BMW of Miami',
      address: '4321 Biscayne Boulevard',
      city: 'Miami',
      state: 'FL',
      zipCode: '33137',
      phone: '(305) 555-0321',
      email: 'info@bmwofmiami.com',
      website: 'https://www.bmwofmiami.com',
      latitude: 25.7617,
      longitude: -80.1918,
      services: ['Sales', 'Service', 'Parts', 'Rental'],
      hours: {
        monday: '9:00 AM - 8:00 PM',
        tuesday: '9:00 AM - 8:00 PM',
        wednesday: '9:00 AM - 8:00 PM',
        thursday: '9:00 AM - 8:00 PM',
        friday: '9:00 AM - 8:00 PM',
        saturday: '9:00 AM - 6:00 PM',
        sunday: '11:00 AM - 5:00 PM'
      },
      rating: 4.7,
      reviewCount: 198,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      certified: true,
      emergencyService: true
    },
    {
      id: 'dealer-5',
      name: 'BMW of Chicago',
      address: '2468 Michigan Avenue',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      phone: '(312) 555-0567',
      email: 'sales@bmwofchicago.com',
      website: 'https://www.bmwofchicago.com',
      latitude: 41.8781,
      longitude: -87.6298,
      services: ['Sales', 'Service', 'Parts', 'Body Shop'],
      hours: {
        monday: '9:00 AM - 8:00 PM',
        tuesday: '9:00 AM - 8:00 PM',
        wednesday: '9:00 AM - 8:00 PM',
        thursday: '9:00 AM - 8:00 PM',
        friday: '9:00 AM - 8:00 PM',
        saturday: '9:00 AM - 6:00 PM',
        sunday: 'Closed'
      },
      rating: 4.5,
      reviewCount: 267,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      certified: true,
      emergencyService: false
    },
    {
      id: 'dealer-6',
      name: 'BMW of Seattle',
      address: '1357 Pine Street',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      phone: '(206) 555-0890',
      email: 'info@bmwofseattle.com',
      website: 'https://www.bmwofseattle.com',
      latitude: 47.6062,
      longitude: -122.3321,
      services: ['Sales', 'Service', 'Parts', 'BMW i Service'],
      hours: {
        monday: '9:00 AM - 8:00 PM',
        tuesday: '9:00 AM - 8:00 PM',
        wednesday: '9:00 AM - 8:00 PM',
        thursday: '9:00 AM - 8:00 PM',
        friday: '9:00 AM - 8:00 PM',
        saturday: '9:00 AM - 6:00 PM',
        sunday: '11:00 AM - 5:00 PM'
      },
      rating: 4.8,
      reviewCount: 145,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      certified: true,
      emergencyService: true
    }
  ];

  useEffect(() => {
    // Simulate loading dealer data
    setTimeout(() => {
      setDealers(mockDealers);
      setFilteredDealers(mockDealers);
      setLoading(false);
    }, 1000);

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Error getting location:', error);
        }
      );
    }
  }, []);

  useEffect(() => {
    let filtered = dealers.filter(dealer => {
      const matchesSearch = dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           dealer.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           dealer.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           dealer.zipCode.includes(searchQuery);

      const matchesService = selectedService === 'all' || dealer.services.includes(selectedService);

      return matchesSearch && matchesService;
    });

    // Calculate distances if user location is available
    if (userLocation) {
      filtered = filtered.map(dealer => ({
        ...dealer,
        distance: calculateDistance(userLocation.lat, userLocation.lng, dealer.latitude, dealer.longitude)
      })).sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }

    setFilteredDealers(filtered);
  }, [searchQuery, selectedService, dealers, userLocation]);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 3959; // Radius of the Earth in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const services = ['all', 'Sales', 'Service', 'Parts', 'Collision Repair', 'Detailing', 'Customization', 'BMW i Service', 'Rental'];

  const getCurrentDayHours = (dealer: Dealer): string => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = new Date().getDay();
    const dayName = days[today] as keyof typeof dealer.hours;
    return dealer.hours[dayName];
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-bmw-blue to-bmw-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Find a BMW Dealer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
            >
              Locate authorized BMW dealers near you for sales, service, and parts
            </motion.p>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Search Input */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search by city, state, or ZIP"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                    />
                  </div>

                  {/* Service Filter */}
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="px-4 py-3 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                  >
                    {services.map(service => (
                      <option key={service} value={service}>
                        {service === 'all' ? 'All Services' : service}
                      </option>
                    ))}
                  </select>

                  {/* Location Button */}
                  <button
                    onClick={() => {
                      if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                          (position) => {
                            setUserLocation({
                              lat: position.coords.latitude,
                              lng: position.coords.longitude
                            });
                          }
                        );
                      }
                    }}
                    className="flex items-center justify-center gap-2 bg-white text-bmw-blue px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                  >
                    <Navigation className="h-5 w-5" />
                    Use My Location
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dealer Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-bmw-blue"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredDealers.map((dealer, index) => (
              <motion.div
                key={dealer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Dealer Image */}
                <div className="relative h-48">
                  <img
                    src={dealer.image}
                    alt={dealer.name}
                    className="w-full h-full object-cover"
                  />
                  {dealer.certified && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                      BMW Certified
                    </div>
                  )}
                  {dealer.distance && (
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {dealer.distance.toFixed(1)} miles away
                    </div>
                  )}
                </div>

                {/* Dealer Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-bmw-text mb-1">{dealer.name}</h3>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{dealer.rating} ({dealer.reviewCount} reviews)</span>
                      </div>
                    </div>
                    {dealer.emergencyService && (
                      <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                        24/7 Service
                      </div>
                    )}
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-bmw-blue mt-0.5 flex-shrink-0" />
                    <div className="text-gray-600">
                      <p>{dealer.address}</p>
                      <p>{dealer.city}, {dealer.state} {dealer.zipCode}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-2 mb-4">
                    <Phone className="h-5 w-5 text-bmw-blue" />
                    <a href={`tel:${dealer.phone}`} className="text-bmw-blue hover:text-bmw-dark transition-colors">
                      {dealer.phone}
                    </a>
                  </div>

                  {/* Today's Hours */}
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-5 w-5 text-bmw-blue" />
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Today:</span> {getCurrentDayHours(dealer)}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {dealer.services.slice(0, 3).map((service, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-bmw-light text-bmw-blue text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                      {dealer.services.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{dealer.services.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={`tel:${dealer.phone}`}
                      className="flex-1 bg-bmw-blue text-white py-2 px-4 rounded-lg hover:bg-bmw-blue-dark transition-colors font-semibold text-sm flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                    <a
                      href={dealer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filteredDealers.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <MapPin className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No dealers found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search criteria or location.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedService('all');
              }}
              className="btn-secondary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Additional Info */}
        {!loading && filteredDealers.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-bmw-text mb-6 text-center">Why Choose BMW Authorized Dealers?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-bmw-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-bmw-blue" />
                </div>
                <h3 className="text-lg font-semibold text-bmw-text mb-2">Certified Technicians</h3>
                <p className="text-gray-600">Factory-trained technicians with the latest BMW diagnostic equipment and tools.</p>
              </div>
              <div className="text-center">
                <div className="bg-bmw-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-bmw-blue" />
                </div>
                <h3 className="text-lg font-semibold text-bmw-text mb-2">Genuine Parts</h3>
                <p className="text-gray-600">Only genuine BMW parts and accessories to maintain your vehicle's performance and warranty.</p>
              </div>
              <div className="text-center">
                <div className="bg-bmw-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Filter className="h-8 w-8 text-bmw-blue" />
                </div>
                <h3 className="text-lg font-semibold text-bmw-text mb-2">BMW Warranty</h3>
                <p className="text-gray-600">Authorized service maintains your BMW warranty and provides peace of mind.</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dealers;
