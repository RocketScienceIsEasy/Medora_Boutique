import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, MessageSquare } from 'lucide-react';

interface Review {
  stars: number;
  text: string;
  author: string;
  source: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export const Testimonials: React.FC = () => {
  const reviews: Review[] = [
    {
      stars: 5,
      text: 'Nice stitching and fast stitching. I like my dress so much.',
      author: 'Anjanashinoj',
      source: 'Google Review'
    },
    {
      stars: 5,
      text: 'Nice Onam dress. It was so good.',
      author: 'Annmaria Terin',
      source: 'Google Review'
    },
    {
      stars: 5,
      text: 'Very good customer service.',
      author: 'Jennifer Jennie',
      source: 'Google Review'
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: 'Do I need to book a consultation in advance?',
      answer: 'While you are welcome to walk in during business hours, booking a consultation ensures that our designer can devote dedicated personal attention to sketching and selecting fabrics for your outfit.'
    },
    {
      question: 'What is the standard turnaround time for custom stitching?',
      answer: 'Typically, standard outfits (like kurtis or simple salwar suits) are completed within 7 to 10 days. Bridal wear, custom lehengas, and complex handwork designs take 3 to 4 weeks. Let us know if you need express execution.'
    },
    {
      question: 'Can I bring my own fabric material for tailoring?',
      answer: 'Yes! We encourage clients to bring their own fabrics. Alternatively, you can explore our in-boutique collections of premium linen, silk, organza, and handworked borders.'
    },
    {
      question: 'What happens if the outfit doesn’t fit perfectly at the first trial?',
      answer: 'We provide a Perfect Fit Guarantee. If you need any adjustments during the final trial, our in-house master tailors will modify the garment immediately at no extra cost.'
    },
    {
      question: 'Do you design custom outfits for children or matching family sets?',
      answer: 'Yes, we design matching mother-daughter sets, custom ethnic wear for children, and bespoke family coordination themes for weddings and festivals like Onam.'
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="testimonials" className="py-20 bg-soft-cream relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        
        {/* Review Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Rating Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-warm-beige p-8 rounded-3xl border border-light-sand/40 text-center shadow-xs"
          >
            <span className="text-xs uppercase tracking-wider text-muted-gold font-sans font-semibold">
              Client Feedback
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-olive-green mt-2">
              Loved by our Community
            </h3>
            
            <div className="mt-6 flex flex-col items-center">
              <span className="text-5xl font-serif font-bold text-olive-green">
                4.3
              </span>
              <div className="flex items-center space-x-1 mt-2">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-muted-gold text-muted-gold" />
                ))}
                <Star className="w-5 h-5 text-muted-gold fill-muted-gold/30" />
              </div>
              <span className="text-xs text-olive-green/60 font-sans mt-2">
                Based on Google Business reviews
              </span>
            </div>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center w-full px-6 py-3 text-xs font-semibold tracking-wider text-warm-beige bg-olive-green hover:bg-olive-light rounded-full shadow transition-all duration-300 uppercase cursor-pointer"
            >
              Read More Reviews on Google
            </a>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="lg:col-span-2 space-y-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={review.author}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-warm-beige/65 border border-light-sand/20 p-6 sm:p-8 rounded-2xl relative"
              >
                {/* Floating quote bubble icon */}
                <MessageSquare className="absolute right-6 top-6 w-8 h-8 text-muted-gold/10" />

                <div className="flex items-center space-x-1 mb-3">
                  {Array.from({ length: review.stars }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-muted-gold text-muted-gold" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-olive-green/80 italic font-sans leading-relaxed">
                  "{review.text}"
                </p>

                <div className="mt-4 flex justify-between items-center border-t border-light-sand/20 pt-3">
                  <span className="text-sm font-serif font-bold text-olive-green">
                    — {review.author}
                  </span>
                  <span className="text-[10px] uppercase font-sans tracking-widest text-muted-gold">
                    {review.source}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Custom Seam Divider */}
        <div className="seam-divider my-20" />

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-wider text-muted-gold font-sans font-semibold">
              Got Questions?
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-olive-green mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-warm-beige border border-light-sand/30 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-olive-green hover:text-muted-gold focus:outline-none transition-colors"
                >
                  <span className="font-serif font-bold text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-gold transform transition-transform duration-300 ${
                      openFaqIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-olive-green/75 leading-relaxed font-sans border-t border-light-sand/15">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
