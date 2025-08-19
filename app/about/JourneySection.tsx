
'use client';

import { useLanguage } from '@/components/Header';

export default function JourneySection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "AN ADVENTUROUS JOURNEY",
      subtitle: "FROM BALI TO ODSHERRED WITH A GREEN IDEA",
      description: [
        "Our idea of developing Nordic Tempeh started as an adventure - we packed our suitcases, sold our apartment in Copenhagen and moved to Bali with our three children to have an unforgettable experience together. We lived in Bali for a year and a half, and it was there that we were introduced to tempeh for the first time.",
        "We are passionate about good food and love learning about new ingredients. We thought the local tempeh was fantastic and soon we started making it ourselves. We started with soybeans, as is tradition. But then we also experimented with all sorts of legumes, vegetables, grains and seeds. This was done using completely traditional techniques in our small outdoor kitchen in the middle of a rice field in Bali, where conditions were primitive but successful.",
        "After a year, it made us dream of returning home to Denmark and starting a local production of tempeh made from organic and locally grown ingredients from the North. And that was the starting signal for a new adventure...",
        "With our idea in hand, we traveled home again and settled in Odsherred. From here we now produce Nordic Tempeh and work passionately to put it on the menu in the Nordic everyday kitchen!"
      ]
    },
    da: {
      title: "EN EVENTYRLIG REJSE",
      subtitle: "FRA BALI TIL ODSHERRED MED EN GRØN IDE",
      description: [
        "Vores idé om at udvikle Nordisk Tempeh startede som et eventyr - vi pakkede nemlig kufferterne, solgte vores lejlighed i København og flyttede til Bali med vores tre børn, for at få en uforglemmelig oplevelse sammen. Vi boede på Bali i halvandet år, og det var dér at vi blev introduceret til tempeh for første gang.",
        "Vi er vilde med god mad og elsker at lære nye råvarer at kende. Vi syntes den lokale tempeh var fantastisk og snart begyndte vi at fremstille det selv. Vi begyndte med sojabønner, som det er traditionen. Men sidenhen eksperimenterede vi også med alle mulige typer bælgfrugter, grøntsager, korn og frø. Det foregik med de helt traditionelle teknikker i vores lille udendørs køkken midt i en rismark på Bali, hvor forholdene var primitive men succesfulde.",
        "Efter et års tid fik det os til at drømme om at vende hjem til Danmark og starte en lokal produktion af tempeh, fremstillet af økologiske og lokalt dyrkede råvarer fra Norden. Og det var altså startskuddet til et nyt eventyr…",
        "Med vores idé i bagagen drog vi nemlig hjem igen, og bosatte os i Odsherred. Herfra producerer vi nu Nordisk Tempeh og arbejder passioneret for at sætte det på menuen i det nordiske hverdagskøkken!"
      ]
    }
  };

  const text = content[language];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <img 
              src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Om%20os/Tempeh-stammer-fra-Indonesien.jpg?etag=%22155d29-5e15f4eb%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=423%2B238&quality=85"
              alt="I indonesien findes de perfekte naturlige forhold til tempeh fermentering"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Om%20os/Agung.jpg?etag=%221869e6-5e16410b%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=238%2B297&quality=85"
                alt="Tempeh stammer oprindeligt fra Indonesien, hvor man har spist det i århundreder"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Om%20os/Tempeh-metode-fra-bali.jpg?etag=%22337534-5e15e8ef%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=258%2B322&extract=0%2B13%2B258%2B309&quality=85"
                alt="Bali er et godt sted at slå sig ned, hvis man vil lære hvordan man fremstiller tempeh"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{text.title}</h2>
            <h3 className="text-2xl font-semibold text-gray-700">{text.subtitle}</h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {text.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
