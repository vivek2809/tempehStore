'use client';

import { useLanguage } from '@/components/Header';

export default function KnowledgeHero() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "TEMPEH KNOWLEDGE CENTER",
      subtitle: "EVERYTHING YOU NEED TO KNOW ABOUT NORDIC TEMPEH",
      description: "Discover the fascinating world of tempeh - from its ancient Indonesian origins to modern Nordic innovation. Learn about nutrition, cooking techniques, sustainability, and how to make tempeh a delicious part of your everyday meals."
    },
    da: {
      title: "TEMPEH VIDENSCENTER",
      subtitle: "ALT HVAD DU SKAL VIDE OM NORDISK TEMPEH",
      description: "Opdag den fascinerende verden af tempeh - fra dens gamle indonesiske oprindelse til moderne nordisk innovation. Lær om ernæring, kogeteknikker, bæredygtighed, og hvordan du gør tempeh til en lækker del af dine hverdagsmåltider."
    }
  };

  const text = content[language];

  return (
    <section 
      style={{ 
        backgroundColor: 'rgba(169,185,172,0.3)',
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20fermented%20food%20laboratory%20with%20organic%20ingredients%2C%20soybeans%20and%20legumes%2C%20clean%20white%20background%20with%20green%20botanical%20elements%2C%20minimalist%20food%20science%20photography%20with%20natural%20lighting%20and%20fresh%20organic%20produce&width=1200&height=600&seq=tempeh-knowledge-hero&orientation=landscape')`
      }} 
      className="py-24 px-8 bg-cover bg-center bg-no-repeat relative"
    >
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            {text.title}
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-12 max-w-4xl mx-auto">
            {text.subtitle}
          </h2>
          
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
            <p>{text.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}