import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Zap,
  Battery,
  Cpu,
  Wifi,
  Car,
  TrendingUp,
  Award,
  ChevronRight,
  Play,
  Star,
  Lightbulb,
  Rocket,
  Shield,
  Globe,
  Navigation
} from 'lucide-react';

const Innovation: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const [activeTab, setActiveTab] = useState('electric');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const scrollToTechnologies = () => {
    const techSection = document.getElementById('explore-technologies');
    techSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const innovations = [
    {
      id: 'electric',
      title: 'Electric Mobility',
      icon: Battery,
      description: 'Leading the charge in sustainable mobility with cutting-edge electric vehicles.',
      color: 'from-green-500 to-emerald-600',
      technologies: [
        { name: 'BMW i4', desc: 'All-electric Gran Coupe with 300+ miles range', status: 'Available' },
        { name: 'BMW i7', desc: 'Luxury electric sedan with Level 3 autonomy', status: 'Available' },
        { name: 'BMW iX', desc: 'Premium electric SAV with air suspension', status: 'Available' },
        { name: 'BMW i5', desc: 'Next-gen electric sedan arriving 2024', status: 'Coming Soon' }
      ]
    },
    {
      id: 'autonomous',
      title: 'Autonomous Driving',
      icon: Navigation,
      description: 'Revolutionary autonomous driving systems for safer, more efficient journeys.',
      color: 'from-blue-500 to-cyan-600',
      technologies: [
        { name: 'Level 3 Autonomy', desc: 'Highway hands-free driving capability', status: 'Available' },
        { name: 'BMW Personal Pilot', desc: 'Advanced driver assistance systems', status: 'Available' },
        { name: 'Predictive Navigation', desc: 'AI-powered route optimization', status: 'Available' },
        { name: 'Urban Pilot', desc: 'City autonomous driving (2025)', status: 'In Development' }
      ]
    },
    {
      id: 'connectivity',
      title: 'Connected Services',
      icon: Wifi,
      description: 'Seamlessly integrated digital services enhancing your driving experience.',
      color: 'from-purple-500 to-indigo-600',
      technologies: [
        { name: 'BMW ConnectedDrive', desc: 'Comprehensive digital services platform', status: 'Available' },
        { name: 'BMW Digital Key', desc: 'Smartphone-based vehicle access', status: 'Available' },
        { name: 'Over-the-Air Updates', desc: 'Remote software updates and improvements', status: 'Available' },
        { name: 'BMW Operating System 9', desc: 'Next-gen infotainment system', status: 'Available' }
      ]
    },
    {
      id: 'sustainability',
      title: 'Sustainable Tech',
      icon: Globe,
      description: 'Innovative technologies reducing environmental impact across the lifecycle.',
      color: 'from-orange-500 to-red-600',
      technologies: [
        { name: 'Carbon-Neutral Production', desc: 'Zero-emission manufacturing processes', status: 'Achieved' },
        { name: 'Recycled Materials', desc: '80% recyclable vehicle components', status: 'In Progress' },
        { name: 'BMW i Wallbox', desc: 'Intelligent home charging solutions', status: 'Available' },
        { name: 'Circular Economy', desc: 'Closed-loop material recycling', status: 'In Development' }
      ]
    }
  ];

  const futureTech = [
    {
      title: 'BMW Vision Neue Klasse',
      description: 'Next-generation vehicle architecture combining electric powertrains with advanced digital services.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      year: '2025'
    },
    {
      title: 'Autonomous Ride-Hailing',
      description: 'Self-driving vehicle fleets for urban mobility solutions.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      year: '2026'
    },
    {
      title: 'Quantum Computing Integration',
      description: 'AI-enhanced vehicle systems using quantum computing for real-time optimization.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      year: '2030'
    }
  ];

  const achievements = [
    { number: '20+', label: 'Years in Electric Development', icon: Battery },
    { number: '2M+', label: 'Electric Miles Driven', icon: Car },
    { number: '500+', label: 'Patents Filed (2023)', icon: Award },
    { number: '15', label: 'BMW i Models Launched', icon: Zap }
  ];

  const activeInnovation = innovations.find(innovation => innovation.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-900/60 to-black/70 z-10" />
          <img
            src="https://images.unsplash.com/photo-1593941707882-615dfb1f6b44?w=1920&h=1080&fit=crop"
            alt="BMW Innovation Lab"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              FUTURE
              <br />
              <span className="text-4xl md:text-6xl font-light">DRIVEN BY INNOVATION</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto"
            >
              BMW leads the automotive revolution with cutting-edge technologies,
              sustainable solutions, and intelligent mobility systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button
                onClick={scrollToTechnologies}
                className="btn-primary text-lg px-8 py-4 flex items-center gap-3 hover-lift"
              >
                <Rocket className="h-5 w-5" />
                Explore Technologies
                <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Tech Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute top-20 left-10 z-20"
        >
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <Battery className="h-6 w-6 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="absolute top-32 right-16 z-20"
        >
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <Cpu className="h-6 w-6 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
          className="absolute bottom-32 left-16 z-20"
        >
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <Wifi className="h-6 w-6 text-white" />
          </div>
        </motion.div>
      </section>

      {/* Innovation Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              BREAKTHROUGH TECHNOLOGIES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the technologies shaping the future of mobility,
              from electric powertrains to autonomous driving systems.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {innovations.map((innovation) => (
              <motion.button
                key={innovation.id}
                onClick={() => setActiveTab(innovation.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === innovation.id
                    ? 'bg-bmw-blue text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <innovation.icon className="h-5 w-5" />
                {innovation.title}
              </motion.button>
            ))}
          </div>

          {/* Active Innovation Content */}
          {activeInnovation && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${activeInnovation.color} text-white rounded-full mb-6`}>
                    <activeInnovation.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-bmw-text mb-4">{activeInnovation.title}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{activeInnovation.description}</p>

                  <div className="space-y-4">
                    {activeInnovation.technologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <div>
                          <h4 className="font-semibold text-bmw-text">{tech.name}</h4>
                          <p className="text-sm text-gray-600">{tech.desc}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tech.status === 'Available' ? 'bg-green-100 text-green-800' :
                          tech.status === 'Coming Soon' ? 'bg-blue-100 text-blue-800' :
                          tech.status === 'In Development' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {tech.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&sat=${activeTab === 'electric' ? '-50' : activeTab === 'autonomous' ? '0' : activeTab === 'connectivity' ? '20' : '10'}`}
                    alt={activeInnovation.title}
                    className="rounded-xl shadow-2xl w-full"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activeInnovation.color} opacity-10 rounded-xl`}></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Explore Technologies Section */}
      <section id="explore-technologies" className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              EXPLORE OUR TECHNOLOGIES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into BMW's technological innovations. From electric powertrains
              to autonomous systems, discover how we're shaping the future of mobility.
            </p>
          </motion.div>

          {/* Technology Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                id: 'electric',
                title: 'Electric & Hybrid',
                icon: Battery,
                color: 'from-green-500 to-emerald-600',
                description: 'Revolutionary electric powertrains',
                techCount: 12,
                featured: 'BMW i7 M70 xDrive'
              },
              {
                id: 'autonomous',
                title: 'Autonomous Driving',
                icon: Navigation,
                color: 'from-blue-500 to-cyan-600',
                description: 'Advanced driver assistance systems',
                techCount: 8,
                featured: 'Level 3 Highway Pilot'
              },
              {
                id: 'connectivity',
                title: 'Connected Services',
                icon: Wifi,
                color: 'from-purple-500 to-indigo-600',
                description: 'Digital connectivity solutions',
                techCount: 15,
                featured: 'BMW Operating System 9'
              },
              {
                id: 'sustainability',
                title: 'Sustainability',
                icon: Globe,
                color: 'from-orange-500 to-red-600',
                description: 'Environmental technologies',
                techCount: 6,
                featured: 'Carbon-Neutral Production'
              }
            ].map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHoveredTech(category.id)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={32} />
                </div>

                <h3 className="text-xl font-bold text-bmw-text mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500">{category.techCount} Technologies</span>
                  <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${hoveredTech === category.id ? 'translate-x-1' : ''}`} />
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Featured</p>
                  <p className="text-sm font-semibold text-bmw-blue">{category.featured}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Technology Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-bmw-text mb-4">
                Technology Deep Dive
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our most advanced technologies with detailed specifications,
                capabilities, and real-world applications.
              </p>
            </div>

            {/* Technology Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {[
                {
                  title: 'BMW eDrive Technology',
                  category: 'Electric',
                  icon: Battery,
                  specs: ['Up to 590 hp', '373 miles range', '3.5s 0-60 mph', '800V architecture'],
                  description: 'Fifth-generation electric powertrain with unparalleled performance and efficiency.',
                  image: 'https://images.unsplash.com/photo-1593941707882-615dfb1f6b44?w=400&h=300&fit=crop',
                  status: 'Available',
                  innovation: 'Revolutionary 800V architecture enables ultra-fast charging'
                },
                {
                  title: 'Level 3 Autonomous Driving',
                  category: 'Autonomous',
                  icon: Navigation,
                  specs: ['Highway use only', 'Driver supervision required', 'Traffic jam assist', 'Emergency braking'],
                  description: 'Hands-free driving on highways with advanced safety systems and real-time monitoring.',
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                  status: 'Available',
                  innovation: 'AI-powered predictive driving with 360° environmental awareness'
                },
                {
                  title: 'BMW Operating System 9',
                  category: 'Connectivity',
                  icon: Cpu,
                  specs: ['10.25" touchscreen', 'Wireless updates', 'Voice control', 'Gesture recognition'],
                  description: 'Next-generation infotainment with intuitive controls and seamless connectivity.',
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                  status: 'Available',
                  innovation: 'Natural language processing with contextual AI assistance'
                },
                {
                  title: 'BMW i Wallbox Pro',
                  category: 'Sustainability',
                  icon: Zap,
                  specs: ['11kW charging', 'Smart scheduling', 'Energy monitoring', 'Weather compensation'],
                  description: 'Intelligent home charging solution with renewable energy optimization.',
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                  status: 'Available',
                  innovation: 'AI-optimized charging schedules for maximum efficiency'
                },
                {
                  title: 'BMW Digital Key Plus',
                  category: 'Connectivity',
                  icon: Wifi,
                  specs: ['NFC & UWB', 'Phone sharing', 'Digital wallet', 'Emergency access'],
                  description: 'Advanced smartphone-based vehicle access with enhanced security features.',
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                  status: 'Available',
                  innovation: 'Ultra-wideband technology for precise vehicle location'
                },
                {
                  title: 'Carbon-Neutral Production',
                  category: 'Sustainability',
                  icon: Globe,
                  specs: ['Zero CO2 emissions', 'Renewable energy', 'Circular materials', 'Sustainable sourcing'],
                  description: 'Complete carbon-neutral manufacturing process from raw materials to finished vehicles.',
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                  status: 'Achieved',
                  innovation: 'Closed-loop recycling system with 95% material recovery'
                }
              ].map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tech.category === 'Electric' ? 'bg-green-100 text-green-800' :
                        tech.category === 'Autonomous' ? 'bg-blue-100 text-blue-800' :
                        tech.category === 'Connectivity' ? 'bg-purple-100 text-purple-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {tech.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tech.status === 'Available' ? 'bg-green-100 text-green-800' :
                        tech.status === 'Coming Soon' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {tech.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-bmw-blue text-white rounded-full flex items-center justify-center">
                        <tech.icon size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-bmw-text">{tech.title}</h4>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tech.description}</p>

                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Specifications:</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {tech.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-3">
                      <h5 className="text-sm font-semibold text-bmw-blue mb-1">Innovation Highlight</h5>
                      <p className="text-xs text-blue-700">{tech.innovation}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technology Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold text-bmw-text text-center mb-12">
                BMW Technology Timeline
              </h3>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-bmw-blue to-bmw-dark"></div>

                {[
                  { year: '1972', event: 'First BMW turbocharged engine', milestone: 'Performance Innovation' },
                  { year: '1994', event: 'BMW acquires MINI brand', milestone: 'Brand Expansion' },
                  { year: '2008', event: 'BMW acquires Rolls-Royce', milestone: 'Luxury Leadership' },
                  { year: '2011', event: 'BMW i sub-brand launched', milestone: 'Electric Revolution' },
                  { year: '2013', event: 'BMW i3 and i8 revealed', milestone: 'Sustainable Mobility' },
                  { year: '2021', event: 'BMW iX and i4 production', milestone: 'Mass Market Electric' },
                  { year: '2023', event: 'BMW Vision Neue Klasse', milestone: 'Future Architecture' },
                  { year: '2025', event: 'Level 4 autonomy introduction', milestone: 'Autonomous Future' }
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center mb-8 ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8 md:pr-16' : 'pl-8 md:pl-16'}`}>
                      <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-bmw-blue">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-2xl font-bold text-bmw-blue">{item.year}</div>
                          <div className="text-sm font-medium text-gray-500">{item.milestone}</div>
                        </div>
                        <p className="text-gray-700">{item.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-bmw-blue rounded-full border-4 border-white shadow-lg"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Innovation Impact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { number: '2.6M', label: 'Electric Vehicles Delivered', icon: Car },
                { number: '25+', label: 'Years Electric Leadership', icon: Battery },
                { number: '15', label: 'BMW i Models', icon: Zap },
                { number: '500+', label: 'Active Patents (2024)', icon: Award }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-6"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-bmw-blue text-white rounded-full mb-4">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-bmw-text mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Stats */}
      <section className="py-24 bg-bmw-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              INNOVATION BY NUMBERS
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our commitment to innovation is reflected in tangible achievements
              and measurable progress toward a sustainable automotive future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-100 text-sm uppercase tracking-wide">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Technologies */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              FUTURE TECHNOLOGIES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering the next generation of mobility with breakthrough innovations
              that will redefine how we think about transportation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureTech.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-bmw-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tech.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-bmw-text mb-3">{tech.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              RESEARCH & DEVELOPMENT
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our global network of innovation hubs drives breakthrough technologies
              from concept to production, ensuring BMW remains at the forefront of automotive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bmw-blue rounded-full flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Innovation Hubs</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Five global innovation hubs in Munich, Shanghai, Tokyo, Silicon Valley, and Tel Aviv
                collaborate on cutting-edge technologies and future mobility solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bmw-blue rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">R&D Investment</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Over €7 billion invested annually in research and development,
                focusing on electric mobility, autonomous driving, and digital services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bmw-blue rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Safety Innovation</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Advanced safety systems protect occupants and vulnerable road users,
                with AI-powered assistance making driving safer and more intuitive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-bmw-blue to-bmw-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              JOIN THE FUTURE OF MOBILITY
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
              Experience BMW's innovative technologies firsthand. Schedule a test drive
              or visit our innovation center to see the future in motion.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-bmw-blue hover:bg-gray-100 font-medium px-8 py-4 rounded-sm transition-colors duration-200 uppercase tracking-wide text-lg flex items-center justify-center gap-3">
                <Play className="h-5 w-5" />
                Watch Innovation Showcase
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-bmw-blue font-medium px-8 py-4 rounded-sm transition-all duration-200 uppercase tracking-wide text-lg">
                Book Innovation Experience
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
