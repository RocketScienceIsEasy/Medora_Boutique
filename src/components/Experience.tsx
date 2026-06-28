import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceBlock {
  title: string;
  subtitle: string;
  description: string;
  placeholderLabel: string;
  icon: React.ReactNode;
}

export const Experience: React.FC = () => {
  const blocks: ExperienceBlock[] = [
    {
      title: 'Personalized Consultations',
      subtitle: 'Designing Together',
      description: 'Step into our comfortable consultation area. We sit down with you to understand your preferences, analyze silhouette profiles, sketch design concepts, and select custom details to ensure the output aligns perfectly with your individual style.',
      placeholderLabel: '[ Consultation Area Photo ]',
      icon: (
        <svg className="w-6 h-6 text-muted-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Comfortable Boutique Environment',
      subtitle: 'Feel at Home',
      description: 'Medora Boutique was created as a peaceful design studio. We welcome you to escape the noisy shopping streets of Kothamangalam, enjoy a cup of tea, browse our catalog leisurely, and experience a relaxed fitting trial.',
      placeholderLabel: '[ Boutique Interior / Fitting Lounge Photo ]',
      icon: (
        <svg className="w-6 h-6 text-muted-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      title: 'Carefully Selected Fabrics',
      subtitle: 'Quality You Can Feel',
      description: 'We host a curated library of fabrics, including premium cotton, soft linen, rich raw silk, delicate organza, and traditional Kerala Kasavu handloom materials. Every piece of fabric is hand-inspected for weave quality, colorfastness, and comfort.',
      placeholderLabel: '[ Fabric Display Photo ]',
      icon: (
        <svg className="w-6 h-6 text-muted-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      )
    },
    {
      title: 'Expert Custom Stitching',
      subtitle: 'Tailored with Love',
      description: 'Our workspace features master tailors who cut and assemble every outfit with millimeter precision. From reinforcing seam lines to aligning embroidery contours, we treat tailoring as a fine art form.',
      placeholderLabel: '[ Tailoring Workspace Photo ]',
      icon: (
        <svg className="w-6 h-6 text-muted-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      )
    }
  ];

  const stats = [
    { number: '10+', label: 'Years of Experience' },
    { number: '8,000+', label: 'Stitched Outfits' },
    { number: '4,500+', label: 'Happy Customers' },
    { number: '100%', label: 'Perfect Fit Guarantee' }
  ];

  return (
    <section className="py-20 bg-soft-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-gold font-sans font-semibold">
            Inside the Studio
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-olive-green mt-2">
            The Boutique Experience
          </h2>
          <div className="seam-divider my-4 mx-auto w-24" />
          <p className="text-sm text-olive-green/70 font-sans">
            Every dress we design tells a story of craftsmanship, individual care, and local expertise.
          </p>
        </div>

        {/* Alternating Experience Blocks */}
        <div className="space-y-24">
          {blocks.map((block, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={block.title}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Placeholder */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-warm-beige rounded-2xl overflow-hidden shadow-sm border border-light-sand/40 p-4">
                    <div className="absolute inset-4 border border-dashed border-light-sand rounded-xl pointer-events-none" />
                    <div className="absolute inset-0 bg-fabric opacity-40" />
                    <div className="w-full h-full flex flex-col items-center justify-center text-center select-none relative z-10">
                      <div className="p-3 bg-soft-cream rounded-full border border-light-sand/30 shadow-xs mb-3">
                        {block.icon}
                      </div>
                      <span className="text-xs font-semibold tracking-widest text-muted-gold uppercase font-sans">
                        {block.placeholderLabel}
                      </span>
                      <span className="text-[10px] text-olive-green/40 mt-1 italic max-w-xs px-4">
                        (Replace with boutique image showcasing {block.title.toLowerCase()})
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Text Description */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 space-y-4"
                >
                  <span className="text-xs font-semibold tracking-wider text-muted-gold uppercase font-sans">
                    {block.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-olive-green leading-tight">
                    {block.title}
                  </h3>
                  <div className="seam-divider w-16" />
                  <p className="text-sm sm:text-base text-olive-green/75 leading-relaxed font-sans">
                    {block.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Animated Statistics Section */}
        <div className="mt-28 p-8 sm:p-12 bg-warm-beige border border-light-sand/30 rounded-3xl relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-fabric opacity-50 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-light-sand/40">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center pt-6 lg:pt-0 first:pt-0"
              >
                <span className="block text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-olive-green">
                  {stat.number}
                </span>
                <span className="block text-xs sm:text-sm tracking-wider text-muted-gold uppercase font-sans font-medium mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      
      {/* Bottom Seam Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]">
        <div className="seam-divider" />
      </div>
    </section>
  );
};
