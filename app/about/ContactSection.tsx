
'use client';

import { useLanguage } from '@/components/Header';

export default function ContactSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "PRACTICAL INFORMATION",
      subtitle: "ADDRESS, E-MAIL, PHONE, ETC.",
      description: [
        "Our production is located in Anneberg Cultural Park, a stone's throw from Isefjorden in beautiful Odsherred.",
        "If you want to stop by, it's best to arrange a time in advance, as we don't have fixed opening hours and we're not in production every day."
      ],
      company: "CONTEMPEHRARY ApS",
      address: "Annebergparken, 28A, ground floor\n4500 Nykøbing Sjælland",
      email: "E-mail:",
      phone: "Phone:",
      cvrNumber: "CVR no.:",
      pNumber: "P-number:",
      mobilePay: "MobilePay:",
      account: "Account:",
      foodControlLink: "Our food control reports can be found here :-)"
    },
    da: {
      title: "PRAKTISK INFORMATION",
      subtitle: "ADRESSE, E-MAIL, TELEFON, ETC.",
      description: [
        "Vores produktion er beliggende i Anneberg Kulturpark, et stenkast fra Issefjorden i det skønne Odsherred.",
        "Vil du kigge forbi så er det bedst at aftale tidspunkt på forhånd, for vi har ikke faste åbningstider og vi er ikke i produktionen hver dag."
      ],
      company: "CONTEMPEHRARY ApS",
      address: "Annebergparken, 28A, st.\n4500 Nykøbing Sjælland",
      email: "E-mail:",
      phone: "Telefon:",
      cvrNumber: "CVR nr.:",
      pNumber: "P-nummer:",
      mobilePay: "MobilePay:",
      account: "Konto:",
      foodControlLink: "Vores fødevarekontrolrapporter findes hér :-)"
    }
  };

  const text = content[language];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{text.title}</h2>
            <h3 className="text-2xl font-semibold text-gray-700">{text.subtitle}</h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {text.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              
              <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{text.company}</h4>
                  {text.address.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
                
                <div>
                  <p><strong>{text.email}</strong> <a href="mailto:contact@contempehrary.com" className="text-blue-600 hover:text-blue-800 underline">contact@contempehrary.com</a></p>
                  <p><strong>{text.phone}</strong> <a href="tel:+4553787893" className="text-blue-600 hover:text-blue-800 underline">+45 5378 7893</a></p>
                </div>
                
                <div>
                  <p><strong>{text.cvrNumber}</strong> 40561560</p>
                  <p><strong>{text.pNumber}</strong> 1024755637</p>
                  <p><strong>{text.mobilePay}</strong> 449923</p>
                </div>
                
                <div>
                  <p><strong>{text.account}</strong> 8401 / 5476124</p>
                  <p><strong>IBAN:</strong> DK5284010005476124</p>
                  <p><strong>SWIFT:</strong> MEKUDK21</p>
                </div>
                
                <p>
                  <a href="http://www.findsmiley.dk/950739" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">
                    {text.foodControlLink}
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <img 
              src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Om%20os/Anneberg-kulturpark-CONTEMPEHRARY.jpg?etag=%22d8cdd-5f6f1b28%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=325%2B344&quality=85"
              alt="Besøg Odsherreds egen fødevarehub i Anneberg Kulturpark"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Om%20os/Forskellige-slags-tempeh.JPG?etag=%2223e09d-5f6f1f85%22&sourceContentType=image%2Fjpeg&rotate=90&ignoreAspectRatio&resize=202%2B269&extract=0%2B25%2B202%2B242&quality=85"
                alt="Køb nordisk tempeh online og afhent det gratis i Anneberg Kulturpark"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Om%20os/Nordisk-tempeh-produktion.jpg?etag=%223fa919-5f6f1b98%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=302%2B202&quality=85"
                alt="Tempeh er fermenteret. Det kræver særligt udstyr til fermentering"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
            </div>
            
            <img 
              src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/Om%20os/Tempeh_produktion.jpg?etag=%221ad8fc-605069a2%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=200%2B200&quality=85"
              alt="At fremstille tempeh er et håndværk. Besøg os i Anneberg kulturpark og oplev hvordan vi gør"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
