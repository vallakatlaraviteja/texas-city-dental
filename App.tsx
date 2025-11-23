import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import AppointmentPage from './pages/AppointmentPage';
import ContactPage from './pages/ContactPage';
import { PageRoute } from './types';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path={PageRoute.HOME} element={<Home />} />
            <Route path={PageRoute.SERVICES} element={<ServicesPage />} />
            <Route path={PageRoute.ABOUT} element={<AboutPage />} />
            <Route path={PageRoute.APPOINTMENT} element={<AppointmentPage />} />
            <Route path={PageRoute.CONTACT} element={<ContactPage />} />
            <Route path={PageRoute.TESTIMONIALS} element={<Home />} /> {/* Redirect to home for now as section exists there */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <AIAssistant />
        
        {/* Mobile Floating Call Button */}
        <a 
          href={`tel:${BUSINESS_INFO.phone}`} 
          className="fixed bottom-6 left-6 z-50 md:hidden bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors animate-pulse"
          aria-label="Call Now"
        >
          <Phone size={24} fill="currentColor" />
        </a>
      </div>
    </Router>
  );
};

export default App;