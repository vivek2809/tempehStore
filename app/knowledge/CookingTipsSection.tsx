'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/Header';

export default function CookingTipsSection() {
  const { language } = useLanguage();
  const [activeMethod, setActiveMethod] = useState(0);

  const content = {
    en: {
      title: "COOKING WITH TEMPEH",
      subtitle: "MASTER THE ART OF TEMPEH PREPARATION",
      intro: "Tempeh's versatility shines through various cooking methods. Each technique brings out different flavors and textures, making it adaptable to countless cuisines and dietary preferences.",
      methods: [
        {
          name: "Pan-Frying",
          icon: "ri-fire-line",
          description: "The most popular method for achieving crispy exterior while maintaining tender interior.",
          steps: [
            "Slice tempeh into 1cm thick pieces",
            "Heat oil in pan over medium-high heat", 
            "Cook 3-4 minutes per side until golden brown",
            "Season with salt and pepper while cooking"
          ],
          tips: "For extra flavor, marinate slices for 15-30 minutes before cooking."
        },
        {
          name: "Steaming", 
          icon: "ri-mist-line",
          description: "Gentle cooking method that preserves nutrients and creates soft, receptive texture for marinades.",
          steps: [
            "Place tempeh in steamer basket",
            "Steam over boiling water for 10-12 minutes",
            "Remove and let cool before slicing",
            "Perfect for absorbing marinades afterward"
          ],
          tips: "Steaming before other cooking methods removes any bitter taste and improves flavor absorption."
        },
        {
          name: "Baking",
          icon: "ri-home-8-line", 
          description: "Hands-off method perfect for meal prep and achieving even cooking throughout.",
          steps: [
            "Preheat oven to 375°F (190°C)",
            "Slice and arrange on baking sheet",
            "Brush with oil and seasonings",
            "Bake 20-25 minutes, flipping halfway"
          ],
          tips: "Line baking sheet with parchment paper to prevent sticking."
        },
        {
          name: "Grilling",
          icon: "ri-fire-fill",
          description: "Creates beautiful char marks and smoky flavor, perfect for summer barbecues.",
          steps: [
            "Preheat grill to medium-high heat",
            "Slice tempeh into thick pieces",
            "Oil grill grates to prevent sticking", 
            "Grill 4-5 minutes per side"
          ],
          tips: "Marinate beforehand and use a grill basket for smaller pieces."
        }
      ],
      marinating: {
        title: "Marinating Tips",
        intro: "Tempeh readily absorbs flavors, making marination highly effective:",
        tips: [
          "Steam tempeh first for better absorption",
          "Marinate for at least 30 minutes, ideally 2-4 hours", 
          "Use acidic ingredients (lemon, vinegar) to tenderize",
          "Add oil to help flavors penetrate",
          "Refrigerate while marinating"
        ]
      },
      flavoring: {
        title: "Flavor Combinations",
        combinations: [
          {
            cuisine: "Asian",
            flavors: "Soy sauce, ginger, garlic, sesame oil, rice vinegar"
          },
          {
            cuisine: "Mediterranean", 
            flavors: "Olive oil, lemon, herbs, balsamic vinegar, sun-dried tomatoes"
          },
          {
            cuisine: "Mexican",
            flavors: "Cumin, chili powder, lime, cilantro, chipotle"
          },
          {
            cuisine: "Indian",
            flavors: "Turmeric, cumin, coriander, garam masala, coconut milk"
          }
        ]
      }
    },
    da: {
      title: "MADLAVNING MED TEMPEH",
      subtitle: "MESTER KUNSTEN AT TILBEREDE TEMPEH",
      intro: "Tempehs alsidighed skinner igennem forskellige madlavningsmetoder. Hver teknik fremhæver forskellige smage og teksturer, hvilket gør det tilpasningsdygtigt til utallige køkkener og diætpræferencer.",
      methods: [
        {
          name: "Stegning på pande",
          icon: "ri-fire-line", 
          description: "Den mest populære metode til at opnå sprød ydre, mens den indre del forbliver mør.",
          steps: [
            "Skær tempeh i 1cm tykke skiver",
            "Varm olie op på panden ved middel-høj varme",
            "Steg 3-4 minutter på hver side til gyldenbrunt",
            "Krydder med salt og peber under stegning"
          ],
          tips: "For ekstra smag, mariner skiverne i 15-30 minutter før tilberedning."
        },
        {
          name: "Dampning",
          icon: "ri-mist-line",
          description: "Skånsom tilberedningsmetode der bevarer næringsstoffer og skaber blød, modtagelig tekstur for marinader.",
          steps: [
            "Placér tempeh i dampkurv",
            "Damp over kogende vand i 10-12 minutter", 
            "Fjern og lad køle af før skæring",
            "Perfekt til at absorbere marinader bagefter"
          ],
          tips: "Dampning før andre tilberedningsmetoder fjerner eventuel bitter smag og forbedrer smagsabsorption."
        },
        {
          name: "Bagning",
          icon: "ri-home-8-line",
          description: "Hands-off metode perfekt til meal prep og opnåelse af jævn tilberedning hele vejen igennem.",
          steps: [
            "Forvarm ovn til 190°C",
            "Skær og arrangér på bageplade",
            "Pensl med olie og krydderier", 
            "Bag 20-25 minutter, vend halvvejs"
          ],
          tips: "Læg bagepapir på pladen for at forhindre at det brænder fast."
        },
        {
          name: "Grillning",
          icon: "ri-fire-fill",
          description: "Skaber smukke grillmærker og røget smag, perfekt til sommer-barbecues.",
          steps: [
            "Forvarm grill til middel-høj varme",
            "Skær tempeh i tykke stykker",
            "Smør grillristen for at forhindre at det brænder fast",
            "Grill 4-5 minutter på hver side"  
          ],
          tips: "Mariner på forhånd og brug en grillkurv til mindre stykker."
        }
      ],
      marinating: {
        title: "Marineringstips",
        intro: "Tempeh absorberer let smage, hvilket gør marinering meget effektiv:",
        tips: [
          "Damp tempeh først for bedre absorption",
          "Mariner i mindst 30 minutter, ideelt 2-4 timer",
          "Brug sure ingredienser (citron, eddike) til at gøre det mørt",
          "Tilsæt olie for at hjælpe smage med at trænge igennem",
          "Opbevar i køleskab under marinering"
        ]
      },
      flavoring: {
        title: "Smagskombinationer", 
        combinations: [
          {
            cuisine: "Asiatisk",
            flavors: "Sojasovs, ingefær, hvidløg, sesamolie, riseddike"
          },
          {
            cuisine: "Middelhavs",
            flavors: "Olivenolie, citron, urter, balsamico, soltørrede tomater"
          },
          {
            cuisine: "Mexicansk", 
            flavors: "Spidskommen, chili pulver, lime, koriander, chipotle"
          },
          {
            cuisine: "Indisk",
            flavors: "Gurkemeje, spidskommen, koriander, garam masala, kokosmælk"
          }
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

        {/* Cooking Methods */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {text.methods.map((method, index) => (
              <button
                key={index}
                onClick={() => setActiveMethod(index)}
                className={`flex items-center px-6 py-3 rounded-full transition-all whitespace-nowrap ${
                  activeMethod === index 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={`${method.icon} w-5 h-5 flex items-center justify-center mr-2`}></i>
                {method.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <i className={`${text.methods[activeMethod].icon} w-6 h-6 flex items-center justify-center mr-3`}></i>
                  {text.methods[activeMethod].name}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">{text.methods[activeMethod].description}</p>
                
                <div className="space-y-3">
                  {text.methods[activeMethod].steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
                
                <div style={{ backgroundColor: 'rgba(169,185,172,0.2)' }} className="p-4 rounded-lg mt-6">
                  <p className="text-sm text-gray-700">
                    <strong>Tip:</strong> {text.methods[activeMethod].tips}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img 
                src={`https://readdy.ai/api/search-image?query=Professional%20chef%20$%7Btext.methods%5BactiveMethod%5D.name.toLowerCase%28%29%7D%20organic%20tempeh%20in%20modern%20kitchen%2C%20detailed%20cooking%20process%20photography%20with%20golden%20brown%20tempeh%20pieces%2C%20clean%20food%20preparation%20styling&width=600&height=400&seq=tempeh-cooking-${activeMethod}&orientation=landscape`}
                alt={`${text.methods[activeMethod].name} tempeh`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Marinating and Flavoring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div style={{ backgroundColor: 'rgba(169,185,172,0.1)' }} className="p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">{text.marinating.title}</h4>
            <p className="text-gray-600 mb-6">{text.marinating.intro}</p>
            <div className="space-y-3">
              {text.marinating.tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mt-0.5"></i>
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(169,185,172,0.1)' }} className="p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">{text.flavoring.title}</h4>
            <div className="space-y-4">
              {text.flavoring.combinations.map((combo, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">{combo.cuisine}</h5>
                  <p className="text-sm text-gray-600">{combo.flavors}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}