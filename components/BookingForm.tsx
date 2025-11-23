import React, { useState } from 'react';
import { Button } from './UIComponents';
import { SERVICES } from '../constants';

export const BookingForm: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-check text-2xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Request Sent!</h3>
        <p className="text-green-700">Thank you. We will confirm your appointment promptly via phone or email.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-green-700 font-semibold underline">Book another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${compact ? 'p-0' : 'bg-white p-8 rounded-2xl shadow-xl border border-slate-100'}`}>
      {!compact && (
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-slate-900">Book Your Visit</h3>
          <p className="text-slate-500">New patients get a free consultation!</p>
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
            <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Reason for Visit</label>
          <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
            <option value="">Select a service...</option>
            <option value="checkup">General Checkup / Cleaning</option>
            {SERVICES.map(s => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
            <option value="other">Other Inquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date (Optional)</label>
          <input type="date" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
        </div>

        <Button type="submit" fullWidth disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending Request...' : 'Submit Appointment Request'}
        </Button>
        
        <p className="text-xs text-slate-400 text-center mt-4">
          By submitting, you agree to our privacy policy. Your information is secure.
        </p>
      </div>
    </form>
  );
};