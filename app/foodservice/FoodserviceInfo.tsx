'use client';

export default function FoodserviceInfo() {
  const benefits = [
    {
      icon: 'ri-leaf-line',
      title: 'Økologisk & Lokalt',
      description: 'Alle vores tempeh er lavet af økologiske danske råvarer fra lokale leverandører i Odsherred'
    },
    {
      icon: 'ri-time-line',
      title: 'Frisk Produktion',
      description: 'Vi producerer løbende og leverer frisk tempeh direkte fra vores produktion i Anneberg'
    },
    {
      icon: 'ri-restaurant-line',
      title: 'Professionel Service',
      description: 'Specialiseret service til køkkener med fleksible leveringsaftaler og støtte til menuudvikling'
    },
    {
      icon: 'ri-award-line',
      title: 'Prisbelønnet Kvalitet',
      description: 'Vores tempeh har vundet guldmedalje ved Nordic Artisan Food Awards 2022'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-8">
            HVORFOR VÆLGE VORES TEMPEH TIL DIT KØKKEN?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Vi samarbejder med nogle af Danmarks mest innovative køkkener og leverer tempeh, 
            der åbner nye muligheder for plantebased gastronomi med autentisk nordisk identitet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-lg mb-6">
                <i className={`${benefit.icon} text-xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-12 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              SPECIALTILPASSEDE LØSNINGER
            </h3>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Vi forstår, at hvert køkken har unikke behov. Derfor tilbyder vi fleksible 
                leveringsaftaler, der passer til jeres produktionsrytme og menuplanlægning.
              </p>
              <p>
                Vores team kan også hjælpe med menuudvikling og inspiration til, hvordan 
                tempeh bedst integreres i nordiske retter og sæsonbetonede menuer.
              </p>
              <div className="pt-6">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center mr-3">
                      <i className="ri-truck-line text-gray-600"></i>
                    </div>
                    <span className="font-semibold">Ugentlige leveringer</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center mr-3">
                      <i className="ri-shield-check-line text-gray-600"></i>
                    </div>
                    <span className="font-semibold">HACCP certificeret</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center mr-3">
                      <i className="ri-phone-line text-gray-600"></i>
                    </div>
                    <span className="font-semibold">Dedikeret support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}