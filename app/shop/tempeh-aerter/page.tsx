
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TempehAerterDetail from './TempehAerterDetail';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function TempehAerterPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <TempehAerterDetail />
      <Footer />
    </div>
  );
}
