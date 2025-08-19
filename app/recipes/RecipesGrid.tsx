
'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/Header';

export default function RecipesGrid() {
  const { language } = useLanguage();

  const content = {
    en: {
      mikkelTitle: "BY MIKKEL KARSTAD",
      mauTitle: "BY MAU LINDOW TARBENSEN", 
      seeRecipe: "See recipe",
      ctaTitle: "Ready to try Nordic tempeh?",
      ctaDescription: "Find all our tempeh products and condiments in our online shop. From classic bean tempeh to exciting condiments - everything you need to make delicious meals.",
      visitShop: "Visit the shop"
    },
    da: {
      mikkelTitle: "AF MIKKEL KARSTAD",
      mauTitle: "AF MAU LINDOW TARBENSEN",
      seeRecipe: "Se opskrift",
      ctaTitle: "Klar til at prøve nordisk tempeh?",
      ctaDescription: "Find alle vores tempeh produkter og condiments i vores online butik. Fra klassisk bønne tempeh til spændende condiments - alt hvad du behøver for at lave lækre måltider.",
      visitShop: "Besøg butikken"
    }
  };

  const text = content[language];

  const recipesByMikkel = [
    {
      title: language === 'en' ? "Getting started: the basics of preparing tempeh" : "En god start: det grundlæggende om at tilberede tempeh",
      image: "https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Opskrifter/En%20god%20start/En%20god%20start%20med%20tempeh.jpg?etag=%22f08fb-5f9beed4%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1003%2B560&extract=387%2B15%2B330%2B416&quality=85",
      slug: "det-grundliggende-om-at-tilberede-tempeh"
    },
    {
      title: language === 'en' ? "Fried tempeh sandwich with beetroot kimchi and apple mustard" : "Stegt Tempeh sandwich med rødbede kimchi og æblemustardo",
      image: "https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Opskrifter/14%20Stegt%20Tempeh%20sandwich%20med%20r%C3%B8dbede%20kimchi%20og%20%C3%A6blemustardo%20/Stegt%20Tempeh%20sandwich%20med%20r%C3%B8dbede%20kimchi%20og%20%C3%A6blemustardo.jpg?etag=%22e3a5d-640a643e%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=330%2B440&extract=0%2B0%2B330%2B416&quality=85",
      slug: "stegt-tempeh-sandwich-med-rodbede-kimchi"
    },
    {
      title: language === 'en' ? "Tempeh hash with roasted root vegetables and thyme" : "Tempeh hachis med bagte rodfrugter og timian",
      image: "https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Opskrifter/Tempeh%20hachis%20med%20bagte%20rodfrugter%20og%20timian/Tempeh%20hachis%20med%20bagte%20rodfrugter%20og%20timian.jpg?etag=%22e20a8-66a40fbb%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=384%2B513&extract=44%2B96%2B330%2B416&quality=85",
      slug: "tempeh-hachis-med-bagte-rodfrugter"
    },
    {
      title: language === 'en' ? "Omelet with crispy tempeh, onions, zucchini, tomato and cress" : "Æggekage med sprød tempeh, løg, courgette, tomat og karse",
      image: "https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Opskrifter/%C3%86ggekage%20med%20spr%C3%B8d%20tempeh,%20l%C3%B8g,%20courgette,%20tomat%20og%20karse/%C3%86ggekage%20med%20spr%C3%B8d%20tempeh,%20l%C3%B8g,%20courgette,%20tomat%20og%20karse.jpg?etag=%2214d17b-66a40843%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=330%2B440&extract=0%2B19%2B330%2B416&quality=85",
      slug: "aeggekage-med-sprod-tempeh"
    },
    {
      title: language === 'en' ? "Fried tempeh with beans, sugar snap peas, soy sauce, sesame and Thai basil" : "Friteret tempeh med bønner, sukkerærter, soja sauce, sesam og thai basilikum",
      image: "https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Opskrifter/07%20Friteret%20tempeh%20med%20b%C3%B8nner,%20sukker%C3%A6rter,%20soja%20sauce,%20sesam%20og%20thai%20basilikum/Friteret%20tempeh%20med%20b%C3%B8nner,%20sukker%C3%A6rter,%20soja%20sauce,%20sesam%20og%20thai%20basilikum%20CONTEMPEHRARY.jpg?etag=%227b5015-60bded90%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=330%2B440&extract=0%2B12%2B330%2B416&quality=85",
      slug: "friteret-tempeh-med-bonner"
    },
    {
      title: language === 'en' ? "Spinach pancake with fried tempeh, pickled shallots, almonds, seaweed cream and spinat" : "Spinatpandekage med stegt tempeh, syltet skalotteløg, mandel, tang creme og spinat",
      image: "https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Opskrifter/Spinatpandekage%20med%20stegt%20tempeh,%20syltet%20skalottel%C3%B8g,%20mandel,%20tang%20creme%20og%20spinat/Opskrift%20pa%CC%8A%20spinatpandekager%20med%20tempeh.jpg?etag=%228c9fd3-60521dde%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=330%2B440&extract=0%2B23%2B330%2B416&quality=85",
      slug: "spinatpandekage-med-stegt-tempeh"
    }
  ];

  const recipesByMau = [
    {
      title: language === 'en' ? "Pumpkin with umami mayo, tempeh and quick pickled apple" : "Græskar med umamimayo, tempeh og lynsyltet æble",
      image: "https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Opskrifter/Gr%C3%A6skar%20med%20umamimayo,%20tempeh%20og%20lynsyltet%20%C3%A6ble/Gr%C3%A6skar%20med%20umamimayo,%20tempeh%20og%20lynsyltet%20%C3%A6ble.jpg?etag=%221df566-66ec8f90%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=416%2B554&extract=32%2B64%2B330%2B416&quality=85",
      slug: "graeskar-med-umamimayo-tempeh"
    },
    {
      title: language === 'en' ? "Evening open sandwich with beetroot, fennel and parsley pesto" : "Aftensmørrebrød med rødbede, fennikel og persillepesto",
      image: "https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Opskrifter/Aftensm%C3%B8rrebr%C3%B8d%20med%20r%C3%B8dbede,%20fennikel%20og%20persillepesto/Aftensm%C3%B8rrebr%C3%B8d%20med%20r%C3%B8dbede,%20fennikel%20og%20persillepesto%202.jpg?etag=W%2F%222d7c8e-66f1b4e9%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=347%2B463&extract=0%2B32%2B330%2B416&quality=85",
      slug: "aftensmorrebrod-med-rodbede"
    },
    {
      title: language === 'en' ? "Tempeh with carrots and king oyster mushrooms drowned in stout" : "Tempeh med gulerødder og karl johansvampe druknet i stout",
      image: "https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Opskrifter/Tempeh%20med%20guler%C3%B8dder%20og%20karljohansvampe%20druknet%20i%20stout/Tempeh%20med%20guler%C3%B8dder%20og%20karl%20johansvampe%20druknet%20i%20stout.jpg?etag=W%2F%2231a897-66f1c226%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=367%2B490&extract=15%2B52%2B330%2B416&quality=85",
      slug: "tempeh-med-gulerødder-og-svampe"
    },
    {
      title: language === 'en' ? "Leek gratin with tempeh crumbs and new potatoes" : "Porregratin med tempehknas og krydskartofler",
      image: "https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Opskrifter/Porregratin%20med%20tempehknas%20og%20krydskartofler/Porregratin%20med%20tempehknas%20og%20krydskartofler%204.jpg?etag=%22396f35-66f1cc23%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=330%2B440&extract=0%2B12%2B330%2B416&quality=85",
      slug: "porregratin-med-tempehknas"
    },
    {
      title: language === 'en' ? "Jerusalem artichoke soup with garlic tempeh" : "Jordskokkesuppe med hvidløgstempeh",
      image: "https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Opskrifter/Jordskokkesuppe%20med%20hvidl%C3%B8gstempeh/Jordskokkesuppe%20med%20hvidl%C3%B8gstempeh.jpg?etag=%222180e3-66ec98d4%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=330%2B440&extract=0%2B12%2B330%2B416&quality=85",
      slug: "jordskokkesuppe-med-hvidløgstempeh"
    },
    {
      title: language === 'en' ? "Bean stew with kale, sweet potato and orange tempeh" : "Bønnegryde med grønkål, sød kartoffel og appelsintempeh",
      image: "https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Opskrifter/B%C3%B8nnegryde%20med%20gr%C3%B8nk%C3%A5l,%20s%C3%B8d%20kartoffel%20og%20appelsintempeh/B%C3%B8nnegryde%20med%20gr%C3%B8nka%CC%8Al,%20s%C3%B8d%20kartoffel%20og%20appelsintempeh.jpg?etag=W%2F%222c7e62-66f1b8d5%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=450%2B450&extract=59%2B24%2B330%2B416&quality=85",
      slug: "bonnegryde-med-gronkaal"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Mikkel Karstad Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{text.mikkelTitle}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipesByMikkel.map((recipe, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-3 leading-snug">
                    {recipe.title}
                  </h3>
                  <Link 
                    href={`/recipes/${recipe.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"
                  >
                    {text.seeRecipe}
                    <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mau Lindow Tarbensen Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{text.mauTitle}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipesByMau.map((recipe, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-3 leading-snug">
                    {recipe.title}
                  </h3>
                  <Link 
                    href={`/recipes/${recipe.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"
                  >
                    {text.seeRecipe}
                    <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {text.ctaTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {text.ctaDescription}
          </p>
          <Link 
            href="/shop"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            {text.visitShop}
            <i className="ri-shopping-cart-line ml-2 w-5 h-5 flex items-center justify-center"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
