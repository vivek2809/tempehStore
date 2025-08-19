'use client';

import { useLanguage } from '@/components/Header';
import Link from 'next/link';

export default function TempehBestSnackSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "TEMPEH, THE YEAR'S BEST SNACK SO FAR?",
      subtitle: "SØREN FRANK ON SERVING AT FORMEL B'S POP-UP IN SOMMERLANDET",
      quote: "'Best of all, perhaps even the best snack of the year so far, was a fried tempeh, ... , Lille B's tempeh, which is made by Contempehary in Annebergparken in Nykøbing Sjælland, is made from split peas. The crispy \"pea bread\" was topped with lovage mayo, citrus pickled glass cabbage, fried spruce and on top of it all a generous portion of grated Julsø Maestro cheese. An extremely tasty and complete snack that just had the whole package.'",
      description: "This is how Søren Frank wrote in Berlingske when he reviewed LilleB (Formel B's pop-up at Lillero), in July 2022 and gave five out of six possible stars. As legendary as he is for his sharp pen, we were just as happy for this unexpected and distinguished review!"
    },
    da: {
      title: "TEMPEH, ÅRETS HIDTIL BEDSTE SNACK?",
      subtitle: "SØREN FRANK OM SERVERING PÅ FORMEL B'S POP UP I SOMMERLANDET",
      quote: "'Aller bedst, måske endda året hidtil bedste snack, var en friteret tempeh, ... , Lille B's tempeh, som er fremstillet af Contempehary i Annebergparken i Nykøbing Sjælland, er lavet på flækærter. Det sprøde \"ærtebrød\" var toppet med løvstikkemayo, citrussyltet glaskål, friteret gran og på toppen af det hele en generøs portion revet Julsø Maestro ost. En ekstremt velsmagende og komplet snack, som bare havde hele pakken.'",
      description: "Således skrev Søren Frank i Berlingske da han anmeldte LilleB (Formel B's pop up på Lillero), i Juli 2022 og gav fem ud af seks mulige stjerner. Lige så legendarisk han er for sin skarpe pen, ligeså glade var vi for denne uventede og fornemme omtale!"
    }
  };

  const text = content[language];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <img 
              src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/%C3%85rets%20bedste%20snack/Berlingske%20anmeldelse.jpg?etag=%2221aaa-635bb459%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=384%2B322&extract=0%2B15%2B384%2B252&quality=85"
              alt="Berlingske review of tempeh"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/%C3%85rets%20bedste%20snack/LilleB%20Nordisk%20Tempeh.JPEG?etag=%223a025f-635bb45c%22&sourceContentType=image%2Fjpeg&rotate=90&ignoreAspectRatio&resize=242%2B323&extract=35%2B26%2B190%2B260&quality=85"
                alt="Nordic Tempeh at LilleB"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/%C3%85rets%20bedste%20snack/S%C3%B8ren%20Frank%20anmeldelse.jpg?etag=%223684f-635bb45c%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=308%2B508&extract=0%2B90%2B308%2B417&quality=85"
                alt="Søren Frank review"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{text.title}</h2>
            <h3 className="text-2xl font-semibold text-gray-700">{text.subtitle}</h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <blockquote className="text-xl italic border-l-4 border-gray-300 pl-6">
                {text.quote}
              </blockquote>
              
              <p>
                <Link 
                  href="https://www.berlingske.dk/gastronomi/soeren-frank-den-etstjernede-michelinrestaurants-pop-up-i-sommerlandet" 
                  target="_blank" 
                  rel="noopener"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {text.description}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}