'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RecipesHero from './RecipesHero';
import RecipesGrid from './RecipesGrid';

export default function RecipesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <RecipesHero />
      <RecipesGrid />
      <Footer />
    </div>
  );
}