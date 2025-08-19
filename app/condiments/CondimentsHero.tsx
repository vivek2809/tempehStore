
'use client';

import { useLanguage } from '@/components/Header';

export default function CondimentsHero() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "NEW NORDIC FLAVOR BOOSTERS",
      subtitle: "WELCOME 'CONTEMPEHRARY CONDIMENTS'",
      description: [
        "These are products that take Nordic legumes in exciting new directions, pushing the boundaries of how they can be fermented and how much umami we can create with them! They can be used in the same way as soy sauce, miso or bouillon. Thus they function as natural flavor boosters that can elevate any meal.",
        "The ingredients are simple: beans, water, salt and fermentation cultures. The process is natural, but somewhat more complex - in fact, the products are carefully fermented in three separate steps. And although we have taken inspiration from Indonesian and Japanese fermentation methods, our process is innovative and unique. It can all be tasted."
      ]
    },
    da: {
      title: "NYE NORDISKE SMAGSBOOSTERE",
      subtitle: "TAG GODT IMOD 'CONTEMPEHRARY CONDIMENTS'",
      description: [
        "Dette er produkter, der tager nordiske bælgfrugter i nye spændende retninger, rykker grænserne for hvordan de kan fermenteres, samt hvor meget umami vi kan frembringe med dem! De kan anvendes på samme måde som sojasauce, miso eller bouillon. Således fungerer de som naturlige smagsboostere, der kan løfte ethvert måltid.",
        "Ingredienserne er simple: bønner, vand, salt og fermenteringskulturer. Processen er naturlig, men noget mere indviklet - faktisk bliver produkterne nænsomt fermenteret i hele tre separate trin. Og selvom vi har taget inspiration i indonesiske og japanske fermenteringsmetoder, så er vores proces innovativ og unik. Det kan alt sammen smages."
      ]
    }
  };

  const text = content[language];

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {text.title}
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-8">
            {text.subtitle}
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-4">
            {text.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
