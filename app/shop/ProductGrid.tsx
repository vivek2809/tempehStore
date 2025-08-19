
'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/Header';

interface Product {
  id: number;
  name: { en: string; da: string };
  price: string;
  image: string;
  description: { en: string; da: string };
  inStock: boolean;
  slug?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: {
      en: "Bean + Seaweed Tempeh",
      da: "Tempeh af Bønner + Tang"
    },
    price: "42,00 kr",
    image: "https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/aba13426d6c9836b1cd6551ef77fb2d5.png",
    description: {
      en: "Organic tempeh with fava beans and sea lettuce. Won gold medal at Nordic Artisan Food Awards 2022.",
      da: "Økologisk tempeh med hestebønner og havsalat. Vandt guldmedalje ved Nordic Artisan Food Awards 2022."
    },
    inStock: true,
    slug: "tempeh-bonner-tang"
  },
  {
    id: 2,
    name: {
      en: "Pea Tempeh",
      da: "Tempeh af Ærter"
    },
    price: "42,00 kr", 
    image: "https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/698586ac09a26b0be8c0b394eb20ae73.png",
    description: {
      en: "Mild and sweet tempeh made from organic yellow and green split peas. Perfect for beginners.",
      da: "Mild og sød tempeh lavet af økologiske gule og grønne flækærter. Perfekt for begyndere."
    },
    inStock: true,
    slug: "tempeh-aerter"
  },
  {
    id: 3,
    name: {
      en: "Bean Tempeh",
      da: "Tempeh af Bønner"
    },
    price: "42,00 kr",
    image: "https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/e2525609e207ef63898bab187160ee4c.png",
    description: {
      en: "Strong tempeh made from organic fava beans. Perfect for Asian dishes and spiced sauces.",
      da: "Kraftig tempeh af økologiske hestebønner. Perfekt til asiatiske retter og krydrede saucer."
    },
    inStock: true,
    slug: "tempeh-bonner"
  },
  {
    id: 4,
    name: {
      en: "Tempeh Sample Pack",
      da: "Tempeh Prøvepakke"
    },
    price: "110,00 kr",
    image: "https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/605bad145e5547bd1f274bc5f9c3346b.png",
    description: {
      en: "Try all three variants. Contains one pack of each tempeh type.",
      da: "Prøv alle tre varianter. Indeholder én pakke af hver tempeh type."
    },
    inStock: true,
    slug: "tempeh-provepakke"
  },
  {
    id: 5,
    name: {
      en: "Bean Sauce, 200 ml - Barrel Aged",
      da: "Bønnesauce, 200 ml - Fadlagret"
    },
    price: "105,00 kr",
    image: "https://impro.usercontent.one/appid/oneComShop/domain/contempehrary.com/media/contempehrary.com/webshopmedia/b%C3%B8nnesauce-200ml-packshot-contempehrary-webshop-1706973923857.jpg?&withoutEnlargement&resize=960+9999&webp&quality=85",
    description: {
      en: "Nordic counterpart to soy sauce. Fermented from organic fava beans and barrel aged for 12 months.",
      da: "Nordisk pendant til sojasauce. Fermenteret af økologiske hestebønner og fadlagret i 12 måneder."
    },
    inStock: true,
    slug: "barrel-aged-sauce"
  }
];

export default function ProductGrid() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "BUY TEMPEH HERE IN OUR ONLINE SHOP",
      searchPlaceholder: "Search products...",
      seeDetails: "SEE DETAILS",
      buy: "BUY",
      outOfStock: "OUT OF STOCK",
      freeShipping: "Free shipping on orders over 450 kr",
      helpQuestion: "Do you have questions about our products or ordering?",
      contactHelp: "Contact us for help"
    },
    da: {
      title: "KØB TEMPEH HER I VORES ONLINE BUTIK",
      searchPlaceholder: "Søg produkter...",
      seeDetails: "SE DETALJER",
      buy: "KØB",
      outOfStock: "UDSOLGT",
      freeShipping: "Gratis fragt ved køb over 450 kr",
      helpQuestion: "Har du spørgsmål til vores produkter eller bestilling?",
      contactHelp: "Kontakt os for hjælp"
    }
  };

  const text = content[language];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
              {text.title}
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder={text.searchPlaceholder}
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                <i className="ri-search-line text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {product.slug ? (
                <Link href={`/shop/${product.slug}`}>
                  <div className="aspect-square overflow-hidden cursor-pointer">
                    <img
                      src={product.image}
                      alt={product.name[language]}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </Link>
              ) : (
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name[language]}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}
              <div className="p-6">
                {product.slug ? (
                  <Link href={`/shop/${product.slug}`}>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 cursor-pointer hover:text-gray-600 transition-colors">
                      {product.name[language]}
                    </h3>
                  </Link>
                ) : (
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {product.name[language]}
                  </h3>
                )}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description[language]}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">
                    {product.price}
                  </span>
                  {product.slug ? (
                    <Link 
                      href={`/shop/${product.slug}`}
                      className={`px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                        product.inStock 
                          ? 'bg-gray-800 text-white hover:bg-gray-700' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? text.seeDetails : text.outOfStock}
                    </Link>
                  ) : (
                    <button 
                      className={`px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                        product.inStock 
                          ? 'bg-gray-800 text-white hover:bg-gray-700' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? text.buy : text.outOfStock}
                    </button>
                  )}
                </div>
                {product.inStock && (
                  <p className="text-sm text-gray-500 mt-2">
                    {text.freeShipping}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            {text.helpQuestion}
          </p>
          <a 
            href="mailto:bestilling@contempehrary.com"
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
          >
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              <i className="ri-mail-line"></i>
            </div>
            {text.contactHelp}
          </a>
        </div>
      </div>
    </section>
  );
}
