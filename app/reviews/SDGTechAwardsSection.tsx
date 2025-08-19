'use client';

import { useLanguage } from '@/components/Header';
import Link from 'next/link';

export default function SDGTechAwardsSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "SDG TECH AWARDS",
      subtitle: "AWARD FOR SUSTAINABLE FOOD TECHNOLOGY",
      description1: "'The largest sustainability award in the Nordics' - this is how SDG Tech Awards describes itself. And we are nominated in 2022 with the following motivation:",
      quote: "'Danish production of tempeh and related products. Circular approach. Only Danish ingredients. An important startup in regards to teaching the Danes to eat plant based and local by bringing them fermented great taste'.",
      description2: "CONTEMPEHRARY is founded on a desire to use innovation to create sustainable solutions and tasty plant-based foods. Therefore, it is also nice to have some spotlight on us from a sustainable food-tech angle.",
      description3: "We look forward to 'an event discovering, showcasing, and promoting sustainable tech innovations from startups, SMEs and corporations spanning 6 different industries' as SDG writes.",
      linkText: "SDG Tech Awards"
    },
    da: {
      title: "SDG TECH AWARDS",
      subtitle: "PRIS FOR BÆREDYGTIG FØDEVARETEKNOLOGI",
      description1: "'The largest sustainability award in the Nordics' - sådan beskriver SDG Tech Awards sig selv. Og vi er nominerede i 2022 med følgende motivation:",
      quote: "'Danish production of tempeh and related products. Circular approach. Only Danish ingredients. An important startup in regards to teaching the Danes to eat plant based and local by bringing them fermented great taste'.",
      description2: "CONTEMPEHRARY er grundlagt på et ønske om at bruge innovation til at skabe bæredygtige løsninger og smagfulde plantebaserede fødevarer. Derfor er det også dejligt med lidt spotlight på os fra en bæredygtig food-tech vinkel.",
      description3: "Vi glæder os til 'an event discovering, showcasing, and promoting sustainable tech innovations from startups, SMEs and corporations spanning 6 different industries' som SDG skriver.",
      linkText: "SDG Tech Awards"
    }
  };

  const text = content[language];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <img 
              src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/SDG%20Tech%20Awards.png?etag=%229c60d-635ba227%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=345%2B204&extract=9%2B0%2B336%2B204"
              alt="SDG Tech Awards"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/SDG%20Tech%20Awards%20process.png?etag=%222c261-635ba40a%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=232%2B264&extract=18%2B0%2B197%2B264"
                alt="SDG Tech Awards process"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/Nomination%20Graphic%20SoMe%203.JPG?etag=%222eaec-635ba204%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=273%2B273&quality=85"
                alt="Nomination graphic"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{text.title}</h2>
            <h3 className="text-2xl font-semibold text-gray-700">{text.subtitle}</h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                {text.description1.split('SDG Tech Awards')[0]}
                <Link 
                  href="https://sdgtechawards.com"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {text.linkText}
                </Link>
                {text.description1.split('SDG Tech Awards')[1]}
              </p>
              
              <blockquote className="text-xl italic border-l-4 border-gray-300 pl-6">
                {text.quote}
              </blockquote>
              
              <p>{text.description2}</p>
              <p>{text.description3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}