
'use client';

import { useLanguage } from '@/components/Header';

export default function UmamiSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "A SHOT OF UMAMI",
      subtitle: "YOUR SHORTCUT TO GREAT TASTE",
      description: [
        "CONTEMPEHRARY CONDIMENTS can be used in countless ways, instead of soy sauce or miso, or as a really good alternative to bouillon. They don't dominate, but simply support the natural flavor in plant-rich food, by adding lots of green umami and kokumi. In fact, you can advantageously reduce salt and instead season your food with these products.",
        "See our recipes or follow us on social media for inspiration on how they can be used."
      ],
      recipes: "recipes",
      socialMedia: "SoMe"
    },
    da: {
      title: "ET SKUD UMAMI",
      subtitle: "DIN GENVEJ TIL VELSMAG",
      description: [
        "CONTEMPEHRARY CONDIMENTS kan anvendes på utallige måder, i stedet for sojasauce eller miso, eller som et rigtig godt alternativ til bouillon. De dominerer ikke, men understøtter simpelthen den naturlige velsmag i planterig mad, ved at tilføre masser af grøn umami og kokumi. Faktisk kan du med fordel skære ned på saltet og i stedet smage maden til med disse produkter.",
        "Se vores opskrifter eller følg med på SoMe for inspiration til hvordan de kan anvendes."
      ],
      recipes: "opskrifter",
      socialMedia: "SoMe"
    }
  };

  const text = content[language];

  return (
    <section style={{ backgroundColor: 'rgba(169,185,172,0.3)' }} className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/605bad145e5547bd1f274bc5f9c3346b.png"
              alt="Nuddelsuppe med CONDIMENT 01"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{text.title}</h2>
            <h3 className="text-2xl font-semibold text-gray-700">{text.subtitle}</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {text.description[0]}
              </p>
              <p>
                {language === 'en' ? 'See our ' : 'Se vores '}
                <a href="/recipes" className="text-blue-600 hover:text-blue-800 underline">{text.recipes}</a>
                {language === 'en' ? ' or follow us on ' : ' eller følg med på '}
                <a href="https://instagram.com/contempehrary" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">{text.socialMedia}</a>
                {language === 'en' ? ' for inspiration on how they can be used.' : ' for inspiration til hvordan de kan anvendes.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
