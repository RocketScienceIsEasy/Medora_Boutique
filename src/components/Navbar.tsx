import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check scroll background trigger
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#collections' },
    { name: 'Custom Stitching', href: '#stitching' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of sticky navbar
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-warm-beige/90 backdrop-blur-md shadow-sm border-b border-light-sand/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[3px] bg-muted-gold transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center space-x-1.5 group ml-2 sm:ml-4"
            >
              <img 
                src="/medora_logo.png" 
                alt="Medora Logo" 
                className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col text-left">
                <span className="text-xl sm:text-2xl tracking-widest text-olive-green uppercase font-serif font-semibold leading-none">
                  Medora
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] text-muted-gold uppercase font-sans font-medium mt-1">
                  Boutique Design Studio
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm font-medium text-olive-green/80 hover:text-muted-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider text-warm-beige bg-olive-green hover:bg-olive-light rounded-full shadow-sm hover:shadow-md transition-all duration-300 uppercase"
              >
                <PhoneCall className="w-3.5 h-3.5 mr-2" />
                Book Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-olive-green hover:text-muted-gold p-2 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-y-0 right-0 z-50 w-72 bg-warm-beige shadow-2xl border-l border-light-sand/20 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center px-6 py-5 border-b border-light-sand/20">
            <div className="flex items-center space-x-1 pl-2">
              <img 
                src="/medora_logo.png" 
                alt="Medora Logo" 
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col text-left">
                <span className="text-lg tracking-widest text-olive-green uppercase font-serif font-semibold leading-none">
                  Medora
                </span>
                <span className="text-[8px] tracking-[0.2em] text-muted-gold uppercase font-sans font-medium mt-1">
                  Design Studio
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-olive-green hover:text-muted-gold p-1"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-olive-green/90 hover:text-muted-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenConsultation();
              }}
              className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold tracking-wider text-warm-beige bg-olive-green hover:bg-olive-light rounded-full shadow transition-all duration-300 uppercase mt-4"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Book Consultation
            </button>
          </div>
        </div>

        {/* Mobile drawer backdrop */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 z-40 bg-olive-green/20 backdrop-blur-xs transition-opacity duration-300"
          />
        )}
      </nav>
    </>
  );
};
