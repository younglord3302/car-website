const cars = [
  {
    id: 'x5-m50i',
    name: 'BMW X5 M50i',
    modelCode: 'X5',
    category: 'suv',
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
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop'
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
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: '3-series-330i',
    name: 'BMW 3 Series 330i',
    modelCode: '330i',
    category: 'sedan',
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
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop'
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
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: 'm3-competition',
    name: 'BMW M3 Competition',
    modelCode: 'M3',
    category: 'sedan',
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
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&h=400&fit=crop'
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
    category: 'suv',
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
      'https://images.unsplash.com/photo-1549399735-cef2e2c3f638?w=600&h=400&fit=crop'
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
    id: 'x3-m40i',
    name: 'BMW X3 M40i',
    modelCode: 'X3',
    category: 'suv',
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
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
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
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: '5-series-530i',
    name: 'BMW 5 Series 530i',
    modelCode: '530i',
    category: 'sedan',
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
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
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
      }
    ],
    isNew: true,
    isAvailable: true
  },
  {
    id: 'm4-competition',
    name: 'BMW M4 Competition',
    modelCode: 'M4',
    category: 'coupe',
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
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop'
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
    category: 'suv',
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
      'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop'
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
    category: 'coupe',
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
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop'
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
  {
    id: 'z4-m40i',
    name: 'BMW Z4 M40i',
    modelCode: 'Z4',
    category: 'convertible',
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
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&h=400&fit=crop'
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
    category: 'suv',
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
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
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
  }
];

// Function to add cars one by one
async function addCars() {
  for (const car of cars) {
    try {
      const response = await fetch('http://localhost:5000/api/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
      });

      if (response.ok) {
        console.log(`✅ Added car: ${car.name}`);
      } else {
        console.error(`❌ Failed to add car: ${car.name}`, await response.text());
      }
    } catch (error) {
      console.error(`❌ Error adding car: ${car.name}`, error.message);
    }

    // Small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('🎉 Finished adding cars!');
}

// Run the function
addCars();
