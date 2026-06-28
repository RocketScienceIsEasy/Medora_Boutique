import React from 'react';
import { motion } from 'framer-motion';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const CustomStitching: React.FC = () => {
  const steps: Step[] = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Discuss your visual inspiration, outfit concepts, and styling needs over tea with our designer.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742a3.001 3.001 0 11-2.22 0m2.22 0a3.987 3.987 0 011.666-.363h3m-5.32 0a3 3 0 100-3.999m5.32 3.999a3 3 0 100-3.999m0 3.999a3.987 3.987 0 001.667-.363h3m-5.32 0V17e9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15h.01M9 15h.01M12 15h.01" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Measurements',
      description: 'We capture precise body parameters to create a unique custom paper pattern blueprint.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01" />
          <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Fabric & Design Selection',
      description: 'Pick materials from our collection or supply your own, alongside matching embroidery patterns and linings.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122A3 3 0 00.47 2.22m14.06 13.902a3 3 0 005.06-2.22" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12h14" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Stitching',
      description: 'Our master artisans cut and sew the garment with careful focus on structural alignment and stitch cleanlines.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      number: '05',
      title: 'Final Trial',
      description: 'Try the design in our private fitting lounge. We audit the posture and perform touch-up adjustments.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      number: '06',
      title: 'Delivery',
      description: 'Receive your beautifully ironed and packed outfit, ready to make your special day memorable.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v14m0-14L4 7m0 0v10l8 4" />
        </svg>
      )
    }
  ];

  return (
    <section id="stitching" className="py-20 bg-soft-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-gold font-sans font-semibold">
            Bespoke Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-olive-green mt-2">
            The Custom Stitching Journey
          </h2>
          <div className="seam-divider my-4 mx-auto w-24" />
          <p className="text-sm text-olive-green/70 font-sans">
            How we translate your conceptual design dreams into a perfectly tailored masterpiece.
          </p>
        </div>

        {/* Horizontal Timeline (Desktop Only) */}
        <div className="hidden lg:block relative mt-16 pb-12">
          {/* Main Connector Seam Line */}
          <div className="absolute top-8 left-0 right-0 border-t border-dashed border-muted-gold/45 z-0" />
          
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center flex flex-col items-center group"
              >
                {/* Step Circle with Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-warm-beige border-2 border-light-sand group-hover:border-muted-gold text-olive-green group-hover:text-muted-gold flex items-center justify-center shadow-xs transition-all duration-300 relative z-10">
                    {step.icon}
                  </div>
                  {/* Step Number Badge */}
                  <span className="absolute -top-2 -right-2 bg-muted-gold text-warm-beige text-[10px] font-bold px-2 py-0.5 rounded-full z-20">
                    {step.number}
                  </span>
                </div>

                {/* Text Info */}
                <h3 className="text-base font-serif font-bold text-olive-green group-hover:text-muted-gold transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-olive-green/70 max-w-[160px] mx-auto leading-relaxed font-sans">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical Timeline (Mobile & Tablet) */}
        <div className="lg:hidden relative border-l-2 border-dashed border-light-sand ml-6 space-y-12 py-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative pl-10"
            >
              {/* Step Circle with Icon */}
              <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-full bg-warm-beige border-2 border-light-sand text-olive-green flex items-center justify-center shadow-xs z-10">
                {step.icon}
              </div>
              
              {/* Step Number Badge */}
              <span className="absolute -left-[5px] -top-[10px] bg-muted-gold text-warm-beige text-[9px] font-bold px-1.5 py-0.5 rounded-full z-20">
                {step.number}
              </span>

              {/* Text Info */}
              <div>
                <h3 className="text-lg font-serif font-bold text-olive-green">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-olive-green/75 leading-relaxed font-sans max-w-md">
                  {step.description}
                </p>
              </div>
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
