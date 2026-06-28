import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  label: string;
  category: string;
  aspectClass: string; // for masonry variance
  customBg: string;
  image?: string;
  description: string;
}

export const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      label: 'Boutique Rack Showcase',
      category: 'Storefront',
      aspectClass: 'h-64',
      customBg: 'from-muted-gold/10 via-olive-green/5 to-muted-gold/5',
      image: '/rack.webp',
      description: 'A glimpse into our curated showroom collection. We display a rotating selection of ready-to-wear salwar suits, handpicked kurtis, and designer outfits for you to browse during your visit.'
    },
    {
      id: 2,
      label: 'Designer Pink Saree',
      category: 'Consultation Area',
      aspectClass: 'h-80',
      customBg: 'from-olive-green/10 via-muted-gold/5 to-olive-green/5',
      image: '/pink saree.webp',
      description: 'An elegant pastel pink georgette saree featuring delicate hand-embroidery along the border, matched with a custom-fit designer blouse. Perfect for daytime engagements and party wear.'
    },
    {
      id: 3,
      label: 'Designer Red Dress',
      category: 'Designer Outfit',
      aspectClass: 'h-96',
      customBg: 'from-muted-gold/15 via-warm-beige to-olive-green/10',
      image: '/red_dress.jpg',
      description: 'A stunning custom-designed floor-length red gown stitched with high-grade silk. Featuring a contoured waist, custom neckline, and elegant gather flares tailored for bridal receptions.'
    },
    {
      id: 4,
      label: 'Premium Linen Fabrics',
      category: 'Fabric Counter',
      aspectClass: 'h-72',
      customBg: 'from-olive-green/5 via-light-sand to-muted-gold/10',
      image: '/fabric.webp',
      description: 'Explore our in-house library of raw materials. We source premium pure linen, raw silk, soft organzas, and Kerala Kasavu cottons directly from trusted weavers to ensure rich comfort.'
    },
    {
      id: 5,
      label: 'Kerala Saree Masterpiece',
      category: 'Tailoring Desk',
      aspectClass: 'h-96',
      customBg: 'from-muted-gold/10 via-warm-beige to-olive-green/5',
      image: '/kerala saree design.webp',
      description: 'A modern take on the traditional Kerala Kasavu set saree, showing detailed gold-thread borders and custom floral handwork designs along the pleats and pallu.'
    },
    {
      id: 6,
      label: 'Designer Black Dress',
      category: 'Mannequin Showcase',
      aspectClass: 'h-64',
      customBg: 'from-olive-green/15 via-muted-gold/5 to-olive-green/10',
      image: '/black_dress.jpg',
      description: 'A timeless black designer dress featuring clean, modern cuts, lightweight lining, and subtle metallic sequins. A classic choice for evening parties and gatherings.'
    },
    {
      id: 7,
      label: 'Handworked Designer Blouse',
      category: 'Embroidery Detail',
      aspectClass: 'h-80',
      customBg: 'from-muted-gold/5 via-light-sand to-olive-green/5',
      image: '/blouse.webp',
      description: 'A custom bridal blouse detailed with intricate zardosi, beadwork, and cutwork designs. Crafted over 15 hours of handcrafting to guarantee a rich wedding aesthetic.'
    },
    {
      id: 8,
      label: 'Blush Bloom Designer Net Saree',
      category: 'Kerala Kasavu Sets',
      aspectClass: 'h-96',
      customBg: 'from-olive-green/10 via-warm-beige to-muted-gold/15',
      image: '/saree.webp',
      description: 'A delicate blend of soft net, intricate floral embroidery, and elegant hand embellishments. Designed to make every special occasion unforgettable with timeless charm and graceful sophistication.'
    },
    {
      id: 9,
      label: 'Designer Mini Outfit',
      category: 'Fitting Trials',
      aspectClass: 'h-72',
      customBg: 'from-muted-gold/10 via-olive-green/5 to-light-sand',
      image: '/small_dress.webp',
      description: 'A custom short-flared ethnic dress created for festive trials. Fits comfortably with breathable organic lining, showcasing double-seam tailoring.'
    },
    {
      id: 10,
      label: 'Kids Ethnic Collection',
      category: 'Client Showcase',
      aspectClass: 'h-80',
      customBg: 'from-olive-green/5 via-muted-gold/10 to-warm-beige',
      image: '/kids.webp',
      description: 'A delightful custom kids ethnic outfit stitched with extra-soft inner lining to ensure zero irritation. Perfectly matching parental coordination themes.'
    }
  ];

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedItem(galleryItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedItem(galleryItems[prevIndex]);
  };

  // Keyboard navigation event listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  return (
    <section id="gallery" className="py-20 bg-warm-beige bg-fabric relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-gold font-sans font-semibold">
            Visual Portfolios
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-olive-green mt-2">
            The Gallery
          </h2>
          <div className="seam-divider my-4 mx-auto w-24" />
          <p className="text-sm text-olive-green/70 font-sans">
            A window into our studio. Browse through our workspace, client trials, fabrics, and beautifully completed garments.
          </p>
        </div>

        {/* Masonry Columns */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              onClick={() => setSelectedItem(item)}
              className="break-inside-avoid bg-soft-cream border border-light-sand/35 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 cursor-pointer group relative"
            >
              {/* Card Body */}
              <div className={`w-full ${item.aspectClass} flex items-center justify-center relative overflow-hidden`}>
                {item.image ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.label}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Soft tint on image overlay */}
                    <div className="absolute inset-0 bg-olive-green/10 group-hover:bg-olive-green/40 transition-colors duration-300" />
                  </>
                ) : (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.customBg}`} />
                    <div className="absolute inset-0 bg-fabric opacity-15" />
                  </>
                )}

                {/* Seam line border inside the card */}
                <div className="absolute inset-4 border border-dashed border-light-sand/50 rounded-xl z-10 pointer-events-none" />

                {/* Static overlay text label (fades out on hover to show full image) */}
                <div className="text-center relative z-10 p-3 mx-4 bg-soft-cream/90 backdrop-blur-xs rounded-lg border border-light-sand/20 select-none group-hover:opacity-0 transition-opacity duration-300">
                  <span className="block text-xs font-serif font-bold text-olive-green">
                    {item.label}
                  </span>
                  <span className="block text-[8px] sm:text-[9px] tracking-wider text-muted-gold uppercase font-sans font-medium mt-0.5">
                    {item.category}
                  </span>
                </div>

                {/* Hover Zoom Overlay */}
                <div className="absolute inset-0 bg-olive-green/45 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-20 text-warm-beige">
                  <div className="p-3 bg-warm-beige rounded-full text-olive-green shadow-lg scale-90 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] tracking-widest uppercase font-sans mt-3 font-semibold text-warm-beige">
                    {item.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-olive-green/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-warm-beige max-w-3xl w-full rounded-2xl border border-light-sand/40 overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-soft-cream/80 hover:bg-muted-gold text-olive-green hover:text-warm-beige rounded-full transition-colors z-30 cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Large Visual Container */}
                <div className="w-full md:w-2/3 h-96 md:h-128 flex items-center justify-center relative bg-warm-beige overflow-hidden">

                  {/* Left Navigation Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2.5 bg-soft-cream/80 hover:bg-muted-gold text-olive-green hover:text-warm-beige rounded-full transition-all z-20 shadow-md cursor-pointer hover:scale-105"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Right Navigation Arrow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2.5 bg-soft-cream/80 hover:bg-muted-gold text-olive-green hover:text-warm-beige rounded-full transition-all z-20 shadow-md cursor-pointer hover:scale-105"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {selectedItem.image ? (
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.label}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${selectedItem.customBg}`} />
                      <div className="absolute inset-0 bg-fabric opacity-20" />

                      <div className="text-center relative z-10 p-6">
                        <span className="block text-2xl font-serif font-bold text-olive-green">
                          {selectedItem.label}
                        </span>
                        <span className="block text-xs tracking-widest text-muted-gold uppercase font-sans font-semibold mt-2">
                          {selectedItem.category}
                        </span>
                      </div>
                    </>
                  )}

                  {/* Seam border line */}
                  <div className="absolute inset-4 border border-dashed border-light-sand/60 rounded-xl pointer-events-none z-10" />
                </div>

                {/* Details Side-panel */}
                <div className="w-full md:w-1/3 p-8 flex flex-col justify-between bg-soft-cream">
                  <div>
                    <span className="text-[10px] tracking-widest text-muted-gold uppercase font-sans font-semibold">
                      Gallery Portfolio
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-olive-green mt-1">
                      {selectedItem.label}
                    </h3>
                    <div className="seam-divider my-4 w-12" />
                    <p className="text-xs sm:text-sm text-olive-green/75 leading-relaxed font-sans">
                      {selectedItem.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-light-sand/30 flex justify-between items-center">
                    <span className="block text-[10px] text-olive-light/50 font-sans uppercase">
                      ID: MED-GAL-{selectedItem.id.toString().padStart(3, '0')}
                    </span>
                    <span className="text-[10px] text-muted-gold font-sans font-medium">
                      {galleryItems.findIndex(item => item.id === selectedItem.id) + 1} / {galleryItems.length}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Seam Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]">
        <div className="seam-divider" />
      </div>
    </section>
  );
};
