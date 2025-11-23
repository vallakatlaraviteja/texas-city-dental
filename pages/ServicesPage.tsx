import React from 'react';
import { SectionHeading, Card, Button } from '../components/UIComponents';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="bg-secondary text-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Dental Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">World-class dental care using the latest technology for your comfort and health.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-8 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <img 
                   src={`https://picsum.photos/seed/${service.id}/600/400`} 
                   alt={service.title} 
                   className="rounded-2xl shadow-lg w-full object-cover h-64 lg:h-80" 
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="text-4xl">{service.icon}</div>
                <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description} We use state-of-the-art equipment to ensure precise results and minimal discomfort.
                  Whether you need routine maintenance or complex restoration, our team is ready to help.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                   <li className="flex items-center gap-2 text-slate-700"><Check size={16} className="text-primary"/> Comprehensive Exam</li>
                   <li className="flex items-center gap-2 text-slate-700"><Check size={16} className="text-primary"/> Personalized Plan</li>
                   <li className="flex items-center gap-2 text-slate-700"><Check size={16} className="text-primary"/> Post-Op Care</li>
                   <li className="flex items-center gap-2 text-slate-700"><Check size={16} className="text-primary"/> Warranty on Lab Work</li>
                </ul>
                <div className="pt-4">
                  <Button to="/appointment">Book {service.title}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;