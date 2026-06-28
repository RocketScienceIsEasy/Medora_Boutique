import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const { scrollY } = useScroll();
  
  // Transform scroll position for a parallax effect on the background
  const yBg = useTransform(scrollY, [0, 800], [0, 200]);
  const opacityBg = useTransform(scrollY, [0, 600], [1, 0.4]);

  const handleScrollToCollections = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#collections');
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-soft-cream flex items-center justify-center pt-24 md:pt-32">
      {/* Parallax Background Image Container */}
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
      >
        {/* Stylized premium boutique background image */}
        <div className="w-full h-full bg-fabric-cream flex items-center justify-center relative">
          <img 
            src="/homebg.jpg" 
            alt="Medora Boutique Shopfront" 
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          
          {/* Decorative frame simulating boutique walls */}
          <div className="absolute inset-8 border border-dashed border-muted-gold/25 rounded-2xl pointer-events-none z-10" />
          
          <div className="text-center px-4 max-w-lg select-none z-0">
            {/* Thread spools and sewing drawing overlay */}
            <svg className="w-24 h-24 mx-auto mb-4 text-muted-gold/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2v20M17 5H7M17 19H7M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            </svg>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-gold/60 font-sans font-medium">
              [ Boutique Exterior / Hero Photo ]
            </p>
          </div>

          {/* Warm background tint layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-warm-beige via-warm-beige/45 to-transparent opacity-68 z-10" />
        </div>
      </motion.div>

      {/* Soft Blurred Content Overlay Card */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="bg-[#FAE8D2] border border-light-sand/30 p-8 sm:p-12 md:p-16 rounded-3xl shadow-lg max-w-2xl mx-auto"
        >
          {/* Top Divider Decors */}
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-8 h-[1px] bg-muted-gold/50" />
            <span className="text-xs tracking-[0.35em] text-muted-gold font-sans font-semibold uppercase">
              Boutique Design Studio
            </span>
            <div className="w-8 h-[1px] bg-muted-gold/50" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-olive-green tracking-wide">
            Medora Boutique
          </h1>

          <p className="mt-4 text-xs sm:text-sm md:text-base font-sans tracking-[0.2em] text-olive-light uppercase font-semibold">
            WHERE ELEGANCE MEETS CRAFTSMANSHIP
          </p>

          {/* Seam divider */}
          <div className="seam-divider my-6 mx-auto w-3/4" />

          <p className="text-sm sm:text-base md:text-lg text-olive-green/80 max-w-md mx-auto font-sans leading-relaxed">
            Beautifully stitched outfits crafted specifically for you, right here in the heart of Kothamangalam.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={handleScrollToCollections}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-widest text-warm-beige bg-olive-green hover:bg-olive-light rounded-full shadow-md hover:shadow-lg transition-all duration-300 uppercase cursor-pointer"
            >
              View Collections
            </button>
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-widest text-olive-green hover:text-warm-beige border border-olive-green hover:bg-olive-green rounded-full shadow-sm transition-all duration-300 uppercase cursor-pointer"
            >
              Book Consultation
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Seam Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]">
        <div className="seam-divider" />
      </div>
    </section>
  );
};
