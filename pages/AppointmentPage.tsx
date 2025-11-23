import React from 'react';
import { BookingForm } from '../components/BookingForm';

const AppointmentPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Schedule Your Visit</h1>
          <p className="text-slate-600">Please fill out the form below and our team will contact you to confirm your appointment time.</p>
        </div>
        <BookingForm />
      </div>
    </div>
  );
};

export default AppointmentPage;