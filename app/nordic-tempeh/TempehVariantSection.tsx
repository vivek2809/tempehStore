
'use client';

import { useLanguage } from '@/components/Header';

interface NutritionData {
  energyKj: string;
  energyKcal: string;
  fat: string;
  saturatedFat: string;
  carbs: string;
  sugars: string;
  fiber: string;
  protein: string;
  salt: string;
}

interface TempehVariantSectionProps {
  title: string;
  description: string;
  ingredients: string;
  nutrition: NutritionData;
  images: string[];
  imageLeft?: boolean;
  englishTitle?: string;
  englishDescription?: string;
  englishIngredients?: string;
}

export default function TempehVariantSection({
  title,
  description,
  ingredients,
  nutrition,
  images,
  imageLeft = false,
  englishTitle,
  englishDescription,
  englishIngredients
}: TempehVariantSectionProps) {
  const { language } = useLanguage();

  const labels = {
    en: {
      ingredients: "INGREDIENTS:",
      nutrition: "NUTRITIONAL CONTENT PER 100G:",
      energy: "Energy",
      fat: "Fat",
      saturatedFat: "- of which saturated fats",
      carbs: "Carbohydrate", 
      sugars: "- of which sugars",
      fiber: "Dietary fiber",
      protein: "Protein",
      salt: "Salt"
    },
    da: {
      ingredients: "INGREDIENSER:",
      nutrition: "NÆRINGSINDHOLD PER 100G:",
      energy: "Energi",
      fat: "Fedt",
      saturatedFat: "- heraf mættede fedtsyrer",
      carbs: "Kulhydrat",
      sugars: "- heraf sukkerarter", 
      fiber: "Kostfiber",
      protein: "Protein",
      salt: "Salt"
    }
  };

  const currentTitle = language === 'en' && englishTitle ? englishTitle : title;
  const currentDescription = language === 'en' && englishDescription ? englishDescription : description;
  const currentIngredients = language === 'en' && englishIngredients ? englishIngredients : ingredients;
  const currentLabels = labels[language];
  
  const paragraphs = currentDescription.split('\n\n');

  const content = (
    <>
      <div className={`flex-1 ${imageLeft ? 'order-2' : 'order-1'}`}>
        <div className="p-12 w-full group hover:bg-white/30 transition-all duration-300 cursor-pointer">
          <h2 className="text-5xl font-bold text-gray-800 mb-8 leading-tight group-hover:text-gray-600 group-hover:scale-105 transition-all duration-300">
            {currentTitle}
          </h2>
          
          <div className="w-16 h-1 bg-gray-400 mb-8 group-hover:bg-gray-600 transition-colors duration-300"></div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed mb-10 group-hover:text-gray-600 group-hover:scale-105 transition-all duration-300">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="mb-8 group-hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-600 transition-colors duration-300">{currentLabels.ingredients}</h3>
            <p className="text-gray-700 group-hover:text-gray-600 transition-colors duration-300">{currentIngredients}</p>
          </div>
          
          <div className="group-hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-600 transition-colors duration-300">{currentLabels.nutrition}</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-700 text-sm group-hover:text-gray-600 transition-colors duration-300">
              <div>{currentLabels.energy}</div>
              <div>{nutrition.energyKj}</div>
              <div>{currentLabels.energy}</div>
              <div>{nutrition.energyKcal}</div>
              <div>{currentLabels.fat}</div>
              <div>{nutrition.fat}</div>
              <div>{currentLabels.saturatedFat}</div>
              <div>{nutrition.saturatedFat}</div>
              <div>{currentLabels.carbs}</div>
              <div>{nutrition.carbs}</div>
              <div>{currentLabels.sugars}</div>
              <div>{nutrition.sugars}</div>
              <div>{currentLabels.fiber}</div>
              <div>{nutrition.fiber}</div>
              <div>{currentLabels.protein}</div>
              <div>{nutrition.protein}</div>
              <div>{currentLabels.salt}</div>
              <div>{nutrition.salt}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`flex-1 ${imageLeft ? 'order-1' : 'order-2'}`}>
        <div className="p-8 flex flex-col items-center justify-center space-y-6">
          {images.map((image, index) => (
            <div key={index} className={`${index === 0 ? 'w-48 h-64' : index === 1 ? 'w-64 h-48' : 'w-56 h-56'} overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300`}>
              <img 
                src={image} 
                alt={`${currentTitle} ingredient ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[700px] items-center">
          {content}
        </div>
      </div>
    </section>
  );
}
