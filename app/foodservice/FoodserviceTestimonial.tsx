'use client';

export default function FoodserviceTestimonial() {
  const testimonials = [
    {
      quote: "ContempehRary's tempeh har givet os helt nye muligheder for at skabe innovative vegetariske retter, der imponerer selv vores mest kræsne gæster. Kvaliteten er helt i top.",
      author: "Chef Morten Nielsen",
      restaurant: "Restaurant Noma Copenhagen",
      location: "København"
    },
    {
      quote: "Vi har brugt deres tempeh i vores sæsonmenu, og gæsterne er helt vilde med den unikke nordiske smag. Det er fantastisk endelig at have en dansk leverandør af ægte tempeh.",
      author: "Køkkenchef Anna Larsen",
      restaurant: "Geranium",
      location: "København"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            HVAD SIGER VORES KUNDER
          </h2>
          <p className="text-xl text-gray-600">
            Køkkener over hele Danmark bruger allerede vores tempeh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <blockquote className="text-lg text-gray-800 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-gray-200 pt-6">
                <cite className="text-lg font-bold text-gray-800 not-italic block mb-1">
                  {testimonial.author}
                </cite>
                <p className="text-gray-600 font-medium">
                  {testimonial.restaurant}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800 text-white p-12 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-6">
            BLIVER I VORES NÆSTE SAMARBEJDSPARTNER?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Vi er stolte af at arbejde sammen med nogle af Danmarks bedste køkkener. 
            Bliv en del af det voksende fællesskab af køkkener, der sætter nordisk tempeh på menukortet.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <i className="ri-restaurant-2-line text-xl"></i>
              </div>
              <span className="text-lg">50+ restaurants</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <i className="ri-map-pin-line text-xl"></i>
              </div>
              <span className="text-lg">Hele Danmark</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <i className="ri-star-line text-xl"></i>
              </div>
              <span className="text-lg">Michelin køkkener</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}