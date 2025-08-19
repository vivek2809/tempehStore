'use client';

import { useLanguage } from '@/components/Header';

export default function TestimonialSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      quote: "I have now tasted your tempeh. I have been eating tempeh for many years, not often but occasionally. And yours is undoubtedly the best tempeh I have ever tasted.",
      author: "Grete Pedersen, Dyssegård",
      subtitle: "- backer of our COOP Crowdfunding campaign"
    },
    da: {
      quote: "Jeg har nu smaget jeres tempeh. Jeg har spist tempeh i rigtig mange år, ikke ofte men af og til. Og jeres er ubetinget det bedste tempeh jeg nogensinde har smagt.",
      author: "Grete Pedersen, Dyssegård", 
      subtitle: "- backer af vores COOP Crowdfunding kampagne"
    }
  };

  const text = content[language];

  return (
    <section className="bg-gray-200 py-20">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <blockquote className="text-2xl text-gray-800 leading-relaxed mb-8 italic">
          "{text.quote}"
        </blockquote>
        
        <div className="text-center">
          <cite className="text-xl font-bold text-gray-800 not-italic">
            {text.author}
          </cite>
          <p className="text-gray-600 mt-2">
            {text.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}