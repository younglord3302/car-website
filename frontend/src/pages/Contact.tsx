import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  HelpCircle,
  ChevronRight,
  CheckCircle,
  Star,
  Calendar,
  Car,
  Wrench,
  HeadphonesIcon
} from 'lucide-react';

const Contact: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our BMW specialists',
      primary: '(555) BMW-CARS',
      secondary: 'Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-6PM',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your inquiries',
      primary: 'info@bmw-motors.com',
      secondary: 'Response within 24 hours',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant support through our online chat',
      primary: 'Available 24/7',
      secondary: 'Average response: 2 minutes',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const locations = [
    {
      name: 'BMW Downtown Showroom',
      address: '123 Luxury Lane, Downtown, NY 10001',
      phone: '(555) 123-4567',
      hours: 'Mon-Fri: 9AM-9PM, Sat: 9AM-7PM, Sun: 11AM-6PM',
      services: ['Sales', 'Service', 'Parts'],
      distance: '0.5 miles'
    },
    {
      name: 'BMW Service Center',
      address: '456 Premium Blvd, Midtown, NY 10002',
      phone: '(555) 234-5678',
      hours: 'Mon-Fri: 7AM-7PM, Sat: 8AM-5PM',
      services: ['Service', 'Parts', 'Express Service'],
      distance: '2.1 miles'
    },
    {
      name: 'BMW Financial Services',
      address: '789 Elite Drive, Financial District, NY 10003',
      phone: '(555) 345-6789',
      hours: 'Mon-Fri: 9AM-6PM',
      services: ['Financing', 'Leasing', 'Insurance'],
      distance: '1.8 miles'
    }
  ];

  const faqs = [
    {
      question: 'How do I schedule a service appointment?',
      answer: 'You can schedule a service appointment by calling our service center at (555) BMW-SERVICE, using our online booking system, or visiting any BMW authorized dealer. We recommend booking in advance, especially during peak seasons.'
    },
    {
      question: 'What is covered under BMW warranty?',
      answer: 'BMW vehicles come with a comprehensive warranty covering 4 years/50,000 miles for most models. This includes powertrain components, corrosion protection, and roadside assistance. Extended warranty options are also available.'
    },
    {
      question: 'Do you offer test drives?',
      answer: 'Yes, we offer complimentary test drives for all BMW models. Please call ahead to schedule your preferred time and vehicle. A valid driver\'s license and proof of insurance are required.'
    },
    {
      question: 'How do I find my nearest BMW dealer?',
      answer: 'You can find your nearest BMW dealer using our dealer locator on this page, calling our main line, or visiting our website. We have authorized dealers throughout the United States and many international locations.'
    },
    {
      question: 'What financing options are available?',
      answer: 'BMW offers competitive financing through BMW Financial Services with rates starting at 1.9% APR. We also provide lease options, pre-owned financing, and special promotions. Our financial specialists can help you find the best option for your needs.'
    },
    {
      question: 'Can I purchase BMW parts online?',
      answer: 'Yes, genuine BMW parts can be ordered through our authorized dealers or online parts portal. We recommend using only genuine BMW parts to maintain your vehicle\'s performance, safety, and warranty coverage.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      preferredContact: 'email'
    });
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
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
            alt="BMW Contact Center"
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
              GET IN TOUCH
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto"
            >
              Ready to experience the ultimate driving machine? Our team of BMW experts
              is here to help you every step of the way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button className="btn-primary text-lg px-8 py-4 flex items-center gap-3 hover-lift">
                <Phone className="h-5 w-5" />
                Call Now: (555) BMW-CARS
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Contact Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-20 left-10 z-20"
        >
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <Phone className="h-6 w-6 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="absolute bottom-32 right-16 z-20"
        >
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <Mail className="h-6 w-6 text-white" />
          </div>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              CONTACT BMW
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose the method that works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.color} text-white rounded-full mb-6`}>
                  <method.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-bmw-text mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-lg text-bmw-blue">{method.primary}</p>
                  <p className="text-sm text-gray-500">{method.secondary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Locations */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-3xl font-bold text-bmw-text mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact</label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-bmw-blue text-white py-4 px-8 rounded-lg hover:bg-bmw-dark transition-colors duration-200 font-semibold flex items-center justify-center gap-3"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Locations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-bmw-text mb-6">Visit Our Locations</h3>

              {locations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-bmw-text mb-2">{location.name}</h4>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{location.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">{location.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{location.hours}</span>
                      </div>
                    </div>
                    <span className="text-sm text-bmw-blue font-semibold">{location.distance}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {location.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 bg-bmw-light text-bmw-blue text-xs rounded-full font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-bmw-blue text-white py-2 px-4 rounded-lg hover:bg-bmw-dark transition-colors duration-200 font-semibold text-sm flex items-center justify-center gap-2">
                    Get Directions
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bmw-text mb-6">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about BMW vehicles, services, and ownership.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-semibold text-bmw-text">{faq.question}</span>
                  <ChevronRight
                    className={`h-5 w-5 text-bmw-blue transition-transform duration-200 ${
                      activeFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {activeFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-24 bg-bmw-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <HeadphonesIcon className="h-10 w-10 text-white" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              NEED IMMEDIATE ASSISTANCE?
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
              Our 24/7 roadside assistance is available whenever you need help.
              Don't wait - call now for immediate support.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-bmw-blue hover:bg-gray-100 font-medium px-8 py-4 rounded-sm transition-colors duration-200 uppercase tracking-wide text-lg flex items-center justify-center gap-3">
                <Phone className="h-5 w-5" />
                Call Roadside Assistance
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-bmw-blue font-medium px-8 py-4 rounded-sm transition-all duration-200 uppercase tracking-wide text-lg">
                Emergency Contact Info
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
