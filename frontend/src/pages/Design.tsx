import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Palette,
  Lightbulb,
  Award,
  Target,
  Sparkles,
  ChevronRight,
  Play,
  Star,
  Zap,
  Shield,
  Brain,
  PenTool,
  Layers,
  Cpu,
  Wrench,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  Settings
} from 'lucide-react';

const Design: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const [selectedColor, setSelectedColor] = useState('sapphire-black');
  const [selectedMaterial, setSelectedMaterial] = useState('carbon-fiber');

  const scrollToProcess = () => {
    const processSection = document.getElementById('design-process');
    processSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const designPrinciples = [
    {
      icon: Target,
      title: 'Form Follows Function',
      description: 'Every curve and line serves a purpose, blending aesthetics with aerodynamics.',
      color: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Dynamic Elegance',
      description: 'The perfect balance of power and grace in motion.',
      color: 'text-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Spirit',
      description: 'Pushing boundaries while respecting automotive heritage.',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Timeless Quality',
      description: 'Design that endures through generations.',
      color: 'text-red-600'
    }
  ];

  const colorPalette = [
    {
      id: 'alpine-white',
      name: 'Alpine White',
      hex: '#FFFFFF',
      price: 0,
      type: 'standard',
      description: 'Classic BMW white with premium pearlescent finish'
    },
    {
      id: 'mineral-white',
      name: 'Mineral White',
      hex: '#F8F8F8',
      price: 550,
      type: 'metallic',
      description: 'Elegant white with subtle metallic shimmer'
    },
    {
      id: 'black-sapphire',
      name: 'Black Sapphire',
      hex: '#000000',
      price: 0,
      type: 'standard',
      description: 'Deep, pure black with exceptional depth'
    },
    {
      id: 'carbon-black',
      name: 'Carbon Black',
      hex: '#1F2937',
      price: 0,
      type: 'standard',
      description: 'Modern matte black finish'
    },
    {
      id: 'tanzanite-blue',
      name: 'Tanzanite Blue',
      hex: '#1E3A8A',
      price: 550,
      type: 'metallic',
      description: 'Striking blue with premium metallic depth'
    },
    {
      id: 'atlantic-blue',
      name: 'Atlantic Blue',
      hex: '#0066CC',
      price: 550,
      type: 'metallic',
      description: 'Ocean-inspired blue with dynamic brilliance'
    },
    {
      id: 'imola-red',
      name: 'Imola Red',
      hex: '#DC2626',
      price: 550,
      type: 'solid',
      description: 'Iconic red inspired by racing heritage'
    },
    {
      id: 'bernstein-grey',
      name: 'Bernstein Grey',
      hex: '#6B7280',
      price: 550,
      type: 'metallic',
      description: 'Sophisticated grey with warm undertones'
    },
    {
      id: 'miami-blue',
      name: 'Miami Blue',
      hex: '#3B82F6',
      price: 550,
      type: 'metallic',
      description: 'Vibrant blue with crystalline sparkle'
    },
    {
      id: 'snapper-rocks-blue',
      name: 'Snapper Rocks Blue',
      hex: '#1E40AF',
      price: 550,
      type: 'metallic',
      description: 'Exclusive blue with unparalleled depth'
    },
    {
      id: 'yas-marina-blue',
      name: 'Yas Marina Blue',
      hex: '#2563EB',
      price: 550,
      type: 'metallic',
      description: 'Exclusive racing-inspired blue'
    },
    {
      id: 'individual-custom',
      name: 'Individual Custom',
      hex: '#F59E0B',
      price: 2500,
      type: 'custom',
      description: 'Create your own unique color specification'
    }
  ];

  const materials = [
    {
      id: 'merino-leather',
      name: 'Merino Full Leather',
      description: 'Premium full-grain leather with diamond-quilted pattern',
      premium: true,
      price: 0,
      category: 'upholstery',
      features: ['Diamond-quilting', 'Perforated details', 'Contrast stitching']
    },
    {
      id: 'dakota-leather',
      name: 'Dakota Full Leather',
      description: 'High-quality leather with sophisticated grain texture',
      premium: true,
      price: 1200,
      category: 'upholstery',
      features: ['Natural grain', 'Premium tanning', 'Long-lasting durability']
    },
    {
      id: 'sensatec',
      name: 'Sensatec Artificial Leather',
      description: 'Sustainable artificial leather with premium feel',
      premium: false,
      price: 0,
      category: 'upholstery',
      features: ['Sustainable', 'Easy maintenance', 'Premium appearance']
    },
    {
      id: 'carbon-fiber',
      name: 'Carbon Fiber Trim',
      description: 'Ultra-lightweight carbon fiber with aerospace technology',
      premium: true,
      price: 2800,
      category: 'trim',
      features: ['Aerospace-grade', 'Ultra-lightweight', 'High-strength']
    },
    {
      id: 'fine-wood-ash',
      name: 'Fine Wood Ash Grain',
      description: 'Handcrafted ash wood with natural grain patterns',
      premium: true,
      price: 1600,
      category: 'trim',
      features: ['Handcrafted', 'Natural grain', 'Premium finish']
    },
    {
      id: 'fine-wood-poplar',
      name: 'Fine Wood Poplar Grain',
      description: 'Elegant poplar wood with sophisticated matte finish',
      premium: true,
      price: 1600,
      category: 'trim',
      features: ['Elegant grain', 'Matte finish', 'Premium feel']
    },
    {
      id: 'brushed-aluminum',
      name: 'Brushed Aluminum',
      description: 'Aircraft-grade aluminum with brushed finish',
      premium: false,
      price: 0,
      category: 'trim',
      features: ['Aircraft-grade', 'Brushed finish', 'Modern aesthetic']
    },
    {
      id: 'high-gloss-piano',
      name: 'High Gloss Piano Black',
      description: 'Premium high-gloss piano black finish',
      premium: true,
      price: 1200,
      category: 'trim',
      features: ['High-gloss finish', 'Piano black', 'Luxury appearance']
    }
  ];

  const [selectedInteriorColor, setSelectedInteriorColor] = useState('black');
  const [selectedTrim, setSelectedTrim] = useState('brushed-aluminum');

  const awards = [
    {
      year: '2024',
      title: 'Red Dot Design Award',
      description: 'Best of the Best for iDrive 9',
      category: 'Product Design'
    },
    {
      year: '2023',
      title: 'iF Design Award',
      description: 'Gold Award for BMW Vision Neue Klasse',
      category: 'Transportation Design'
    },
    {
      year: '2023',
      title: 'Automotive Brand Contest',
      description: 'Design of the Year for BMW i7',
      category: 'Luxury Design'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1920&h=1080&fit=crop"
            alt="BMW Design Studio"
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
              DESIGN
              <br />
              <span className="text-4xl md:text-6xl font-light">THAT MOVES YOU</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto"
            >
              For over a century, BMW has redefined automotive design through innovation,
              craftsmanship, and an unwavering commitment to excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button
                onClick={scrollToProcess}
                className="btn-primary text-lg px-8 py-4 flex items-center gap-3 hover-lift"
              >
                <Sparkles className="h-5 w-5" />
                Explore Our Process
                <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              DESIGN PHILOSOPHY
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every BMW is born from a design philosophy that combines German precision,
              innovative technology, and timeless elegance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-bmw-blue to-bmw-dark text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <principle.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-bmw-text mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id="design-process" className="py-24 bg-gradient-to-br from-bmw-blue via-blue-900 to-bmw-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              OUR DESIGN PROCESS
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From initial concept to final production, every BMW undergoes a meticulous
              design process that combines creativity, technology, and engineering excellence.
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-white/20 to-white/5"></div>

            {[
              {
                step: 1,
                title: 'Research & Inspiration',
                icon: Brain,
                description: 'We begin by studying market trends, customer needs, and emerging technologies. Our design team conducts extensive research to understand what moves our customers.',
                details: ['Customer insights gathering', 'Market trend analysis', 'Technology scouting', 'Competitive analysis'],
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                position: 'left'
              },
              {
                step: 2,
                title: 'Concept Development',
                icon: Lightbulb,
                description: 'Creative brainstorming and initial sketching sessions where our designers explore multiple directions and themes for the new vehicle.',
                details: ['Brainstorming sessions', 'Initial sketches', 'Theme exploration', 'Design language development'],
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
                position: 'right'
              },
              {
                step: 3,
                title: 'Digital Modeling',
                icon: Cpu,
                description: 'Advanced computer-aided design tools create precise 3D models, allowing us to visualize and refine the design in virtual space.',
                details: ['3D CAD modeling', 'Virtual prototyping', 'Design iteration', 'Collaboration tools'],
                image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=400&fit=crop',
                position: 'left'
              },
              {
                step: 4,
                title: 'Clay Modeling',
                icon: PenTool,
                description: 'Physical clay models bring the digital design to life, allowing our designers to feel and refine the proportions and surfaces.',
                details: ['Full-scale clay models', 'Surface refinement', 'Proportion studies', 'Haptic feedback'],
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
                position: 'right'
              },
              {
                step: 5,
                title: 'Wind Tunnel Testing',
                icon: TrendingUp,
                description: 'Aerodynamic testing ensures optimal performance, efficiency, and stability. Every curve affects the vehicle\'s performance.',
                details: ['Aerodynamic optimization', 'Drag coefficient testing', 'Stability analysis', 'Performance validation'],
                image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
                position: 'left'
              },
              {
                step: 6,
                title: 'Interior Design',
                icon: Layers,
                description: 'Creating the perfect harmony between driver, technology, and luxury. Every control and surface is carefully considered.',
                details: ['Ergonomic studies', 'Material selection', 'Interface design', 'Comfort optimization'],
                image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
                position: 'right'
              },
              {
                step: 7,
                title: 'Color & Materials',
                icon: Palette,
                description: 'Final color and material selections that complement the design language and enhance the driving experience.',
                details: ['Color psychology', 'Material sourcing', 'Quality testing', 'Sustainability considerations'],
                image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop',
                position: 'left'
              },
              {
                step: 8,
                title: 'Final Production',
                icon: CheckCircle,
                description: 'The design moves from prototype to production, ensuring every detail meets our uncompromising standards.',
                details: ['Prototype validation', 'Quality control', 'Production preparation', 'Market launch'],
                image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop',
                position: 'right'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: process.position === 'left' ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  process.position === 'left' ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-full md:w-1/2 ${process.position === 'left' ? 'pr-8 md:pr-16' : 'pl-8 md:pl-16'}`}>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <process.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-blue-200 uppercase tracking-wide">
                          Step {process.step}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{process.title}</h3>
                      </div>
                    </div>

                    <p className="text-blue-100 mb-6 leading-relaxed">{process.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Key Activities:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {process.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-300 rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-blue-100">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={process.image}
                        alt={process.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-bmw-blue shadow-lg z-10 flex items-center justify-center">
                  <span className="text-xs font-bold text-bmw-blue">{process.step}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '2-3 Years', label: 'Development Time', icon: Clock },
              { number: '500+', label: 'Design Iterations', icon: PenTool },
              { number: '100+', label: 'Engineers Involved', icon: Users },
              { number: '€7B+', label: 'Annual R&D Investment', icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              GERMAN CRAFTSMANSHIP
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every detail is meticulously crafted by master artisans using traditional techniques
              combined with cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Precision Engineering</h3>
                  <p className="text-gray-300 leading-relaxed">
                    From the laser-etched trim pieces to the perfectly aligned body panels,
                    every element is manufactured to tolerances measured in microns.
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">Sustainable Materials</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We source the finest materials from around the world, prioritizing
                    sustainability and ethical production practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">Quality Assurance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Each vehicle undergoes rigorous testing and inspection before leaving
                    our factories, ensuring unparalleled quality and reliability.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                alt="BMW Craftsmanship"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Color & Material Studio */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              BMW INDIVIDUAL STUDIO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create a BMW that reflects your unique personality with our comprehensive
              customization options, from exterior colors to interior materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            {/* 3D Car Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="xl:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 sticky top-8">
                <h3 className="text-2xl font-bold text-bmw-text mb-6 text-center">Your BMW Configuration</h3>

                {/* Car Visualization */}
                <div className="relative mb-8">
                  <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center border-2 border-gray-300">
                    <img
                      src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop"
                      alt="BMW 3D Visualization"
                      className="rounded-lg object-cover w-full h-full"
                    />
                    {/* Color Overlay */}
                    <div
                      className="absolute inset-0 rounded-lg opacity-80"
                      style={{ backgroundColor: colorPalette.find(c => c.id === selectedColor)?.hex }}
                    ></div>
                  </div>

                  {/* Car Details */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Exterior Color</span>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">
                        {colorPalette.find(c => c.id === selectedColor)?.type}
                      </span>
                    </div>
                    <div className="text-lg font-bold">
                      {colorPalette.find(c => c.id === selectedColor)?.name}
                    </div>
                  </div>
                </div>

                {/* Configuration Summary */}
                <div className="space-y-4">
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-bmw-text mb-3">Configuration Summary</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Exterior Color:</span>
                        <span className="font-medium text-bmw-text">
                          {colorPalette.find(c => c.id === selectedColor)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Upholstery:</span>
                        <span className="font-medium text-bmw-text">
                          {materials.filter(m => m.category === 'upholstery' && m.id === selectedMaterial)[0]?.name || 'Standard'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Interior Trim:</span>
                        <span className="font-medium text-bmw-text">
                          {materials.filter(m => m.category === 'trim' && m.id === selectedTrim)[0]?.name || 'Standard'}
                        </span>
                      </div>
                      <div className="border-t pt-2 mt-3">
                        <div className="flex justify-between font-bold text-bmw-text">
                          <span>Total Customization Cost:</span>
                          <span>
                            ${(
                              (colorPalette.find(c => c.id === selectedColor)?.price || 0) +
                              (materials.find(m => m.category === 'upholstery' && m.id === selectedMaterial)?.price || 0) +
                              (materials.find(m => m.category === 'trim' && m.id === selectedTrim)?.price || 0)
                            ).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-bmw-blue text-white py-3 px-6 rounded-lg hover:bg-bmw-dark transition-colors duration-200 font-semibold flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Save Configuration
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Customization Options */}
            <div className="xl:col-span-2 space-y-12">
              {/* Exterior Colors */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-bmw-text">Exterior Colors</h3>
                    <p className="text-gray-600">Choose from our premium BMW color palette</p>
                  </div>
                </div>

                {/* Color Categories */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {['standard', 'metallic', 'solid', 'custom'].map((type) => (
                      <button
                        key={type}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          ['standard', 'metallic', 'solid', 'custom'].includes(type)
                            ? 'bg-bmw-blue text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)} Colors
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {colorPalette.map((color) => (
                    <motion.button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={`relative p-4 rounded-xl border-2 transition-all duration-300 group ${
                        selectedColor === color.id
                          ? 'border-bmw-blue shadow-lg scale-105'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                      whileHover={{ scale: selectedColor === color.id ? 1.05 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className="w-full h-24 rounded-lg mb-3 border border-gray-300 shadow-inner relative overflow-hidden"
                        style={{ backgroundColor: color.hex }}
                      >
                        {color.type === 'metallic' && (
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        )}
                        {selectedColor === color.id && (
                          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                            <CheckCircle className="h-8 w-8 text-white drop-shadow-lg" />
                          </div>
                        )}
                      </div>

                      <div className="text-center">
                        <h4 className="font-semibold text-sm text-bmw-text mb-1">{color.name}</h4>
                        <div className="flex items-center justify-center gap-2">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            color.type === 'standard' ? 'bg-green-100 text-green-800' :
                            color.type === 'metallic' ? 'bg-blue-100 text-blue-800' :
                            color.type === 'solid' ? 'bg-gray-100 text-gray-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {color.type}
                          </span>
                          {color.price > 0 && (
                            <span className="text-xs font-medium text-gray-500">+${color.price}</span>
                          )}
                        </div>
                      </div>

                      <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-bmw-blue text-white text-xs px-2 py-1 rounded-full font-medium">
                          Select
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Selected Color Details */}
                <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-lg border-2 border-gray-300"
                      style={{ backgroundColor: colorPalette.find(c => c.id === selectedColor)?.hex }}
                    ></div>
                    <div>
                      <p className="font-semibold text-bmw-text">
                        {colorPalette.find(c => c.id === selectedColor)?.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {colorPalette.find(c => c.id === selectedColor)?.description}
                      </p>
                      <p className="text-sm font-medium text-gray-500">
                        {colorPalette.find(c => c.id === selectedColor)?.price === 0
                          ? 'Standard Color'
                          : `Premium Color (+$${colorPalette.find(c => c.id === selectedColor)?.price})`}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Interior Materials */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                {/* Upholstery */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-bmw-text">Upholstery</h3>
                      <p className="text-gray-600">Premium leather and sustainable alternatives</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {materials.filter(m => m.category === 'upholstery').map((material) => (
                      <motion.button
                        key={material.id}
                        onClick={() => setSelectedMaterial(material.id)}
                        className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left group ${
                          selectedMaterial === material.id
                            ? 'border-bmw-blue bg-bmw-light shadow-lg'
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-bold text-lg text-bmw-text pr-2">
                            {material.name}
                          </h4>
                          {material.premium && (
                            <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                          )}
                        </div>

                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{material.description}</p>

                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {material.features.map((feature, index) => (
                              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-medium ${
                            material.price === 0 ? 'text-green-600' : 'text-bmw-blue'
                          }`}>
                            {material.price === 0 ? 'Standard' : `+$${material.price}`}
                          </span>
                          {material.premium && (
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                              Premium
                            </span>
                          )}
                        </div>

                        {selectedMaterial === material.id && (
                          <div className="absolute top-3 right-3">
                            <CheckCircle className="h-6 w-6 text-bmw-blue" />
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Interior Trim */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-bmw-text">Interior Trim</h3>
                      <p className="text-gray-600">Premium materials for dashboard and accents</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {materials.filter(m => m.category === 'trim').map((material) => (
                      <motion.button
                        key={material.id}
                        onClick={() => setSelectedTrim(material.id)}
                        className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-center group ${
                          selectedTrim === material.id
                            ? 'border-bmw-blue bg-bmw-light shadow-lg'
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-full h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 flex items-center justify-center border border-gray-300">
                          <Settings className="h-8 w-8 text-gray-500" />
                        </div>

                        <h4 className="font-bold text-sm text-bmw-text mb-2">{material.name}</h4>
                        <p className="text-gray-600 text-xs mb-3 leading-tight">{material.description}</p>

                        <div className="flex flex-wrap justify-center gap-1 mb-3">
                          {material.features.map((feature, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-center gap-2">
                          <span className={`text-sm font-medium ${
                            material.price === 0 ? 'text-green-600' : 'text-bmw-blue'
                          }`}>
                            {material.price === 0 ? 'Standard' : `+$${material.price}`}
                          </span>
                          {material.premium && (
                            <Star className="h-4 w-4 text-yellow-500" />
                          )}
                        </div>

                        {selectedTrim === material.id && (
                          <div className="absolute top-2 right-2">
                            <CheckCircle className="h-5 w-5 text-bmw-blue" />
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Additional Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-bmw-text mb-8 text-center">BMW Individual Features</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-bmw-blue to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-bmw-text mb-2">Individual Paintwork</h4>
                <p className="text-gray-600 text-sm">Create your own unique color with our custom paint mixing technology</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-bmw-text mb-2">Design Pure Excellence</h4>
                <p className="text-gray-600 text-sm">Exclusive design elements and special edition packages</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-bmw-text mb-2">Personal Consultation</h4>
                <p className="text-gray-600 text-sm">Work with BMW design experts to create your perfect vehicle</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Awards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              DESIGN EXCELLENCE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BMW's commitment to design innovation has earned us recognition from the world's
              most prestigious design institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-bmw-light to-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-bmw-blue" />
                  <span className="text-sm font-semibold text-bmw-blue bg-bmw-light px-3 py-1 rounded-full">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-bmw-text mb-2">{award.title}</h3>
                <p className="text-gray-600 mb-3">{award.description}</p>
                <span className="text-sm text-bmw-blue font-medium">{award.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-bmw-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              EXPERIENCE BMW DESIGN
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
              Visit our design studio or schedule a virtual consultation to explore
              how BMW's design philosophy can bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-bmw-blue hover:bg-gray-100 font-medium px-8 py-4 rounded-sm transition-colors duration-200 uppercase tracking-wide text-lg flex items-center justify-center gap-3">
                <Play className="h-5 w-5" />
                Watch Design Process
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-bmw-blue font-medium px-8 py-4 rounded-sm transition-all duration-200 uppercase tracking-wide text-lg">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Design;
