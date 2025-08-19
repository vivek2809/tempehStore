'use client';

import { useLanguage } from '@/components/Header';

export default function TempehBasicsSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "WHAT IS TEMPEH?",
      subtitle: "FROM ANCIENT FERMENTATION TO MODERN SUPERFOOD",
      origins: {
        title: "Ancient Origins",
        text: "Tempeh originated in Indonesia over 1,000 years ago as a traditional fermented food. Made through natural fermentation of soybeans with Rhizopus oligosporus culture, it creates a firm, cake-like protein with a distinctive nutty flavor and impressive nutritional profile."
      },
      process: {
        title: "Fermentation Process", 
        text: "The fermentation process creates beneficial compounds and makes nutrients more bioavailable. During fermentation, the Rhizopus culture binds the soybeans together with white mycelium, creating tempeh's characteristic appearance and texture."
      },
      nordic: {
        title: "Nordic Innovation",
        text: "At CONTEMPEHRARY, we've adapted this ancient technique using organic Nordic legumes, grains, and seeds. Our Nordic tempeh maintains traditional fermentation methods while incorporating local, sustainable ingredients like yellow peas, oats, and sunflower seeds."
      },
      benefits: {
        title: "Key Benefits",
        items: [
          "Complete protein with all essential amino acids",
          "Rich in probiotics for digestive health", 
          "High fiber content for sustained energy",
          "Contains B vitamins, especially B12",
          "Sustainable protein source with low environmental impact",
          "Versatile ingredient for countless recipes"
        ]
      }
    },
    da: {
      title: "HVAD ER TEMPEH?",
      subtitle: "FRA GAMMEL FERMENTERING TIL MODERNE SUPERFOOD",
      origins: {
        title: "Gamle Rødder",
        text: "Tempeh opstod i Indonesien for over 1.000 år siden som en traditionel fermenteret fødevare. Fremstillet gennem naturlig fermentering af sojabønner med Rhizopus oligosporus kultur, skaber det et fast, kage-lignende protein med en karakteristisk nøddeagtig smag og imponerende ernæringsprofil."
      },
      process: {
        title: "Fermenteringsprocessen",
        text: "Fermenteringsprocessen skaber gavnlige forbindelser og gør næringsstoffer mere biotilgængelige. Under fermentering binder Rhizopus kulturen sojabønnerne sammen med hvidt mycelium, hvilket skaber tempehs karakteristiske udseende og tekstur."
      },
      nordic: {
        title: "Nordisk Innovation", 
        text: "Hos CONTEMPEHRARY har vi tilpasset denne gamle teknik ved at bruge økologiske nordiske bælgfrugter, korn og frø. Vores nordiske tempeh bibeholder traditionelle fermenteringsmetoder, mens vi inkorporerer lokale, bæredygtige ingredienser som gule ærter, havre og solsikkekerner."
      },
      benefits: {
        title: "Nøglefordele",
        items: [
          "Komplet protein med alle essentielle aminosyrer",
          "Rig på probiotika for fordøjelsens sundhed",
          "Højt fiberindhold for vedvarende energi", 
          "Indeholder B-vitaminer, især B12",
          "Bæredygtig proteinkilde med lav miljøpåvirkning",
          "Alsidig ingrediens til utallige opskrifter"
        ]
      }
    }
  };

  const text = content[language];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{text.title}</h2>
          <h3 className="text-2xl font-semibold text-gray-700">{text.subtitle}</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{text.origins.title}</h4>
              <p className="text-gray-600 leading-relaxed">{text.origins.text}</p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{text.process.title}</h4>
              <p className="text-gray-600 leading-relaxed">{text.process.text}</p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{text.nordic.title}</h4>
              <p className="text-gray-600 leading-relaxed">{text.nordic.text}</p>
            </div>
          </div>

          <div className="space-y-6">
            <img 
              src="https://readdy.ai/api/search-image?query=Traditional%20Indonesian%20tempeh%20fermentation%20process%20showing%20white%20mycelium%20binding%20soybeans%20together%2C%20organic%20fermented%20food%20photography%20with%20natural%20lighting%2C%20rustic%20wooden%20background%20with%20traditional%20bamboo%20leaves&width=600&height=400&seq=tempeh-fermentation&orientation=landscape"
              alt="Traditional tempeh fermentation process" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            
            <img
              src="https://readdy.ai/api/search-image?query=Nordic%20organic%20legumes%20and%20grains%20including%20yellow%20peas%2C%20oats%2C%20sunflower%20seeds%20arranged%20beautifully%20on%20white%20marble%20surface%2C%20modern%20food%20photography%20with%20clean%20minimalist%20styling&width=600&height=300&seq=nordic-ingredients&orientation=landscape"
              alt="Nordic organic ingredients for tempeh"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(169,185,172,0.2)' }} className="rounded-lg p-8">
          <h4 className="text-2xl font-semibold text-gray-900 mb-6 text-center">{text.benefits.title}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {text.benefits.items.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mt-1"></i>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}