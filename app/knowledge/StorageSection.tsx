'use client';

import { useLanguage } from '@/components/Header';

export default function StorageSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "STORAGE & SAFETY",
      subtitle: "KEEPING YOUR TEMPEH FRESH AND SAFE",
      fresh: {
        title: "Fresh Tempeh Storage",
        description: "Proper storage ensures optimal taste and safety for fresh tempeh.",
        tips: [
          {
            icon: "ri-fridge-line",
            title: "Refrigeration", 
            text: "Store in refrigerator at 4°C or below immediately after purchase"
          },
          {
            icon: "ri-time-line",
            title: "Shelf Life",
            text: "Consume within 7-10 days of purchase when properly refrigerated"
          },
          {
            icon: "ri-box-3-line", 
            title: "Original Packaging",
            text: "Keep in original packaging until ready to use to maintain freshness"
          },
          {
            icon: "ri-drop-line",
            title: "Moisture Control",
            text: "Avoid excess moisture which can promote unwanted bacterial growth"
          }
        ]
      },
      frozen: {
        title: "Freezing Tempeh",
        description: "Freezing extends shelf life significantly while maintaining nutritional value.",
        tips: [
          {
            icon: "ri-snowflake-line",
            title: "Freezer Storage",
            text: "Can be frozen for up to 10-12 months in original packaging"
          },
          {
            icon: "ri-scissors-line",
            title: "Pre-slicing",
            text: "Slice before freezing for easier portioning and faster thawing"
          },
          {
            icon: "ri-timer-2-line", 
            title: "Thawing Process",
            text: "Thaw overnight in refrigerator or use defrost setting on microwave"
          },
          {
            icon: "ri-restaurant-line",
            title: "Texture Changes",
            text: "Frozen tempeh may have slightly different texture but retains nutritional benefits"
          }
        ]
      },
      safety: {
        title: "Food Safety Guidelines",
        signs: {
          title: "Signs of Spoilage",
          items: [
            "Slimy or sticky surface texture",
            "Off or sour odor (different from natural fermented smell)",
            "Dark spots or unusual discoloration",
            "Fuzzy mold growth (different from white tempeh mycelium)"
          ]
        },
        handling: {
          title: "Safe Handling Practices", 
          items: [
            "Always wash hands before handling",
            "Use clean utensils and cutting boards",
            "Cook to internal temperature of 74°C if desired",
            "Don't leave at room temperature for more than 2 hours"
          ]
        }
      },
      cooked: {
        title: "Storing Cooked Tempeh",
        description: "Properly stored cooked tempeh maintains quality and safety.",
        guidelines: [
          "Refrigerate within 2 hours of cooking",
          "Store in airtight containers for up to 4-5 days",
          "Can be frozen for up to 3 months",
          "Reheat thoroughly to 74°C before serving",
          "Use within 24 hours once reheated"
        ]
      }
    },
    da: {
      title: "OPBEVARING & SIKKERHED",
      subtitle: "HOLD DIN TEMPEH FRISK OG SIKKER",
      fresh: {
        title: "Opbevaring af frisk tempeh",
        description: "Korrekt opbevaring sikrer optimal smag og sikkerhed for frisk tempeh.",
        tips: [
          {
            icon: "ri-fridge-line",
            title: "Køling",
            text: "Opbevar i køleskab ved 4°C eller derunder umiddelbart efter køb"
          },
          {
            icon: "ri-time-line", 
            title: "Holdbarhed",
            text: "Konsumer inden for 7-10 dage efter køb når den opbevares korrekt i køleskab"
          },
          {
            icon: "ri-box-3-line",
            title: "Original emballage",
            text: "Behold i original emballage indtil klar til brug for at bevare friskhed"
          },
          {
            icon: "ri-drop-line",
            title: "Fugtkontrol", 
            text: "Undgå overskydende fugt som kan fremme uønsket bakterievækst"
          }
        ]
      },
      frozen: {
        title: "Frysning af tempeh",
        description: "Frysning forlænger holdbarheden betydeligt mens ernæringsværdien bevares.",
        tips: [
          {
            icon: "ri-snowflake-line",
            title: "Fryseropbevaring",
            text: "Kan fryses i op til 10-12 måneder i original emballage"
          },
          {
            icon: "ri-scissors-line",
            title: "Forudskæring",
            text: "Skær før frysning for lettere portionering og hurtigere optøning"
          },
          {
            icon: "ri-timer-2-line",
            title: "Optøningsproces", 
            text: "Tø op natten over i køleskab eller brug optøningsindstilling på mikroovn"
          },
          {
            icon: "ri-restaurant-line",
            title: "Teksturændringer",
            text: "Frossen tempeh kan have lidt anderledes tekstur men bevarer ernæringsmæssige fordele"
          }
        ]
      },
      safety: {
        title: "Fødevaresikkerhedsretningslinjer",
        signs: {
          title: "Tegn på fordærv",
          items: [
            "Slimet eller klæbrig overfladetekstur",
            "Dårlig eller sur lugt (anderledes end naturlig fermenteret lugt)",
            "Mørke pletter eller usædvanlig misfarvning",
            "Fuzzy skimmelvækst (anderledes end hvidt tempeh mycelium)"
          ]
        },
        handling: {
          title: "Sikre håndteringspraksisser",
          items: [
            "Vask altid hænder før håndtering",
            "Brug rent redskab og skærebrætter", 
            "Tilbered til indre temperatur på 74°C hvis ønsket",
            "Efterlad ikke ved stuetemperatur i mere end 2 timer"
          ]
        }
      },
      cooked: {
        title: "Opbevaring af tilberedt tempeh",
        description: "Korrekt opbevaret tilberedt tempeh bevarer kvalitet og sikkerhed.",
        guidelines: [
          "Sæt på køl inden for 2 timer efter tilberedning",
          "Opbevar i lufttætte beholdere i op til 4-5 dage",
          "Kan fryses i op til 3 måneder",
          "Varm grundigt op til 74°C før servering",
          "Brug inden for 24 timer når den er genopvarmet"
        ]
      }
    }
  };

  const text = content[language];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{text.title}</h2>
          <h3 className="text-2xl font-semibold text-gray-700">{text.subtitle}</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Fresh Storage */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">{text.fresh.title}</h4>
            <p className="text-gray-600 mb-6">{text.fresh.description}</p>
            <div className="space-y-4">
              {text.fresh.tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div style={{ backgroundColor: 'rgba(169,185,172,0.2)' }} className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${tip.icon} w-5 h-5 flex items-center justify-center text-gray-700`}></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">{tip.title}</h5>
                    <p className="text-gray-600 text-sm">{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frozen Storage */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">{text.frozen.title}</h4>
            <p className="text-gray-600 mb-6">{text.frozen.description}</p>
            <div className="space-y-4">
              {text.frozen.tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div style={{ backgroundColor: 'rgba(169,185,172,0.2)' }} className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${tip.icon} w-5 h-5 flex items-center justify-center text-gray-700`}></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">{tip.title}</h5>
                    <p className="text-gray-600 text-sm">{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div style={{ backgroundColor: 'rgba(169,185,172,0.1)' }} className="p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">{text.safety.title}</h4>
            
            <div className="mb-8">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">{text.safety.signs.title}</h5>
              <div className="space-y-2">
                {text.safety.signs.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <i className="ri-alert-line w-5 h-5 flex items-center justify-center text-red-500 mt-0.5"></i>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-gray-900 mb-4">{text.safety.handling.title}</h5>
              <div className="space-y-2">
                {text.safety.handling.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <i className="ri-shield-check-line w-5 h-5 flex items-center justify-center text-green-600 mt-0.5"></i>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img 
              src="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/ef54c6ebf0e410098b34eff562726e31.png"
              alt="Proper tempeh storage"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{text.cooked.title}</h4>
              <p className="text-gray-600 mb-4">{text.cooked.description}</p>
              <div className="space-y-2">
                {text.cooked.guidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mt-0.5"></i>
                    <span className="text-gray-700 text-sm">{guideline}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}