
'use client';

import { useLanguage } from '@/components/Header';

export default function Condiment02Section() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "CONDIMENT #02",
      productTitle: "ORGANIC NORDIC BEAN PASTE",
      description: [
        "This is a bean paste that resembles miso paste and can be used in the same way. But it is made from Danish organic broad beans instead of soybeans.",
        "CONDIMENT #02 offers really concentrated flavor and can easily play the main role in many different contexts - for example in soups, dips or dressings. It also works really well as a flavor booster in minced meat or pâtés (whether they are with or without meat). In fact, it can be used in everything from snacks to main courses and desserts. The content of umami and kokumi simply brings out the best in food."
      ],
      ingredients: "INGREDIENTS:",
      ingredientsList: "Broad beans (40%)*, water, salt, fermentation cultures. *Organic",
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
      title: "CONDIMENT #02",
      productTitle: "ØKOLOGISK NORDISK BØNNEPASTE",
      description: [
        "Dette er en bønnepaste, der minder om misopaste og som kan anvendes på samme måde. Men den er altså fremstillet af danske økologiske hestebønner i stedet for sojabønner.",
        "CONDIMENT #02 byder på virkelig koncentreret velsmag og kan med lethed spille hovedrollen i mange forskellige sammenhænge - f.eks. i supper, dips eller dressinger. Den gør sig samtidig rigtig godt som smagsbooster i fars eller postejer (uanset om de er med eller uden kød). Faktisk kan den bruges i alt fra snacks til hovedretter og desserter. Indholdet af umami og kokumi bringer simpelthen det bedste frem i maden."
      ],
      ingredients: "INGREDIENSER:",
      ingredientsList: "Hestebønner (40%)*, vand, salt, fermenteringskulturer. *Økologisk",
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
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-gray-900">{text.title}</h2>
            <h3 className="text-3xl font-semibold text-gray-700">{text.productTitle}</h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {text.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">{text.ingredients}</h4>
              <p className="text-gray-600 mb-4">{text.ingredientsList}</p>
              
              <h4 className="font-semibold text-gray-900 mb-2">{text.nutrition}</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-600">
                <div>{text.nutritionData.energy}: 236 KJ</div>
                <div>{text.nutritionData.energy}: 56 kcal</div>
                <div>{text.nutritionData.fat}: 0,65 g</div>
                <div>{text.nutritionData.saturatedFat}: 0,13 g</div>
                <div>{text.nutritionData.carbs}: 4,04 g</div>
                <div>{text.nutritionData.sugars}: 3,88 g</div>
                <div>{text.nutritionData.fiber}: 5,19 g</div>
                <div>{text.nutritionData.protein}: 5,97 g</div>
                <div>{text.nutritionData.salt}: 10,3 g</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/CONTEMPEHRARY%20CONDIMENTS/CONTEMPEHRARY%20CONDIMENT%2002%20%20beanpaste.jpg?etag=%22349650-64e22b0c%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=294%2B196&extract=42%2B0%2B206%2B196&quality=85"
                alt="CONTEMPEHRARY CONDIMENT 02 beanpaste"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/CONTEMPEHRARY%20CONDIMENTS/vand.jpg?etag=%2260bd4-62b333cb%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=233%2B310&extract=0%2B46%2B232%2B236&quality=85"
                alt="Vand"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
            <img 
              src="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/72e7a152712f0130c10e1a39ddbf74b6.png"
              alt="CONTEMPEHRARY CONDIMENT 02 in bag"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="https://impro.usercontent.one/appid/oneComWsb/domain/contempehrary.com/media/contempehrary.com/onewebmedia/CONTEMPEHRARY%20CONDIMENTS/havsalt.jpg?etag=%2274d66-62b333d0%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=198%2B264&extract=0%2B46%2B198%2B188&quality=85"
              alt="Havsalt"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
