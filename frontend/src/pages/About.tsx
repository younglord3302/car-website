import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Award,
  Users,
  Globe,
  TrendingUp,
  Heart,
  Target,
  Star,
  ChevronRight,
  Calendar,
  MapPin,
  Building,
  Lightbulb,
  Shield,
  Car,
  Zap,
  CheckCircle,
  Clock
} from 'lucide-react';

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('heritage');
  const [selectedModelCategory, setSelectedModelCategory] = useState('sedans');
  const [showTestDriveModal, setShowTestDriveModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [testDriveForm, setTestDriveForm] = useState({
    selectedModel: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    testDriveType: 'standard',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    licenseType: '',
    additionalNotes: '',
    agreeToTerms: false
  });

  const companyTabs = [
    {
      id: 'heritage',
      title: 'Our Heritage',
      icon: Calendar,
      content: 'Founded in 1916, BMW has been at the forefront of automotive innovation for over a century. From aircraft engines to luxury automobiles, our commitment to engineering excellence has never wavered.'
    },
    {
      id: 'values',
      title: 'Our Values',
      icon: Heart,
      content: 'BMW is driven by a passion for innovation, sustainability, and customer satisfaction. We believe in creating vehicles that not only perform exceptionally but also contribute positively to society.'
    },
    {
      id: 'innovation',
      title: 'Innovation',
      icon: Lightbulb,
      content: 'We invest over €7 billion annually in research and development, pushing the boundaries of automotive technology from electric vehicles to autonomous driving systems.'
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      icon: Globe,
      content: 'BMW is committed to achieving carbon neutrality across our entire value chain by 2050, leading the industry in sustainable mobility solutions.'
    }
  ];

  const leadership = [
    {
      name: 'Oliver Zipse',
      title: 'Chairman of the Board of Management',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      experience: '25+ years in automotive industry'
    },
    {
      name: 'Pieter Nota',
      title: 'CEO of BMW Group',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      experience: 'Former CEO of Randstad'
    },
    {
      name: 'Ilka Horstmeier',
      title: 'Head of Human Resources',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
      experience: 'Extensive HR leadership experience'
    }
  ];

  const milestones = [
    { year: '1916', event: 'BMW founded as aircraft engine manufacturer', icon: Building },
    { year: '1928', event: 'First BMW automobile produced', icon: Car },
    { year: '1972', event: 'BMW enters North American market', icon: Globe },
    { year: '1994', event: 'BMW acquires MINI brand', icon: Star },
    { year: '2008', event: 'BMW acquires Rolls-Royce', icon: Award },
    { year: '2021', event: 'BMW i4 electric sedan launched', icon: Zap },
    { year: '2023', event: 'Vision Neue Klasse unveiled', icon: Lightbulb }
  ];

  const stats = [
    { number: '118+', label: 'Years of Excellence', icon: Calendar },
    { number: '149,000+', label: 'Employees Worldwide', icon: Users },
    { number: '31', label: 'Production Facilities', icon: Building },
    { number: '140+', label: 'Countries Served', icon: Globe },
    { number: '2.6M+', label: 'Vehicles Produced Annually', icon: TrendingUp },
    { number: '100+', label: 'Design Awards', icon: Award }
  ];

  const activeTabContent = companyTabs.find(tab => tab.id === activeTab);

  const scrollToModels = () => {
    const modelsSection = document.getElementById('explore-models');
    modelsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-900/50 to-black/70 z-10" />
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
            alt="BMW Headquarters"
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
              ABOUT BMW
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto"
            >
              For over a century, BMW has redefined the automotive industry through
              innovation, craftsmanship, and an unwavering commitment to excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button className="btn-primary text-lg px-8 py-4 flex items-center gap-3 hover-lift">
                <Target className="h-5 w-5" />
                Our Mission
                <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute top-20 left-10 z-20"
        >
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <Award className="h-6 w-6 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="absolute top-32 right-16 z-20"
        >
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <Globe className="h-6 w-6 text-white" />
          </div>
        </motion.div>
      </section>

      {/* Company Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              BMW BY NUMBERS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A century of innovation, excellence, and global leadership in the automotive industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-bmw-blue to-bmw-dark text-white rounded-full mb-6">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-bmw-text mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              OUR STORY
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes BMW a leader in automotive innovation and luxury.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {companyTabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-bmw-blue text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="h-5 w-5" />
                {tab.title}
              </motion.button>
            ))}
          </div>

          {/* Active Tab Content */}
          {activeTabContent && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-12 shadow-lg text-center"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-bmw-blue to-bmw-dark text-white rounded-full mb-8`}>
                <activeTabContent.icon size={40} />
              </div>
              <h3 className="text-3xl font-bold text-bmw-text mb-6">{activeTabContent.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">{activeTabContent.content}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              OUR JOURNEY
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped BMW's legacy of innovation and excellence.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-bmw-blue to-bmw-dark"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8 md:pr-16' : 'pl-8 md:pl-16'}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-bmw-blue text-white rounded-full flex items-center justify-center">
                        <milestone.icon className="h-6 w-6" />
                      </div>
                      <div className="text-2xl font-bold text-bmw-blue">{milestone.year}</div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-bmw-blue rounded-full border-4 border-white shadow-lg z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              LEADERSHIP TEAM
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders driving BMW's future in the automotive industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-bmw-blue to-bmw-dark flex items-center justify-center">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-bmw-text mb-2">{leader.name}</h3>
                  <p className="text-bmw-blue font-semibold mb-3">{leader.title}</p>
                  <p className="text-gray-600 text-sm">{leader.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-bmw-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              GLOBAL PRESENCE
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              BMW operates in over 140 countries with production facilities, research centers,
              and sales offices worldwide, bringing our vision to life on a global scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { region: 'Europe', facilities: '12 Production Plants', countries: '40+', highlight: 'Headquartered in Munich' },
              { region: 'Americas', facilities: '6 Production Plants', countries: '35+', highlight: 'Spartanburg, SC Plant' },
              { region: 'Asia', facilities: '8 Production Plants', countries: '50+', highlight: 'Shenyang, China Plant' },
              { region: 'Rest of World', facilities: '5 Production Plants', countries: '15+', highlight: 'Rayong, Thailand Plant' }
            ].map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center"
              >
                <Globe className="h-12 w-12 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{region.region}</h3>
                <div className="space-y-2 text-blue-100">
                  <p className="font-semibold">{region.facilities}</p>
                  <p>{region.countries} Countries</p>
                  <p className="text-sm mt-4">{region.highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Models Section */}
      <section id="explore-models" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              EXPLORE OUR MODELS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover BMW's complete lineup of vehicles, from iconic sedans to innovative electric models,
              each engineered to deliver unparalleled driving pleasure.
            </p>
          </motion.div>

          {/* Model Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: 'sedans', name: 'Sedans', icon: Car, count: 6, color: 'from-blue-500 to-cyan-600' },
              { id: 'suvs', name: 'SUVs & SAVs', icon: Shield, count: 8, color: 'from-green-500 to-emerald-600' },
              { id: 'coupes', name: 'Coupes & Convertibles', icon: Star, count: 4, color: 'from-purple-500 to-indigo-600' },
              { id: 'electric', name: 'Electric & Hybrid', icon: Zap, count: 5, color: 'from-orange-500 to-red-600' },
              { id: 'performance', name: 'M Performance', icon: TrendingUp, count: 7, color: 'from-red-500 to-pink-600' }
            ].map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedModelCategory(category.id)}
                className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  selectedModelCategory === category.id
                    ? 'bg-bmw-blue text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'
                }`}
                whileHover={{ scale: selectedModelCategory === category.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="h-4 w-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold">{category.name}</div>
                  <div className="text-sm opacity-75">{category.count} models</div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Models Display */}
          <motion.div
            key={selectedModelCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            {selectedModelCategory === 'sedans' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: 'BMW 3 Series',
                    tagline: 'The Ultimate Driving Machine',
                    price: 'Starting at $43,300',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['2.0L Turbo Engine', '255 hp', '0-60 in 5.6s', '36 mpg combined'],
                    features: ['Adaptive M Suspension', 'BMW Live Cockpit Professional', 'Wireless Charging']
                  },
                  {
                    name: 'BMW 5 Series',
                    tagline: 'Business Class Excellence',
                    price: 'Starting at $55,400',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['3.0L Turbo Engine', '375 hp', '0-60 in 4.1s', '28 mpg combined'],
                    features: ['Executive Lounge Seating', 'Bowers & Wilkins Audio', 'Massage Seats']
                  },
                  {
                    name: 'BMW 7 Series',
                    tagline: 'The Pinnacle of Luxury',
                    price: 'Starting at $87,700',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['3.0L Turbo Engine', '375 hp', '0-60 in 5.1s', '25 mpg combined'],
                    features: ['Sky Lounge Panoramic Roof', 'Rear Executive Lounge', 'Active Comfort Drive']
                  },
                  {
                    name: 'BMW i4',
                    tagline: 'Pure Electric Driving Pleasure',
                    price: 'Starting at $55,400',
                    image: 'https://images.unsplash.com/photo-1593941707882-615dfb1f6b44?w=400&h=300&fit=crop',
                    specs: ['Electric Motor', '369 hp', '0-60 in 3.9s', '300+ miles range'],
                    features: ['Level 2 Autonomous Driving', 'BMW Digital Key', 'Wireless Updates']
                  },
                  {
                    name: 'BMW i7',
                    tagline: 'Electric Luxury Redefined',
                    price: 'Starting at $119,300',
                    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                    specs: ['Dual Electric Motors', '536 hp', '0-60 in 3.4s', '300+ miles range'],
                    features: ['Theater Screen', 'Executive Drive Pro', 'BMW IconicSounds Electric']
                  },
                  {
                    name: 'BMW M3',
                    tagline: 'Track Performance on the Street',
                    price: 'Starting at $73,000',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['3.0L Twin-Turbo I6', '473 hp', '0-60 in 3.8s', '18 mpg combined'],
                    features: ['M Drive Professional', 'Carbon Fiber Interior', 'Active M Differential']
                  }
                ].map((model, index) => (
                  <motion.div
                    key={model.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => navigate('/models')}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-bmw-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Sedan
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-bmw-text mb-2">{model.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{model.tagline}</p>
                      <p className="text-bmw-blue font-semibold mb-4">{model.price}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Specs:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {model.specs.map((spec, specIndex) => (
                            <div key={specIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded text-center">
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {model.features.slice(0, 2).map((feature, featureIndex) => (
                            <span key={featureIndex} className="text-xs bg-bmw-light text-bmw-blue px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                          {model.features.length > 2 && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              +{model.features.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      <button className="w-full bg-bmw-blue text-white py-2 px-4 rounded-lg hover:bg-bmw-dark transition-colors text-sm font-medium">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {selectedModelCategory === 'suvs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: 'BMW X3',
                    tagline: 'Versatile Luxury Compact SUV',
                    price: 'Starting at $47,600',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['2.0L Turbo Engine', '248 hp', '0-60 in 6.1s', '28 mpg combined'],
                    features: ['Adaptive M Suspension', 'BMW Live Cockpit Professional', 'Panoramic Moonroof']
                  },
                  {
                    name: 'BMW X5',
                    tagline: 'The Ultimate Sports Activity Vehicle',
                    price: 'Starting at $59,400',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['3.0L Turbo Engine', '375 hp', '0-60 in 4.3s', '25 mpg combined'],
                    features: ['Air Suspension', 'Third-Row Seating', 'Executive Drive Pro']
                  },
                  {
                    name: 'BMW X7',
                    tagline: 'Luxury SUV for the Discerning',
                    price: 'Starting at $79,900',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['3.0L Turbo Engine', '375 hp', '0-60 in 5.4s', '24 mpg combined'],
                    features: ['Sky Lounge Panoramic Roof', '6-Seat Configuration', 'Active Comfort Drive']
                  },
                  {
                    name: 'BMW X1',
                    tagline: 'Premium Subcompact SUV',
                    price: 'Starting at $36,200',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['2.0L Turbo Engine', '228 hp', '0-60 in 6.5s', '31 mpg combined'],
                    features: ['Adaptive Suspension', 'Wireless Charging', 'BMW Live Cockpit']
                  },
                  {
                    name: 'BMW iX',
                    tagline: 'All-Electric Luxury SAV',
                    price: 'Starting at $83,200',
                    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                    specs: ['Dual Electric Motors', '523 hp', '0-60 in 3.6s', '300+ miles range'],
                    features: ['Level 3 Autonomous Driving', 'BMW iDrive 8.0', 'Crystal Headlights']
                  },
                  {
                    name: 'BMW XM',
                    tagline: 'High-Performance Electric Hybrid',
                    price: 'Starting at $159,000',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['Hybrid Powertrain', '738 hp', '0-60 in 3.3s', '30 miles electric range'],
                    features: ['M Drive Professional', 'Adaptive Air Suspension', 'Iconic Light Design']
                  }
                ].map((model, index) => (
                  <motion.div
                    key={model.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => navigate('/models')}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        SUV
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-bmw-text mb-2">{model.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{model.tagline}</p>
                      <p className="text-bmw-blue font-semibold mb-4">{model.price}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Specs:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {model.specs.map((spec, specIndex) => (
                            <div key={specIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded text-center">
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {model.features.slice(0, 2).map((feature, featureIndex) => (
                            <span key={featureIndex} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                          {model.features.length > 2 && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              +{model.features.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {selectedModelCategory === 'electric' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: 'BMW i4 eDrive40',
                    tagline: 'Efficient Electric Performance',
                    price: 'Starting at $55,400',
                    image: 'https://images.unsplash.com/photo-1593941707882-615dfb1f6b44?w=400&h=300&fit=crop',
                    specs: ['Electric Motor', '335 hp', '0-60 in 5.5s', '366 miles range'],
                    features: ['BMW Operating System 8', 'Wireless Updates', 'BMW Digital Key Plus']
                  },
                  {
                    name: 'BMW i4 M50',
                    tagline: 'High-Performance Electric Sedan',
                    price: 'Starting at $66,200',
                    image: 'https://images.unsplash.com/photo-1593941707882-615dfb1f6b44?w=400&h=300&fit=crop',
                    specs: ['Dual Electric Motors', '469 hp', '0-60 in 3.3s', '324 miles range'],
                    features: ['M Drive Professional', 'Adaptive M Suspension', 'M Performance Exhaust']
                  },
                  {
                    name: 'BMW i7 xDrive60',
                    tagline: 'Electric Luxury Executive',
                    price: 'Starting at $119,300',
                    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                    specs: ['Dual Electric Motors', '536 hp', '0-60 in 4.2s', '318 miles range'],
                    features: ['Theater Screen', 'Executive Drive Pro', 'BMW IconicSounds Electric']
                  },
                  {
                    name: 'BMW iX xDrive50',
                    tagline: 'Electric Luxury SAV',
                    price: 'Starting at $83,200',
                    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                    specs: ['Dual Electric Motors', '523 hp', '0-60 in 3.6s', '324 miles range'],
                    features: ['Level 3 Autonomous Driving', 'Crystal Headlights', 'BMW iDrive 8.0']
                  },
                  {
                    name: 'BMW iX M60',
                    tagline: 'High-Performance Electric SAV',
                    price: 'Starting at $111,100',
                    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                    specs: ['Dual Electric Motors', '610 hp', '0-60 in 3.4s', '280 miles range'],
                    features: ['All-Wheel Drive', 'M Drive Professional', 'Active Air Suspension']
                  }
                ].map((model, index) => (
                  <motion.div
                    key={model.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => navigate('/models')}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Electric
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-bmw-text mb-2">{model.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{model.tagline}</p>
                      <p className="text-bmw-blue font-semibold mb-4">{model.price}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Specs:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {model.specs.map((spec, specIndex) => (
                            <div key={specIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded text-center">
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {model.features.slice(0, 2).map((feature, featureIndex) => (
                            <span key={featureIndex} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                          {model.features.length > 2 && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              +{model.features.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {selectedModelCategory === 'performance' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: 'BMW M3 Competition',
                    tagline: 'Track-Bred Performance Sedan',
                    price: 'Starting at $73,000',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['3.0L Twin-Turbo I6', '473 hp', '0-60 in 3.8s', '18 mpg combined'],
                    features: ['M Drive Professional', 'Carbon Fiber Interior', 'Active M Differential']
                  },
                  {
                    name: 'BMW M4 Competition',
                    tagline: 'Ultimate Performance Coupe',
                    price: 'Starting at $76,400',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['3.0L Twin-Turbo I6', '473 hp', '0-60 in 3.7s', '18 mpg combined'],
                    features: ['Adaptive M Suspension', 'M Carbon Bucket Seats', 'M Drive Professional']
                  },
                  {
                    name: 'BMW X3 M',
                    tagline: 'High-Performance SUV',
                    price: 'Starting at $64,400',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['3.0L Twin-Turbo I6', '473 hp', '0-60 in 4.1s', '20 mpg combined'],
                    features: ['M Adaptive Suspension', 'M Sport Exhaust', 'Performance Tires']
                  },
                  {
                    name: 'BMW X5 M',
                    tagline: 'M Performance SAV',
                    price: 'Starting at $84,000',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['4.4L Twin-Turbo V8', '600 hp', '0-60 in 3.9s', '18 mpg combined'],
                    features: ['Air Suspension', 'M Performance Exhaust', 'M Drive Professional']
                  },
                  {
                    name: 'BMW XM',
                    tagline: 'M Hybrid High-Performance SUV',
                    price: 'Starting at $159,000',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['Hybrid Powertrain', '738 hp', '0-60 in 3.3s', '30 miles electric range'],
                    features: ['M Drive Professional', 'Adaptive Air Suspension', 'Iconic Light Design']
                  }
                ].map((model, index) => (
                  <motion.div
                    key={model.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => navigate('/models')}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        M Performance
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-bmw-text mb-2">{model.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{model.tagline}</p>
                      <p className="text-bmw-blue font-semibold mb-4">{model.price}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Specs:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {model.specs.map((spec, specIndex) => (
                            <div key={specIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded text-center">
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {model.features.slice(0, 2).map((feature, featureIndex) => (
                            <span key={featureIndex} className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                          {model.features.length > 2 && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              +{model.features.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {selectedModelCategory === 'coupes' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: 'BMW 2 Series Coupe',
                    tagline: 'Compact Sports Coupe',
                    price: 'Starting at $39,000',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['2.0L Turbo Engine', '228 hp', '0-60 in 5.7s', '31 mpg combined'],
                    features: ['Sport Suspension', 'LED Headlights', 'Wireless Charging']
                  },
                  {
                    name: 'BMW 4 Series Coupe',
                    tagline: 'Gran Coupe Luxury',
                    price: 'Starting at $49,500',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['2.0L Turbo Engine', '255 hp', '0-60 in 5.6s', '29 mpg combined'],
                    features: ['Adaptive Suspension', 'BMW Live Cockpit Professional', 'Sport Seats']
                  },
                  {
                    name: 'BMW M4 Competition',
                    tagline: 'Track Performance Coupe',
                    price: 'Starting at $76,400',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['3.0L Twin-Turbo I6', '473 hp', '0-60 in 3.7s', '18 mpg combined'],
                    features: ['M Drive Professional', 'Carbon Fiber Interior', 'Adaptive M Suspension']
                  },
                  {
                    name: 'BMW Z4 Roadster',
                    tagline: 'Open-Air Sports Car',
                    price: 'Starting at $55,000',
                    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                    specs: ['2.0L Turbo Engine', '255 hp', '0-60 in 5.5s', '30 mpg combined'],
                    features: ['Retractable Hardtop', 'Sport Suspension', 'Premium Sound System']
                  }
                ].map((model, index) => (
                  <motion.div
                    key={model.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => navigate('/models')}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Coupe
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-bmw-text mb-2">{model.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{model.tagline}</p>
                      <p className="text-bmw-blue font-semibold mb-4">{model.price}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Specs:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {model.specs.map((spec, specIndex) => (
                            <div key={specIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded text-center">
                              {spec}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {model.features.slice(0, 2).map((feature, featureIndex) => (
                            <span key={featureIndex} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                          {model.features.length > 2 && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              +{model.features.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Model Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {[
              { number: '30+', label: 'BMW Models', icon: Car },
              { number: '5', label: 'Model Categories', icon: Star },
              { number: '140+', label: 'Countries Served', icon: Globe },
              { number: '2.6M+', label: 'Vehicles Produced', icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-bmw-blue text-white rounded-full mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-bmw-text mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-bmw-text mb-4">
              Ready to Find Your BMW?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our complete model lineup and discover which BMW is perfect for your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/models')}
                className="bg-bmw-blue text-white hover:bg-bmw-dark font-medium px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Car className="h-5 w-5" />
                View All Models
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => setShowTestDriveModal(true)}
                className="bg-white text-bmw-blue border-2 border-bmw-blue hover:bg-bmw-blue hover:text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                Book Test Drive
              </button>
            </div>
          </motion.div>
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
              JOIN THE BMW FAMILY
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
              Experience the legacy of innovation and excellence that has made BMW
              a global leader in automotive luxury and performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={scrollToModels}
                className="bg-white text-bmw-blue hover:bg-gray-100 font-medium px-8 py-4 rounded-sm transition-colors duration-200 uppercase tracking-wide text-lg flex items-center justify-center gap-3"
              >
                <Star className="h-5 w-5" />
                Explore Our Models
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => navigate('/dealers')}
                className="border-2 border-white text-white hover:bg-white hover:text-bmw-blue font-medium px-8 py-4 rounded-sm transition-all duration-200 uppercase tracking-wide text-lg flex items-center justify-center gap-2"
              >
                Visit a Dealer
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Test Drive Booking Modal */}
      {showTestDriveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-bmw-blue to-bmw-dark text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Book Your BMW Test Drive</h2>
                  <p className="text-blue-100 mt-1">Experience the thrill of driving a BMW firsthand</p>
                </div>
                <button
                  onClick={() => {
                    setShowTestDriveModal(false);
                    setCurrentStep(1);
                  }}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between mt-6">
                {[
                  { step: 1, title: 'Choose Model', desc: 'Select BMW' },
                  { step: 2, title: 'Date & Time', desc: 'Pick appointment' },
                  { step: 3, title: 'Your Info', desc: 'Contact details' },
                  { step: 4, title: 'Confirm', desc: 'Review & book' }
                ].map((step, index) => (
                  <div key={step.step} className="flex items-center">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                      currentStep >= step.step
                        ? 'bg-white text-bmw-blue'
                        : 'bg-white/20 text-white'
                    }`}>
                      {currentStep > step.step ? <CheckCircle className="h-5 w-5" /> : step.step}
                    </div>
                    <div className="ml-3 hidden sm:block">
                      <div className={`text-sm font-medium ${currentStep >= step.step ? 'text-white' : 'text-blue-100'}`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-blue-200">{step.desc}</div>
                    </div>
                    {index < 3 && (
                      <div className={`w-12 h-0.5 mx-4 ${currentStep > step.step ? 'bg-white' : 'bg-white/20'}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 max-h-[calc(90vh-200px)] overflow-y-auto">
              {/* Step 1: Model Selection */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-bmw-text mb-4">Choose Your BMW Model</h3>
                    <p className="text-gray-600 mb-6">Select the BMW model you'd like to test drive</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        id: 'x5',
                        name: 'BMW X5',
                        tagline: 'The Ultimate Sports Activity Vehicle',
                        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                        price: 'Starting at $59,400'
                      },
                      {
                        id: '3series',
                        name: 'BMW 3 Series',
                        tagline: 'The Ultimate Driving Machine',
                        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                        price: 'Starting at $43,300'
                      },
                      {
                        id: 'x3',
                        name: 'BMW X3',
                        tagline: 'Born to lead the pack',
                        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                        price: 'Starting at $47,600'
                      },
                      {
                        id: 'x7',
                        name: 'BMW X7',
                        tagline: 'The pinnacle of luxury SUVs',
                        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                        price: 'Starting at $79,900'
                      },
                      {
                        id: 'i4',
                        name: 'BMW i4',
                        tagline: 'Pure electric driving pleasure',
                        image: 'https://images.unsplash.com/photo-1593941707882-615dfb1f6b44?w=400&h=300&fit=crop',
                        price: 'Starting at $55,400'
                      },
                      {
                        id: 'm3',
                        name: 'BMW M3',
                        tagline: 'High-performance sports sedan',
                        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
                        price: 'Starting at $73,000'
                      }
                    ].map((model) => (
                      <button
                        key={model.id}
                        onClick={() => {
                          setTestDriveForm({ ...testDriveForm, selectedModel: model.id });
                          setCurrentStep(2);
                        }}
                        className={`relative p-6 border-2 rounded-xl hover:border-bmw-blue hover:bg-bmw-light transition-all duration-300 text-left group ${
                          testDriveForm.selectedModel === model.id
                            ? 'border-bmw-blue bg-bmw-light'
                            : 'border-gray-200'
                        }`}
                      >
                        <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4">
                          <img
                            src={model.image}
                            alt={model.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <h4 className="font-bold text-lg text-bmw-text mb-2">{model.name}</h4>
                        <p className="text-gray-600 text-sm mb-3">{model.tagline}</p>
                        <p className="text-bmw-blue font-semibold text-sm">{model.price}</p>

                        {testDriveForm.selectedModel === model.id && (
                          <div className="absolute top-3 right-3">
                            <CheckCircle className="h-6 w-6 text-bmw-blue" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Car className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Test Drive Experience</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Professional BMW instructor accompanies you</li>
                          <li>• 45-60 minute driving session on various road types</li>
                          <li>• Opportunity to experience vehicle features</li>
                          <li>• Q&A session with BMW specialist</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Date & Time Selection */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-bmw-text mb-4">Select Date & Time</h3>
                    <p className="text-gray-600 mb-6">Choose your preferred test drive appointment</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                      <input
                        type="date"
                        value={testDriveForm.preferredDate}
                        onChange={(e) => setTestDriveForm({ ...testDriveForm, preferredDate: e.target.value })}
                        min={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]} // Minimum 1 day ahead
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                      <select
                        value={testDriveForm.preferredTime}
                        onChange={(e) => setTestDriveForm({ ...testDriveForm, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                      >
                        <option value="">Select time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">BMW Center Location</label>
                    <select
                      value={testDriveForm.location}
                      onChange={(e) => setTestDriveForm({ ...testDriveForm, location: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                    >
                      <option value="">Select a location</option>
                      <option value="downtown">BMW of Downtown - 123 Luxury Lane, Downtown, NY</option>
                      <option value="north">BMW Service Center North - 456 Premium Blvd, North District, NY</option>
                      <option value="premium">BMW Premium Test Drive Center - 789 Elite Drive, Premium Area, NY</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Test Drive Type</label>
                    <div className="flex gap-4">
                      {[
                        { value: 'standard', label: 'Standard Test Drive', desc: '45-minute session', duration: '45 min' },
                        { value: 'extended', label: 'Extended Experience', desc: '90-minute comprehensive test', duration: '90 min' },
                        { value: 'performance', label: 'Performance Track', desc: 'Circuit driving experience', duration: '60 min' }
                      ].map((type) => (
                        <button
                          key={type.value}
                          onClick={() => setTestDriveForm({ ...testDriveForm, testDriveType: type.value })}
                          className={`flex-1 p-4 border-2 rounded-lg text-left transition-all ${
                            testDriveForm.testDriveType === type.value
                              ? 'border-bmw-blue bg-bmw-light'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="font-medium text-bmw-text">{type.label}</div>
                          <div className="text-sm text-gray-600">{type.desc}</div>
                          <div className="text-xs text-bmw-blue font-semibold mt-1">{type.duration}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Information */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-bmw-text mb-4">Your Information</h3>
                    <p className="text-gray-600 mb-6">Please provide your contact details for the test drive booking</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={testDriveForm.customerName}
                        onChange={(e) => setTestDriveForm({ ...testDriveForm, customerName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={testDriveForm.customerEmail}
                        onChange={(e) => setTestDriveForm({ ...testDriveForm, customerEmail: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={testDriveForm.customerPhone}
                      onChange={(e) => setTestDriveForm({ ...testDriveForm, customerPhone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Driver's License Type</label>
                    <select
                      value={testDriveForm.licenseType}
                      onChange={(e) => setTestDriveForm({ ...testDriveForm, licenseType: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                    >
                      <option value="">Select license type</option>
                      <option value="full">Full License</option>
                      <option value="learner">Learner's Permit</option>
                      <option value="international">International License</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                    <textarea
                      value={testDriveForm.additionalNotes}
                      onChange={(e) => setTestDriveForm({ ...testDriveForm, additionalNotes: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                      placeholder="Any specific preferences, questions, or requirements..."
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={testDriveForm.agreeToTerms}
                      onChange={(e) => setTestDriveForm({ ...testDriveForm, agreeToTerms: e.target.checked })}
                      className="mt-1 h-4 w-4 text-bmw-blue focus:ring-bmw-blue border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the{' '}
                      <a href="#" className="text-bmw-blue hover:text-bmw-dark underline">
                        Test Drive Terms & Conditions
                      </a>
                      {' '}and understand that a valid driver's license is required for the test drive.
                    </label>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-bmw-text mb-4">Confirm Your Test Drive</h3>
                    <p className="text-gray-600 mb-6">Please review your test drive booking details</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-bmw-text mb-3">Test Drive Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">BMW Model:</span>
                            <span className="font-medium capitalize">
                              {testDriveForm.selectedModel.replace(/(\d+)/, ' $1').replace(/^./, str => str.toUpperCase())}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Date:</span>
                            <span className="font-medium">{testDriveForm.preferredDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Time:</span>
                            <span className="font-medium">{testDriveForm.preferredTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Type:</span>
                            <span className="font-medium capitalize">{testDriveForm.testDriveType}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-bmw-text mb-3">Contact Information</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Name:</span>
                            <span className="font-medium">{testDriveForm.customerName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Email:</span>
                            <span className="font-medium">{testDriveForm.customerEmail}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Phone:</span>
                            <span className="font-medium">{testDriveForm.customerPhone}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">License:</span>
                            <span className="font-medium capitalize">{testDriveForm.licenseType}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {testDriveForm.additionalNotes && (
                      <div>
                        <h4 className="font-bold text-bmw-text mb-3">Additional Notes</h4>
                        <p className="text-sm text-gray-700 bg-white p-3 rounded-lg">{testDriveForm.additionalNotes}</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Car className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">What to Expect</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Professional BMW instructor will greet you at the center</li>
                          <li>• Brief vehicle orientation and safety briefing</li>
                          <li>• Guided test drive on various road conditions</li>
                          <li>• Q&A session and detailed vehicle information</li>
                          <li>• Refreshments and follow-up contact</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-yellow-900 mb-1">Important Reminders</h4>
                        <ul className="text-sm text-yellow-800 space-y-1">
                          <li>• Please arrive 15 minutes early for check-in</li>
                          <li>• Bring a valid driver's license and proof of insurance</li>
                          <li>• Wear comfortable clothing and closed-toe shoes</li>
                          <li>• Test drive is subject to weather conditions and vehicle availability</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-8 py-6 flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  currentStep === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-bmw-blue hover:bg-bmw-blue hover:text-white'
                }`}
              >
                Previous
              </button>

              <div className="text-sm text-gray-600">
                Step {currentStep} of 4
              </div>

              {currentStep < 4 ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={
                    (currentStep === 1 && !testDriveForm.selectedModel) ||
                    (currentStep === 2 && (!testDriveForm.preferredDate || !testDriveForm.preferredTime || !testDriveForm.location || !testDriveForm.testDriveType)) ||
                    (currentStep === 3 && (!testDriveForm.customerName || !testDriveForm.customerEmail || !testDriveForm.customerPhone || !testDriveForm.agreeToTerms))
                  }
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    (currentStep === 1 && !testDriveForm.selectedModel) ||
                    (currentStep === 2 && (!testDriveForm.preferredDate || !testDriveForm.preferredTime || !testDriveForm.location || !testDriveForm.testDriveType)) ||
                    (currentStep === 3 && (!testDriveForm.customerName || !testDriveForm.customerEmail || !testDriveForm.customerPhone || !testDriveForm.agreeToTerms))
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-bmw-blue text-white hover:bg-bmw-dark'
                  }`}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={() => {
                    // Handle form submission
                    alert('Thank you! Your BMW test drive has been booked. You will receive a confirmation email with all the details shortly.');
                    setShowTestDriveModal(false);
                    setCurrentStep(1);
                    setTestDriveForm({
                      selectedModel: '',
                      preferredDate: '',
                      preferredTime: '',
                      location: '',
                      testDriveType: 'standard',
                      customerName: '',
                      customerEmail: '',
                      customerPhone: '',
                      licenseType: '',
                      additionalNotes: '',
                      agreeToTerms: false
                    });
                  }}
                  className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5" />
                  Book Test Drive
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default About;
