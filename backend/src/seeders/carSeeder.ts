import mongoose from 'mongoose';
import Car from '../models/Car';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const cars = [
  {
    id: 'x5-m50i',
    name: 'BMW X5 M50i',
    modelCode: 'X5',
    category: 'suv' as const,
    price: 77500,
    originalPrice: 82500,
    rating: 4.8,
    reviewCount: 127,
    description: 'The BMW X5 M50i combines luxury SUV comfort with high-performance driving dynamics. Featuring a twin-turbocharged 4.4L V8 engine delivering 523 hp and 553 lb-ft of torque.',
    specs: {
      engine: '4.4L Twin-Turbo V8',
      power: '523 hp @ 5500-6000 rpm',
      acceleration: '0-60 mph in 3.8 seconds',
      topSpeed: '155 mph (electronically limited)',
      fuelEconomy: '23 mpg city / 27 mpg highway',
      transmission: '8-Speed Automatic',
      drivetrain: 'All-Wheel Drive'
    },
    features: [
      '4.4L Twin-Turbo V8 Engine',
      'M Performance Exhaust',
      'Adaptive M Suspension',
      'M Sport Differential',
      'Premium Leather Interior',
      '20" M Light-Alloy Wheels',
      'BMW Live Cockpit Professional',
      'Apple CarPlay & Android Auto',
      'Wireless Charging',
      'Ambient Lighting'
    ],
    images: [
      '/images/cars/x5-m50i-1.jpg',
      '/images/cars/x5-m50i-2.jpg',
      '/images/cars/x5-m50i-3.jpg'
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#000000' },
      { name: 'Tanzanite Blue Metallic', hex: '#1E3A5F' },
      { name: 'Mineral Grey Metallic', hex: '#4A4A4A', price: 550 }
    ],
    packages: [
      {
        name: 'Executive Package',
        description: 'Premium comfort and connectivity features',
        price: 4200,
        features: ['Multi-Contour Seats', 'Heated & Cooled Cup Holders', 'Rear Seat Entertainment']
      },
      {
        name: 'Driver Assistance Plus',
        description: 'Advanced safety and driver assistance systems',
        price: 1200,
        features: ['Active Cruise Control', 'Lane Change Warning', 'Cross-Traffic Alert']
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: '3-series-330i',
    name: 'BMW 3 Series 330i',
    modelCode: '330i',
    category: 'sedan' as const,
    price: 43700,
    rating: 4.7,
    reviewCount: 203,
    description: 'The BMW 3 Series 330i delivers the perfect balance of performance and luxury. Powered by a 2.0L turbocharged engine producing 255 hp with exceptional fuel efficiency.',
    specs: {
      engine: '2.0L TwinPower Turbo I4',
      power: '255 hp @ 5000-6500 rpm',
      acceleration: '0-60 mph in 5.6 seconds',
      topSpeed: '155 mph (electronically limited)',
      fuelEconomy: '26 mpg city / 36 mpg highway',
      transmission: '8-Speed Automatic',
      drivetrain: 'Rear-Wheel Drive'
    },
    features: [
      '2.0L Turbocharged Engine',
      'Sport Automatic Transmission',
      'BMW Live Cockpit Professional',
      'Apple CarPlay & Android Auto',
      'Wireless Device Charging',
      'LED Headlights',
      '18" Wheels',
      'Cloth/Leatherette Upholstery',
      'Dual-Zone Climate Control',
      'Power Front Seats'
    ],
    images: [
      '/images/cars/330i-1.jpg',
      '/images/cars/330i-2.jpg',
      '/images/cars/330i-3.jpg'
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Jet Black', hex: '#000000' },
      { name: 'Melbourne Red Metallic', hex: '#8B0000', price: 550 }
    ],
    packages: [
      {
        name: 'Convenience Package',
        description: 'Comfort and convenience enhancements',
        price: 1450,
        features: ['Power Tailgate', 'Universal Garage Door Opener', 'Comfort Access Keyless Entry']
      },
      {
        name: 'Premium Package',
        description: 'Luxury interior upgrades',
        price: 2800,
        features: ['Leather Upholstery', 'Heated Front Seats', 'Ambient Lighting']
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: 'm3-competition',
    name: 'BMW M3 Competition',
    modelCode: 'M3',
    category: 'sedan' as const,
    price: 72500,
    rating: 4.9,
    reviewCount: 89,
    description: 'The BMW M3 Competition represents the pinnacle of performance sedans. With a handcrafted 3.0L twin-turbo inline-6 engine producing 503 hp, this is pure driving exhilaration.',
    specs: {
      engine: '3.0L Twin-Turbo I6',
      power: '503 hp @ 6250 rpm',
      acceleration: '0-60 mph in 3.9 seconds',
      topSpeed: '155 mph (electronically limited)',
      fuelEconomy: '16 mpg city / 23 mpg highway',
      transmission: '8-Speed M Sport Automatic',
      drivetrain: 'Rear-Wheel Drive'
    },
    features: [
      '3.0L Twin-Turbo I6 Engine',
      'M Sport Exhaust System',
      'M Sport Suspension',
      'M Sport Differential',
      'Carbon Fiber Interior Trim',
      'M Leather Steering Wheel',
      '19" M Light-Alloy Wheels',
      'M Drive Professional',
      'BMW Live Cockpit Professional',
      'Harman Kardon Surround Sound'
    ],
    images: [
      '/images/cars/m3-competition-1.jpg',
      '/images/cars/m3-competition-2.jpg',
      '/images/cars/m3-competition-3.jpg'
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#000000' },
      { name: 'Toronto Red Metallic', hex: '#8B0000', price: 550 },
      { name: 'Brooklyn Grey Metallic', hex: '#4A4A4A', price: 550 }
    ],
    packages: [
      {
        name: 'Competition Package',
        description: 'Track-ready performance upgrades',
        price: 2500,
        features: ['Competition Suspension', 'Carbon Ceramic Brakes', 'M Carbon Bucket Seats']
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: 'x7-m60i',
    name: 'BMW X7 M60i',
    modelCode: 'X7',
    category: 'suv' as const,
    price: 103000,
    rating: 4.8,
    reviewCount: 67,
    description: 'The BMW X7 M60i is the ultimate luxury SUV experience. Powered by a 4.4L twin-turbo V8 with 523 hp, offering unparalleled space, comfort, and performance.',
    specs: {
      engine: '4.4L Twin-Turbo V8',
      power: '523 hp @ 5500-6000 rpm',
      acceleration: '0-60 mph in 4.1 seconds',
      topSpeed: '155 mph (electronically limited)',
      fuelEconomy: '19 mpg city / 22 mpg highway',
      transmission: '8-Speed Automatic',
      drivetrain: 'All-Wheel Drive'
    },
    features: [
      '4.4L Twin-Turbo V8 Engine',
      'Air Suspension',
      'Executive Lounge Seating',
      'Panoramic Sky Lounge LED Roof',
      '7-Seat Configuration',
      'Nappa Leather Upholstery',
      '22" M Light-Alloy Wheels',
      'BMW Live Cockpit Professional',
      'Bowers & Wilkins Surround Sound',
      '4-Zone Climate Control'
    ],
    images: [
      '/images/cars/x7-m60i-1.jpg',
      '/images/cars/x7-m60i-2.jpg',
      '/images/cars/x7-m60i-3.jpg'
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#000000' },
      { name: 'Carbon Black Metallic', hex: '#2C2C2C', price: 550 }
    ],
    packages: [
      {
        name: 'M60i Luxury Package',
        description: 'Ultimate luxury and comfort features',
        price: 6500,
        features: ['Massage Seats', 'Active Comfort Drive', 'Rear Theater Screens']
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: 'i8-coupe',
    name: 'BMW i8 Coupe',
    modelCode: 'i8',
    category: 'coupe' as const,
    price: 147500,
    rating: 4.6,
    reviewCount: 45,
    description: 'The BMW i8 Coupe represents the future of automotive innovation. This plug-in hybrid supercar combines electric performance with gasoline power for an unmatched driving experience.',
    specs: {
      engine: '1.5L Turbo I3 + Electric Motors',
      power: '369 hp (combined)',
      acceleration: '0-60 mph in 4.2 seconds',
      topSpeed: '155 mph (electronically limited)',
      fuelEconomy: '76 MPGe / 28 mpg combined',
      transmission: '6-Speed Automatic',
      drivetrain: 'All-Wheel Drive'
    },
    features: [
      'TwinPower Turbo 3-Cylinder Engine',
      'Electric Motors (front and rear)',
      'Lithium-ion Battery (11.6 kWh)',
      'BMW eDrive Technology',
      'Laser headlights',
      'Carbon Fiber Reinforced Plastic',
      'Adaptive M Suspension',
      'BMW Live Cockpit Professional',
      'Wireless Charging',
      'Head-Up Display'
    ],
    images: [
      '/images/cars/i8-coupe-1.jpg',
      '/images/cars/i8-coupe-2.jpg',
      '/images/cars/i8-coupe-3.jpg'
    ],
    colors: [
      { name: 'Crystal White Pearl', hex: '#F5F5F0' },
      { name: 'E-Copper Metallic', hex: '#B87333', price: 550 },
      { name: 'Sophisto Grey Metallic', hex: '#8C8C8C', price: 550 }
    ],
    packages: [
      {
        name: 'Innovation Package',
        description: 'Advanced technology and connectivity',
        price: 3200,
        features: ['BMW Digital Key', 'Personal eSIM', 'Over-the-Air Updates']
      }
    ],
    isNew: false,
    isAvailable: true
  },
  {
    id: 'x3-m40i',
    name: 'BMW X3 M40i',
    modelCode: 'X3',
    category: 'suv' as const,
    price: 54800,
    rating: 4.7,
    reviewCount: 89,
    description: 'The BMW X3 M40i delivers the perfect blend of luxury, performance, and versatility. With a turbocharged inline-6 engine and advanced all-wheel drive, it offers exhilarating driving dynamics in a compact SUV package.',
    specs: {
      engine: '3.0L Twin-Turbo I6',
      power: '375 hp @ 5200-6500 rpm',
      acceleration: '0-60 mph in 4.2 seconds',
      topSpeed: '155 mph (electronically limited)',
      fuelEconomy: '25 mpg city / 31 mpg highway',
      transmission: '8-Speed Automatic',
      drivetrain: 'All-Wheel Drive'
    },
    features: [
      '3.0L Twin-Turbo I6 Engine',
      'xDrive All-Wheel Drive',
      'M Sport Suspension',
      '20" M Light-Alloy Wheels',
      'BMW Live Cockpit Professional',
      'Apple CarPlay & Android Auto',
      'Wireless Device Charging',
      'Power Tailgate',
      'Leather Upholstery',
      'Ambient Lighting'
    ],
    images: [
      '/images/cars/x3-m40i-1.jpg',
      '/images/cars/x3-m40i-2.jpg',
      '/images/cars/x3-m40i-3.jpg'
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#000000' },
      { name: 'Phytonic Blue Metallic', hex: '#1E3A8A', price: 550 },
      { name: 'Sparkling Storm Metallic', hex: '#4A4A4A', price: 550 }
    ],
    packages: [
      {
        name: 'Premium Package',
        description: 'Enhanced luxury and comfort features',
        price: 2800,
        features: ['Power Front Seats', 'Heated Front Seats', 'Panoramic Moonroof']
      },
      {
        name: 'Technology Package',
        description: 'Advanced driver assistance systems',
        price: 1800,
        features: ['Adaptive Cruise Control', 'Lane Keep Assist', 'Blind Spot Detection']
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: '5-series-530i',
    name: 'BMW 5 Series 530i',
    modelCode: '530i',
    category: 'sedan' as const,
    price: 54900,
    rating: 4.8,
    reviewCount: 156,
    description: 'The BMW 5 Series 530i represents the pinnacle of executive sedan luxury. With refined performance, cutting-edge technology, and legendary BMW driving dynamics, it sets the standard for business class transportation.',
    specs: {
      engine: '2.0L TwinPower Turbo I4',
      power: '248 hp @ 5200-6500 rpm',
      acceleration: '0-60 mph in 6.2 seconds',
      topSpeed: '155 mph (electronically limited)',
      fuelEconomy: '29 mpg city / 39 mpg highway',
      transmission: '8-Speed Automatic',
      drivetrain: 'Rear-Wheel Drive'
    },
    features: [
      '2.0L TwinPower Turbo Engine',
      'BMW Live Cockpit Professional',
      'Apple CarPlay & Android Auto',
      'Wireless Device Charging',
      'Power Rear Sunshade',
      '18" Wheels',
      'Cloth/Leatherette Upholstery',
      'Dual-Zone Climate Control',
      'Power Front Seats',
      'LED Headlights'
    ],
    images: [
      '/images/cars/530i-1.jpg',
      '/images/cars/530i-2.jpg',
      '/images/cars/530i-3.jpg'
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#000000' },
      { name: 'Donington Grey Metallic', hex: '#4A4A4A', price: 550 },
      { name: 'Mineral White Metallic', hex: '#F5F5F5', price: 550 }
    ],
    packages: [
      {
        name: 'Premium Package',
        description: 'Luxury interior enhancements',
        price: 2900,
        features: ['Vernasca Leather Upholstery', 'Power Rear Seats', 'Rear Executive Lounge Seating']
      },
      {
        name: 'Technology Package',
        description: 'Advanced connectivity and assistance',
        price: 2400,
        features: ['Head-Up Display', 'Adaptive Cruise Control', 'Parking Assistant Plus']
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: 'z4-m40i',
    name: 'BMW Z4 M40i',
    modelCode: 'Z4',
    category: 'convertible' as const,
    price: 61200,
    rating: 4.6,
    reviewCount: 78,
    description: 'The BMW Z4 M40i combines the thrill of open-top driving with high-performance capabilities. This roadster delivers pure driving pleasure with its turbocharged engine and agile handling.',
    specs: {
      engine: '3.0L Twin-Turbo I6',
      power: '375 hp @ 5000-6500 rpm',
      acceleration: '0-60 mph in 4.0 seconds',
      topSpeed: '155 mph (electronically limited)',
      fuelEconomy: '20 mpg city / 29 mpg highway',
      transmission: '8-Speed Automatic',
      drivetrain: 'Rear-Wheel Drive'
    },
    features: [
      '3.0L Twin-Turbo I6 Engine',
      'Soft-Top Convertible Roof',
      'M Sport Suspension',
      '19" M Light-Alloy Wheels',
      'BMW Live Cockpit Professional',
      'Apple CarPlay & Android Auto',
      'Wireless Device Charging',
      'Adaptive M Suspension',
      'Carbon Fiber Interior Trim',
      'LED Headlights'
    ],
    images: [
      '/images/cars/z4-m40i-1.jpg',
      '/images/cars/z4-m40i-2.jpg',
      '/images/cars/z4-m40i-3.jpg'
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#000000' },
      { name: 'Sakhir Orange Metallic', hex: '#FF4500', price: 550 },
      { name: 'Mediterranean Blue Metallic', hex: '#1E40AF', price: 550 }
    ],
    packages: [
      {
        name: 'Premium Package',
        description: 'Enhanced luxury features',
        price: 3200,
        features: ['Heated Seats', 'Harman Kardon Sound System', 'Power Hardtop Roof']
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: 'x1-sdrive28i',
    name: 'BMW X1 sDrive28i',
    modelCode: 'X1',
    category: 'suv' as const,
    price: 35800,
    rating: 4.5,
    reviewCount: 134,
    description: 'The BMW X1 sDrive28i offers premium compact SUV versatility with efficient performance. Perfect for urban driving while maintaining BMW\'s signature driving dynamics and luxury features.',
    specs: {
      engine: '2.0L TwinPower Turbo I4',
      power: '228 hp @ 5000 rpm',
      acceleration: '0-60 mph in 6.5 seconds',
      topSpeed: '140 mph (electronically limited)',
      fuelEconomy: '25 mpg city / 34 mpg highway',
      transmission: '8-Speed Automatic',
      drivetrain: 'Rear-Wheel Drive'
    },
    features: [
      '2.0L TwinPower Turbo Engine',
      'sDrive Rear-Wheel Drive',
      'BMW Live Cockpit Professional',
      'Apple CarPlay & Android Auto',
      'Wireless Device Charging',
      'Power Tailgate',
      '18" Wheels',
      'Cloth Upholstery',
      'Dual-Zone Climate Control',
      'LED Headlights'
    ],
    images: [
      '/images/cars/x1-sdrive28i-1.jpg',
      '/images/cars/x1-sdrive28i-2.jpg',
      '/images/cars/x1-sdrive28i-3.jpg'
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Jet Black', hex: '#000000' },
      { name: 'Storm Bay Metallic', hex: '#4A5D7A', price: 550 },
      { name: 'Mediterranean Blue Metallic', hex: '#1E40AF', price: 550 }
    ],
    packages: [
      {
        name: 'Convenience Package',
        description: 'Comfort and convenience enhancements',
        price: 1450,
        features: ['Panoramic Moonroof', 'Universal Garage Door Opener', 'Comfort Access Keyless Entry']
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: 'm4-competition',
    name: 'BMW M4 Competition',
    modelCode: 'M4',
    category: 'coupe' as const,
    price: 76500,
    rating: 4.9,
    reviewCount: 67,
    description: 'The BMW M4 Competition delivers track-proven performance in a stunning coupe package. With 503 hp from the S58 twin-turbo inline-6 engine, it offers pure driving exhilaration.',
    specs: {
      engine: '3.0L Twin-Turbo I6',
      power: '503 hp @ 6250 rpm',
      acceleration: '0-60 mph in 3.7 seconds',
      topSpeed: '155 mph (electronically limited)',
      fuelEconomy: '15 mpg city / 21 mpg highway',
      transmission: '8-Speed M Sport Automatic',
      drivetrain: 'Rear-Wheel Drive'
    },
    features: [
      '3.0L Twin-Turbo I6 Engine',
      'M Sport Exhaust System',
      'M Sport Suspension',
      'M Sport Differential',
      'Carbon Fiber Interior Trim',
      'M Leather Steering Wheel',
      '19" M Light-Alloy Wheels',
      'M Drive Professional',
      'BMW Live Cockpit Professional',
      'Harman Kardon Surround Sound'
    ],
    images: [
      '/images/cars/m4-competition-1.jpg',
      '/images/cars/m4-competition-2.jpg',
      '/images/cars/m4-competition-3.jpg'
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#000000' },
      { name: 'Toronto Red Metallic', hex: '#8B0000', price: 550 },
      { name: 'Brooklyn Grey Metallic', hex: '#4A4A4A', price: 550 }
    ],
    packages: [
      {
        name: 'Competition Package',
        description: 'Track-ready performance upgrades',
        price: 2500,
        features: ['Competition Suspension', 'Carbon Ceramic Brakes', 'M Carbon Bucket Seats']
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: 'ix-xdrive50',
    name: 'BMW iX xDrive50',
    modelCode: 'iX',
    category: 'suv' as const,
    price: 84500,
    rating: 4.7,
    reviewCount: 92,
    description: 'The BMW iX xDrive50 is a revolutionary all-electric luxury SUV. With dual motors delivering 523 hp and 564 lb-ft of torque, it offers instant acceleration and zero-emission driving.',
    specs: {
      engine: 'Dual Electric Motors',
      power: '523 hp (combined)',
      acceleration: '0-60 mph in 3.6 seconds',
      topSpeed: '140 mph (electronically limited)',
      fuelEconomy: '82 MPGe / 271 mile range',
      transmission: 'Single-Speed',
      drivetrain: 'All-Wheel Drive'
    },
    features: [
      'Dual Electric Motors',
      'Lithium-ion Battery (105.2 kWh)',
      'BMW iDrive 8.0',
      'Apple CarPlay & Android Auto',
      'Wireless Device Charging',
      'Panoramic Sky Lounge LED Roof',
      '21" Aerodynamic Wheels',
      'Vegan Leather Upholstery',
      '4-Zone Climate Control',
      'BMW Digital Key'
    ],
    images: [
      '/images/cars/ix-xdrive50-1.jpg',
      '/images/cars/ix-xdrive50-2.jpg',
      '/images/cars/ix-xdrive50-3.jpg'
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#000000' },
      { name: 'Mineral White Metallic', hex: '#F5F5F5', price: 550 },
      { name: 'Blue Ridge Mountain Metallic', hex: '#2D3748', price: 550 }
    ],
    packages: [
      {
        name: 'Interior Design Package',
        description: 'Premium interior customization',
        price: 4200,
        features: ['Merino Leather Upholstery', 'Ambient Lighting', 'Executive Lounge Seating']
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: '2-series-230i',
    name: 'BMW 2 Series 230i',
    modelCode: '230i',
    category: 'coupe' as const,
    price: 36800,
    rating: 4.4,
    reviewCount: 103,
    description: 'The BMW 2 Series 230i offers sporty coupe performance at an accessible price point. With agile handling, premium features, and BMW\'s signature driving dynamics, it delivers pure joy in a compact package.',
    specs: {
      engine: '2.0L TwinPower Turbo I4',
      power: '255 hp @ 4700-6500 rpm',
      acceleration: '0-60 mph in 5.7 seconds',
      topSpeed: '155 mph (electronically limited)',
      fuelEconomy: '24 mpg city / 33 mpg highway',
      transmission: '8-Speed Automatic',
      drivetrain: 'Rear-Wheel Drive'
    },
    features: [
      '2.0L TwinPower Turbo Engine',
      'Sport Automatic Transmission',
      'BMW Live Cockpit Professional',
      'Apple CarPlay & Android Auto',
      'Wireless Device Charging',
      'LED Headlights',
      '18" Wheels',
      'Cloth/Leatherette Upholstery',
      'Dual-Zone Climate Control',
      'Power Front Seats'
    ],
    images: [
      '/images/cars/230i-1.jpg',
      '/images/cars/230i-2.jpg',
      '/images/cars/230i-3.jpg'
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Jet Black', hex: '#000000' },
      { name: 'Melbourne Red Metallic', hex: '#8B0000', price: 550 },
      { name: 'Mediterranean Blue Metallic', hex: '#1E40AF', price: 550 }
    ],
    packages: [
      {
        name: 'Premium Package',
        description: 'Enhanced luxury features',
        price: 2400,
        features: ['Leather Upholstery', 'Heated Front Seats', 'Harman Kardon Sound System']
      }
    ],
    isNew: true,
    isAvailable: true
  },
  // Demo models from other manufacturers
  {
    id: 'demo-audi-a4',
    name: 'Audi A4 Premium',
    modelCode: 'A4',
    category: 'sedan' as const,
    price: 42500,
    rating: 4.3,
    reviewCount: 87,
    description: 'The Audi A4 Premium delivers sophisticated performance with quattro all-wheel drive, premium interior materials, and advanced technology features.',
    specs: {
      engine: '2.0L Turbo I4',
      power: '201 hp @ 4375-6000 rpm',
      acceleration: '0-60 mph in 6.1 seconds',
      topSpeed: '155 mph (electronically limited)',
      fuelEconomy: '27 mpg city / 37 mpg highway',
      transmission: '7-Speed Automatic',
      drivetrain: 'All-Wheel Drive'
    },
    features: [
      '2.0L Turbocharged Engine',
      'quattro All-Wheel Drive',
      'Audi Virtual Cockpit',
      'Apple CarPlay & Android Auto',
      'Wireless Device Charging',
      'LED Headlights',
      '18" Wheels',
      'Leather Upholstery',
      'Dual-Zone Climate Control',
      'Power Front Seats'
    ],
    images: [
      '/images/cars/audi-a4-1.jpg',
      '/images/cars/audi-a4-2.jpg',
      '/images/cars/audi-a4-3.jpg'
    ],
    colors: [
      { name: 'Glacier White', hex: '#F5F5F5' },
      { name: 'Mythos Black', hex: '#000000' },
      { name: 'Moonlight Blue', hex: '#1E3A8A', price: 575 }
    ],
    packages: [
      {
        name: 'Premium Plus Package',
        description: 'Enhanced luxury and technology features',
        price: 2800,
        features: ['Navigation System', 'Heated Seats', 'Bang & Olufsen Sound System']
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: 'demo-mercedes-c-class',
    name: 'Mercedes-Benz C-Class C300',
    modelCode: 'C300',
    category: 'sedan' as const,
    price: 44500,
    rating: 4.5,
    reviewCount: 112,
    description: 'The Mercedes-Benz C-Class C300 combines luxury, performance, and technology in a compact executive sedan package.',
    specs: {
      engine: '2.0L Turbo I4',
      power: '255 hp @ 5800 rpm',
      acceleration: '0-60 mph in 5.7 seconds',
      topSpeed: '130 mph (electronically limited)',
      fuelEconomy: '23 mpg city / 33 mpg highway',
      transmission: '9-Speed Automatic',
      drivetrain: 'Rear-Wheel Drive'
    },
    features: [
      '2.0L Turbocharged Engine',
      '9-Speed Automatic Transmission',
      'MBUX Infotainment System',
      'Apple CarPlay & Android Auto',
      'Wireless Device Charging',
      'LED Headlights',
      '18" AMG Wheels',
      'ARTICO Leather Upholstery',
      'Dual-Zone Climate Control',
      'Power Front Seats'
    ],
    images: [
      '/images/cars/mercedes-c300-1.jpg',
      '/images/cars/mercedes-c300-2.jpg',
      '/images/cars/mercedes-c300-3.jpg'
    ],
    colors: [
      { name: 'Polar White', hex: '#FFFFFF' },
      { name: 'Obsidian Black', hex: '#000000' },
      { name: 'Iridium Silver', hex: '#C0C0C0', price: 720 }
    ],
    packages: [
      {
        name: 'AMG Line Package',
        description: 'Sporty styling and performance enhancements',
        price: 3200,
        features: ['AMG Body Styling', 'Sport Suspension', 'AMG Steering Wheel']
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: 'demo-porsche-911',
    name: 'Porsche 911 Carrera',
    modelCode: '911',
    category: 'coupe' as const,
    price: 114200,
    rating: 4.9,
    reviewCount: 67,
    description: 'The Porsche 911 Carrera represents the pinnacle of sports car engineering with its naturally aspirated flat-6 engine and legendary performance.',
    specs: {
      engine: '3.0L Twin-Turbo Flat-6',
      power: '379 hp @ 6500 rpm',
      acceleration: '0-60 mph in 3.9 seconds',
      topSpeed: '191 mph (electronically limited)',
      fuelEconomy: '18 mpg city / 24 mpg highway',
      transmission: '8-Speed Dual-Clutch',
      drivetrain: 'Rear-Wheel Drive'
    },
    features: [
      '3.0L Twin-Turbo Flat-6 Engine',
      '8-Speed PDK Transmission',
      'Porsche Communication Management',
      'Apple CarPlay',
      'Sport Chrono Package',
      'LED Headlights',
      '20" Carrera Wheels',
      'Partial Leather Seats',
      'Dual-Zone Climate Control',
      'Power Steering Plus'
    ],
    images: [
      '/images/cars/porsche-911-1.jpg',
      '/images/cars/porsche-911-2.jpg',
      '/images/cars/porsche-911-3.jpg'
    ],
    colors: [
      { name: 'Carrera White', hex: '#FFFFFF' },
      { name: 'Jet Black', hex: '#000000' },
      { name: 'GT Silver Metallic', hex: '#C0C0C0', price: 1200 },
      { name: 'Guards Red', hex: '#DC143C', price: 1200 }
    ],
    packages: [
      {
        name: 'Sport Chrono Package Plus',
        description: 'Enhanced performance and display features',
        price: 4100,
        features: ['Digital Cockpit', 'Mode Switch', 'Sport Response Button']
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: 'demo-tesla-model-3',
    name: 'Tesla Model 3 Long Range',
    modelCode: 'Model 3',
    category: 'sedan' as const,
    price: 46990,
    rating: 4.7,
    reviewCount: 245,
    description: 'The Tesla Model 3 Long Range combines electric performance with cutting-edge technology, offering instant torque and over-the-air updates.',
    specs: {
      engine: 'Dual Motor Electric',
      power: '346 hp (combined)',
      acceleration: '0-60 mph in 5.3 seconds',
      topSpeed: '140 mph (electronically limited)',
      fuelEconomy: '120 MPGe / 353 mile range',
      transmission: 'Single-Speed',
      drivetrain: 'Rear-Wheel Drive'
    },
    features: [
      'Dual Motor Electric Powertrain',
      'Autopilot Advanced',
      '15" Touchscreen Display',
      'Premium Audio System',
      'Wireless Device Charging',
      'LED Headlights',
      '18" Aero Wheels',
      'Premium Seats',
      'Dual-Zone Climate Control',
      'Supercharger Access'
    ],
    images: [
      '/images/cars/tesla-model3-1.jpg',
      '/images/cars/tesla-model3-2.jpg',
      '/images/cars/tesla-model3-3.jpg'
    ],
    colors: [
      { name: 'Pearl White', hex: '#F8F8FF' },
      { name: 'Solid Black', hex: '#000000' },
      { name: 'Deep Blue Metallic', hex: '#00008B', price: 1000 },
      { name: 'Red Multi-Coat', hex: '#DC143C', price: 2000 }
    ],
    packages: [
      {
        name: 'Full Self-Driving',
        description: 'Advanced autonomous driving capabilities',
        price: 10000,
        features: ['Navigate on Autopilot', 'Auto Lane Change', 'Autopark', 'Summon']
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: 'demo-lamborghini-huracan',
    name: 'Lamborghini Huracán Evo',
    modelCode: 'Huracán',
    category: 'coupe' as const,
    price: 261000,
    rating: 4.8,
    reviewCount: 23,
    description: 'The Lamborghini Huracán Evo delivers supercar performance with advanced aerodynamics, active driving dynamics, and Italian craftsmanship.',
    specs: {
      engine: '5.2L V10',
      power: '602 hp @ 8000 rpm',
      acceleration: '0-60 mph in 2.9 seconds',
      topSpeed: '202 mph (electronically limited)',
      fuelEconomy: '12 mpg city / 18 mpg highway',
      transmission: '7-Speed Dual-Clutch',
      drivetrain: 'All-Wheel Drive'
    },
    features: [
      '5.2L Naturally Aspirated V10',
      '7-Speed LDF Dual-Clutch',
      'Lamborghini Dinamica Veicolo Integrata',
      'Apple CarPlay',
      'LDVI (Lamborghini Dynamic Vehicle Integration)',
      'LED Headlights',
      '20" Wheels',
      'Alcantara/Leather Upholstery',
      'Dual-Zone Climate Control',
      'Carbon Fiber Interior Trim'
    ],
    images: [
      '/images/cars/lambo-huracan-1.jpg',
      '/images/cars/lambo-huracan-2.jpg',
      '/images/cars/lambo-huracan-3.jpg'
    ],
    colors: [
      { name: 'Bianco Monocerus', hex: '#FFFFFF' },
      { name: 'Nero Noctis', hex: '#000000' },
      { name: 'Arancio Borealis', hex: '#FF4500', price: 9000 },
      { name: 'Verde Mantis', hex: '#32CD32', price: 9000 }
    ],
    packages: [
      {
        name: 'Ad Personam Customization',
        description: 'Bespoke color and interior options',
        price: 15000,
        features: ['Custom Paint', 'Special Leather Colors', 'Carbon Fiber Upgrades']
      }
    ],
    isNew: true,
    isAvailable: true
  }
];

const seedCars = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bmw-cars';
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    // Clear existing cars
    await Car.deleteMany({});
    console.log('Cleared existing cars');

    // Insert new cars
    const insertedCars = await Car.insertMany(cars);
    console.log(`Successfully seeded ${insertedCars.length} cars`);

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding cars:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

// Run seeder if called directly
if (require.main === module) {
  seedCars();
}

export default seedCars;
