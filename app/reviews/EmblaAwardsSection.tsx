'use client';

import { useLanguage } from '@/components/Header';
import Link from 'next/link';

export default function EmblaAwardsSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "EMBLA AWARDS",
      subtitle: "WE REPRESENTED DENMARK IN THE 'FOOD ENTREPRENEUR OF THE YEAR' CATEGORY",
      description1: "The Nordic Food Awards - EMBLA - are awarded every other year. It is a meeting between all the Nordic countries, where inspiration and good examples from the Nordic food scene are exchanged.",
      description2: "In 2021/2022 we were selected to represent Denmark in the 'Food Entrepreneur of the Year' category when the prizes were to be awarded in Oslo. On that occasion, EMBLA wrote among other things:",
      quote: "'What makes Nordic Tempeh unique is the fact that it is not a mock-meat or a meat replacement product – it is its very own thing, a tasteful sensory boost to the world of plant based products, proving that plant based foods can succeed on their own merits, and not just as a faux-meat.'",
      description3: "Unfortunately, we weren't allowed to bring taste samples to Oslo and the decision was made during a closed meeting that we didn't participate in. First place went to Sweden and a producer of ice-cider who grows his apples north of the Arctic Circle - a project that is quite uphill! For many years people thought he was crazy, but he succeeded, so big congratulations to him. We were happy to participate and show the flag together with Denmark's leading food people.",
      linkText: "EMBLA"
    },
    da: {
      title: "EMBLA AWARDS",
      subtitle: "VI REPRÆSENTEREDE DANMARK I KATEGORIEN 'ÅRETS FØDEVARE ENTREPRENØR'",
      description1: "De Nordiske fødevarepriser - EMBLA - uddeles hvert andet år. Det er et møde mellem alle de nordiske lande, hvor der udveksles inspiration og gode eksempler fra den Nordiske fødevarescene.",
      description2: "I 2021/2022 var vi udpeget til at repræsentere Danmark i kategorien 'Årets Fødevareentreprenør', da priserne skulle uddeles i Oslo. I den anledning skrev EMBLA bl.a.:",
      quote: "'What makes Nordic Tempeh unique is the fact that it is not a mock-meat or a meat replacement product – it is its very own thing, a tasteful sensory boost to the world of plant based products, proving that plant based foods can succeed on their own merits, and not just as a faux-meat.'",
      description3: "Desværre måtte vi ikke tage smagsprøver med til Oslo og afgørelsen blev truffet under et lukket møde, som vi ikke deltog i. Førstepladsen gik til Sverige og en producent af ice-cider som dyrker sine æbler nord for polarcirklen - et projekt som er ret op ad bakke! I mange år troede folk han var skør, men han er lykkedes med det, så stort tillykke til ham. Vi var glade for at være med og vise fanen sammen med Danmarks førende fødevarefolk.",
      linkText: "EMBLA"
    }
  };

  const text = content[language];

  return (
    <section style={{ backgroundColor: 'rgba(169,185,172,0.3)' }} className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{text.title}</h2>
            <h3 className="text-2xl font-semibold text-gray-700">{text.subtitle}</h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                {text.description1.split('EMBLA')[0]}
                <Link 
                  href="https://emblafoodaward.com"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {text.linkText}
                </Link>
                {text.description1.split('EMBLA')[1]}
              </p>
              
              <p>{text.description2}</p>
              
              <blockquote className="text-xl italic border-l-4 border-gray-300 pl-6 my-6">
                {text.quote}
              </blockquote>
              
              <p>{text.description3}</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <img 
              src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/EMBLA/EMBLA%20prisoverr%C3%A6kkelse.jpg?etag=%2271dc7-635ba9e7%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=311%2B197&quality=85"
              alt="EMBLA award ceremony"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/EMBLA/Embla_icon-02-1.png?etag=%2258a3-635ba9e7%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=182%2B182"
                alt="EMBLA icon"
                className="w-full h-32 object-contain rounded-lg shadow-md"
              />
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/EMBLA/EMBLA%20Nominee.jpg?etag=%22a883e-635ba9e6%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=393%2B164&quality=85"
                alt="EMBLA nominee"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
            </div>
            
            <img 
              src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/EMBLA/Team%20DK%20EMBLA%202022.jpg?etag=%22822e1-635ba9e9%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=417%2B290&extract=0%2B19%2B417%2B215&quality=85"
              alt="Team Denmark at EMBLA 2022"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}