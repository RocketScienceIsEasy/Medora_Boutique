import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-warm-beige bg-fabric relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Brand Philosophy Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-gold font-sans font-semibold">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-olive-green">
                About Medora Boutique
              </h2>
              <div className="seam-divider w-24" />
            </div>

            <p className="text-sm sm:text-base text-olive-green/80 leading-relaxed font-sans font-medium">
              "Medora Boutique is a designer boutique located in Kothamangalam, dedicated to creating beautifully stitched outfits that combine comfort, elegance, and individuality."
            </p>

            <p className="text-xs sm:text-sm text-olive-green/75 leading-relaxed font-sans">
              Every design is tailored with precision, ensuring each customer leaves with clothing that perfectly matches their style and personality. With a focus on craftsmanship, quality fabrics, and personalized service, Medora Boutique creates outfits that make every occasion special.
            </p>

            {/* Custom attributes highlights */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-1 border-l-2 border-muted-gold/40 pl-4">
                <h4 className="text-sm font-serif font-bold text-olive-green">Bespoke Fitting</h4>
                <p className="text-xs text-olive-green/60 font-sans">Drafted templates based on individual parameters.</p>
              </div>
              <div className="space-y-1 border-l-2 border-muted-gold/40 pl-4">
                <h4 className="text-sm font-serif font-bold text-olive-green">Handcrafted Linings</h4>
                <p className="text-xs text-olive-green/60 font-sans">Clean margins and tailored inside edges.</p>
              </div>
            </div>
          </motion.div>

          {/* Boutique Frame Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative p-4 bg-soft-cream rounded-3xl border border-light-sand/40 shadow-xs">
              {/* Outer decorative dashed border */}
              <div className="absolute inset-6 border border-dashed border-muted-gold/30 rounded-2xl pointer-events-none" />
              
              <div className="relative aspect-square bg-warm-beige rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center p-8 select-none">
                <div className="absolute inset-0 bg-fabric-cream opacity-40" />
                
                {/* SVG Hanger overlay */}
                <svg className="w-20 h-20 text-muted-gold/25 mb-4 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2a3 3 0 0 0-3 3v1.17C7.75 6.64 7 7.73 7 9v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9c0-1.27-.75-2.36-2-2.83V5a3 3 0 0 0-3-3z" />
                </svg>
                
                <span className="relative z-10 text-xs font-semibold tracking-widest text-muted-gold uppercase font-sans">
                  [ Boutique Interior Photo Placeholder ]
                </span>
                <span className="relative z-10 text-[10px] text-olive-green/40 mt-1 italic px-6 leading-relaxed">
                  Replace this box with a high-resolution photograph of the boutique workspace, sewing machines, or front showroom area.
                </span>
              </div>
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
