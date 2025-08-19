'use client';

import { useState } from 'react';

export default function TempehProvepakkeDetail() {
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
                src="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/605bad145e5547bd1f274bc5f9c3346b.png"
                alt="Tempeh Prøvepakke"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img
                src="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/aba13426d6c9836b1cd6551ef77fb2d5.png"
                alt="Tempeh af Bønner + Tang"
                className="w-full h-24 object-cover object-top rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/698586ac09a26b0be8c0b394eb20ae73.png"
                alt="Tempeh af Ærter"
                className="w-full h-24 object-cover object-top rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src="https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/e2525609e207ef63898bab187160ee4c.png"
                alt="Tempeh af Bønner"
                className="w-full h-24 object-cover object-top rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Tempeh Prøvepakke
              </h1>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                110,00 kr.
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Alle 3 varianter
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Spar 16 kr
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Normalpris: 126,00 kr - Du sparer 16,00 kr
              </p>
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
                  Vores prøvepakke indeholder alle tre tempeh-varianter, så du kan smage dig frem til din favorit eller finde ud af, hvilke der passer bedst til forskellige retter og anledninger.
                </p>

                <p className="mb-6">
                  Pakken indeholder én pakke af hver variant og giver dig mulighed for at udforske de forskellige smagsoplevelser fra mild og sød ærtetempeh til kraftig bønnetempeh med havets smag.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">INDEHOLDER:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>1x Tempeh af Bønner + Tang</strong><br />
                        Guldmedalje-vinder med havsalat - unik smag og tekstur
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>1x Tempeh af Ærter</strong><br />
                        Mild og sød - perfekt begynder-tempeh til alle retter
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>1x Tempeh af Bønner</strong><br />
                        Kraftig smag - ideel til asiatiske retter og saucer
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">FÆLLES EGENSKABER:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Højt proteinindhold</li>
                    <li>• Højt indhold af kostfibre</li>
                    <li>• Lavt indhold af mættede fedtsyrer</li>
                    <li>• Meget lavt saltindhold</li>
                    <li>• 100% økologiske ingredienser</li>
                    <li>• Danske råvarer</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">OBS:</p>
                  <p>Alle produkter sendes i køletransport til din adresse. Hold køligt efter modtagelse.</p>
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