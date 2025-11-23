import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { PageRoute } from '../types';
import { Button } from './UIComponents';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: PageRoute.HOME },
    { name: 'Services', path: PageRoute.SERVICES },
    { name: 'About Us', path: PageRoute.ABOUT },
    { name: 'Testimonials', path: PageRoute.TESTIMONIALS },
    { name: 'Contact', path: PageRoute.CONTACT },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:block bg-secondary text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <span><i className="fas fa-map-marker-alt mr-2 text-primary"></i>{BUSINESS_INFO.locationInfo}</span>
            <span><i className="fas fa-clock mr-2 text-primary"></i>{BUSINESS_INFO.hours.weekday}</span>
          </div>
          <div className="flex gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-primary transition-colors">
              <Phone size={14} className="inline mr-1" /> {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-sky-600 transition-colors">
                <i className="fas fa-tooth text-xl"></i>
              </div>
              <div>
                <span className="block text-xl font-bold text-slate-900 leading-none tracking-tight">TEXAS CITY</span>
                <span className="block text-sm font-medium text-slate-500 tracking-widest">DENTAL</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide transition-colors ${
                    isActive(link.path) ? 'text-primary' : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  {link.name.toUpperCase()}
                </Link>
              ))}
              <Button to={PageRoute.APPOINTMENT} variant="primary" className="!py-2 !px-4 text-sm gap-2">
                <Calendar size={16} /> Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-primary p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-sky-50 text-primary'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                 <Button to={PageRoute.APPOINTMENT} onClick={() => setIsOpen(false)} fullWidth>
                    Book Appointment
                 </Button>
                 <a href={`tel:${BUSINESS_INFO.phone}`} className="w-full bg-secondary text-white py-3 rounded-lg text-center font-bold flex items-center justify-center gap-2">
                    <Phone size={18} /> Call Now
                 </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};