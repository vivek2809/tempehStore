'use client';

import { useLanguage } from '@/components/Header';
import Link from 'next/link';

export default function SolOverGudhjem() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "SOL OVER GUDHJEM FINALIST 2021 + 2022",
      subtitle: "IN THE INNOVATION CATEGORY",
      description: "Every summer, when Denmark's most skilled chefs meet on Bornholm for the prestigious cooking competition Sol over Gudhjem, an equally prestigious food award is also presented. The finalists for Sol over Gudhjem are selected from among the many nominees by an awe-inspiring panel of judges. So it is with a proper portion of pride that we can say that we have been selected as finalists two years in a row. We won the innovation award in 2021 and were close in 2022, we have heard. Regardless, Sol over Gudhjem is a fantastic guarantee of good taste and it has been an honor to participate twice!",
      linkText: "Sol over Gudhjem"
    },
    da: {
      title: "SOL OVER GUDHJEM FINALIST 2021 + 2022",
      subtitle: "I KATEGORIEN INNOVATION",
      description: "Hver sommer, når Danmarks dygtigste kokke mødes på Bornholm til den prestigefyldte kokkekonkurrence Sol over Gudhjem, så uddeles samtidig en ligeså prestigefyldt fødevarepris. Finalisterne til Sol over Gudhjem udvælges blandt de mange nominerede, af et ærefrygtindgydende dommerpanel. Så det er med en ordentlig portion stolthed vi kan sige, at vi har været udvalgt som finalist, to år i træk. Vi vandt innovations prisen i 2021 og var tæt på i 2022, har vi hørt. Uanset hvad, så er Sol over Gudhjem en fantastisk garant for god smag og det har været en ære at deltage to gange!",
      linkText: "Sol over Gudhjem"
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
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {language === 'en' ? 'Every summer, when Denmark\'s most skilled chefs meet on Bornholm for the prestigious cooking competition ' : 'Hver sommer, når Danmarks dygtigste kokke mødes på Bornholm til den prestigefyldte kokkekonkurrence '}
                <Link 
                  href="https://sogk.dk" 
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {text.linkText}
                </Link>
                {language === 'en' ? ', an equally prestigious food award is also presented.' : ', så uddeles samtidig en ligeså prestigefyldt fødevarepris.'}
              </p>
              
              <p>{text.description.split(text.linkText)[1]}</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/Sol%20Over%20Gudhjem/CONTEMPEHRARY-Sol-over-Gudhjem-innovation-2021-vinder.jpg?etag=%22327c7-635bb0ac%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=299%2B299&extract=74%2B0%2B158%2B299&quality=85"
                alt="CONTEMPEHRARY Sol over Gudhjem innovation award 2021"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/Sol%20Over%20Gudhjem/CONTEMPEHRARY%20pa%CC%8A%20scenen%20kvadrat.jpg?etag=%223aeaa6-635bb107%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=242%2B242&extract=0%2B59%2B241%2B182&quality=85"
                alt="CONTEMPEHRARY on stage at Sol over Gudhjem"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            
            <img 
              src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/Sol%20Over%20Gudhjem/Sol%20Over%20Gudhjem%202021%20vindere.jpg?etag=%222f3463-635bb1ef%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=325%2B217&quality=85"
              alt="Sol Over Gudhjem 2021 winners"
              className="w-full h-56 object-cover rounded-lg shadow-lg"
            />
            
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/Sol%20Over%20Gudhjem/Sol%20over%20Gudhjem%20firkantet.jpg?etag=%225bc55-635bb0b2%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=164%2B231&extract=23%2B6%2B115%2B218&quality=85"
                alt="Sol over Gudhjem logo"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Omtale%20er%20guld/Sol%20Over%20Gudhjem/CONTEMPEHRARY%20on%20stage.jpg?etag=%222b5c49-635bb082%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=440%2B330&extract=27%2B22%2B402%2B270&quality=85"
                alt="CONTEMPEHRARY on stage"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}