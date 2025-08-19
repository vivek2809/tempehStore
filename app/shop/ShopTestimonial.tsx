'use client';

export default function ShopTestimonial() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <blockquote className="text-2xl text-gray-800 leading-relaxed mb-8 italic">
          "Vi har ved vores bestilling af en sending tempeh oplevet en helt fantastisk kundebetjening 
          - vi glæder os til dette for os nye smagsunivers."
        </blockquote>
        
        <div className="text-center">
          <cite className="text-xl font-bold text-gray-800 not-italic">
            Jens, Vig
          </cite>
          <p className="text-gray-600 mt-2">
            - kunde her i online butikken :-)
          </p>
        </div>
      </div>
    </section>
  );
}