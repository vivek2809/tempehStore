'use client';

import { useState } from 'react';

export default function TempehBonnerTangDetail() {
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
                src="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/aba13426d6c9836b1cd6551ef77fb2d5.png"
                alt="Tempeh af Bønner + Tang"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img
                src="https://readdy.ai/api/search-image?query=Artisanal%20organic%20fava%20bean%20tempeh%20with%20sea%20lettuce%20pieces%20on%20rustic%20wooden%20surface%2C%20fermented%20plant-based%20protein%20food%2C%20earthy%20natural%20textures%2C%20warm%20ambient%20kitchen%20lighting%2C%20sustainable%20Nordic%20food%20styling%2C%20clean%20minimalist%20presentation&width=200&height=200&seq=tempeh-seaweed-detail-1&orientation=squarish"
                alt="Tempeh detail 1"
                className="w-full h-24 object-cover object-top rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src="https://readdy.ai/api/search-image?query=Fresh%20organic%20fava%20beans%20with%20dried%20sea%20lettuce%20strips%2C%20raw%20ingredients%20for%20tempeh%20fermentation%2C%20natural%20food%20photography%2C%20soft%20daylight%2C%20Nordic%20cuisine%20preparation%2C%20clean%20modern%20kitchen%20aesthetic&width=200&height=200&seq=tempeh-seaweed-detail-2&orientation=squarish"
                alt="Tempeh detail 2"
                className="w-full h-24 object-cover object-top rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src="https://readdy.ai/api/search-image?query=Sliced%20fermented%20tempeh%20with%20visible%20sea%20lettuce%20threads%20on%20ceramic%20plate%2C%20organic%20plant%20protein%20food%2C%20detailed%20macro%20photography%2C%20natural%20lighting%2C%20healthy%20sustainable%20meal%20preparation&width=200&height=200&seq=tempeh-seaweed-detail-3&orientation=squarish"
                alt="Tempeh detail 3"
                className="w-full h-24 object-cover object-top rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Tempeh af Bønner + Tang
              </h1>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                42,00 kr.
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <span className="text-sm text-gray-600">Guldmedalje Nordic Artisan Food Awards 2022</span>
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
                  Vores tempeh på økologiske hestebønner og havsalat er udviklet i samarbejde med virksomheden 'Dansk Tang', som høster tangen lokalt. Vi er samtidig naboer her i Anneberg Kulturpark, hvor vi har et skønt og inspirerende fødevareproduktionsfællesskab.
                </p>

                <p className="mb-4">
                  Havsalaten tilfører denne tempeh en ekstra dimension i smagen, uden at blive gennemtrængende. Det er vores nyeste variant, som med det samme er blevet rigtig populær.
                </p>

                <p className="mb-6">
                  Vandt guldmedalje og 'Best in Class' ved Nordic Artisan Food Awards 2022, hvilket vi naturligvis er meget stolte af.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">INGREDIENSER:</h4>
                  <p className="mb-4">Hestebønner* (99%), havsalat (1%), vegansk mælkesyrekultur, rhizopus kultur. *Økologisk</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">NÆRINGSINDHOLD PER 100G:</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-600">
                    <div>Energi: 588 KJ</div>
                    <div>Energi: 139 kcal</div>
                    <div>Fedt: 0,9 g</div>
                    <div>- heraf mættede fedtsyrer: 0,17 g</div>
                    <div>Kulhydrat: 22 g</div>
                    <div>- heraf sukkerarter: 7,9 g</div>
                    <div>Kostfiber: 5,3 g</div>
                    <div>Protein: 13,4 g</div>
                    <div>Salt: 0,026 g</div>
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