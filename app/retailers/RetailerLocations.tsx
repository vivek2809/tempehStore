
'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/Header';

const retailers = [
  {
    id: 1,
    name: "Wholefoods Market Copenhagen",
    type: "Organic Supermarket",
    address: "Nørrebrogade 45, 2200 København N",
    phone: "+45 35 12 34 56",
    email: "copenhagen@wholefoods.dk",
    hours: "Mon-Sat: 8:00-22:00, Sun: 10:00-20:00",
    products: ["Nordic Tempeh", "Condiments"],
    image: "https://readdy.ai/api/search-image?query=Modern%20organic%20supermarket%20storefront%20with%20large%20glass%20windows%2C%20sustainable%20food%20retail%20store%20exterior%2C%20Nordic%20architecture%20design%2C%20natural%20wood%20and%20glass%20facade%2C%20eco-friendly%20grocery%20store%20entrance%2C%20clean%20minimalist%20retail%20design%2C%20healthy%20lifestyle%20shopping%20destination&width=400&height=300&seq=retailer-1&orientation=landscape"
  },
  {
    id: 2,
    name: "Naturkost Aarhus",
    type: "Health Food Store",
    address: "Søndergade 23, 8000 Aarhus C",
    phone: "+45 86 78 90 12",
    email: "info@naturkost-aarhus.dk",
    hours: "Mon-Fri: 9:00-19:00, Sat: 9:00-17:00",
    products: ["All Tempeh Variants", "Barrel Aged Sauce"],
    image: "https://readdy.ai/api/search-image?query=Cozy%20health%20food%20store%20interior%20with%20wooden%20shelves%20filled%20with%20organic%20products%2C%20natural%20lighting%2C%20fermented%20foods%20section%2C%20sustainable%20packaging%2C%20Nordic%20retail%20atmosphere%2C%20eco-conscious%20shopping%20environment%2C%20plant-based%20nutrition%20display&width=400&height=300&seq=retailer-2&orientation=landscape"
  },
  {
    id: 3,
    name: "Økologisk Marked Odense",
    type: "Organic Market",
    address: "Vestergade 67, 5000 Odense C",
    phone: "+45 66 45 78 90",
    email: "marked@okologisk-odense.dk",
    hours: "Tue-Fri: 10:00-18:00, Sat: 8:00-16:00",
    products: ["Tempeh Selection", "Specialty Condiments"],
    image: "https://readdy.ai/api/search-image?query=Traditional%20organic%20farmers%20market%20stall%20with%20fresh%20produce%20displays%2C%20wooden%20crates%20filled%20with%20sustainable%20food%20products%2C%20Nordic%20market%20atmosphere%2C%20local%20vendors%20selling%20fermented%20foods%2C%20eco-friendly%20retail%20setup%2C%20community%20food%20shopping%20experience&width=400&height=300&seq=retailer-3&orientation=landscape"
  },
  {
    id: 4,
    name: "Greens & Grains Malmö",
    type: "Plant-Based Store",
    address: "Davidshallsgatan 15, 211 45 Malmö",
    phone: "+46 40 123 456",
    email: "hello@greensgrains.se",
    hours: "Mon-Fri: 10:00-19:00, Sat: 10:00-17:00",
    products: ["Full Product Range"],
    image: "https://readdy.ai/api/search-image?query=Modern%20plant-based%20specialty%20store%20with%20contemporary%20design%2C%20vegan%20and%20vegetarian%20products%20on%20display%2C%20sustainable%20retail%20interior%2C%20green%20plant%20decorations%2C%20eco-friendly%20packaging%2C%20Nordic%20minimalist%20store%20design%2C%20healthy%20lifestyle%20shopping%20destination&width=400&height=300&seq=retailer-4&orientation=landscape"
  },
  {
    id: 5,
    name: "Naturkompaniet Stockholm",
    type: "Natural Foods",
    address: "Upplandsgatan 32, 113 28 Stockholm",
    phone: "+46 8 567 890",
    email: "stockholm@naturkompaniet.se",
    hours: "Mon-Fri: 9:00-20:00, Sat-Sun: 10:00-18:00",
    products: ["Nordic Tempeh", "Artisanal Condiments"],
    image: "https://readdy.ai/api/search-image?query=Upscale%20natural%20foods%20store%20interior%20with%20premium%20organic%20products%2C%20wooden%20fixtures%20and%20modern%20lighting%2C%20Swedish%20retail%20design%2C%20fermented%20foods%20specialty%20section%2C%20sustainable%20packaging%20display%2C%20Nordic%20health%20food%20shopping%20environment&width=400&height=300&seq=retailer-5&orientation=landscape"
  },
  {
    id: 6,
    name: "Helios Helsekost Oslo",
    type: "Health Food Chain",
    address: "Karl Johans gate 12, 0154 Oslo",
    phone: "+47 22 345 678",
    email: "oslo@helios.no",
    hours: "Mon-Fri: 8:30-20:00, Sat: 9:00-18:00",
    products: ["Complete Tempeh Line"],
    image: "https://readdy.ai/api/search-image?query=Scandinavian%20health%20food%20store%20with%20bright%20interior%20design%2C%20organic%20product%20displays%20on%20wooden%20shelves%2C%20Norwegian%20retail%20atmosphere%2C%20sustainable%20food%20shopping%2C%20plant-based%20nutrition%20section%2C%20modern%20Nordic%20store%20layout%2C%20eco-conscious%20consumer%20destination&width=400&height=300&seq=retailer-6&orientation=landscape"
  }
];

