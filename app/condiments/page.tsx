
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CondimentsHero from './CondimentsHero';
import UmamiSection from './UmamiSection';
import TestimonialSection from './TestimonialSection';
import Condiment01Section from './Condiment01Section';
import Condiment02Section from './Condiment02Section';
import BarrelAgedSection from './BarrelAgedSection';

export default function CondimentsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CondimentsHero />
      <UmamiSection />
      <TestimonialSection />
      <Condiment01Section />
      <Condiment02Section />
      <BarrelAgedSection />
      <Footer />
    </div>
  );
}
