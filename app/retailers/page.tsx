'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RetailersHero from './RetailersHero';
import RetailerLocations from './RetailerLocations';
import BecomeRetailer from './BecomeRetailer';
import RetailerMap from './RetailerMap';

export default function RetailersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <RetailersHero />
      <RetailerLocations />
      <RetailerMap />
      <BecomeRetailer />
      <Footer />
    </div>
  );
}