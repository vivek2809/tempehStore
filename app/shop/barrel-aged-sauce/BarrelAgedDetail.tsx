'use client';

import { useState } from 'react';

export default function BarrelAgedDetail() {
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
                src="https://impro.usercontent.one/appid/oneComShop/domain/contempehrary.com/media/contempehrary.com/webshopmedia/b%C3%B8nnesauce-200ml-packshot-contempehrary-webshop-1706973923857.jpg?&withoutEnlargement&resize=960+9999&webp&quality=85"
                alt="Bønnesauce, 200 ml - Fadlagret"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Bønnesauce, 200 ml - Fadlagret
              </h1>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                105,00 kr.
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
                  En nordisk pendant til tamari, sojasauce, ketjap asin eller shoyu… En plantebaseret garum... En fermenteret hestebønnesauce… Det er svært at afgøre præcis hvordan man skal beskrive dette produkt, fordi smagen og anvendelsen minder om de traditionelle asiatiske soja-baserede saucer, men samtidig er den noget helt nyt. Fremstillingsmetoden er også nogenlunde den samme, men så alligevel overhovedet ikke. Vi benytter os af oldgamle fermenteringsmetoder og viden, men vi gør det på vores helt egen måde og styrer den med ny teknologi.
                </p>

                <p className="mb-4">
                  Denne sauce skiller sig ud fra de ovennævnte asiatiske saucer ved ikke at indeholde hverken soja eller hvede. Den er baseret på fermenterede økologiske danske hestebønner, samt vand og salt. Simpelthen. Det er ren og skær natur, produceret i Danmark fra start til slut, fermenteret efter alle kunstens regler, fadlagret i 12 måneder - og resultatet er en virkelig smagfuld sauce, som har mange flere noter og nuancer end den sædvanlige sojasauce som du finder i handlen.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">OBS:</p>
                  <p>Vi sender saucen til din nærmeste GLS pakkeshop (med mindre at du samtidig køber tempeh, for så bliver det sendt samlet til din dør, i en termoboks).</p>
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