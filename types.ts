export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface Doctor {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  imageUrl: string;
}

export enum PageRoute {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  CONTACT = '/contact',
  APPOINTMENT = '/appointment',
  BLOG = '/blog',
  TESTIMONIALS = '/testimonials'
}