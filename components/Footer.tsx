import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';
import { PageRoute } from '../types';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="bg-primary p-2 rounded-lg">
                <i className="fas fa-tooth text-xl"></i>
              </div>
              <div>
                <span className="block text-xl font-bold leading-none">TEXAS CITY</span>
                <span className="block text-sm font-medium text-slate-400">DENTAL</span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              Experience premium dental care in a relaxing environment. We prioritize your smile and comfort above all else.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><i className="fab fa-facebook-f text-white"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><i className="fab fa-instagram text-white"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><i className="fab fa-google text-white"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to={PageRoute.HOME} className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to={PageRoute.ABOUT} className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to={PageRoute.SERVICES} className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to={PageRoute.CONTACT} className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to={PageRoute.APPOINTMENT} className="hover:text-primary transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span>{BUSINESS_INFO.address}<br/><span className="text-xs text-slate-500">{BUSINESS_INFO.locationInfo}</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">{BUSINESS_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white">{BUSINESS_INFO.hours.weekday}</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Saturday</span>
                <span className="text-slate-500">By Appt Only</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-red-400">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};