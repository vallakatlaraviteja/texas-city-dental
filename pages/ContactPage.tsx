import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16 text-slate-900">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center">
             <div className="w-16 h-16 bg-sky-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4"><Phone size={32}/></div>
             <h3 className="text-xl font-bold mb-2">Phone</h3>
             <p className="text-slate-600 mb-4">Available during business hours</p>
             <a href={`tel:${BUSINESS_INFO.phone}`} className="text-xl font-bold text-primary hover:text-sky-700">{BUSINESS_INFO.phone}</a>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center">
             <div className="w-16 h-16 bg-sky-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4"><MapPin size={32}/></div>
             <h3 className="text-xl font-bold mb-2">Location</h3>
             <p className="text-slate-600 mb-4">{BUSINESS_INFO.locationInfo}</p>
             <p className="font-medium text-slate-800">{BUSINESS_INFO.address}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center">
             <div className="w-16 h-16 bg-sky-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4"><Clock size={32}/></div>
             <h3 className="text-xl font-bold mb-2">Hours</h3>
             <p className="text-slate-600">Mon-Fri: {BUSINESS_INFO.hours.weekday}</p>
             <p className="text-slate-600 mt-2">Sat-Sun: {BUSINESS_INFO.hours.weekend}</p>
          </div>
        </div>

        <div className="bg-slate-200 rounded-xl overflow-hidden h-96 shadow-inner">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.639992383184!2d-94.94586468489726!3d29.38798198212456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f639014197029%3A0xc3b865529452277d!2s3448%20Palmer%20Hwy%2C%20Texas%20City%2C%20TX%2077590%2C%20USA!5e0!3m2!1sen!2s!4v1652300000000!5m2!1sen!2s" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;