
'use client';

import { useLanguage } from '@/components/Header';

export default function RecipesHero() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "RECIPES",
      subtitle: "INSPIRATION",
      description: [
        "To put it simply, it's only your imagination that sets limits on how tempeh can be part of delicious meals. It tastes wonderful on its own and is also really good for seasoning and marinating, which means it can be included in all contexts - regardless of whether you feel like Asian, French, Indian or Mexican. It can be fried, grilled, boiled, baked, etc. It doesn't taste like meat (and that's not the intention either), but actually it can be used in much the same way.",
        "We hope that everyone will get to know Nordic tempeh as a delicious source of lots of natural plant protein and that it will find wide use in a culinary context - not just as a substitute for meat, but also in many other delicious and imaginative ways!",
        "Below you will find some really delicious recipes with tempeh. They are developed by one of our favorite chefs, namely Mikkel Karstad. It's food for both everyday and celebration. And a feast for both eyes and taste buds. If you try them out, you'll at least get off to a good start with tempeh..."
      ]
    },
    da: {
      title: "OPSKRIFTER",
      subtitle: "INSPIRATION",
      description: [
        "Lidt populært sagt er det kun fantasien der sætter grænser for, hvordan tempeh kan indgå i lækre måltider. Det smager dejligt i sig selv og egner sig samtidig rigtig godt til krydring og marinering, hvilket gør at det kan indgå i alle sammenhænge - altså uanset om du har lyst til asiatisk, fransk, indisk eller mexikansk. Det kan steges, grilles, koges, bages, etc. Det smager ikke som kød (og det er heller ikke meningen), men faktisk kan det stort set anvendes på samme måde.",
        "Vi håber at alle vil komme til at kende nordisk tempeh som en lækker kilde til masser af naturligt planteprotein og at det vil finde bred anvendelse i kulinarisk sammenhæng - ikke blot som substitut for kød, men også på mange andre lækre og fantasifulde måder!",
        "Herunder finder du nogle virkelig lækre opskrifter med tempeh. De er udviklet af én af vores yndlingskokke, nemlig Mikkel Karstad. Det er mad til både hverdag og fest. Og en fest for både øjne og smagsløg. Hvis du prøver dem af, så kommer du i hvert fald godt igang med tempeh..."
      ]
    }
  };

  const text = content[language];

  return (
    <section style={{ backgroundColor: 'rgba(169,185,172,0.3)' }} className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {text.title}
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-8">
            {text.subtitle}
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-6">
            {text.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
