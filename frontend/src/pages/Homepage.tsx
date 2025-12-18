import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Award, Shield, Settings, Calendar, MapPin, Car, CheckCircle, Clock } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';

const Homepage: React.FC = () => {
  const navigate = useNavigate();
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

  const featuredCars = [
    {
      id: 'x5',
      name: 'BMW X5',
      tagline: 'The Ultimate Sports Activity Vehicle',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      price: 'Starting at $59,400',
    },
    {
      id: '3series',
      name: 'BMW 3 Series',
      tagline: 'The Ultimate Driving Machine',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      price: 'Starting at $43,300',
    },
    {
      id: 'x3',
      name: 'BMW X3',
      tagline: 'Born to lead the pack',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      price: 'Starting at $47,600',
    },
  ];

  const features = [
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Crafted with precision and attention to every detail.',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized globally for innovation and excellence.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Advanced safety features to protect what matters most.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&h=1080&fit=crop)',
          }}
        />

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text mb-6"
          >
            THE ULTIMATE
            <br />
            DRIVING MACHINE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Experience the perfect blend of luxury, performance, and innovation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/models')}
              className="btn-primary flex items-center justify-center gap-2 hover-lift interactive-scale"
            >
              Explore Models <ArrowRight size={16} />
            </button>
            <button
              onClick={() => setShowTestDriveModal(true)}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Car className="h-4 w-4" />
              Book a Test Drive
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Models</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular vehicles, each designed to deliver an unparalleled driving experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-bmw-text mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-4">{car.tagline}</p>
                  <p className="text-bmw-blue font-semibold">{car.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose BMW</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              For over a century, BMW has been at the forefront of automotive innovation, delivering vehicles that combine performance, luxury, and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-bmw-blue text-white rounded-full mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-bmw-text mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bmw-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience BMW?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Visit your nearest BMW center or schedule a virtual consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/dealers')}
              className="bg-white text-bmw-blue hover:bg-gray-100 font-medium px-8 py-4 rounded-sm transition-colors duration-200 uppercase tracking-wide flex items-center justify-center gap-2 hover-lift"
            >
              Find a Dealer
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border border-white text-white hover:bg-white hover:text-bmw-blue font-medium px-8 py-4 rounded-sm transition-all duration-200 uppercase tracking-wide flex items-center justify-center gap-2"
            >
              Contact Us
              <ArrowRight size={16} />
            </button>
          </div>
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

export default Homepage;
