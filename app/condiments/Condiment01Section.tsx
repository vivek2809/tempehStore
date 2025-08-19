
'use client';

import { useLanguage } from '@/components/Header';

export default function Condiment01Section() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "CONDIMENT #01",
      productTitle: "ORGANIC NORDIC BEAN SAUCE",
      description: [
        "This bean sauce resembles soy sauce but has its own special character. It offers plenty of umami and has a fine balance between acidity and sweetness. The color is golden brown and the taste is 'clean and clear'. It is naturally salty and fermented, but not as dominant as regular soy - instead it lifts and enhances the flavor wherever you use it.",
        "Try, for example, stir-frying some vegetables and finishing them with a splash of this sauce. CONDIMENT #01 is the tool that can make even the most stubborn vegetable hater love broccoli! It can of course also be used in marinades and dressings, or as an alternative to bouillon in soups and stews, where it adds extra depth to the flavor.",
        "And did we mention that we produce it in Denmark from Danish organic broad beans - that it contains only about half as much salt as regular soy sauce - and that it contains no allergens (neither soy nor wheat)? Check ✓"
      ],
      ingredients: "INGREDIENTS:",
      ingredientsList: "Broad beans (32%)*, water, salt, fermentation cultures. *Organic",
      nutrition: "NUTRITIONAL CONTENT PER 100G:",
      nutritionData: {
        energy: "Energy",
        fat: "Fat",
        saturatedFat: "- of which saturated fats",
        carbs: "Carbohydrate",
        sugars: "- of which sugars",
        fiber: "Dietary fiber",
        protein: "Protein",
        salt: "Salt"
      }
    },
    da: {
      title: "CONDIMENT #01",
      productTitle: "ØKOLOGISK NORDISK BØNNESAUCE",
      description: [
        "Denne bønnesauce minder om en sojasauce, men har sin egen særlige karakter. Den byder på masser af umami og har en fin balance mellem syrlighed og sødme. Farven er gyldenbrun og smagen er 'ren og klar'. Den er selvfølgelig også salt og gæret, men ikke så dominerende som en almindelig soja – derimod løfter og fremhæver den velsmagen, dér hvor du bruger den.",
        "Prøv f.eks. at lynstege nogle grønsager, for til sidst at give dem et skud af denne sauce. CONDIMENT #01 er midlet der kan få selv den stædigste forsager af grøntsager til at holde af broccoli! Den kan selvfølgelig også bruges i marinader og dressinger, eller som alternativ til bouillon i supper og sammenkogte retter, hvor den tilføjer ekstra dybde i smagen.",
        "Og fik vi nævnt at vi fremstiller den i Danmark, af danske økologiske hestebønner - at den kun indeholder ca. halvt så meget salt som en gængs sojasauce - og at den til gengæld ikke indeholder allergener (hverken soja eller hvede)? Tjek ✓"
      ],
      ingredients: "INGREDIENSER:",
      ingredientsList: "Hestebønner (32%)*, vand, salt, fermenteringskulturer. *Økologisk",
      nutrition: "NÆRINGSINDHOLD PER 100G:",
      nutritionData: {
        energy: "Energi",
        fat: "Fedt",
        saturatedFat: "- heraf mættede fedtsyrer",
        carbs: "Kulhydrat",
        sugars: "- heraf sukkerarter",
        fiber: "Kostfiber",
        protein: "Protein",
        salt: "Salt"
      }
    }
  };

  const text = content[language];

  return (
    <section style={{ backgroundColor: 'rgba(169,185,172,0.3)' }} className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">{text.title}</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://readdy.ai/api/search-image?query=artisanal%20organic%20bean%20sauce%20in%20amber%20glass%20bottle%20with%20elegant%20label%2C%20minimalist%20design%2C%20wooden%20background%2C%20natural%20lighting%2C%20clean%20product%20photography%20style&width=300&height=200&seq=condiment01-bottle&orientation=landscape"
                alt="CONDIMENT #01 sauce bottle"
                className="w-full h-48 object-top object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://readdy.ai/api/search-image?query=organic%20broad%20beans%20fava%20beans%20in%20rustic%20wooden%20bowl%2C%20natural%20lighting%2C%20simple%20clean%20background%2C%20artisanal%20food%20photography%20style&width=300&height=200&seq=condiment01-beans&orientation=landscape"
                alt="Organic broad beans"
                className="w-full h-48 object-top object-cover rounded-lg shadow-md"
              />
            </div>
            <img 
              src="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/7b24e8f48a0a40a33feed187657d8004.png"
              alt="CONDIMENT #01 in pouch packaging"
              className="w-full h-64 object-top object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-900">{text.productTitle}</h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {text.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">{text.ingredients}</h4>
              <p className="text-gray-600 mb-4">{text.ingredientsList}</p>
              
              <h4 className="font-semibold text-gray-900 mb-2">{text.nutrition}</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-600">
                <div>{text.nutritionData.energy}: 113 KJ</div>
                <div>{text.nutritionData.energy}: 27 kcal</div>
                <div>{text.nutritionData.fat}: 0 g</div>
                <div>{text.nutritionData.saturatedFat}: 0 g</div>
                <div>{text.nutritionData.carbs}: 2,05 g</div>
                <div>{text.nutritionData.sugars}: 1,55 g</div>
                <div>{text.nutritionData.fiber}: 0 g</div>
                <div>{text.nutritionData.protein}: 4,6 g</div>
                <div>{text.nutritionData.salt}: 9,05 g</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
