
'use client';

import { useLanguage } from '@/components/Header';

export default function TestimonialSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "'BEST IN CLASS'",
      subtitle: "CONDIMENTS DEVELOPED FOR GOURMETS. NOW AVAILABLE FOR EVERYONE WITH GOOD TASTE",
      description: [
        "We are super happy about the wild reception that CONTEMPEHRARY CONDIMENTS has received from the finest experts in taste!",
        "CONDIMENT #01 was among the three finalists for the Product Award at Sol over Gudhjem in the 'Innovation' category and at Nordic Artisan Food Awards 2022, it received the absolute top score, gold medal and was awarded the title 'Best in Class'.",
        "So although it has taken time to launch CONDIMENT #01 and #02 on a larger scale, we have already had great demand for the first small batches, which we have sold to leading (Michelin) star chefs.",
        "Now we are pleased that the products are available to many more. You can find them at Dansk Cater (BC Catering / AB Catering) and at Hørkram. You are always welcome to contact us for more information about B2B trade."
      ]
    },
    da: {
      title: "'BEST IN CLASS'",
      subtitle: "CONDIMENTS UDVIKLET TIL GOURMETER. NU TILGÆNGELIGE FOR ALLE MED GOD SMAG",
      description: [
        "Vi er super glade for den vilde modtagelse som CONTEMPEHRARY CONDIMENTS har fået af de ypperste eksperter i smag!",
        "CONDIMENT #01 var blandt de tre finalister til Produktprisen ved Sol over Gudhjem i kategorien 'Innovation' og ved Nordic Artisan Food Awards 2022, fik den absolut topscore, guldmedalje og blev præmieret med titlen 'Best in Class'.",
        "Så selvom det har taget tid at lancere CONDIMENT #01 og #02 i større skala, så har vi allerede haft stor efterspørgsel på de første små batches, som vi har solgt til førende (Michelin)stjernekokke.",
        "Nu glæder vi os over at produkterne er tilgængelige for mange flere. Du kan bl.a. finde dem hos Dansk Cater (BC Catering / AB Catering) og hos Hørkram. Du altid velkommen til at kontakte os for mere information om B2B handel."
      ]
    }
  };

  const text = content[language];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{text.title}</h2>
            <h3 className="text-2xl font-semibold text-gray-700">
              {text.subtitle}
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {text.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/1f8e19786852a4d49260f370dc941d88.png"
              alt="Dubble guldmedaljøren Tobias Noe Harboe"
              className="w-80 h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
