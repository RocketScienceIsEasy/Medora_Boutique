import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface CollectionItem {
  id: string;
  title: string;
  description: string;
  placeholderText: string;
  customDecor: React.ReactNode;
}

export const Collections: React.FC = () => {
  const collections: CollectionItem[] = [
    {
      id: 'designer-dresses',
      title: 'Designer Dresses',
      description: 'Stunning designer gowns and dresses tailored to fit your exact measurements and flatter your profile.',
      placeholderText: '[ Designer Dresses Photo ]',
      customDecor: (
        <svg className="w-16 h-16 text-muted-gold/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2a4 4 0 0 1 4 4c0 3-4 6-4 6s-4-3-4-6a4 4 0 0 1 4-4z" />
          <path d="M12 12v10M8 15h8M7 18h10M6 21h12" />
        </svg>
      )
    },
    {
      id: 'onam-collection',
      title: 'Onam Collection',
      description: 'Elegant Kasavu sarees, set mundu, and designer lehengas with premium handworked borders for festive occasions.',
      placeholderText: '[ Onam Collection Photo ]',
      customDecor: (
        // Traditional Kerala Kasavu gold border style decoration
        <div className="flex flex-col items-center justify-center space-y-1">
          <div className="w-12 h-1 bg-muted-gold/40" />
          <div className="w-12 h-2 bg-gradient-to-r from-muted-gold/10 via-muted-gold/50 to-muted-gold/10" />
          <div className="w-12 h-1 bg-muted-gold/40" />
          <span className="text-[10px] uppercase font-sans tracking-widest text-muted-gold mt-2">Kerala Heritage</span>
        </div>
      )
    },
    {
      id: 'party-wear',
      title: 'Party Wear',
      description: 'Sophisticated silhouettes, premium fabrics, and intricate embroidery to make you shine at every gathering.',
      placeholderText: '[ Party Wear Photo ]',
      customDecor: (
        <svg className="w-16 h-16 text-muted-gold/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
          <path d="M12 6V2M12 10l2 2-2 2-2-2z" />
        </svg>
      )
    },
    {
      id: 'bridal-wear',
      title: 'Bridal Wear',
      description: 'Exquisite bridal gowns, custom lehengas, and bridesmaid attire stitched with ultimate precision and luxury fabrics.',
      placeholderText: '[ Bridal Wear Photo ]',
      customDecor: (
        <div className="flex flex-col items-center">
          {/* Bridal lace-inspired motif */}
          <div className="w-10 h-10 rounded-full border border-dashed border-muted-gold/30 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border border-dashed border-muted-gold/40" />
          </div>
          <span className="text-[9px] uppercase font-sans tracking-wider text-muted-gold/70 mt-2">Lace & Embroidery</span>
        </div>
      )
    },
    {
      id: 'casual-ethnic',
      title: 'Casual Ethnic Wear',
      description: 'Elegant kurtis, designer salwar suits, and everyday comfortable ethnic wear tailored for comfort.',
      placeholderText: '[ Casual Ethnic Photo ]',
      customDecor: (
        <svg className="w-16 h-16 text-muted-gold/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M6 3h12v18H6z" />
          <path d="M12 3v18M6 8h12M6 13h12M6 18h12" />
        </svg>
      )
    },
    {
      id: 'custom-stitching',
      title: 'Custom Stitching',
      description: 'Bring your fabric or choose ours; we provide personalized measurements and bespoke stitching.',
      placeholderText: '[ Custom Stitching Photo ]',
      customDecor: (
        <svg className="w-16 h-16 text-muted-gold/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
          <path d="M12 22V10M12 6V2M7 10h10" />
        </svg>
      )
    }
  ];

  return (
    <section id="collections" className="py-20 bg-warm-beige bg-fabric relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-gold font-sans font-semibold">
            Bespoke Creations
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-olive-green mt-2">
            Featured Collections
          </h2>
          <div className="seam-divider my-4 mx-auto w-24" />
          <p className="text-sm text-olive-green/70 font-sans">
            Every garment at Medora is designed with care, balancing timeless ethnic traditions with modern, comfortable patterns.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-soft-cream border border-light-sand/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col unfold-hover group"
            >
              {/* Premium Placeholder Image Container */}
              <div className="relative aspect-[4/3] bg-warm-beige flex items-center justify-center overflow-hidden border-b border-light-sand/20">
                {/* Seam line border inside the placeholder */}
                <div className="absolute inset-4 border border-dashed border-light-sand rounded-xl pointer-events-none transition-all duration-500 group-hover:inset-3 group-hover:border-muted-gold/40" />
                
                {/* Background decorative pattern */}
                <div className="absolute inset-0 bg-fabric-cream opacity-50 group-hover:scale-110 transition-transform duration-700 ease-out" />
                
                {/* Custom icon or decoration for the collection */}
                <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                  {item.customDecor}
                </div>

                {/* Overlay Text label */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-center bg-soft-cream/80 backdrop-blur-xs py-2 px-3 rounded-lg border border-light-sand/10">
                  <span className="text-[10px] tracking-wider text-olive-light uppercase font-sans font-medium">
                    {item.placeholderText}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-olive-green group-hover:text-muted-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-olive-green/75 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-5 flex items-center text-xs font-semibold text-muted-gold uppercase tracking-wider group/link cursor-pointer">
                  <span>Explore Details</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform duration-200 group-hover/link:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
