'use client';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  applications: string[];
  shelfLife: string;
  packaging: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Tempeh af Bønner + Tang",
    description: "Vores signaturprodukt med kompleks smag af umami og hav. Perfekt til moderne nordisk gastronomi.",
    image: "https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/aba13426d6c9836b1cd6551ef77fb2d5.png",
    applications: ["Grillretter", "Marinader", "Asiatisk fusion", "Tartar alternativ"],
    shelfLife: "14 dage køleskab",
    packaging: "200g vakuumpakket"
  },
  {
    id: 2,
    name: "Tempeh af Ærter", 
    description: "Mild og sød profil, der appellerer til alle gæster. Ideel som introduktion til tempeh.",
    image: "https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/698586ac09a26b0be8c0b394eb20ae73.png",
    applications: ["Salater", "Supper", "Brød og smørrebrød", "Børnemenuer"],
    shelfLife: "14 dage køleskab",
    packaging: "200g vakuumpakket"
  },
  {
    id: 3,
    name: "Tempeh af Bønner",
    description: "Kraftig og jordnær smag med høj proteinindhold. Perfekt til kræftige hovedretter.",
    image: "https://static.readdy.ai/image/1797ed9bec9e72f1ec2d5c1f498bc958/e2525609e207ef63898bab187160ee4c.png",
    applications: ["Burgere", "Wok-retter", "Ragout", "Protein i bowls"],
    shelfLife: "14 dage køleskab", 
    packaging: "200g vakuumpakket"
  }
];

export default function FoodserviceProducts() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-8">
            VORES TEMPEH SORTIMENT
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tre forskellige tempeh typer, hver med sin unikke smagsprofil og anvendelsesmuligheder. 
            Alle produceret med samme høje kvalitet og opmærksomhed på detaljer.
          </p>
        </div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`bg-white rounded-lg overflow-hidden shadow-sm ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex`}
            >
              <div className="md:w-1/2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 md:h-full object-cover object-top"
                />
              </div>
              
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {product.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">ANVENDELSE I KØKKENET:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, appIndex) => (
                        <span 
                          key={appIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-800">Holdbarhed: </span>
                      <span className="text-gray-600">{product.shelfLife}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Emballage: </span>
                      <span className="text-gray-600">{product.packaging}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-12 rounded-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            KLAR TIL AT KOMME I GANG?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Kontakt os for at diskutere priser, leveringsaftaler og hvordan vores tempeh 
            kan berige jeres menu med autentisk nordisk smag.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a 
              href="mailto:foodservice@contempehrary.com"
              className="inline-flex items-center px-8 py-4 bg-gray-800 text-white text-lg font-semibold rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <i className="ri-mail-line text-xl"></i>
              </div>
              Send forespørgsel
            </a>
            
            <a 
              href="tel:+4560703721"
              className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-800 text-lg font-semibold rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <i className="ri-phone-line text-xl"></i>
              </div>
              Ring direkte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}