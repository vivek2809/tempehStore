'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShopHero from './ShopHero';
import ProductGrid from './ProductGrid';
import ShopTestimonial from './ShopTestimonial';

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ShopHero />
      <ProductGrid />
      <ShopTestimonial />
      <Footer />
    </div>
  );
}