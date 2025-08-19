
'use client';

import { useLanguage } from '@/components/Header';

export default function ThanksSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "MANY THANKS!",
      subtitle: "WE COULDN'T HAVE DONE WITHOUT YOUR SUPPORT",
      description: [
        "We want to say a big thank you to all those who help us realize our dream of developing and producing organic Nordic Tempeh and condiments, for the benefit of many things. We really appreciate all the support for our project that we encounter along the way!",
        "A special thanks for:"
      ],
      supportList: [
        "Support from Closing Loops - a project initiated with support from the EU Regional Fund.",
        "Support from the Foundation for Plant-Based Foods (Plant Foundation) under the Ministry of Food, Agriculture and Fisheries.",
        "Grant from the Green Development and Demonstration Program (GUDP) under the Ministry of Food, Agriculture and Fisheries. This enables the project 'Tempeh - a solution to eating healthy and climate-friendly'.",
        "CPH Food collaboration v. DTU Skylab Foodlab & KU Institute of Food Science.",
        "Help and guidance within DTU Link & DTU Link Early Impact programs v. DTU Food and DTU Nutech.",
        "Participation in BioScale.",
        "Support from LAG Mid and Northwest Zealand.",
        "Participation in Green Change Zealand, regarding scaling of our green business model.",
        "Engaged support around business development from Turbo Plant."
      ]
    },
    da: {
      title: "MANGE TAK!",
      subtitle: "VI KUNNE IKKE HAVE UNDVÆRET JERES STØTTE",
      description: [
        "Vi ønsker at sige en stor tak til alle dem der hjælper os med at realisere vores drøm om at udvikle og producere økologisk Nordisk Tempeh og condiments, til gavn for mangt og meget. Vi værdsætter virkelig al den opbakning til vores projekt, som vi møder undervejs!",
        "En særlig tak for:"
      ],
      supportList: [
        "Støtten fra Closing Loops - et projekt iværksat med støtte fra EU´s regionalfond.",
        "Støtten fra Fonden for Plantebaserede Fødevarer (Plantefonden) under Ministeriet for Fødevarer, Landbrug og Fiskeri.",
        "Tilskud fra Grønt Udviklings- og Demonstrationsprogram (GUDP) under Ministeriet for Fødevarer, Landbrug og Fiskeri. Dette muliggør projektet 'Tempeh – en løsning til at spise sundt og klimavenligt'.",
        "CPH Food samarbejdet v. DTU Skylab Foodlab & KU Institut for Fødevarevidenskab.",
        "Hjælp og vejledning i regi af DTU Link & DTU Link Early Impact programmerne v. DTU Food og DTU Nutech.",
        "Deltagelsen i BioScale.",
        "Støtten fra LAG Midt- og Nordvestsjælland.",
        "Deltagelsen i Green Change Zealand, vedrørende skalering af vores grønne forretningsmodel.",
        "Engageret støtte omkring forretningsudvikling fra Turbo Plant."
      ]
    }
  };

  const text = content[language];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{text.title}</h2>
            <h3 className="text-2xl font-semibold text-gray-700">{text.subtitle}</h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{text.description[0]}</p>
              
              <div className="space-y-3">
                <p><strong>{text.description[1]}</strong></p>
                {text.supportList.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Fonden%20for%20Plantebaserede%20F%C3%B8devarer%20-%20logo_gr%C3%B8n.png?etag=W%2F%2281877-671abbed%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=396%2B112&extract=33%2B4%2B324%2B108"
                alt="Fonden for Plantebaserede Fødevarer"
                className="w-full h-20 object-contain"
              />
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/image004.png.webp?etag=%2259c6-671ab95b%22&sourceContentType=image%2Fwebp&ignoreAspectRatio&resize=300%2B188&extract=0%2B65%2B300%2B63"
                alt="Closing Loops"
                className="w-full h-16 object-contain"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/deb-logo_rgb.png.webp?etag=%22484e-671ab9aa%22&sourceContentType=image%2Fwebp&ignoreAspectRatio&resize=317%2B198&extract=0%2B52%2B317%2B80"
                alt="Den Europæiske Landbrugsfond"
                className="w-full h-20 object-contain"
              />
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Om%20os/GUDP_logo_2021_transparent.jpg?etag=%221f6fa-61899f61%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=338%2B173&extract=0%2B2%2B337%2B171&quality=85"
                alt="GUDP logo"
                className="w-full h-24 object-contain"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Om%20os/bioscale-logo.jpeg?etag=%22abeff-5fbcd60e%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=190%2B112&quality=85"
                alt="BioScale logo"
                className="w-full h-16 object-contain"
              />
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Om%20os/IndustriensFond-Turbo-Plant_Sidebarwidget-600x250.png?etag=%22290c-64e48a9b%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=206%2B86"
                alt="Turbo Plant logo"
                className="w-full h-12 object-contain"
              />
            </div>
            
            <img 
              src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Om%20os/LAG_foelgelogoer_1_transparent_dk.png?etag=%2218e5a-67e30c1a%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=468%2B144"
              alt="LAG logoer"
              className="w-full h-20 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
