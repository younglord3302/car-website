import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load page components for better performance
const Homepage = lazy(() => import('./pages/Homepage'));
const Models = lazy(() => import('./pages/Models'));
const Dealers = lazy(() => import('./pages/Dealers'));
const Design = lazy(() => import('./pages/Design'));
const Innovation = lazy(() => import('./pages/Innovation'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Profile = lazy(() => import('./pages/Profile'));
const CarConfigurator = lazy(() => import('./pages/CarConfigurator'));
const AdminPanel = lazy(() => import('./pages/AdminPanel'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <LoadingSpinner size="lg" />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/models" element={<Models />} />
              <Route path="/dealers" element={<Dealers />} />
              <Route path="/configure/:carId" element={<CarConfigurator />} />
              <Route path="/design" element={<Design />} />
              <Route path="/innovation" element={<Innovation />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
