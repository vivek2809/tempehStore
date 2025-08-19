'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FoodserviceHero from './FoodserviceHero';
import FoodserviceInfo from './FoodserviceInfo';
import FoodserviceProducts from './FoodserviceProducts';
import FoodserviceTestimonial from './FoodserviceTestimonial';

export default function FoodservicePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <FoodserviceHero />
      <FoodserviceInfo />
      <FoodserviceProducts />
      <FoodserviceTestimonial />
      <Footer />
    </div>
  );
}