import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Palette, Sparkles, Heart, Ruler, Check } from 'lucide-react';

interface Reason {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const WhyChooseUs: React.FC = () => {
  const reasons: Reason[] = [
    {
      title: 'Premium Stitching Quality',
      description: 'Double-reinforced seams, neat linings, and high-quality thread work that makes your garment durable and polished.',
      icon: <Scissors className="w-5 h-5 text-olive-green" />
    },
    {
      title: 'Personalized Designs',
      description: 'Every garment is customized specifically to your ideas. No duplicate, generic catalog templates.',
      icon: <Palette className="w-5 h-5 text-olive-green" />
    },
    {
      title: 'Fast Delivery',
      description: 'We value your schedule. Standard deliveries are made strictly on time, with rush options available for event emergencies.',
      icon: (
        <svg className="w-5 h-5 text-olive-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      )
    },
    {
      title: 'Attention to Detail',
      description: 'From buttons to embroidery matching, we examine every millimetre to make sure the finish is completely neat.',
      icon: <Sparkles className="w-5 h-5 text-olive-green" />
    },
    {
      title: 'Friendly Customer Service',
      description: 'We welcome alterations with a smile and pay close attention to your inputs throughout the sketching phase.',
      icon: <Heart className="w-5 h-5 text-olive-green" />
    },
    {
      title: 'Perfect Fit Guaranteed',
      description: 'If it doesn’t sit right, we modify it instantly until you are completely satisfied. No questions asked.',
      icon: <Ruler className="w-5 h-5 text-olive-green" />
    }
  ];

  return (
    <section className="py-20 bg-warm-beige bg-fabric relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-gold font-sans font-semibold">
            Our Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-olive-green mt-2">
            Why Choose Medora Boutique
          </h2>
          <div className="seam-divider my-4 mx-auto w-24" />
          <p className="text-sm text-olive-green/70 font-sans">
            We focus on reliability, detail, and quality to make sure your clothing experience feels personal and rewarding.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-soft-cream/80 backdrop-blur-xs border border-light-sand/20 p-8 rounded-2xl shadow-xs transition-all duration-300 hover:shadow-md hover:border-muted-gold/30 hover:bg-soft-cream"
            >
              {/* Header with Icon and Checkmark indicator */}
              <div className="flex items-center justify-between">
                <div className="p-3 bg-warm-beige rounded-xl border border-light-sand/40">
                  {item.icon}
                </div>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-olive-green/5 text-olive-green text-xs">
                  <Check className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="mt-6 text-lg font-serif font-bold text-olive-green">
                {item.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-olive-green/75 leading-relaxed font-sans">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
      
      {/* Bottom Seam Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]">
        <div className="seam-divider" />
      </div>
    </section>
  );
};
