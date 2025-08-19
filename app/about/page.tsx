'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './AboutHero';
import JourneySection from './JourneySection';
import ThanksSection from './ThanksSection';
import MediaSection from './MediaSection';
import ContactSection from './ContactSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <JourneySection />
      <ThanksSection />
      <MediaSection />
      <ContactSection />
      <Footer />
    </div>
  );
}