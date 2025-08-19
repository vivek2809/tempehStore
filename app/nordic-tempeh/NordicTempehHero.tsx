
'use client';

import { useLanguage } from '@/components/Header';

export default function NordicTempehHero() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "NORDIC TEMPEH",
      subtitle: "ORGANIC AND COMPLETELY ITS OWN",
      paragraphs: [
        "Nordic tempeh is in many ways a new and unique food. Its taste, texture and appearance doesn't really resemble any other product. Therefore, it's difficult to explain what tempeh is and how it tastes without getting very technical. So in short, Nordic tempeh is completely its own. It simply has to be tasted.",
        "But tempeh itself is not new. In fact, tempeh has been produced and eaten for centuries in Indonesia, where it originally comes from. Traditional Indonesian tempeh is made from soybeans. These are first fermented with some lactic acid bacteria and then with a fungus called Rhizopus, which results in the 'bean cake' that is called tempeh.",
        "We produce our tempeh in Denmark using traditional Indonesian fermentation methods, but with modern production equipment and the best organic raw materials grown in the Nordics. Thus we create a contemporary and sustainable product that satisfies and nourishes as well as it tastes!",
        "Some will call it a fantastic green alternative to meat. We prefer to simply call it Nordic tempeh."
      ]
    },
    da: {
      title: "NORDISK TEMPEH",
      subtitle: "ØKOLOGISK OG FULDKOMMENT SIN EGEN",
      paragraphs: [
        "Nordisk tempeh er på mange måder en ny og unik fødevare. Dets smag, konsistens og udseende ligner ikke rigtig noget andet produkt. Derfor er det svært at forklare, hvad tempeh er og hvordan det smager, uden at blive meget teknisk. Så kort fortalt er nordisk tempeh fuldkomment sin egen. Det skal simpelthen prøves.",
        "Men tempeh er ikke nyt i sig selv. Faktisk har man fremstillet og spist tempeh igennem århundreder i Indonesien, hvor det oprindeligt stammer fra. Traditionel indonesisk tempeh er fremstillet af sojabønner. Disse fermenteres først med nogle mælkesyrebakterier og dernæst med en gærsvamp kaldet Rhizopus, som resulterer i den 'bønnekage' der altså kaldes tempeh.",
        "Vores tempeh fremstiller vi i Danmark med de traditionelle indonesiske fermenteringsmetoder, men med moderne produktionsudstyr og de bedste økologiske råvarer, som er dyrket i Norden. Således skaber vi et nutidigt og bæredygtigt produkt, der mætter og nærer, lige så godt som det smager!",
        "Nogle vil kalde det et fantastisk grønt alternativ til kød. Vi vil helst bare kalde det nordisk tempeh."
      ]
    }
  };

  const text = content[language];

  return (
    <section style={{ backgroundColor: 'rgba(169,185,172,0.3)' }} className="py-24">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-left group hover:bg-white/20 rounded-xl transition-all duration-500 p-8 cursor-pointer">
          <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight group-hover:text-gray-600 group-hover:scale-105 transition-all duration-300">
            {text.title}
          </h1>
          
          <h2 className="text-2xl font-medium text-gray-600 mb-12 tracking-wide group-hover:text-gray-500 group-hover:scale-105 transition-all duration-300">
            {text.subtitle}
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg group-hover:text-gray-600 group-hover:scale-105 transition-all duration-300">
            {text.paragraphs.map((paragraph, index) => (
              <p key={index} className={index === text.paragraphs.length - 1 ? 'font-medium' : ''}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
