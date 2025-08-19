'use client';

import { useLanguage } from '@/components/Header';

export default function NutritionSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "NUTRITIONAL POWERHOUSE",
      subtitle: "WHY TEMPEH IS A COMPLETE PROTEIN SOURCE",
      intro: "Tempeh stands out among plant-based proteins for its exceptional nutritional profile. The fermentation process not only preserves but enhances the bioavailability of nutrients, making it one of the most nutritious protein sources available.",
      protein: {
        title: "Complete Protein Profile",
        text: "Contains all nine essential amino acids in optimal ratios, making it comparable to animal proteins. 100g of tempeh provides approximately 19g of high-quality protein."
      },
      vitamins: {
        title: "Rich in B Vitamins",
        text: "Particularly high in B12, folate, and riboflavin. The fermentation process increases B vitamin content, especially B12 which is rare in plant foods."
      },
      minerals: {
        title: "Essential Minerals", 
        text: "Excellent source of magnesium, phosphorus, and manganese. Also provides iron, zinc, and calcium in bioavailable forms."
      },
      fiber: {
        title: "Digestive Health",
        text: "High fiber content supports healthy digestion and gut microbiome. Contains prebiotics that feed beneficial bacteria."
      },
      comparison: {
        title: "Nutritional Comparison (per 100g)",
        tempeh: "Tempeh",
        tofu: "Tofu", 
        chicken: "Chicken",
        protein: "Protein",
        fiber: "Fiber",
        calories: "Calories",
        tempehValues: ["19g", "9g", "190"],
        tofuValues: ["8g", "0.4g", "76"],
        chickenValues: ["31g", "0g", "165"]
      }
    },
    da: {
      title: "ERNÆRINGSMÆSSIG KRAFTPAKKE",
      subtitle: "HVORFOR TEMPEH ER EN KOMPLET PROTEINKILDE", 
      intro: "Tempeh skiller sig ud blandt plantebaserede proteiner for sin exceptionelle ernæringsprofil. Fermenteringsprocessen bevarer ikke kun, men forbedrer også biotilgængeligheden af næringsstoffer, hvilket gør det til en af de mest nærende proteinkilder, der findes.",
      protein: {
        title: "Komplet Proteinprofil",
        text: "Indeholder alle ni essentielle aminosyrer i optimale forhold, hvilket gør det sammenligneligt med animalske proteiner. 100g tempeh giver cirka 19g protein af høj kvalitet."
      },
      vitamins: {
        title: "Rig på B-vitaminer",
        text: "Særligt høj i B12, folat og riboflavin. Fermenteringsprocessen øger B-vitaminindholdet, især B12 som er sjældent i plantefødevarer."
      },
      minerals: {
        title: "Essentielle Mineraler",
        text: "Fremragende kilde til magnesium, fosfor og mangan. Giver også jern, zink og calcium i biotilgængelige former."
      },
      fiber: {
        title: "Fordøjelsessundhed", 
        text: "Højt fiberindhold understøtter sund fordøjelse og tarmmikrobiom. Indeholder præbiotika som nærer gavnlige bakterier."
      },
      comparison: {
        title: "Ernæringssammenligning (pr. 100g)",
        tempeh: "Tempeh",
        tofu: "Tofu",
        chicken: "Kylling", 
        protein: "Protein",
        fiber: "Fiber",
        calories: "Kalorier",
        tempehValues: ["19g", "9g", "190"],
        tofuValues: ["8g", "0,4g", "76"],
        chickenValues: ["31g", "0g", "165"]
      }
    }
  };

  const text = content[language];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">{text.title}</h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-8">{text.subtitle}</h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">{text.intro}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <i className="ri-heart-pulse-line w-6 h-6 flex items-center justify-center text-red-500 mr-3"></i>
                {text.protein.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{text.protein.text}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <i className="ri-medicine-bottle-line w-6 h-6 flex items-center justify-center text-blue-500 mr-3"></i>
                {text.vitamins.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{text.vitamins.text}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <i className="ri-service-line w-6 h-6 flex items-center justify-center text-orange-500 mr-3"></i>
                {text.minerals.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{text.minerals.text}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <i className="ri-leaf-line w-6 h-6 flex items-center justify-center text-green-500 mr-3"></i>
                {text.fiber.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{text.fiber.text}</p>
            </div>
          </div>

          <div className="space-y-6">
            <img 
              src="https://readdy.ai/api/search-image?query=Scientific%20nutrition%20chart%20and%20healthy%20organic%20tempeh%20slices%20on%20white%20background%2C%20modern%20food%20science%20photography%20showing%20protein%20structure%2C%20clean%20minimalist%20medical%20style%20with%20fresh%20ingredients&width=600&height=400&seq=tempeh-nutrition&orientation=landscape"
              alt="Tempeh nutritional benefits"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">{text.comparison.title}</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-medium text-gray-900"></th>
                      <th className="text-center py-3 font-medium text-gray-900">{text.comparison.tempeh}</th>
                      <th className="text-center py-3 font-medium text-gray-900">{text.comparison.tofu}</th>
                      <th className="text-center py-3 font-medium text-gray-900">{text.comparison.chicken}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-medium text-gray-700">{text.comparison.protein}</td>
                      <td className="text-center py-3 text-gray-600 font-semibold">{text.comparison.tempehValues[0]}</td>
                      <td className="text-center py-3 text-gray-600">{text.comparison.tofuValues[0]}</td>
                      <td className="text-center py-3 text-gray-600">{text.comparison.chickenValues[0]}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium text-gray-700">{text.comparison.fiber}</td>
                      <td className="text-center py-3 text-gray-600 font-semibold">{text.comparison.tempehValues[1]}</td>
                      <td className="text-center py-3 text-gray-600">{text.comparison.tofuValues[1]}</td>
                      <td className="text-center py-3 text-gray-600">{text.comparison.chickenValues[1]}</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium text-gray-700">{text.comparison.calories}</td>
                      <td className="text-center py-3 text-gray-600">{text.comparison.tempehValues[2]}</td>
                      <td className="text-center py-3 text-gray-600">{text.comparison.tofuValues[2]}</td>
                      <td className="text-center py-3 text-gray-600">{text.comparison.chickenValues[2]}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}