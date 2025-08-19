'use client';

import { useLanguage } from '@/components/Header';
import Link from 'next/link';

export default function BestInClassSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "'BEST IN CLASS' - TWICE",
      subtitle: "TOP SCORE AT NORDIC ARTISAN FOOD AWARDS",
      description: "With 20 out of 20 possible points for taste, texture and appearance for our products, they were both awarded gold medals and named 'Best in Class' at Nordic Artisan Food Awards 2022, which was held in Stockholm. A large group of taste judges from all over the Nordic region was assembled and tasted products all day, where all products were completely anonymously represented. Therefore, no one knew that both winning products were from us until it was revealed on stage. It was a bit overwhelming to have to go on stage twice to receive gold medals - and quite cool!",
      motivation: "As motivation, the panel of judges wrote these statements:",
      quote1: "'An exceptional and innovative product in the form of a bean-based umami sauce. With intense and complex notes in both aroma and taste that create a symphony together. This one you want to bring with you everywhere!'",
      quote2: "'This product raises the horizon of what a tempeh can be. It has a wide range of uses and can be eaten raw and fried, for both sweet and savory dishes. A Nordic tempeh at its best!'",
      closing: "Nordic Artisan Food Awards is a joint Nordic award ceremony for the best in Nordic food craftsmanship, held every other year. It is organized by an association of Terra Madre Nordic and Slow Food in the Nordic countries, with support from the Nordic Council of Ministers.",
      linkText: "Nordic Artisan Food Awards 2022"
    },
    da: {
      title: "'BEST IN CLASS' - GANGE 2",
      subtitle: "TOPSCORE VED NORDIC ARTISAN FOOD AWARDS",
      description: "Med 20 ud af 20 mulige point for smag, tekstur og udseende til vores produkter, blev de begge tildelt guldmedalje og kåret til 'Best in Class' ved Nordic Artisan Food Awards 2022, som blev afholdt i Stockholm. Et større hold af smagsdommere fra hele Norden var samlet og smagte på produkter dagen lang, hvor alle produkter var fuldstændigt annonymt repræsenteret. Derfor vidste ingen at begge de vindende produkter var fra os, før det blev afsløret på scenen. Det var lidt overvældende at skulle på scenen to gange for at modtage guldmedaljer - og ret sejt!",
      motivation: "Som motivation skrev dommerpanelet disse udtalelser:",
      quote1: "'An exceptional and innovative product in the form of a bean-based umami sauce. With intense and complex notes in both aroma and taste that create a symphony together. This one you want to bring with you everywhere!'",
      quote2: "'This product raises the horizon of what a tempeh can be. It has a wide range of uses and can be eaten raw and fried, for both sweet and savory dishes. A Nordic tempeh at its best!'",
      closing: "Nordic Artisan Food Awards er en fælles Nordisk prisuddeling til det bedste indenfor Nordisk madhåndværk, som afholdes hvert andet år. Den er arrangeret af en sammenslutning af Terra Madre Nordic og Slow Food i Norden, med støtte fra Nordisk Ministerråd.",
      linkText: "Nordic Artisan Food Awards 2022"
    }
  };

  const text = content[language];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/NAFA2.jpg?etag=%221cb8c9-635ba55c%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=210%2B210&quality=85"
                alt="Nordic Artisan Food Awards ceremony"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/NAFA.jpg?etag=%225b15f8-635ba567%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=310%2B310&extract=30%2B1%2B270%2B309&quality=85"
                alt="NAFA award presentation"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            
            <img 
              src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/NAFA3.jpg?etag=%221bf9d0-635ba557%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=336%2B336&quality=85"
              alt="Nordic Artisan Food Awards"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            
            <div className="flex justify-center">
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/Nafa%20gold%2050mm%20best%20in%20class.png?etag=%22e1e2-635ba72f%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=190%2B190"
                alt="NAFA Best in Class Gold Medal"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{text.title}</h2>
            <h3 className="text-2xl font-semibold text-gray-700">{text.subtitle}</h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                {text.description.split('Nordic Artisan Food Awards 2022')[0]}
                <Link 
                  href="https://www.eldrimner.com/evenemang/54049.nordic_artisan_food_awards_2022.html"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {text.linkText}
                </Link>
                {text.description.split('Nordic Artisan Food Awards 2022')[1]}
              </p>
              
              <p>{text.motivation}</p>
              
              <blockquote className="text-lg italic border-l-4 border-gray-300 pl-6 my-6">
                {text.quote1}
              </blockquote>
              
              <blockquote className="text-lg italic border-l-4 border-gray-300 pl-6 my-6">
                {text.quote2}
              </blockquote>
              
              <p>{text.closing}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}