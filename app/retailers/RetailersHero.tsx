
'use client';

import { useLanguage } from '@/components/Header';

export default function RetailersHero() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "FIND OUR PRODUCTS",
      subtitle: "Discover where to buy our Nordic tempeh and artisanal condiments. From specialty stores to online retailers - find us near you.",
      storeLocator: "VIEW STORE LOCATOR",
      becomeRetailer: "BECOME A RETAILER"
    },
    da: {
      title: "FIND VORES PRODUKTER",
      subtitle: "Opdag hvor du kan købe vores nordiske tempeh og håndværksmæssige condiments. Fra specialbutikker til online forhandlere - find os i nærheden af dig.",
      storeLocator: "SE BUTIKSLOKALISER",
      becomeRetailer: "BLIV FORHANDLER"
    }
  };

  const text = content[language];

  return (
    <section 
      className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://readdy.ai/api/search-image?query=Modern%20organic%20food%20store%20interior%20with%20wooden%20shelves%20displaying%20healthy%20plant-based%20products%2C%20natural%20lighting%20streaming%20through%20large%20windows%2C%20sustainable%20grocery%20shopping%20environment%2C%20Nordic%20retail%20design%2C%20clean%20minimalist%20aesthetic%2C%20customers%20browsing%20fermented%20foods%20section%2C%20eco-friendly%20packaging%20visible%20on%20shelves&width=1200&height=800&seq=retailers-hero-1&orientation=landscape')`
      }}
    >
      <div className="text-center text-white px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
          {text.title}
        </h1>
        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 max-w-3xl mx-auto">
          {text.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-gray-800 px-8 py-3 font-medium hover:bg-gray-100 transition-all duration-300 whitespace-nowrap">
            {text.storeLocator}
          </button>
          <button className="border-2 border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-gray-800 transition-all duration-300 whitespace-nowrap">
            {text.becomeRetailer}
          </button>
        </div>
      </div>
    </section>
  );
}
