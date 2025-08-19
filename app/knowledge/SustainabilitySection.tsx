'use client';

import { useLanguage } from '@/components/Header';

export default function SustainabilitySection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "SUSTAINABILITY & ENVIRONMENT",
      subtitle: "HOW TEMPEH CONTRIBUTES TO A SUSTAINABLE FUTURE",
      intro: "Tempeh represents one of the most environmentally sustainable protein sources available. From production to consumption, every aspect of tempeh contributes to a more sustainable food system.",
      environmental: {
        title: "Environmental Benefits",
        benefits: [
          {
            icon: "ri-leaf-line",
            title: "Low Carbon Footprint",
            description: "Tempeh production generates significantly fewer greenhouse gases compared to animal proteins. Fermentation process requires minimal energy input."
          },
          {
            icon: "ri-drop-line", 
            title: "Water Efficiency",
            description: "Requires 90% less water than beef production. The fermentation process uses minimal water resources while maximizing nutritional output."
          },
          {
            icon: "ri-seedling-line",
            title: "Soil Health",
            description: "Legumes used in tempeh actually improve soil health through nitrogen fixation, reducing need for synthetic fertilizers."
          },
          {
            icon: "ri-recycle-line",
            title: "Minimal Waste",
            description: "Almost zero waste production - even byproducts can be composted or used as animal feed, creating a circular economy."
          }
        ]
      },
      nordic: {
        title: "Nordic Sustainability Approach",
        description: "Our commitment to Nordic sustainability goes beyond just using local ingredients:",
        practices: [
          "Sourcing organic legumes and grains from Nordic farmers",
          "Supporting local agricultural communities and biodiversity", 
          "Reducing transportation emissions through regional supply chains",
          "Packaging made from recyclable and compostable materials",
          "Energy-efficient fermentation processes powered by renewable energy",
          "Closed-loop production system minimizing resource waste"
        ]
      },
      comparison: {
        title: "Environmental Impact Comparison",
        subtitle: "Per 100g of protein produced",
        metrics: [
          {
            source: "Tempeh",
            co2: "0.9 kg CO₂",
            water: "164 L",
            land: "1.6 m²"
          },
          {
            source: "Beef", 
            co2: "25.0 kg CO₂",
            water: "1,695 L",
            land: "36.4 m²"
          },
          {
            source: "Chicken",
            co2: "5.7 kg CO₂", 
            water: "469 L",
            land: "7.5 m²"
          },
          {
            source: "Pork",
            co2: "7.6 kg CO₂",
            water: "789 L", 
            land: "8.9 m²"
          }
        ]
      },
      future: {
        title: "Future-Proof Food System",
        description: "Tempeh represents a scalable solution for feeding a growing global population sustainably:",
        points: [
          "Efficient protein conversion - produces more protein per acre than animal agriculture",
          "Climate resilient - fermentation works in various climatic conditions",
          "Biodiversity friendly - promotes diverse crop rotations and soil health",
          "Resource efficient - maximizes nutrition while minimizing environmental impact",
          "Culturally adaptable - can incorporate local ingredients and flavors globally"
        ]
      }
    },
    da: {
      title: "BÆREDYGTIGHED & MILJØ",
      subtitle: "HVORDAN TEMPEH BIDRAGER TIL EN BÆREDYGTIG FREMTID",
      intro: "Tempeh repræsenterer en af de mest miljømæssigt bæredygtige proteinkilder, der findes. Fra produktion til forbrug bidrager alle aspekter af tempeh til et mere bæredygtigt fødevaresystem.",
      environmental: {
        title: "Miljømæssige fordele",
        benefits: [
          {
            icon: "ri-leaf-line",
            title: "Lavt CO₂-aftryk", 
            description: "Tempehproduktion genererer betydeligt færre drivhusgasser sammenlignet med animalske proteiner. Fermenteringsprocessen kræver minimal energitilførsel."
          },
          {
            icon: "ri-drop-line",
            title: "Vandeffektivitet",
            description: "Kræver 90% mindre vand end oksekødsproduktion. Fermenteringsprocessen bruger minimale vandressourcer mens den maksimerer ernæringsmæssige output."
          },
          {
            icon: "ri-seedling-line", 
            title: "Jordsundhed",
            description: "Bælgfrugter brugt i tempeh forbedrer faktisk jordsundheden gennem kvælstoffiksering, hvilket reducerer behovet for syntetiske gødninger."
          },
          {
            icon: "ri-recycle-line",
            title: "Minimalt affald", 
            description: "Næsten nul affaldsproduktion - selv biprodukter kan komposteres eller bruges som dyrefoder, hvilket skaber en cirkulær økonomi."
          }
        ]
      },
      nordic: {
        title: "Nordisk bæredygtighedstilgang",
        description: "Vores engagement i nordisk bæredygtighed går ud over bare at bruge lokale ingredienser:",
        practices: [
          "Indkøb af økologiske bælgfrugter og korn fra nordiske landmænd",
          "Støtte til lokale landbrugssamfund og biodiversitet",
          "Reduktion af transportudslip gennem regionale forsyningskæder", 
          "Emballage lavet af genanvendelige og kompostbare materialer",
          "Energieffektive fermenteringsprocesser drevet af vedvarende energi",
          "Lukket kredsløbsproduktionssystem der minimerer ressourcespild"
        ]
      },
      comparison: {
        title: "Miljøpåvirkningssammenligning",
        subtitle: "Pr. 100g protein produceret",
        metrics: [
          {
            source: "Tempeh",
            co2: "0,9 kg CO₂", 
            water: "164 L",
            land: "1,6 m²"
          },
          {
            source: "Oksekød",
            co2: "25,0 kg CO₂",
            water: "1.695 L",
            land: "36,4 m²"
          },
          {
            source: "Kylling",
            co2: "5,7 kg CO₂",
            water: "469 L", 
            land: "7,5 m²"
          },
          {
            source: "Svinekød",
            co2: "7,6 kg CO₂",
            water: "789 L",
            land: "8,9 m²"
          }
        ]
      },
      future: {
        title: "Fremtidssikret fødevaresystem",
        description: "Tempeh repræsenterer en skalerbar løsning til at føde en voksende global befolkning bæredygtigt:",
        points: [
          "Effektiv proteinkonvertering - producerer mere protein pr. hektar end animalsk landbrug",
          "Klimaresistent - fermentering fungerer i forskellige klimatiske forhold", 
          "Biodiversitetsvenlig - fremmer diverse afgrødeomdrifter og jordsundhed",
          "Ressourceeffektiv - maksimerer ernæring mens miljøpåvirkning minimeres",
          "Kulturelt tilpasningsbar - kan inkorporere lokale ingredienser og smage globalt"
        ]
      }
    }
  };

  const text = content[language];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{text.title}</h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-8">{text.subtitle}</h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">{text.intro}</p>
        </div>

        {/* Environmental Benefits */}
        <div className="mb-16">
          <h4 className="text-3xl font-semibold text-gray-900 mb-12 text-center">{text.environmental.title}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {text.environmental.benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div style={{ backgroundColor: 'rgba(169,185,172,0.2)' }} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${benefit.icon} w-8 h-8 flex items-center justify-center text-gray-700`}></i>
                </div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h5>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nordic Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Beautiful%20Nordic%20landscape%20with%20organic%20farms%2C%20sustainable%20agriculture%20fields%20with%20legumes%20and%20grains%2C%20clean%20environmental%20photography%20showing%20renewable%20energy%20and%20sustainable%20farming%20practices&width=600&height=400&seq=nordic-sustainability&orientation=landscape"
              alt="Nordic sustainable agriculture"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div style={{ backgroundColor: 'rgba(169,185,172,0.1)' }} className="p-8 rounded-lg">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">{text.nordic.title}</h4>
            <p className="text-gray-600 mb-6">{text.nordic.description}</p>
            <div className="space-y-3">
              {text.nordic.practices.map((practice, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mt-0.5"></i>
                  <span className="text-gray-700 text-sm">{practice}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Environmental Comparison */}
        <div className="mb-16">
          <h4 className="text-3xl font-semibold text-gray-900 mb-4 text-center">{text.comparison.title}</h4>
          <p className="text-gray-600 text-center mb-8">{text.comparison.subtitle}</p>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
              <thead style={{ backgroundColor: 'rgba(169,185,172,0.2)' }}>
                <tr>
                  <th className="py-4 px-6 text-left font-semibold text-gray-900">{language === 'en' ? 'Protein Source' : 'Proteinkilde'}</th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-900">{language === 'en' ? 'CO₂ Emissions' : 'CO₂ Udslip'}</th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-900">{language === 'en' ? 'Water Usage' : 'Vandforbrug'}</th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-900">{language === 'en' ? 'Land Usage' : 'Landforbrug'}</th>
                </tr>
              </thead>
              <tbody>
                {text.comparison.metrics.map((metric, index) => (
                  <tr key={index} className={index === 0 ? 'bg-green-50' : 'hover:bg-gray-50'}>
                    <td className={`py-4 px-6 font-medium ${index === 0 ? 'text-green-800' : 'text-gray-900'}`}>
                      {metric.source}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700">{metric.co2}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{metric.water}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{metric.land}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Future Food System */}
        <div style={{ backgroundColor: 'rgba(169,185,172,0.1)' }} className="p-8 rounded-lg">
          <h4 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{text.future.title}</h4>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">{text.future.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {text.future.points.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <i className="ri-planet-line w-6 h-6 flex items-center justify-center text-blue-600 mt-1"></i>
                  <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}