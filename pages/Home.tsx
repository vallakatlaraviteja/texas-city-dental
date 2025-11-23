import React from 'react';
import { BUSINESS_INFO, SERVICES, DOCTOR, TESTIMONIALS } from '../constants';
import { Button, SectionHeading, Card } from '../components/UIComponents';
import { BookingForm } from '../components/BookingForm';
import { Check, Star, Phone, ShieldCheck, Clock, CreditCard } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80')] bg-cover bg-center"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-sky-200 px-3 py-1 rounded-full text-sm font-semibold mb-6">
                <Star size={14} className="text-yellow-400 fill-current" />
                Rated {BUSINESS_INFO.rating} Stars by {BUSINESS_INFO.reviewCount}+ Patients
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Your Smile. <br/><span className="text-primary">Our Priority.</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
                Modern family & cosmetic dental care trusted by the Texas City community. 
                Experience pain-free dentistry in a luxurious, calming environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/appointment" variant="primary" className="text-lg px-8">Book Appointment</Button>
                <Button to="/contact" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-slate-900">Call Us Now</Button>
              </div>
            </div>
            {/* Hero Image Card */}
            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 bg-primary/30 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Smiling Patient" 
                className="relative rounded-2xl shadow-2xl border-4 border-white/10"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-xl shadow-xl flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="font-bold text-sm">Accepting Insurance</p>
                  <p className="text-xs text-slate-500">Most PPO Plans Covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / INSURANCE BAR */}
      <div className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 font-semibold text-sm mb-4 uppercase tracking-wider">Trusted by patients with insurance from</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {['Aetna', 'Delta Dental', 'Cigna', 'BlueCross', 'MetLife'].map((ins) => (
               <span key={ins} className="text-xl font-bold text-slate-600 font-serif italic">{ins}</span>
             ))}
          </div>
        </div>
      </div>

      {/* 3. FEATURED SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Comprehensive Dental Care" 
            subtitle="From routine checkups to complex cosmetic makeovers, we provide all services under one roof."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Card key={service.id} className="group hover:border-primary/30">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                <a href="#" className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <i className="fas fa-arrow-right text-xs"></i>
                </a>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/services" variant="secondary">View All Services</Button>
          </div>
        </div>
      </section>

      {/* 4. BEFORE & AFTER GALLERY */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Real Results, Real Smiles" subtitle="See the transformations we've achieved for patients in Texas City." />

          <div className="flex justify-center">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Before and After 1" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-xl">Veneers Transformation</span>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold shadow-sm">BEFORE</div>
              <div className="absolute bottom-4 right-4 bg-primary text-white px-3 py-1 rounded text-xs font-bold shadow-sm">AFTER</div>
            </div>
          </div>

        </div>
      </section>


      {/* 5. MEET THE DOCTOR */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-sky-600 rounded-3xl p-8 md:p-16 text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="order-2 lg:order-1">
                <h4 className="text-sky-200 font-bold uppercase tracking-widest mb-2">Meet Your Dentist</h4>
                <h2 className="text-4xl font-bold mb-6">{DOCTOR.name}</h2>
                <h3 className="text-xl font-medium mb-6 text-sky-100">{DOCTOR.role}</h3>
                <p className="text-sky-50 leading-relaxed mb-8 text-lg">
                  "{DOCTOR.bio}"
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {DOCTOR.credentials.map((cred, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="bg-white/20 p-1 rounded-full"><Check size={14} /></div>
                      <span className="text-sm font-medium">{cred}</span>
                    </div>
                  ))}
                </div>
                <Button to="/about" variant="white">Read Full Bio</Button>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full transform rotate-6"></div>
                  <img src={DOCTOR.imageUrl} alt={DOCTOR.name} className="relative rounded-2xl shadow-xl w-72 h-72 lg:w-96 lg:h-96 object-cover border-4 border-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Patients Choose Us" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Modern Technology", desc: "Digital X-rays and 3D imaging.", icon: <i className="fas fa-microscope"></i> },
              { title: "Painless Treatment", desc: "Sedation options for anxiety.", icon: <i className="fas fa-feather"></i> },
              { title: "Expert Team", desc: "Decades of combined experience.", icon: <i className="fas fa-user-md"></i> },
              { title: "Flexible Payment", desc: "0% financing available.", icon: <i className="fas fa-wallet"></i> },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-medical-blue text-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What Our Patients Say" subtitle="We are proud to maintain a 5-star rating." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <Card key={t.id} className="bg-slate-50 border-none">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{t.name}</h5>
                    <span className="text-xs text-slate-400">{t.date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOOKING & LOCATION */}
      <section className="py-20 bg-slate-100" id="book-now">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <BookingForm />
            </div>
            {/* Location Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Visit Our Clinic</h3>
                <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-sky-100 p-3 rounded-full text-primary h-fit"><i className="fas fa-map-marker-alt text-xl"></i></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Address</h4>
                      <p className="text-slate-600">{BUSINESS_INFO.address}</p>
                      <p className="text-sm text-slate-500 mt-1">{BUSINESS_INFO.locationInfo}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-sky-100 p-3 rounded-full text-primary h-fit"><i className="fas fa-phone text-xl"></i></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Phone</h4>
                      <p className="text-slate-600">{BUSINESS_INFO.phone}</p>
                      <p className="text-sm text-slate-500 mt-1">24/7 Emergency Line Available</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-sky-100 p-3 rounded-full text-primary h-fit"><i className="fas fa-clock text-xl"></i></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Hours</h4>
                      <p className="text-slate-600">Mon-Fri: {BUSINESS_INFO.hours.weekday}</p>
                      <p className="text-slate-600">Sat-Sun: {BUSINESS_INFO.hours.weekend}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="bg-slate-300 rounded-xl h-64 w-full flex items-center justify-center overflow-hidden">
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
        </div>
      </section>
    </div>
  );
};

export default Home;