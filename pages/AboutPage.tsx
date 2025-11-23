import React from 'react';
import { DOCTOR } from '../constants';
import { SectionHeading } from '../components/UIComponents';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">About Texas City Dental</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Providing compassionate, high-quality dental care to families in Texas City for over 15 years.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Philosophy</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Texas City Dental, we believe that a visit to the dentist should be a positive, empowering experience. 
              We've designed our clinic to feel less like a medical office and more like a wellness center.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              From our comfortable waiting area to our advanced treatment rooms, every detail is focused on your comfort.
              We utilize the latest technology to ensure your treatments are efficient, effective, and as pain-free as possible.
            </p>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-primary/20 rounded-xl transform rotate-3"></div>
             <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="relative rounded-xl shadow-lg w-full" alt="Clinic Interior" />
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
           <SectionHeading title="Meet Dr. Wilson" center />
           <div className="flex flex-col md:flex-row gap-8 items-center">
              <img src={DOCTOR.imageUrl} alt={DOCTOR.name} className="w-64 h-64 object-cover rounded-full border-8 border-white shadow-xl" />
              <div className="text-center md:text-left">
                 <h3 className="text-2xl font-bold text-slate-900">{DOCTOR.name}</h3>
                 <p className="text-primary font-medium mb-4">{DOCTOR.role}</p>
                 <p className="text-slate-600 mb-6 max-w-2xl">{DOCTOR.bio} Dr. Wilson is committed to continuing education, ensuring that Texas City Dental remains at the forefront of dental medicine.</p>
                 <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    {DOCTOR.credentials.map((c,i) => (
                       <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-bold text-slate-600 shadow-sm border border-slate-200">{c}</span>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;