
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NordicTempehHero from './NordicTempehHero';
import TempehVariantSection from './TempehVariantSection';
import TestimonialSection from './TestimonialSection';

export default function NordicTempehPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <NordicTempehHero />
      
      <div style={{ backgroundColor: 'rgba(169,185,172,0.5)' }}>
        <TempehVariantSection
          title="TEMPEH AF BØNNER + TANG"
          englishTitle="BEAN + SEAWEED TEMPEH"
          description="Vores tempeh på økologiske hestebønner og havsalat er udviklet i samarbejde med virksomheden 'Dansk Tang', som høster tangen lokalt. Vi er samtidig naboer her i Anneberg Kulturpark, hvor vi har et skønt og inspirerende fødevareproduktionsfællesskab.\n\nHavsalaten tilfører denne tempeh en ekstra dimension i smagen, uden at blive gennemtrængende. Det er vores nyeste variant, som med det samme er blevet rigtig populær.\n\nVandt guldmedalje og 'Best in Class' ved Nordic Artisan Food Awards 2022, hvilket vi naturligvis er meget stolte af."
          englishDescription="Our tempeh made from organic fava beans and sea lettuce is developed in collaboration with the company 'Dansk Tang', which harvests the seaweed locally. We are also neighbors here in Anneberg Culture Park, where we have a wonderful and inspiring food production community.\n\nThe sea lettuce adds an extra dimension to the flavor of this tempeh, without becoming overpowering. It is our newest variant, which has immediately become very popular.\n\nWon gold medal and 'Best in Class' at Nordic Artisan Food Awards 2022, which we are naturally very proud of."
          ingredients="Hestebønner* (99%), havsalat (1%), vegansk mælkesyrekultur, rhizopus kultur. *Økologisk"
          englishIngredients="Fava beans* (99%), sea lettuce (1%), vegan lactic acid culture, rhizopus culture. *Organic"
          nutrition={{
            energyKj: "588 Kj",
            energyKcal: "139 kcal",
            fat: "0,9 g",
            saturatedFat: "0,17 g",
            carbs: "22 g",
            sugars: "7,9 g",
            fiber: "5,3 g",
            protein: "13,4 g",
            salt: "0,026 g"
          }}
          images={[
            "https://readdy.ai/api/search-image?query=Artisanal%20organic%20fava%20bean%20tempeh%20with%20sea%20lettuce%20pieces%20on%20rustic%20wooden%20surface%2C%20fermented%20plant-based%20protein%20food%2C%20earthy%20natural%20textures%2C%20warm%20ambient%20kitchen%20lighting%2C%20sustainable%20Nordic%20food%20styling%2C%20clean%20minimalist%20presentation%2C%20green%20seaweed%20flecks%20visible&width=400&height=500&seq=tempeh-seaweed-new-1&orientation=portrait",
            "https://readdy.ai/api/search-image?query=Fresh%20organic%20fava%20beans%20scattered%20on%20marble%20countertop%20with%20dried%20sea%20lettuce%20strips%2C%20raw%20ingredients%20for%20tempeh%20fermentation%2C%20natural%20food%20photography%2C%20soft%20daylight%2C%20Nordic%20cuisine%20preparation%2C%20clean%20modern%20kitchen%20aesthetic%2C%20sustainable%20ingredient%20showcase&width=500&height=375&seq=tempeh-seaweed-new-2&orientation=landscape",
            "https://readdy.ai/api/search-image?query=Sliced%20fermented%20tempeh%20with%20visible%20sea%20lettuce%20threads%20on%20ceramic%20plate%2C%20organic%20plant%20protein%20food%2C%20detailed%20macro%20photography%2C%20natural%20lighting%2C%20healthy%20sustainable%20meal%20preparation%2C%20Nordic%20food%20culture%2C%20artisanal%20fermented%20food%20presentation&width=450&height=450&seq=tempeh-seaweed-new-3&orientation=squarish"
          ]}
          imageLeft={false}
        />
      </div>
      
      <div style={{ backgroundColor: 'rgba(169,185,172,0.25)' }}>
        <TempehVariantSection
          title="TEMPEH AF ÆRTER"
          englishTitle="PEA TEMPEH"
          description="Denne tempeh består af økologiske gule og grønne flækærter. Den har naturligvis en genkendelig smag af ærter, og karakteriseres samtidig ved at være lidt mildere, sødere og rundere i smagen end vores andre varianter. Den er en oplagt 'begynder tempeh' og egner sig til stort set alle former for tilberedning og måltider.\n\nVores tempeh på flækærter bliver let syrlig i takt med at den modnes, hvilket går lidt langsommere end med de andre varianter.\n\nUdmærker sig ved et højt indhold af protein, højt indhold af kostfibre, lavt indhold af mættede fedtsyrer og meget lavt indhold af salt."
          englishDescription="This tempeh consists of organic yellow and green split peas. It naturally has a recognizable pea flavor, and is characterized by being a bit milder, sweeter and rounder in taste than our other variants. It is an obvious 'beginner tempeh' and is suitable for virtually all forms of preparation and meals.\n\nOur split pea tempeh becomes slightly acidic as it matures, which happens a bit slower than with the other variants.\n\nIt stands out with a high protein content, high dietary fiber content, low saturated fat content and very low salt content."
          ingredients="Gule flækærter* (69%), grønne flækærter* (31%), vegansk mælkesyrekultur, rhizopus kultur. *Økologisk"
          englishIngredients="Yellow split peas* (69%), green split peas* (31%), vegan lactic acid culture, rhizopus culture. *Organic"
          nutrition={{
            energyKj: "598 Kj",
            energyKcal: "142 kcal",
            fat: "1,0 g",
            saturatedFat: "0,2 g",
            carbs: "26 g",
            sugars: "8,2 g",
            fiber: "6,3 g",
            protein: "10,3 g",
            salt: "0,012 g"
          }}
          images={[
            "https://readdy.ai/api/search-image?query=Fresh%20split%20pea%20tempeh%20block%20on%20bamboo%20cutting%20board%2C%20fermented%20yellow%20and%20green%20pea%20protein%20food%2C%20natural%20grain%20textures%20visible%2C%20soft%20kitchen%20lighting%2C%20organic%20plant-based%20nutrition%2C%20Nordic%20sustainable%20food%20photography%2C%20clean%20modern%20presentation&width=400&height=500&seq=tempeh-pea-new-1&orientation=portrait",
            "https://readdy.ai/api/search-image?query=Organic%20yellow%20and%20green%20split%20peas%20arranged%20on%20white%20ceramic%20bowl%2C%20raw%20legume%20ingredients%20for%20tempeh%20making%2C%20natural%20food%20styling%2C%20bright%20daylight%20photography%2C%20healthy%20sustainable%20cooking%2C%20Nordic%20kitchen%20aesthetic%2C%20minimalist%20ingredient%20display&width=500&height=375&seq=tempeh-pea-new-2&orientation=landscape",
            "https://readdy.ai/api/search-image?query=Whole%20dried%20split%20peas%20in%20glass%20mason%20jar%20on%20wooden%20shelf%2C%20organic%20legume%20storage%20for%20fermentation%2C%20natural%20pantry%20organization%2C%20warm%20ambient%20lighting%2C%20sustainable%20food%20preparation%2C%20Nordic%20home%20kitchen%20style%2C%20artisanal%20ingredient%20preservation&width=450&height=450&seq=tempeh-pea-new-3&orientation=squarish"
          ]}
          imageLeft={true}
        />
      </div>
      
      <div style={{ backgroundColor: 'rgba(169,185,172,0.5)' }}>
        <TempehVariantSection
          title="TEMPEH AF BØNNER"
          englishTitle="BEAN TEMPEH"
          description="Vores tempeh på økologiske hestebønner (også kaldet favabønner) er den variant som smager kraftigst. Til at begynde med er den faktisk ret mild i smagen, med fine noter af hasselnød og champignon. Den modnes imidlertid hurtigt og bliver dermed kraftigere fermenteret i smagen. Mere garvede tempehentusiaster (som vi selv) er vilde med den. Den egner sig virkelig godt til asiatiske retter, samt andet hvor der skal være drøn på smagen. Egner sig også til at blive blandet i vegetariske postejer og saucer, hvor den giver en god bund. Konsistensen er blød og mør, men den kan også steges eller grilles super sprød på overfladen.\n\nUdmærker sig ved et højt indhold af protein, højt indhold af kostfibre, lavt indhold af mættede fedtsyrer og meget lavt indhold af salt."
          englishDescription="Our tempeh made from organic fava beans (also called broad beans) is the variant with the strongest flavor. Initially, it is actually quite mild in taste, with fine notes of hazelnut and mushroom. However, it matures quickly and thus becomes more intensely fermented in flavor. More seasoned tempeh enthusiasts (like ourselves) love it. It works really well in Asian dishes, as well as other dishes where you want bold flavors. It's also suitable for mixing into vegetarian pâtés and sauces, where it provides a good base. The consistency is soft and tender, but it can also be fried or grilled to a super crispy surface.\n\nIt stands out with a high protein content, high dietary fiber content, low saturated fat content and very low salt content."
          ingredients="Hestebønner* (99,5)%, vegansk mælkesyrekultur, rhizopus kultur. *Økologisk"
          englishIngredients="Fava beans* (99.5)%, vegan lactic acid culture, rhizopus culture. *Organic"
          nutrition={{
            energyKj: "617 Kj",
            energyKcal: "146 kcal",
            fat: "0,7 g",
            saturatedFat: "0,14 g",
            carbs: "20,6 g",
            sugars: "7,5 g",
            fiber: "5,1 g",
            protein: "16,9 g",
            salt: "0,009 g"
          }}
          images={[
            "https://readdy.ai/api/search-image?query=Artisanal%20fava%20bean%20tempeh%20slices%20on%20slate%20serving%20board%2C%20fermented%20broad%20bean%20protein%20with%20visible%20mycelium%20threads%2C%20natural%20rustic%20presentation%2C%20warm%20golden%20lighting%2C%20organic%20plant-based%20nutrition%2C%20Nordic%20sustainable%20cuisine%2C%20detailed%20texture%20photography&width=400&height=500&seq=tempeh-bean-new-1&orientation=portrait",
            "https://readdy.ai/api/search-image?query=Raw%20organic%20fava%20beans%20with%20shells%20scattered%20on%20linen%20cloth%2C%20natural%20broad%20bean%20ingredients%20for%20tempeh%20fermentation%2C%20earthy%20food%20styling%2C%20natural%20daylight%20photography%2C%20sustainable%20legume%20cultivation%2C%20Nordic%20organic%20farming%20aesthetic%2C%20wholesome%20ingredient%20showcase&width=500&height=375&seq=tempeh-bean-new-2&orientation=landscape",
            "https://readdy.ai/api/search-image?query=Peeled%20organic%20fava%20beans%20in%20wooden%20spoon%20over%20burlap%20sack%2C%20fresh%20broad%20beans%20ready%20for%20tempeh%20making%2C%20natural%20ingredient%20preparation%2C%20soft%20kitchen%20lighting%2C%20sustainable%20food%20processing%2C%20Nordic%20artisanal%20cooking%2C%20clean%20organic%20presentation&width=450&height=450&seq=tempeh-bean-new-3&orientation=squarish"
          ]}
          imageLeft={false}
        />
      </div>
      
      <div style={{ backgroundColor: 'rgba(169,185,172,0.25)' }}>
        <TestimonialSection />
      </div>
      
      <Footer />
    </div>
  );
}
