'use client';

import { useLanguage } from '@/components/Header';

export default function ReviewsHero() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "REVIEWS ARE GOLD",
      subtitle: "PEOPLE WRITE AND TALK ABOUT OUR PRODUCTS",
      description: "For most Danes, tempeh is still a quite unknown food. But we are working hard to change that. Therefore, it makes us really happy when someone talks or writes about CONTEMPEHRARY and our products. For a foodtech startup like us, glowing reviews and prestigious awards help pave the way and give us even more good energy for our work. And fortunately, we get lots of good coverage - so thank you for that!",
      additional: "We think it could also be interesting for you to know what others think. It should hopefully emphasize the quality and illustrate the possibilities in Nordic Tempeh, so we would like to share some of the highlights with you here. Allow us to mention a few..."
    },
    da: {
      title: "OMTALE ER GULD",
      subtitle: "DER BLIVER SKREVET OG FORTALT OM VORES PRODUKTER",
      description: "For de fleste danskere er tempeh stadig en ret ukendt spise. Men det arbejder vi ihærdigt på at ændre. Derfor glæder det os rigtig meget, når nogen taler eller skriver om CONTEMPEHRARY og vores produkter. For en foodtech startup som os, er rosende omtale og prestigefyldte priser nemlig med til at bane vejen og give os endnu mere god energi til arbejdet. Og heldigvis får vi masser af god omtale - så mange tak for det!",
      additional: "Vi tænker at det også kunne være interessant for dig at vide, hvad andre mener. Det skulle gerne understrege kvaliteten og illustrere mulighederne i Nordisk Tempeh, så derfor vil vi gerne dele nogle højdepunkterne med dig her. Tillad os at nævne i flæng..."
    }
  };

  const text = content[language];

  return (
    <section style={{ backgroundColor: 'rgba(169,185,172,0.3)' }} className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            {text.title}
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-12">
            {text.subtitle}
          </h2>
          
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-6">
            <p>{text.description}</p>
            <p>{text.additional}</p>
          </div>
        </div>
      </div>
    </section>
  );
}