
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TempehProvepakkeDetail from './TempehProvepakkeDetail';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function TempehProvepakkePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <TempehProvepakkeDetail />
      <Footer />
    </div>
  );
}
