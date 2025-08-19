
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TempehBonnerDetail from './TempehBonnerDetail';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function TempehBonnerPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <TempehBonnerDetail />
      <Footer />
    </div>
  );
}
