
'use client';

import { useLanguage } from '@/components/Header';

export default function MediaSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "MEDIA & OTHER COVERAGE",
      subtitle: "SOCIAL MEDIA AND OTHER MEDIA CONTACT",
      description: [
        "If you want to know more about us and follow our development, you can follow us on social media. We are most active on Instagram, but also share news via newsletter and Facebook.",
        "If you are interested in bringing coverage about us, we have photos, logos and other press materials that we can share. We are of course also available for questions. Just send us an email if needed."
      ],
      examplesTitle: "Examples of previous coverage can be found here:",
      instagram: "Instagram",
      facebook: "Facebook"
    },
    da: {
      title: "MEDIER & ANDEN OMTALE",
      subtitle: "SOCIALE MEDIER OG ANDEN MEDIE KONTAKT",
      description: [
        "Hvis du gerne vil vide mere om os og følge med i vores udvikling, så kan du med fordel følge os på de sociale medier. Vi er mest aktive på Instagram, men deler også nyheder via nyhedsbrev og Facebook.",
        "Hvis du selv er interesseret i at bringe omtale om os, så har vi fotos, logo og andet pressemateriale som vi kan dele. Vi står selvfølgelig også til rådighed for spørgsmål. Send os blot en e-mail hvis det er."
      ],
      examplesTitle: "Eksempler på tidligere omtale findes her:",
      instagram: "Instagram",
      facebook: "Facebook"
    }
  };

  const text = content[language];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{text.title}</h2>
            <h3 className="text-2xl font-semibold text-gray-700">{text.subtitle}</h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {language === 'en' ? 'If you want to know more about us and follow our development, you can follow us on social media. We are most active on ' : 'Hvis du gerne vil vide mere om os og følge med i vores udvikling, så kan du med fordel følge os på de sociale medier. Vi er mest aktive på '}
                <a href="https://www.instagram.com/contempehrary/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">{text.instagram}</a>
                {language === 'en' ? ', but also share news via newsletter and ' : ', men deler også nyheder via nyhedsbrev og '}
                <a href="https://www.facebook.com/contempehrary/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">{text.facebook}</a>.
              </p>
              <p>{text.description[1]}</p>
              
              <div className="space-y-2">
                <p><strong>{text.examplesTitle}</strong></p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><a href="https://samvirke.dk/artikler/tempeh-indonesisk-hverdagsmad-oversattes-til-danskerne" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Samvirke</a></li>
                  <li><a href="https://www.sebrochure.dk/DVF/webView/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Dansk Vegetarisk Forening, inspirations katalog</a></li>
                  <li><a href="https://www.tv2east.dk/nyheder/05-11-2020/1930/1930-05-nov-2020?clip=b7811868-7ebb-4c61-952b-cae07a19487a" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">TV2, 'Hvor kommer maden fra?'</a></li>
                  <li><a href="https://heartbeats.dk/plantebaserede-proteiner-lyder-ikke-saa-sexet-vel-moed-modeparret-der-vil-forsoege-at-goere-tempeh-trendy/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Heartbeats.dk</a></li>
                  <li><a href="https://gastropol.dk/tid-og-tempeh-er-den-nye-mode/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Gastropol</a></li>
                  <li><a href="https://politiken.dk/klima/art8918128/Med-hj%C3%A6lp-fra-34.000-indsamlede-kroner-fra-private-har-iv%C3%A6rks%C3%A6tterpar-f%C3%A5et-sparket-gang-i-deres-b%C3%A6redygtige-produkter-%E2%80%93-og-de-er-langtfra-de-eneste" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Politiken</a></li>
                  <li><a href="https://www.berlingske.dk/gastronomi/soeren-frank-den-etstjernede-michelinrestaurants-pop-up-i-sommerlandet" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Berlingske</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <img 
              src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Om%20os/CONTEMPEHRARY_Instagram_example.png?etag=%2228d3d0-5f6e6a21%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=336%2B227"
              alt="Find inspiration og viden om tempeh på sociale medier"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Om%20os/Tempeh-er-trendy.jpg?etag=%22157fca-5f6f20e5%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=347%2B256&quality=85"
                alt="Tempeh er populært som grønt alternativ til kød"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Om%20os/Gr%C3%B8n-og-gul-fl%C3%A6k%C3%A6rt-tempeh.jpg?etag=%22ec34-5f6e6c97%22&sourceContentType=image%2Fjpeg&rotate=270&ignoreAspectRatio&resize=185%2B277&quality=85"
                alt="Tempeh adskiller sig fra tofu ved at være langt smukkere"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
