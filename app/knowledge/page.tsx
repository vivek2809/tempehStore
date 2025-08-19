'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KnowledgeHero from './KnowledgeHero';
import TempehBasicsSection from './TempehBasicsSection';
import NutritionSection from './NutritionSection';
import CookingTipsSection from './CookingTipsSection';
import StorageSection from './StorageSection';
import SustainabilitySection from './SustainabilitySection';

export default function KnowledgePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <KnowledgeHero />
      <TempehBasicsSection />
      <NutritionSection />
      <CookingTipsSection />
      <StorageSection />
      <SustainabilitySection />
      <Footer />
    </div>
  );
}