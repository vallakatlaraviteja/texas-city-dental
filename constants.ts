import { Service, Testimonial, Doctor } from './types';

export const BUSINESS_INFO = {
  name: "Texas City Dental",
  phone: "+1 409-419-2222",
  address: "3448 Palmer Hwy, Texas City, TX 77590",
  locationInfo: "Located in Palmer Plaza",
  rating: 4.8,
  reviewCount: 698,
  email: "info@txcitydental.com",
  hours: {
    weekday: "9:00 AM - 6:00 PM",
    weekend: "Closed / Emergency Only"
  }
};

export const SERVICES: Service[] = [
  { id: 'cosmetic', title: 'Cosmetic Dentistry', description: 'Transform your smile with veneers, bonding, and smile makeovers.', icon: '✨' },
  { id: 'implants', title: 'Dental Implants', description: 'Permanent, natural-looking solutions for missing teeth.', icon: '🦷' },
  { id: 'ortho', title: 'Braces & Invisalign', description: 'Straighten teeth discreetly with modern clear aligners.', icon: '😁' },
  { id: 'emergency', title: 'Emergency Care', description: 'Same-day appointments for toothaches and dental trauma.', icon: '🚨' },
  { id: 'whitening', title: 'Teeth Whitening', description: 'Professional brightening for a radiant, confident smile.', icon: '💎' },
  { id: 'pediatric', title: 'Pediatric Dentistry', description: 'Gentle, fun, and caring dental experiences for children.', icon: '🧸' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Sarah Jenkins", rating: 5, text: "Absolutely the best dental experience I've ever had. The staff is incredibly friendly and Dr. Smith was so gentle.", date: "2 weeks ago" },
  { id: 2, name: "Michael Rodriguez", rating: 5, text: "I was terrified of the dentist but Texas City Dental changed that. Painless root canal and great recovery.", date: "1 month ago" },
  { id: 3, name: "Emily Chen", rating: 5, text: "Brought my kids here and they actually loved it! The pediatric team is amazing.", date: "3 weeks ago" },
];

export const DOCTOR: Doctor = {
  name: "Dr. James Wilson",
  role: "Lead Dentist & Cosmetic Specialist",
  bio: "Dr. Wilson has been serving the Texas City community for over 15 years with a focus on patient comfort and modern cosmetic techniques.",
  credentials: ["DDS - University of Texas", "Member of ADA", "Certified Invisalign Provider"],
  imageUrl: "https://picsum.photos/id/1062/400/400"
};