export default function RetailerLocations() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All Stores");
  const [searchTerm, setSearchTerm] = useState("");

  const content = {
    en: {
      title: "STORE LOCATIONS",
      description: "Find our products at these carefully selected retailers across Scandinavia. Each location offers our full range of Nordic tempeh and artisanal condiments.",
      searchPlaceholder: "Search by store name or city...",
      categories: ["All Stores", "Organic Supermarket", "Health Food Store", "Organic Market", "Plant-Based Store", "Natural Foods", "Health Food Chain"],
      availableProducts: "Available Products:",
      getDirections: "Get Directions",
      contactStore: "Contact Store",
      noStoresTitle: "No stores found",
      noStoresDesc: "Try adjusting your search or filter criteria"
    },
    da: {
      title: "BUTIKSLOKATIONER",
      description: "Find vores produkter hos disse nøje udvalgte forhandlere på tværs af Skandinavien. Hver lokation tilbyder vores fulde sortiment af nordisk tempeh og håndværksmæssige condiments.",
      searchPlaceholder: "Søg efter butiksnavn eller by...",
      categories: ["Alle Butikker", "Økologisk Supermarked", "Helsekostbutik", "Økologisk Marked", "Plantebaseret Butik", "Naturkost", "Helsekostkæde"],
      availableProducts: "Tilgængelige Produkter:",
      getDirections: "Få Vejledning",
      contactStore: "Kontakt Butik",
      noStoresTitle: "Ingen butikker fundet",
      noStoresDesc: "Prøv at justere dine søge- eller filterkriterier"
    }
  };

  const text = content[language];
  const categories = text.categories;

  const filteredRetailers = retailers.filter(retailer => {
    const matchesCategory = selectedCategory === categories[0] || retailer.type === selectedCategory;
    const matchesSearch = retailer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         retailer.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
            {text.title}
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {text.description}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            <div className="relative w-full max-w-md">
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
              <input
                type="text"
                placeholder={text.searchPlaceholder}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Retailers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRetailers.map((retailer) => (
            <div key={retailer.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={retailer.image}
                  alt={retailer.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {retailer.name}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {retailer.type}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center mt-1 mr-3 text-gray-500"></i>
                    <span className="text-sm">{retailer.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <i className="ri-phone-line w-4 h-4 flex items-center justify-center mr-3 text-gray-500"></i>
                    <a href={`tel:${retailer.phone}`} className="text-sm hover:text-gray-800 transition-colors">
                      {retailer.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-3 text-gray-500"></i>
                    <span className="text-sm">{retailer.hours}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">{text.availableProducts}</h4>
                  <div className="flex flex-wrap gap-2">
                    {retailer.products.map((product, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300 text-sm font-medium whitespace-nowrap">
                    {text.getDirections}
                  </button>
                  <a
                    href={`mailto:${retailer.email}`}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors duration-300 text-sm font-medium text-center whitespace-nowrap"
                  >
                    {text.contactStore}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRetailers.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-search-line w-12 h-12 flex items-center justify-center text-gray-400 mx-auto mb-4 text-5xl"></i>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">{text.noStoresTitle}</h3>
            <p className="text-gray-500">{text.noStoresDesc}</p>
          </div>
        )}
      </div>
    </section>
  );
}
