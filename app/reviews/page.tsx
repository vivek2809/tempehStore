'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewsHero from './ReviewsHero';
import TempehBestSnackSection from './TempehBestSnackSection';
import SolOverGudhjem from './SolOverGudhjem';
import BestInClassSection from './BestInClassSection';
import PremiumTempehSection from './PremiumTempehSection';
import SDGTechAwardsSection from './SDGTechAwardsSection';
import EmblaAwardsSection from './EmblaAwardsSection';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ReviewsHero />
      <TempehBestSnackSection />
      <SolOverGudhjem />
      <BestInClassSection />
      <PremiumTempehSection />
      <SDGTechAwardsSection />
      <EmblaAwardsSection />
      <Footer />
    </div>
  );
}