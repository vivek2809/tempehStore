'use client';

export default function RetailerMap() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
            STORE LOCATOR MAP
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our retail partners across Scandinavia. Click on any location to get directions and store details.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.2847654!2d12.5683371!3d55.6760968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533c5c803d23%3A0x4dd7edde69467b8!2sN%C3%B8rrebrogade%2045%2C%202200%20K%C3%B8benhavn%20N%2C%20Denmark!5e0!3m2!1sen!2sdk!4v1234567890123!5m2!1sen!2sdk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Locations Map"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-map-pin-line text-white w-6 h-6 flex items-center justify-center"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">50+ Locations</h3>
            <p className="text-gray-600">Across Denmark, Sweden, and Norway</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-truck-line text-white w-6 h-6 flex items-center justify-center"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Fresh Delivery</h3>
            <p className="text-gray-600">Weekly deliveries to ensure freshness</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-customer-service-line text-white w-6 h-6 flex items-center justify-center"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Support</h3>
            <p className="text-gray-600">Trained staff to help with product selection</p>
          </div>
        </div>
      </div>
    </section>
  );
}