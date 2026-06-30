import { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { Experience } from './components/Experience';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomStitching } from './components/CustomStitching';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { ConsultationModal } from './components/ConsultationModal';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    // Show the needle-and-thread loading animation for 2.6 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  return (
    <>
      {/* Thread & Needle Loader Screen */}
      <Loader isLoading={isLoading} />

      {!isLoading && (
        <div className="min-h-screen bg-warm-beige text-olive-green selection:bg-muted-gold selection:text-warm-beige overflow-hidden">
          {/* Header Navigation */}
          <Navbar onOpenConsultation={openConsultation} />

          {/* Main Sections */}
          <main>
            {/* Hero Banner */}
            <Hero onOpenConsultation={openConsultation} />

            {/* About the Boutique Brand narrative */}
            <About />

            {/* Grid of collections */}
            <Collections />

            {/* Alternating highlights of boutique environment */}
            <Experience />

            {/* Bullet value propositions */}
            <WhyChooseUs />

            {/* Custom Stitching Journey Timeline */}
            <CustomStitching />

            {/* Pinterest Masonry Gallery */}
            <Gallery />

            {/* Reviews & Accordion FAQs */}
            <Testimonials />

            {/* Location Card & Appointment Inquiry Form */}
            <Contact />
          </main>

          {/* Footer & Social indicators */}
          <Footer />

          {/* WhatsApp floating CTA, top scroll button, mobile banner */}
          <FloatingWidgets onOpenConsultation={openConsultation} />

          {/* Consultation Popup Form Modal */}
          <ConsultationModal isOpen={isConsultationOpen} onClose={closeConsultation} />
        </div>
      )}
    </>
  );
}

export default App;
