import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingWidgetsProps {
  onOpenConsultation: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onOpenConsultation }) => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* WhatsApp Button & Back to Top Group */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3 pb-12 sm:pb-0">
        
        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showTopButton && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="p-3 bg-soft-cream border border-light-sand text-olive-green hover:bg-muted-gold hover:text-warm-beige hover:border-muted-gold rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-3.5 bg-[#25D366] text-white hover:bg-[#128C7E] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Contact Medora Boutique via WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </motion.a>
      </div>

      {/* Mobile Sticky Booking Banner (mobile only, hidden on desktop/tablet) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-olive-green text-warm-beige border-t border-light-sand/20 py-3.5 px-4 shadow-2xl flex items-center justify-between select-none">
        <div>
          <span className="block text-xs font-serif font-bold tracking-wide">
            Medora Boutique
          </span>
          <span className="block text-[9px] text-muted-gold font-sans font-medium uppercase tracking-wider mt-0.5">
            Perfect Fit Guaranteed
          </span>
        </div>
        
        <button
          onClick={onOpenConsultation}
          className="inline-flex items-center justify-center px-4 py-2 text-[10px] font-bold tracking-widest text-olive-green bg-warm-beige hover:bg-soft-cream rounded-full shadow-sm transition-all duration-300 uppercase cursor-pointer"
        >
          <PhoneCall className="w-3 h-3 mr-1.5" />
          Book Now
        </button>
      </div>
    </>
  );
};
