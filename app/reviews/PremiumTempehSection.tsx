'use client';

import { useLanguage } from '@/components/Header';
import Link from 'next/link';

export default function PremiumTempehSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "PREMIUM TEMPEH",
      subtitle: "SUPPLIER TO CASTLES AND STAR CHEFS",
      description: "Our products are developed and produced with a focus on the best ingredients and with great care. We also call it 'premium tempeh' because taste and texture are of special quality. But basically, tempeh is an ingredient that it's up to the chef to get the best taste experience out of. That's why we're super happy about all the collaborations we have with skilled chefs. And it's wonderful to receive recognition from the top shelf... For example from Jeppe Foldager, head chef at the Michelin restaurant Dragsholm Slot Gourmet:",
      quote: "'It's fantastic to have a producer like CONTEMPEHRARY in the backyard. Because these are world-class products and it expands our taste palette of local ingredients'.",
      linkText: "Dragsholm Slot Gourmet"
    },
    da: {
      title: "PREMIUM TEMPEH",
      subtitle: "LEVERANDØR TIL SLOTTE OG STJERNEKOKKE",
      description: "Vores produkter er udviklet og produceret med fokus på de bedste råvarer og med stor omhu. Vi betegner det også som 'premium tempeh', fordi smag og tekstur er af særlig kvalitet. Men i grunden er tempeh en ingrediens, som det er op til kokken at få den bedste smagsoplevelse ud af. Derfor er vi super glade for alle de samarbejder vi har med dygtige kokke. Og det er da skønt at modtage anerkendelse fra øverste hylde... For eksempel fra Jeppe Foldager, køkkenchef på Michelin restauranten Dragsholm Slot Gourmet:",
      quote: "'Det er fantastisk at have en producent som CONTEMPEHRARY i baghaven. For det er verdensklasse produkter og det udvider vores smagspalette af lokale råvarer'.",
      linkText: "Dragsholm Slot Gourmet"
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
              <p>{text.description.split(text.linkText)[0]}
                <Link 
                  href="https://www.dragsholm-slot.dk/gourmet/"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {text.linkText}
                </Link>:
              </p>
              
              <blockquote className="text-xl italic border-l-4 border-gray-300 pl-6">
                {text.quote}
              </blockquote>
            </div>
          </div>
          
          <div className="space-y-8">
            <img 
              src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/Premium%20Tempeh/Dragsholm-Slot-Herskabsstalden.jpg?etag=%22eb17f-635bae8e%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=177%2B222&quality=85"
              alt="Dragsholm Slot"
              className="w-full h-56 object-cover rounded-lg shadow-lg"
            />
            
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/Premium%20Tempeh/Muslinger%20og%20Nordisk%20B%C3%B8nnesauce.jpg?etag=%222188f-635bac19%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=257%2B370&extract=18%2B18%2B238%2B351&quality=85"
                alt="Mussels with Nordic Bean Sauce"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/Premium%20Tempeh/Tempeh%20med%20sommertr%C3%B8ffel.PNG?etag=%221a0fdf-635bac1a%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=244%2B434&extract=0%2B38%2B229%2B369"
                alt="Tempeh with summer truffle"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}