
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TempehBonnerTangDetail from './TempehBonnerTangDetail';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function TempehBonnerTangPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <TempehBonnerTangDetail />
      <Footer />
    </div>
  );
}
