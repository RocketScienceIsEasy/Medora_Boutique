import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
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
    <footer className="bg-soft-cream border-t border-light-sand/40 relative">
      {/* Seam line on top of footer */}
      <div className="absolute top-0 left-0 right-0 h-[2px]">
        <div className="seam-divider" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex flex-col text-left">
              <span className="text-2xl tracking-widest text-olive-green uppercase font-serif font-semibold">
                Medora
              </span>
              <span className="text-[10px] tracking-[0.25em] text-muted-gold uppercase font-sans font-medium mt-1">
                Boutique Design Studio
              </span>
            </div>
            <p className="text-xs text-olive-green/70 max-w-sm leading-relaxed font-sans">
              Timeless outfits, custom fit, and handcrafted quality. Creating designer memories for every occasion in Kothamangalam, Kerala.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-muted-gold font-sans font-semibold">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-olive-green/80 hover:text-muted-gold font-sans">Home</a>
              <a href="#collections" onClick={(e) => handleLinkClick(e, '#collections')} className="text-olive-green/80 hover:text-muted-gold font-sans">Collections</a>
              <a href="#stitching" onClick={(e) => handleLinkClick(e, '#stitching')} className="text-olive-green/80 hover:text-muted-gold font-sans">Custom Stitching</a>
              <a href="#gallery" onClick={(e) => handleLinkClick(e, '#gallery')} className="text-olive-green/80 hover:text-muted-gold font-sans">Gallery</a>
              <a href="#testimonials" onClick={(e) => handleLinkClick(e, '#testimonials')} className="text-olive-green/80 hover:text-muted-gold font-sans">Testimonials</a>
              <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-olive-green/80 hover:text-muted-gold font-sans">About Us</a>
              <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-olive-green/80 hover:text-muted-gold font-sans">Contact</a>
            </div>
          </div>

          {/* Column 3: Social Links & Instagram Placeholder */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-muted-gold font-sans font-semibold">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-warm-beige hover:bg-muted-gold text-olive-green hover:text-warm-beige rounded-full border border-light-sand/30 shadow-xs transition-colors"
                aria-label="Instagram Link"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-warm-beige hover:bg-muted-gold text-olive-green hover:text-warm-beige rounded-full border border-light-sand/30 shadow-xs transition-colors"
                aria-label="Facebook Link"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-warm-beige hover:bg-muted-gold text-olive-green hover:text-warm-beige rounded-full border border-light-sand/30 shadow-xs transition-colors"
                aria-label="WhatsApp Link"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            
            {/* Instagram Feed Placeholder */}
            <div className="pt-2">
              <span className="block text-[9px] uppercase tracking-wider text-olive-light/50 font-sans">
                [ Instagram Feed Placeholder ]
              </span>
              <div className="flex space-x-2 mt-2 select-none">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 bg-warm-beige border border-light-sand/35 rounded-md flex items-center justify-center">
                    <span className="text-[7px] text-muted-gold/40">#{i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-light-sand/20 flex flex-col sm:flex-row justify-between items-center text-[11px] text-olive-green/60 font-sans space-y-4 sm:space-y-0">
          <span>
            © {currentYear} Medora Boutique. All Rights Reserved.
          </span>
          <span className="flex items-center">
            Handcrafted with <Heart className="w-3 h-3 text-muted-gold mx-1 fill-muted-gold" /> in Kothamangalam
          </span>
        </div>

      </div>
    </footer>
  );
};
