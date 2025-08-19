'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BarrelAgedDetail from './BarrelAgedDetail';

export default function BarrelAgedSaucePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BarrelAgedDetail />
      <Footer />
    </div>
  );
}