import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Wrench,
  Shield,
  CreditCard,
  Package,
  Car,
  Clock,
  Star,
  CheckCircle,
  ChevronRight,
  Phone,
  MapPin,
  Calendar,
  Award,
  Zap,
  Users,
  HeadphonesIcon,
  Settings,
  Fuel,
  Gauge
} from 'lucide-react';

const Services: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const [selectedService, setSelectedService] = useState('maintenance');
  const [showServiceScheduler, setShowServiceScheduler] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [serviceForm, setServiceForm] = useState({
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    licensePlate: '',
    mileage: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    additionalNotes: '',
    urgency: 'normal'
  });

  const services = [
    {
      id: 'maintenance',
      title: 'Maintenance & Repair',
      icon: Wrench,
      description: 'Comprehensive maintenance and repair services to keep your BMW performing at its best.',
      color: 'from-blue-500 to-cyan-600',
      features: [
        { name: 'Scheduled Maintenance', desc: 'Regular service intervals and inspections', price: 'From $149' },
        { name: 'Diagnostic Services', desc: 'Advanced computer diagnostics', price: 'From $89' },
        { name: 'Brake Service', desc: 'Complete brake system maintenance', price: 'From $199' },
        { name: 'Engine Service', desc: 'Oil changes, filters, and engine maintenance', price: 'From $79' },
        { name: 'Tire Services', desc: 'Rotation, balancing, and replacement', price: 'From $29' }
      ]
    },
    {
      id: 'insurance',
      title: 'BMW Insurance',
      icon: Shield,
      description: 'Comprehensive insurance coverage designed specifically for BMW vehicles and owners.',
      color: 'from-green-500 to-emerald-600',
      features: [
        { name: 'BMW Complete Coverage', desc: 'Full comprehensive insurance', price: 'Custom Quote' },
        { name: 'Theft Protection', desc: 'Advanced anti-theft coverage', price: 'Included' },
        { name: 'Roadside Assistance', desc: '24/7 emergency roadside help', price: 'Included' },
        { name: 'Glass Coverage', desc: 'Windshield and window protection', price: 'From $15/mo' },
        { name: 'Rental Reimbursement', desc: 'Vehicle rental during repairs', price: 'From $25/mo' }
      ]
    },
    {
      id: 'financing',
      title: 'Financing & Leasing',
      icon: CreditCard,
      description: 'Flexible financing options and leasing programs tailored to your BMW ownership needs.',
      color: 'from-purple-500 to-indigo-600',
      features: [
        { name: 'BMW Financial Services', desc: 'Competitive financing rates', price: 'Starting 1.9% APR' },
        { name: 'Lease Programs', desc: 'Flexible lease terms', price: 'From $499/mo' },
        { name: 'Pre-Owned Financing', desc: 'Special rates for certified pre-owned', price: 'Starting 2.9% APR' },
        { name: 'BMW Credit Card', desc: 'Earn rewards on purchases', price: 'Free to Apply' },
        { name: 'Extended Warranty', desc: 'Additional coverage options', price: 'Custom Quote' }
      ]
    },
    {
      id: 'accessories',
      title: 'Genuine Accessories',
      icon: Package,
      description: 'Premium accessories and parts designed specifically for your BMW.',
      color: 'from-orange-500 to-red-600',
      features: [
        { name: 'Exterior Accessories', desc: 'Aerodynamic kits and styling', price: 'From $99' },
        { name: 'Interior Upgrades', desc: 'Premium leather and trim options', price: 'From $299' },
        { name: 'Technology Packages', desc: 'Navigation, audio, and connectivity', price: 'From $499' },
        { name: 'Performance Parts', desc: 'Sport suspension and exhaust', price: 'From $199' },
        { name: 'Cargo Solutions', desc: 'Roof racks and cargo boxes', price: 'From $149' }
      ]
    }
  ];

  const serviceCenters = [
    {
      name: 'BMW of Downtown',
      address: '123 Luxury Lane, Downtown, NY 10001',
      phone: '(555) 123-4567',
      hours: 'Mon-Fri: 7AM-7PM, Sat: 8AM-5PM',
      services: ['Full Service', 'Body Shop', 'Detailing', 'Parts'],
      rating: 4.9,
      distance: '0.5 miles'
    },
    {
      name: 'BMW Service Center North',
      address: '456 Premium Blvd, North District, NY 10002',
      phone: '(555) 234-5678',
      hours: 'Mon-Sat: 7AM-6PM, Sun: 9AM-4PM',
      services: ['Maintenance', 'Repairs', 'Parts', 'Tires'],
      rating: 4.8,
      distance: '2.3 miles'
    },
    {
      name: 'BMW Premium Service',
      address: '789 Elite Drive, Premium Area, NY 10003',
      phone: '(555) 345-6789',
      hours: 'Mon-Fri: 6AM-8PM, Sat-Sun: 8AM-6PM',
      services: ['Full Service', '24hr Towing', 'Mobile Service', 'Parts'],
      rating: 4.9,
      distance: '3.1 miles'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      car: 'BMW X5',
      rating: 5,
      comment: 'Exceptional service at BMW Downtown. They took great care of my X5 and the staff was incredibly knowledgeable.',
      service: 'Maintenance'
    },
    {
      name: 'Michael Chen',
      car: 'BMW 3 Series',
      rating: 5,
      comment: 'The financing team made getting my dream car a reality. Competitive rates and excellent customer service.',
      service: 'Financing'
    },
    {
      name: 'Emily Rodriguez',
      car: 'BMW i4',
      rating: 5,
      comment: 'Outstanding insurance coverage specifically designed for my BMW. Peace of mind knowing I\'m protected.',
      service: 'Insurance'
    }
  ];

  const activeService = services.find(service => service.id === selectedService);

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
            src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1920&h=1080&fit=crop"
            alt="BMW Service Center"
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
              BMW
              <br />
              <span className="text-4xl md:text-6xl font-light">SERVICE EXCELLENCE</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto"
            >
              Comprehensive service solutions designed to maintain your BMW's
              performance, safety, and luxury for years to come.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button
                onClick={() => setShowServiceScheduler(true)}
                className="btn-primary text-lg px-8 py-4 flex items-center gap-3 hover-lift"
              >
                <Calendar className="h-5 w-5" />
                Schedule Service Online
                <ChevronRight className="h-5 w-5" />
              </button>
              <Link
                to="/dealers"
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                Find a Dealer
                <ChevronRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Service Icons Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-20 left-10 z-20"
        >
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <Wrench className="h-6 w-6 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="absolute bottom-32 right-16 z-20"
        >
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <Shield className="h-6 w-6 text-white" />
          </div>
        </motion.div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              COMPLETE BMW SERVICES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to premium accessories, we provide comprehensive
              services to keep your BMW performing at its absolute best.
            </p>
          </motion.div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedService === service.id
                    ? 'bg-bmw-blue text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <service.icon className="h-5 w-5" />
                {service.title}
              </motion.button>
            ))}
          </div>

          {/* Active Service Content */}
          {activeService && (
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${activeService.color} text-white rounded-full mb-6`}>
                    <activeService.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-bmw-text mb-4">{activeService.title}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{activeService.description}</p>

                  <div className="space-y-4">
                    {activeService.features.map((feature, index) => (
                      <motion.div
                        key={feature.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-bmw-text">{feature.name}</h4>
                            <p className="text-sm text-gray-600">{feature.desc}</p>
                          </div>
                        </div>
                        <span className="text-bmw-blue font-bold text-sm">{feature.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&sat=${
                      selectedService === 'maintenance' ? '0' :
                      selectedService === 'insurance' ? '10' :
                      selectedService === 'financing' ? '20' :
                      '30'
                    }`}
                    alt={activeService.title}
                    className="rounded-xl shadow-2xl w-full"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activeService.color} opacity-10 rounded-xl`}></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Service Centers */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              AUTHORIZED SERVICE CENTERS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified technicians and state-of-the-art facilities ensure your BMW
              receives the premium care it deserves.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCenters.map((center, index) => (
              <motion.div
                key={center.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-bmw-blue to-bmw-dark flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-white" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-bmw-text">{center.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{center.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{center.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{center.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{center.hours}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Services Offered:</p>
                    <div className="flex flex-wrap gap-2">
                      {center.services.map((service) => (
                        <span
                          key={service}
                          className="px-2 py-1 bg-bmw-light text-bmw-blue text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{center.distance}</span>
                    <button className="text-bmw-blue hover:text-bmw-dark font-semibold text-sm flex items-center gap-1">
                      Get Directions
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              CUSTOMER EXPERIENCES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from BMW owners who have experienced our exceptional service and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-bmw-text">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.car} Owner</p>
                  </div>
                  <span className="text-xs bg-bmw-light text-bmw-blue px-3 py-1 rounded-full font-medium">
                    {testimonial.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-24 bg-bmw-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              WHY CHOOSE BMW SERVICE
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the difference that comes with BMW-trained technicians,
              genuine parts, and unparalleled customer care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Certified Technicians',
                description: 'Factory-trained BMW specialists with years of experience.'
              },
              {
                icon: Settings,
                title: 'Genuine BMW Parts',
                description: 'Only authentic BMW parts and accessories for optimal performance.'
              },
              {
                icon: Clock,
                title: 'Express Service',
                description: 'Fast-track service options for busy schedules.'
              },
              {
                icon: HeadphonesIcon,
                title: '24/7 Support',
                description: 'Round-the-clock assistance whenever you need it.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
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
              READY FOR BMW SERVICE?
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
              Schedule your service appointment today and experience the BMW difference.
              Your satisfaction is our priority.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => setShowServiceScheduler(true)}
                className="bg-white text-bmw-blue hover:bg-gray-100 font-medium px-8 py-4 rounded-sm transition-colors duration-200 uppercase tracking-wide text-lg flex items-center justify-center gap-3"
              >
                <Calendar className="h-5 w-5" />
                Schedule Service Online
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-bmw-blue font-medium px-8 py-4 rounded-sm transition-all duration-200 uppercase tracking-wide text-lg">
                Call (555) BMW-SERVICE
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Scheduler Modal */}
      {showServiceScheduler && (
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
                  <h2 className="text-2xl font-bold">Schedule BMW Service Online</h2>
                  <p className="text-blue-100 mt-1">Book your appointment in just a few simple steps</p>
                </div>
                <button
                  onClick={() => {
                    setShowServiceScheduler(false);
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
                  { step: 1, title: 'Service Type', desc: 'Choose service' },
                  { step: 2, title: 'Date & Time', desc: 'Select appointment' },
                  { step: 3, title: 'Vehicle Info', desc: 'Enter details' },
                  { step: 4, title: 'Contact Info', desc: 'Your information' },
                  { step: 5, title: 'Confirm', desc: 'Review & submit' }
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
                    {index < 4 && (
                      <div className={`w-12 h-0.5 mx-4 ${currentStep > step.step ? 'bg-white' : 'bg-white/20'}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 max-h-[calc(90vh-200px)] overflow-y-auto">
              {/* Step 1: Service Type */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-bmw-text mb-4">What service do you need?</h3>
                    <p className="text-gray-600 mb-6">Select the type of service that best fits your needs</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: 'maintenance', name: 'Scheduled Maintenance', icon: Wrench, desc: 'Regular service intervals and inspections' },
                      { id: 'repair', name: 'Repair Service', icon: Settings, desc: 'Diagnostic and repair services' },
                      { id: 'emergency', name: 'Emergency Repair', icon: Zap, desc: 'Urgent repairs and roadside assistance' },
                      { id: 'inspection', name: 'Vehicle Inspection', icon: CheckCircle, desc: 'Comprehensive vehicle assessment' },
                      { id: 'tires', name: 'Tire Services', icon: Gauge, desc: 'Tire rotation, balancing, and replacement' },
                      { id: 'other', name: 'Other Services', icon: Package, desc: 'Custom requests and consultations' }
                    ].map((service) => (
                      <button
                        key={service.id}
                        onClick={() => {
                          setServiceForm({ ...serviceForm, serviceType: service.id });
                          setCurrentStep(2);
                        }}
                        className="p-6 border-2 border-gray-200 rounded-xl hover:border-bmw-blue hover:bg-bmw-light transition-all duration-300 text-left group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-bmw-blue text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <service.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-bmw-text mb-1">{service.name}</h4>
                            <p className="text-sm text-gray-600">{service.desc}</p>
                          </div>
                        </div>
                      </button>
                    ))}
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
                    <p className="text-gray-600 mb-6">Choose your preferred appointment date and time</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                      <input
                        type="date"
                        value={serviceForm.preferredDate}
                        onChange={(e) => setServiceForm({ ...serviceForm, preferredDate: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                      <select
                        value={serviceForm.preferredTime}
                        onChange={(e) => setServiceForm({ ...serviceForm, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                      >
                        <option value="">Select time</option>
                        <option value="08:00">8:00 AM</option>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Location</label>
                    <select
                      value={serviceForm.location}
                      onChange={(e) => setServiceForm({ ...serviceForm, location: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                    >
                      <option value="">Select a location</option>
                      <option value="downtown">BMW of Downtown - 123 Luxury Lane</option>
                      <option value="north">BMW Service Center North - 456 Premium Blvd</option>
                      <option value="premium">BMW Premium Service - 789 Elite Drive</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                    <div className="flex gap-4">
                      {[
                        { value: 'normal', label: 'Normal', desc: 'Standard scheduling' },
                        { value: 'urgent', label: 'Urgent', desc: 'Within 3 days' },
                        { value: 'emergency', label: 'Emergency', desc: 'Same day if possible' }
                      ].map((urgency) => (
                        <button
                          key={urgency.value}
                          onClick={() => setServiceForm({ ...serviceForm, urgency: urgency.value })}
                          className={`flex-1 p-4 border-2 rounded-lg text-left transition-all ${
                            serviceForm.urgency === urgency.value
                              ? 'border-bmw-blue bg-bmw-light'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="font-medium text-bmw-text">{urgency.label}</div>
                          <div className="text-sm text-gray-600">{urgency.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Vehicle Information */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-bmw-text mb-4">Vehicle Information</h3>
                    <p className="text-gray-600 mb-6">Tell us about your BMW so we can better prepare for your service</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Make *</label>
                      <select
                        value={serviceForm.vehicleMake}
                        onChange={(e) => setServiceForm({ ...serviceForm, vehicleMake: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                      >
                        <option value="">Select make</option>
                        <option value="BMW">BMW</option>
                        <option value="MINI">MINI</option>
                        <option value="Rolls-Royce">Rolls-Royce</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Model *</label>
                      <select
                        value={serviceForm.vehicleModel}
                        onChange={(e) => setServiceForm({ ...serviceForm, vehicleModel: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                      >
                        <option value="">Select model</option>
                        <option value="3 Series">3 Series</option>
                        <option value="5 Series">5 Series</option>
                        <option value="7 Series">7 Series</option>
                        <option value="X3">X3</option>
                        <option value="X5">X5</option>
                        <option value="X7">X7</option>
                        <option value="i4">i4</option>
                        <option value="i7">i7</option>
                        <option value="iX">iX</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
                      <select
                        value={serviceForm.vehicleYear}
                        onChange={(e) => setServiceForm({ ...serviceForm, vehicleYear: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                      >
                        <option value="">Select year</option>
                        {Array.from({ length: 10 }, (_, i) => {
                          const year = new Date().getFullYear() - i;
                          return <option key={year} value={year}>{year}</option>;
                        })}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">License Plate</label>
                      <input
                        type="text"
                        value={serviceForm.licensePlate}
                        onChange={(e) => setServiceForm({ ...serviceForm, licensePlate: e.target.value })}
                        placeholder="ABC-1234"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Mileage</label>
                    <input
                      type="number"
                      value={serviceForm.mileage}
                      onChange={(e) => setServiceForm({ ...serviceForm, mileage: e.target.value })}
                      placeholder="e.g., 45000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-bmw-text mb-4">Contact Information</h3>
                    <p className="text-gray-600 mb-6">We'll use this information to confirm your appointment</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={serviceForm.customerName}
                        onChange={(e) => setServiceForm({ ...serviceForm, customerName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={serviceForm.customerEmail}
                        onChange={(e) => setServiceForm({ ...serviceForm, customerEmail: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={serviceForm.customerPhone}
                      onChange={(e) => setServiceForm({ ...serviceForm, customerPhone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                    <textarea
                      value={serviceForm.additionalNotes}
                      onChange={(e) => setServiceForm({ ...serviceForm, additionalNotes: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                      placeholder="Any specific issues, concerns, or additional information..."
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 5: Confirmation */}
              {currentStep === 5 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-bmw-text mb-4">Confirm Your Appointment</h3>
                    <p className="text-gray-600 mb-6">Please review your service request details</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-bmw-text mb-3">Service Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Service Type:</span>
                            <span className="font-medium capitalize">{serviceForm.serviceType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Date:</span>
                            <span className="font-medium">{serviceForm.preferredDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Time:</span>
                            <span className="font-medium">{serviceForm.preferredTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Urgency:</span>
                            <span className="font-medium capitalize">{serviceForm.urgency}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-bmw-text mb-3">Vehicle Information</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Vehicle:</span>
                            <span className="font-medium">{serviceForm.vehicleYear} {serviceForm.vehicleMake} {serviceForm.vehicleModel}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Mileage:</span>
                            <span className="font-medium">{serviceForm.mileage} miles</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">License Plate:</span>
                            <span className="font-medium">{serviceForm.licensePlate}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-bmw-text mb-3">Contact Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Name:</span>
                          <span className="font-medium">{serviceForm.customerName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Email:</span>
                          <span className="font-medium">{serviceForm.customerEmail}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Phone:</span>
                          <span className="font-medium">{serviceForm.customerPhone}</span>
                        </div>
                      </div>
                    </div>

                    {serviceForm.additionalNotes && (
                      <div>
                        <h4 className="font-bold text-bmw-text mb-3">Additional Notes</h4>
                        <p className="text-sm text-gray-700 bg-white p-3 rounded-lg">{serviceForm.additionalNotes}</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">What happens next?</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• You'll receive a confirmation email within 30 minutes</li>
                          <li>• Our service advisor will call to confirm details</li>
                          <li>• We'll send reminders 24 hours before your appointment</li>
                          <li>• You can modify or cancel your appointment anytime</li>
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
                Step {currentStep} of 5
              </div>

              {currentStep < 5 ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={
                    (currentStep === 1 && !serviceForm.serviceType) ||
                    (currentStep === 2 && (!serviceForm.preferredDate || !serviceForm.preferredTime || !serviceForm.location || !serviceForm.urgency)) ||
                    (currentStep === 3 && (!serviceForm.vehicleMake || !serviceForm.vehicleModel || !serviceForm.vehicleYear)) ||
                    (currentStep === 4 && (!serviceForm.customerName || !serviceForm.customerEmail || !serviceForm.customerPhone))
                  }
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    (currentStep === 1 && !serviceForm.serviceType) ||
                    (currentStep === 2 && (!serviceForm.preferredDate || !serviceForm.preferredTime || !serviceForm.location || !serviceForm.urgency)) ||
                    (currentStep === 3 && (!serviceForm.vehicleMake || !serviceForm.vehicleModel || !serviceForm.vehicleYear)) ||
                    (currentStep === 4 && (!serviceForm.customerName || !serviceForm.customerEmail || !serviceForm.customerPhone))
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
                    alert('Thank you! Your service appointment has been scheduled. You will receive a confirmation email shortly.');
                    setShowServiceScheduler(false);
                    setCurrentStep(1);
                    setServiceForm({
                      serviceType: '',
                      preferredDate: '',
                      preferredTime: '',
                      location: '',
                      vehicleMake: '',
                      vehicleModel: '',
                      vehicleYear: '',
                      licensePlate: '',
                      mileage: '',
                      customerName: '',
                      customerEmail: '',
                      customerPhone: '',
                      additionalNotes: '',
                      urgency: 'normal'
                    });
                  }}
                  className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5" />
                  Schedule Appointment
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Services;
