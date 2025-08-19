
'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/Header';

export default function ShopHero() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "WELCOME TO THE SHOP",
      subtitle: "HERE YOU CAN BUY ORGANIC NORDIC TEMPEH DIRECTLY FROM THE PRODUCTION IN ODSHERRED",
      description: [
        "We mostly trade with professionals. If you are a chef or purchaser for foodservice, you can contact us for more info. As a private person, you can therefore only find our products in some selected specialty stores (which you can find by clicking here) or by visiting our production facility in Anneberg Culture Park yourself (remember to contact us in advance to make sure we are here!).",
        "However, you can also buy our products online - right here - and have it sent to your door. Shipping is relatively expensive due to packaging and courier costs. However, we offer free shipping on purchases over 450 kr!",
        "We always want to provide the best service, so contact us at bestilling@contempehrary.com if you have questions about our products of any kind... Thank you in advance!"
      ],
      retailers: "which you find by clicking here",
      contactUs: "contact us"
    },
    da: {
      title: "VELKOMMEN I BUTIKKEN",
      subtitle: "HER KAN DU KØBE ØKOLOGISK NORDISK TEMPEH DIREKTE FRA PRODUKTIONEN I ODSHERRED",
      description: [
        "Vi handler mest med professionelle. Hvis du er kok eller indkøber til foodservice kan du kontakte os for nærmere info. Som privat person kan du derfor kun finde vores produkter i nogle få udvalgte specialbutikker (som du finder ved at klikke hér) eller ved selv at komme forbi vores produktion i Anneberg Kulturpark (husk at kontakte os i forvejen for at sikre dig at vi er her!).",
        "Imidlertid kan du også købe vores produkter online - lige hér - og få det sendt til din hoveddør. Forsendelse er relativt bekostelig på grund af udgifter til emballage og GLS. Vi tilbyder imidlertid gratis fragt ved køb for mere end 450 kr!",
        "Vi vil altid gerne yde den bedste service, så kontakt os på bestilling@contempehrary.com hvis du har spørgsmål til vores produkter af nogen art... På forhånd tak!"
      ],
      retailers: "som du finder ved at klikke hér",
      contactUs: "kontakte os"
    }
  };

  const text = content[language];

  return (
    <section style={{ backgroundColor: 'rgba(169,185,172,0.3)' }} className="py-20">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-left">
          <h1 className="text-6xl font-bold text-gray-800 mb-8 leading-tight">
            {text.title}
          </h1>
          
          <h2 className="text-2xl font-medium text-gray-600 mb-12 tracking-wide">
            {text.subtitle}
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              {language === 'en' ? (
                <>
                  We mostly trade with professionals. If you are a chef or purchaser for foodservice, you can contact us for more info. As a private person, you can therefore only find our products in some selected specialty stores{' '}
                  <Link href="/retailers" className="text-blue-600 hover:text-blue-800 underline">(which you find by clicking here)</Link>
                  {' '}or by visiting our production facility in Anneberg Culture Park yourself (remember to{' '}
                  <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">contact us</Link>
                  {' '}in advance to make sure we are here!).
                </>
              ) : (
                <>
                  Vi handler mest med professionelle. Hvis du er kok eller indkøber til foodservice kan du kontakte os for nærmere info. Som privat person kan du derfor kun finde vores produkter i nogle få udvalgte specialbutikker{' '}
                  <Link href="/retailers" className="text-blue-600 hover:text-blue-800 underline">({text.retailers})</Link>
                  {' '}eller ved selv at komme forbi vores produktion i Anneberg Kulturpark (husk at{' '}
                  <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">{text.contactUs}</Link>
                  {' '}i forvejen for at sikre dig at vi er her!).
                </>
              )}
            </p>
            
            <p>{text.description[1]}</p>
            
            <p>
              {language === 'en' ? (
                <>
                  We always want to provide the best service, so contact us at{' '}
                  <a href="mailto:bestilling@contempehrary.com" className="text-blue-600 hover:text-blue-800 underline">bestilling@contempehrary.com</a>
                  {' '}if you have questions about our products of any kind... Thank you in advance!
                </>
              ) : (
                <>
                  Vi vil altid gerne yde den bedste service, så kontakt os på{' '}
                  <a href="mailto:bestilling@contempehrary.com" className="text-blue-600 hover:text-blue-800 underline">bestilling@contempehrary.com</a>
                  {' '}hvis du har spørgsmål til vores produkter af nogen art... På forhånd tak!
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
