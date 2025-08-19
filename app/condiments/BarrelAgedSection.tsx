
'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/Header';

export default function BarrelAgedSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "SMALL BATCH, BARREL AGED",
      subtitle: "CONDIMENTS WITH SPECIALLY CONCENTRATED FLAVOR",
      description: [
        "In our online shop we also offer a range of barrel-aged CONDIMENTS. These are still made in relatively small batches and are aged for about 12 months or longer. Therefore they also cost somewhat more.",
        "The flavors develop over time and become even more delicious with long-term storage if possible. This happens somewhat differently - which depends among other things on whether they are made in summer or winter! But what they all have in common is that they develop complex and almost floral aromas, with deep intensity.",
        "Keep an eye on our online shop, where new batches are continuously put up for sale."
      ],
      onlineShop: "online shop"
    },
    da: {
      title: "SMALL BATCH, BARREL AGED",
      subtitle: "CONDIMENTS MED SÆRLIG KONCENTRERET SMAG",
      description: [
        "I vores online butik tilbyder vi også en række fadlagrede CONDIMENTS. Disse bliver stadig fremstillet i relativt små batches og er lagrede i ca. 12 måneder eller længere. Derfor koster de også noget mere.",
        "Smagene udvikler sig med tiden og bliver om muligt endnu lækrere ved langtidslagring. Det sker lidt forskelligt - hvilket blandt andet kommer an på, om de er fremstillet om sommeren eller om vinteren! Men fælles for dem alle er, at de udvikler komplekse og nærmest blomsteragtige aromaer, med dyb intensitet.",
        "Hold øje med vores online butik, hvor nye batches løbende bliver sat til salg."
      ],
      onlineShop: "online butik"
    }
  };

  const text = content[language];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/CONTEMPEHRARY%20CONDIMENTS/filtrering.jpg?etag=%225e589-62b326d1%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=336%2B462&quality=85"
              alt="Filtrering proces"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{text.title}</h2>
            <h3 className="text-2xl font-semibold text-gray-700">{text.subtitle}</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {language === 'en' ? 'In our ' : 'I vores '}
                <Link href="/shop" className="text-blue-600 hover:text-blue-800 underline">{text.onlineShop}</Link>
                {language === 'en' ? 
                  ' we also offer a range of barrel-aged CONDIMENTS. These are still made in relatively small batches and are aged for about 12 months or longer. Therefore they also cost somewhat more.' :
                  ' tilbyder vi også en række fadlagrede CONDIMENTS. Disse bliver stadig fremstillet i relativt små batches og er lagrede i ca. 12 måneder eller længere. Derfor koster de også noget mere.'
                }
              </p>
              <p>
                {text.description[1]}
              </p>
              <p>
                {language === 'en' ? 'Keep an eye on ' : 'Hold øje med '}
                <Link href="/shop" className="text-blue-600 hover:text-blue-800 underline">
                  {language === 'en' ? 'our online shop' : 'vores online butik'}
                </Link>
                {language === 'en' ? 
                  ', where new batches are continuously put up for sale.' :
                  ', hvor nye batches løbende bliver sat til salg.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
