import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, Phone, User, Settings } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'custom-stitching',
    date: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        service: 'custom-stitching',
        date: '',
        notes: ''
      });
    }, 1200);
  };

  const handleClose = () => {
    onClose();
    // Reset submission state after modal animation finishes
    setTimeout(() => {
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-olive-green/40 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="bg-warm-beige w-full max-w-lg rounded-3xl border border-light-sand/40 overflow-hidden shadow-2xl relative z-10 p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 bg-soft-cream/80 hover:bg-muted-gold text-olive-green hover:text-warm-beige rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="relative">
              {!isSubmitted ? (
                <>
                  <div className="text-center sm:text-left mb-6 pr-6">
                    <span className="text-[10px] tracking-widest text-muted-gold uppercase font-sans font-semibold">
                      Bespoke Tailoring
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-olive-green mt-1">
                      Schedule a Consultation
                    </h3>
                    <p className="text-xs text-olive-green/75 mt-1 font-sans">
                      Let us make your dream dress a reality. We will contact you via WhatsApp to finalize the schedule.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="modal-name" className="block text-[10px] font-semibold tracking-wider uppercase text-olive-green/80 font-sans">
                        Full Name *
                      </label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-olive-green/40" />
                        <input
                          type="text"
                          name="name"
                          id="modal-name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full bg-soft-cream border border-light-sand/40 rounded-xl pl-10 pr-4 py-3 text-sm text-olive-green focus:outline-none focus:border-muted-gold transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="modal-phone" className="block text-[10px] font-semibold tracking-wider uppercase text-olive-green/80 font-sans">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative mt-1">
                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-olive-green/40" />
                        <input
                          type="tel"
                          name="phone"
                          id="modal-phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-soft-cream border border-light-sand/40 rounded-xl pl-10 pr-4 py-3 text-sm text-olive-green focus:outline-none focus:border-muted-gold transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Service Type */}
                    <div>
                      <label htmlFor="modal-service" className="block text-[10px] font-semibold tracking-wider uppercase text-olive-green/80 font-sans">
                        Outfit Theme
                      </label>
                      <div className="relative mt-1">
                        <Settings className="absolute left-3 top-3.5 w-4 h-4 text-olive-green/40" />
                        <select
                          name="service"
                          id="modal-service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-soft-cream border border-light-sand/40 rounded-xl pl-10 pr-4 py-3 text-sm text-olive-green focus:outline-none focus:border-muted-gold transition-colors font-sans appearance-none"
                        >
                          <option value="custom-stitching">Custom Tailoring & Stitching</option>
                          <option value="designer-dresses">Designer Dress Design</option>
                          <option value="onam-wear">Onam / Festive Wear</option>
                          <option value="bridal-lehenga">Bridal Gowns & Lehengas</option>
                          <option value="general-inquiry">General Fabric Inquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Date */}
                    <div>
                      <label htmlFor="modal-date" className="block text-[10px] font-semibold tracking-wider uppercase text-olive-green/80 font-sans">
                        Preferred Trial Date
                      </label>
                      <div className="relative mt-1">
                        <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-olive-green/40" />
                        <input
                          type="date"
                          name="date"
                          id="modal-date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-soft-cream border border-light-sand/40 rounded-xl pl-10 pr-4 py-3 text-sm text-olive-green focus:outline-none focus:border-muted-gold transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label htmlFor="modal-notes" className="block text-[10px] font-semibold tracking-wider uppercase text-olive-green/80 font-sans">
                        Short note / measurements info
                      </label>
                      <textarea
                        name="notes"
                        id="modal-notes"
                        rows={2}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="e.g. A-line neck cut, set mundu custom border..."
                        className="mt-1 w-full bg-soft-cream border border-light-sand/40 rounded-xl px-4 py-2.5 text-sm text-olive-green focus:outline-none focus:border-muted-gold transition-colors font-sans resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold tracking-widest text-warm-beige bg-olive-green hover:bg-olive-light disabled:bg-olive-green/60 rounded-full shadow-md hover:shadow-lg transition-all duration-300 uppercase cursor-pointer mt-2"
                    >
                      {isSubmitting ? 'Reserving...' : 'Book Consultation Slot'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center">
                  <div className="mx-auto w-12 h-12 bg-olive-green text-warm-beige rounded-full flex items-center justify-center shadow-md mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-olive-green">Slot Request Received</h4>
                  <p className="mt-2.5 text-xs text-olive-green/75 leading-relaxed font-sans max-w-xs mx-auto">
                    We have successfully captured your details. Our representative will contact you via WhatsApp shortly to finalize your appointment schedule.
                  </p>
                  
                  <button
                    onClick={handleClose}
                    className="mt-6 px-6 py-2 text-[10px] font-semibold tracking-widest text-warm-beige bg-olive-green hover:bg-olive-light rounded-full transition-all duration-300 uppercase cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
