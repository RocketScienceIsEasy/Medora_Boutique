import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Mail, Clock, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'custom-stitching',
    date: '',
    notes: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-warm-beige bg-fabric relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-gold font-sans font-semibold">
            Visit Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-olive-green mt-2">
            Contact & Consultations
          </h2>
          <div className="seam-divider my-4 mx-auto w-24" />
          <p className="text-sm text-olive-green/70 font-sans">
            Schedule a personalized fitting or drop by our studio in Kothamangalam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Panel: Location & Map */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="bg-soft-cream border border-light-sand/35 p-8 rounded-3xl space-y-6">
              
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-warm-beige rounded-xl text-olive-green border border-light-sand/20 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-bold text-olive-green">Location Address</h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-olive-green/75 leading-relaxed font-sans">
                    Medora Boutique<br />
                    Tholanikkunnel Arcade, MA College Road<br />
                    Kothamangalam, Kerala 686666
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-warm-beige rounded-xl text-olive-green border border-light-sand/20 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-bold text-olive-green">Business Hours</h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-olive-green/75 leading-relaxed font-sans">
                    Monday – Saturday<br />
                    9:00 AM onwards (Sundays Closed)
                  </p>
                </div>
              </div>

              {/* Contacts */}
              <div className="seam-divider w-full my-4" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-muted-gold" />
                  <span className="text-xs sm:text-sm font-sans font-medium text-olive-green">
                    [ Phone: +91 XXXXX XXXXX ]
                  </span>
                </div>
                {/* WhatsApp */}
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-4 h-4 text-muted-gold" />
                  <span className="text-xs sm:text-sm font-sans font-medium text-olive-green">
                    [ WhatsApp: +91 XXXXX XXXXX ]
                  </span>
                </div>
                {/* Email */}
                <div className="flex items-center space-x-3 sm:col-span-2">
                  <Mail className="w-4 h-4 text-muted-gold" />
                  <span className="text-xs sm:text-sm font-sans font-medium text-olive-green">
                    [ Email: contact@medoraboutique.com ]
                  </span>
                </div>
              </div>

            </div>

            {/* Map Placeholder */}
            <div className="relative aspect-[16/10] bg-soft-cream border border-light-sand/35 rounded-3xl overflow-hidden p-4">
              <div className="absolute inset-4 border border-dashed border-light-sand rounded-2xl pointer-events-none" />
              <div className="absolute inset-0 bg-fabric opacity-30" />
              
              <div className="w-full h-full flex flex-col items-center justify-center text-center select-none relative z-10">
                <MapPin className="w-10 h-10 text-muted-gold/45 mb-2" />
                <span className="text-xs font-semibold tracking-widest text-muted-gold uppercase font-sans">
                  [ Google Maps Location Placeholder ]
                </span>
                <span className="text-[10px] text-olive-green/40 mt-1 italic px-8 leading-relaxed">
                  (In production, embed standard Google Maps iframe here centering Tholanikkunnel Arcade, MA College Road, Kothamangalam)
                </span>
              </div>
            </div>

          </motion.div>

          {/* Right Panel: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-soft-cream border border-light-sand/35 p-8 sm:p-10 rounded-3xl shadow-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-fabric-cream opacity-50 pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold text-olive-green">Book a Consultation</h3>
              <p className="mt-2 text-xs sm:text-sm text-olive-green/70 font-sans leading-relaxed">
                Fill out the form below. Our stylist will contact you via WhatsApp or phone to confirm details.
              </p>
              
              <div className="seam-divider my-6" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="consultation-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold tracking-wider uppercase text-olive-green/80 font-sans">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="mt-1.5 w-full bg-warm-beige border border-light-sand/50 rounded-xl px-4 py-3 text-sm text-olive-green focus:outline-none focus:border-muted-gold transition-colors font-sans"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold tracking-wider uppercase text-olive-green/80 font-sans">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="mt-1.5 w-full bg-warm-beige border border-light-sand/50 rounded-xl px-4 py-3 text-sm text-olive-green focus:outline-none focus:border-muted-gold transition-colors font-sans"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold tracking-wider uppercase text-olive-green/80 font-sans">
                        What are you planning?
                      </label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-1.5 w-full bg-warm-beige border border-light-sand/50 rounded-xl px-4 py-3 text-sm text-olive-green focus:outline-none focus:border-muted-gold transition-colors font-sans"
                      >
                        <option value="custom-stitching">Custom Tailoring & Stitching</option>
                        <option value="designer-dresses">Designer Dress Design</option>
                        <option value="onam-wear">Onam / Festive Wear</option>
                        <option value="bridal-lehenga">Bridal Gowns & Lehengas</option>
                        <option value="general-inquiry">General Fabric Inquiry</option>
                      </select>
                    </div>

                    {/* Date */}
                    <div>
                      <label htmlFor="date" className="block text-xs font-semibold tracking-wider uppercase text-olive-green/80 font-sans">
                        Preferred Trial Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="mt-1.5 w-full bg-warm-beige border border-light-sand/50 rounded-xl px-4 py-3 text-sm text-olive-green focus:outline-none focus:border-muted-gold transition-colors font-sans"
                      />
                    </div>

                    {/* Notes */}
                    <div>
                      <label htmlFor="notes" className="block text-xs font-semibold tracking-wider uppercase text-olive-green/80 font-sans">
                        Design requirements / comments
                      </label>
                      <textarea
                        name="notes"
                        id="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="e.g. Neck patterns, custom color details, fabric preferences..."
                        className="mt-1.5 w-full bg-warm-beige border border-light-sand/50 rounded-xl px-4 py-3 text-sm text-olive-green focus:outline-none focus:border-muted-gold transition-colors font-sans resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-4 text-xs font-semibold tracking-widest text-warm-beige bg-olive-green hover:bg-olive-light disabled:bg-olive-green/60 rounded-full shadow-md hover:shadow-lg transition-all duration-300 uppercase cursor-pointer"
                    >
                      {isSubmitting ? 'Sending Request...' : 'Send Inquiry Request'}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="submission-success"
                    className="py-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mx-auto w-16 h-16 bg-olive-green text-warm-beige rounded-full flex items-center justify-center shadow-md mb-6">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-olive-green">Inquiry Sent Successfully</h4>
                    <p className="mt-3 text-xs sm:text-sm text-olive-green/75 leading-relaxed font-sans max-w-sm mx-auto">
                      Thank you for contacting Medora Boutique. Our designer will get in touch with you shortly to finalize your appointment details.
                    </p>
                    
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 px-6 py-2.5 text-[10px] font-semibold tracking-widest text-olive-green hover:text-warm-beige border border-olive-green hover:bg-olive-green rounded-full transition-all duration-300 uppercase cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
      
      {/* Bottom Seam Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]">
        <div className="seam-divider" />
      </div>
    </section>
  );
};
