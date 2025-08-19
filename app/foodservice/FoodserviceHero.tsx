
'use client';

import { useLanguage } from '@/components/Header';

export default function FoodserviceHero() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "FOODSERVICE",
      subtitle: "WE DELIVER TO PROFESSIONAL KITCHENS AND RESTAURANTS",
      description: "As Denmark's first and only producer of authentic fermented tempeh, we deliver to kitchens that want to offer their guests something very special. Our Nordic tempeh is handmade with organic Danish raw materials and perfect for modern Nordic gastronomy.",
      buttonText: "Contact us for prices and delivery"
    },
    da: {
      title: "FOODSERVICE",
      subtitle: "VI LEVERER TIL PROFESSIONELLE KØKKENER OG RESTAURANTER",
      description: "Som Danmarks første og eneste producent af ægte fermenteret tempeh leverer vi til køkkener, der vil tilbyde deres gæster noget helt særligt. Vores nordiske tempeh er håndlavet med økologiske danske råvarer og perfekt til moderne nordisk gastronomi.",
      buttonText: "Kontakt os for priser og levering"
    }
  };

  const text = content[language];

  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://readdy.ai/api/search-image?query=Professional%20modern%20restaurant%20kitchen%20with%20chefs%20preparing%20Nordic%20tempeh%20dishes%2C%20clean%20industrial%20design%2C%20stainless%20steel%20surfaces%2C%20natural%20lighting%2C%20minimalist%20Scandinavian%20aesthetic%2C%20food%20service%20environment%2C%20contemporary%20culinary%20workspace&width=1920&height=1080&seq=foodservice-hero&orientation=landscape')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-7xl font-bold text-white mb-8 leading-tight">
              {text.title}
            </h1>
            
            <h2 className="text-3xl font-medium text-white mb-12 tracking-wide opacity-90">
              {text.subtitle}
            </h2>
            
            <div className="space-y-6 text-white text-xl leading-relaxed">
              <p className="opacity-90">
                {text.description}
              </p>
              
              <div className="pt-8">
                <a 
                  href="mailto:foodservice@contempehrary.com"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-800 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <i className="ri-mail-line text-xl"></i>
                  </div>
                  {text.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
