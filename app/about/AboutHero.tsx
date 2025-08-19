
'use client';

import { useLanguage } from '@/components/Header';

export default function AboutHero() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "WE ARE CONTEMPEHRARY",
      subtitle: "CONTEMPORARY IN OUR CONCEPT AND WILD ABOUT TEMPEH",
      description: [
        "We are a contemporary Danish food company, with a mission to create innovative and flavorful, plant-based foods. We start from traditional Indonesian fermentation methods that we fuse with local organic raw materials and modern food technology. The focal point is organic Nordic Tempeh of the highest quality, as well as products made from it.",
        "We focus on offering delicious, green and healthy taste experiences for everyone who has the courage to try something new. Our vision is that Nordic Tempeh becomes a preferred source of plant-based protein in the modern everyday kitchen.",
        "We take great care in creating thoughtful and holistic concepts in our product and business development. For us, quality, sustainability and transparency are important in everything we do, because we believe that good business is about social, environmental and economic benefits. We want to contribute to future-proof food production, where the entire value chain is taken into account.",
        "We have been going since 2019 and behind the company are we, Sabine Franciska Harboe and Tobias Noe Harboe. We both have backgrounds in the design and lifestyle industry, but we became so wild about tempeh that we chose to dedicate ourselves to this project. It is big, complex and incredibly challenging - while being fun, exciting and above all super meaningful. We are happy and grateful for that every day."
      ]
    },
    da: {
      title: "VI ER CONTEMPEHRARY",
      subtitle: "NUTIDIGE I VORES KONCEPT OG VILDE MED TEMPEH",
      description: [
        "Vi er en nutidig dansk fødevarevirksomhed, med en mission om at skabe innovative og smagfulde, plantebaserede fødevarer. Vi tager udgangspunkt i traditionelle indonesiske fermenteringsmetoder som vi fusionerer med lokale økologiske råvarer og moderne fødevareteknologi. Omdrejningspunktet er økologisk Nordisk Tempeh af højeste kvalitet, samt produkter fremstillet heraf.",
        "Vi har fokus på at tilbyde lækre, grønne og sunde smagsoplevelser for alle der har mod på at prøve noget nyt. Vores vision er at Nordisk Tempeh bliver en foretrukken kilde til plantebaseret protein i det moderne hverdagskøkken.",
        "Vi lægger stor omhu i at skabe gennemtænkte og holistiske koncepter i vores produkt- og forretningsudvikling. For os er det vigtigt med kvalitet, bæredygtighed og gennemsigtighed i alt hvad vi foretager os, fordi vi mener at god forretning handler om både de sociale, miljømæssige og økonomiske gevinster. Vi ønsker at bidrage til en fremtidssikret fødevareproduktion, hvor hele værdikæden er taget i betragtning.",
        "Vi har været igang siden 2019 og bag virksomheden står vi, Sabine Franciska Harboe og Tobias Noe Harboe. Vi har begge to baggrund i design- og livsstilsbranchen, men vi blev så vilde med tempeh at vi valgte at dedikere os til dette projekt. Det er stort, komplekst og utroligt udfordrende - samtidig med at det er sjovt, spændende og frem for alt super meningsfuldt. Det er vi glade og taknemmelige for hver dag."
      ]
    }
  };

  const text = content[language];

  return (
    <section style={{ backgroundColor: 'rgba(169,185,172,0.3)' }} className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            {text.title}
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-12">
            {text.subtitle}
          </h2>
          
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-6">
            {text.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
