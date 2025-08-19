'use client';

import { useState } from 'react';

export default function TempehBonnerDetail() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/e2525609e207ef63898bab187160ee4c.png"
                alt="Tempeh af Bønner"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img
                src="https://readdy.ai/api/search-image?query=Artisanal%20fava%20bean%20tempeh%20slices%20on%20slate%20serving%20board%2C%20fermented%20broad%20bean%20protein%20with%20visible%20mycelium%20threads%2C%20natural%20rustic%20presentation%2C%20warm%20golden%20lighting%2C%20organic%20plant-based%20nutrition&width=200&height=200&seq=tempeh-bean-detail-1&orientation=squarish"
                alt="Tempeh detail 1"
                className="w-full h-24 object-cover object-top rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src="https://readdy.ai/api/search-image?query=Raw%20organic%20fava%20beans%20with%20shells%20scattered%20on%20linen%20cloth%2C%20natural%20broad%20bean%20ingredients%20for%20tempeh%20fermentation%2C%20earthy%20food%20styling%2C%20natural%20daylight%20photography%2C%20sustainable%20legume%20cultivation&width=200&height=200&seq=tempeh-bean-detail-2&orientation=squarish"
                alt="Tempeh detail 2"
                className="w-full h-24 object-cover object-top rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src="https://readdy.ai/api/search-image?query=Peeled%20organic%20fava%20beans%20in%20wooden%20spoon%20over%20burlap%20sack%2C%20fresh%20broad%20beans%20ready%20for%20tempeh%20making%2C%20natural%20ingredient%20preparation%2C%20soft%20kitchen%20lighting%2C%20sustainable%20food%20processing&width=200&height=200&seq=tempeh-bean-detail-3&orientation=squarish"
                alt="Tempeh detail 3"
                className="w-full h-24 object-cover object-top rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Tempeh af Bønner
              </h1>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                42,00 kr.
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Kraftig smag
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Perfekt til asiatiske retter
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Antal
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={decrementQuantity}
                      className="p-2 text-gray-600 hover:text-gray-800 disabled:text-gray-300 disabled:cursor-not-allowed"
                      disabled={quantity <= 1}
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-subtract-line"></i>
                      </div>
                    </button>
                    <span className="px-4 py-2 text-center min-w-[60px]">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="p-2 text-gray-600 hover:text-gray-800"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-add-line"></i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors whitespace-nowrap cursor-pointer">
                  KØB
                </button>
                <button className="w-full bg-gray-100 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer">
                  Køb nu
                </button>
              </div>
            </div>

            {/* Product Description */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">PRODUKTINFO:</h3>
                
                <p className="mb-4">
                  Vores tempeh på økologiske hestebønner (også kaldet favabønner) er den variant som smager kraftigst. Til at begynde med er den faktisk ret mild i smagen, med fine noter af hasselnød og champignon. Den modnes imidlertid hurtigt og bliver dermed kraftigere fermenteret i smagen.
                </p>

                <p className="mb-4">
                  Mere garvede tempehentusiaster (som vi selv) er vilde med den. Den egner sig virkelig godt til asiatiske retter, samt andet hvor der skal være drøn på smagen. Egner sig også til at blive blandet i vegetariske postejer og saucer, hvor den giver en god bund.
                </p>

                <p className="mb-6">
                  Konsistensen er blød og mør, men den kan også steges eller grilles super sprød på overfladen. Udmærker sig ved et højt indhold af protein, højt indhold af kostfibre, lavt indhold af mættede fedtsyrer og meget lavt indhold af salt.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">INGREDIENSER:</h4>
                  <p className="mb-4">Hestebønner* (99,5)%, vegansk mælkesyrekultur, rhizopus kultur. *Økologisk</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">NÆRINGSINDHOLD PER 100G:</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-600">
                    <div>Energi: 617 KJ</div>
                    <div>Energi: 146 kcal</div>
                    <div>Fedt: 0,7 g</div>
                    <div>- heraf mættede fedtsyrer: 0,14 g</div>
                    <div>Kulhydrat: 20,6 g</div>
                    <div>- heraf sukkerarter: 7,5 g</div>
                    <div>Kostfiber: 5,1 g</div>
                    <div>Protein: 16,9 g</div>
                    <div>Salt: 0,009 g</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">OBS:</p>
                  <p>Produktet sendes i køletransport til din adresse. Hold køligt efter modtagelse.</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border-t pt-6">
              <p className="text-gray-600 mb-4">
                Har du spørgsmål til produktet eller bestilling?
              </p>
              <a 
                href="mailto:bestilling@contempehrary.com"
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-mail-line"></i>
                </div>
                Kontakt os for hjælp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}