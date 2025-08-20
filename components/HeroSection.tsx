
'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/Header';

export default function HeroSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      organic: "ORGANIC",
      title: "NORDIC TEMPEH",
      subtitle: "FERMENTED WITH CARE IN ODSHERRED",
      description: "Here ancient Indonesian fermentation methods meet new Nordic ingredients, in completely plant-based and natural foods that satisfy and nourish as well as they taste. Enjoy!",
      readMore: "Read more"
    },
    no: {
      organic: "ØKOLOGISK",
      title: "NORDISK TEMPEH", 
      subtitle: "FERMENTERET MED OMHU I ODSHERRED",
      description: "Her mødes oldgamle indonesiske fermenteringsmetoder med nye nordiske råvarer, i fuldkommen plantebaserede og naturlige fødevarer, der mætter og nærer lige så godt som de smager. Velbekomme!",
      readMore: "Læs mere"
    }
  };

  const text = content[language];

  return (
    <section 
      className="relative h-[900px] bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/605bad145e5547bd1f274bc5f9c3346b.png)'
      }}
    >
      <div className="relative z-10 flex items-center h-full">
        <div className="w-full max-w-8xl mx-auto px-8 flex items-center">
          <div className="flex-1"></div>
          <div className="flex-1 flex justify-end pr-16">
            <Link href="/nordic-tempeh" className="inline-block group">
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md group-hover:bg-white/35 group-hover:shadow-xl transition-all duration-500">
                <p className="text-lg font-medium text-gray-800 mb-3 tracking-wide group-hover:text-gray-900 group-hover:scale-105 transition-all duration-300">{text.organic}</p>
                <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-gray-900 group-hover:scale-105 transition-all duration-300">
                  {text.title}
                </h1>
                <p className="text-lg text-gray-800 mb-6 tracking-wide group-hover:text-gray-900 group-hover:scale-105 transition-all duration-300">
                  {text.subtitle}
                </p>
                <p className="text-gray-700 text-base leading-relaxed group-hover:text-gray-800 group-hover:scale-105 transition-all duration-300">
                  {text.description}
                </p>
                
                <div className="mt-6 pt-4 border-t border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
                  <span className="inline-flex items-center text-gray-600 group-hover:text-gray-800 font-medium transition-colors duration-300">
                    {text.readMore}
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
