
'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/Header';

export default function BecomeRetailer() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    storeType: '',
    currentProducts: '',
    customerBase: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    en: {
      title: "BECOME A RETAIL PARTNER",
      description: "Join our growing network of premium retailers and bring authentic Nordic tempeh to your customers. We're looking for passionate partners who share our commitment to sustainable, high-quality foods.",
      benefits: {
        premium: {
          title: "Premium Products",
          desc: "Award-winning Nordic tempeh and artisanal condiments that customers love"
        },
        marketing: {
          title: "Marketing Support",
          desc: "Comprehensive training, promotional materials, and ongoing support"
        },
        sustainable: {
          title: "Sustainable Partnership", 
          desc: "Join the plant-based revolution with ethically produced, organic products"
        }
      },
      form: {
        title: "Partner Application",
        businessName: "Business Name *",
        contactName: "Contact Name *",
        email: "Email Address *",
        phone: "Phone Number",
        address: "Store Address *",
        storeType: "Store Type *",
        currentProducts: "Current Product Focus",
        customerBase: "Customer Base Size",
        message: "Additional Information",
        submit: "Submit Application",
        submitting: "Submitting Application..."
      },
      placeholders: {
        businessName: "Your store name",
        contactName: "Your full name",
        email: "your@email.com",
        phone: "+45 XX XX XX XX",
        address: "Full store address",
        currentProducts: "e.g., Organic foods, Plant-based products, Fermented foods",
        message: "Tell us more about your store and why you'd like to carry our products..."
      },
      storeTypes: {
        select: "Select store type",
        organic: "Organic Supermarket",
        health: "Health Food Store",
        specialty: "Specialty Foods",
        farmers: "Farmers Market",
        restaurant: "Restaurant/Café",
        other: "Other"
      },
      customerSizes: {
        select: "Select customer base size",
        small: "Small (< 100/day)",
        medium: "Medium (100-500/day)",
        large: "Large (500+/day)"
      },
      success: {
        title: "Application Submitted Successfully!",
        message: "Thank you for your interest in becoming a retail partner. We'll review your application and get back to you within 48 hours.",
        button: "Submit Another Application"
      }
    },
    da: {
      title: "BLIV DETAILHANDELSPARTNER",
      description: "Bliv en del af vores voksende netværk af premium forhandlere og bring ægte nordisk tempeh til dine kunder. Vi søger passionerede partnere, der deler vores engagement i bæredygtige fødevarer af høj kvalitet.",
      benefits: {
        premium: {
          title: "Premium Produkter",
          desc: "Prisvindende nordisk tempeh og håndværksmæssige condiments som kunderne elsker"
        },
        marketing: {
          title: "Markedsføringsstøtte",
          desc: "Omfattende træning, reklamematerialer og løbende support"
        },
        sustainable: {
          title: "Bæredygtigt Partnerskab",
          desc: "Bliv en del af den plantebaserede revolution med etisk producerede, økologiske produkter"
        }
      },
      form: {
        title: "Partneransøgning",
        businessName: "Firmanavn *",
        contactName: "Kontaktperson *",
        email: "Email Adresse *",
        phone: "Telefonnummer",
        address: "Butiks Adresse *",
        storeType: "Butikstype *",
        currentProducts: "Nuværende Produktfokus",
        customerBase: "Kundegrundlagsstørrelse",
        message: "Yderligere Information",
        submit: "Send Ansøgning",
        submitting: "Sender Ansøgning..."
      },
      placeholders: {
        businessName: "Dit butiksnavn",
        contactName: "Dit fulde navn",
        email: "din@email.dk",
        phone: "+45 XX XX XX XX",
        address: "Fuld butiksadresse",
        currentProducts: "f.eks., Økologiske fødevarer, Plantebaserede produkter, Fermenterede fødevarer",
        message: "Fortæl os mere om din butik og hvorfor du gerne vil føre vores produkter..."
      },
      storeTypes: {
        select: "Vælg butikstype",
        organic: "Økologisk Supermarked",
        health: "Helsekostbutik",
        specialty: "Specialbutik",
        farmers: "Bondemarkeder",
        restaurant: "Restaurant/Café",
        other: "Andet"
      },
      customerSizes: {
        select: "Vælg kundegrundlagsstørrelse",
        small: "Lille (< 100/dag)",
        medium: "Mellem (100-500/dag)",
        large: "Stor (500+/dag)"
      },
      success: {
        title: "Ansøgning Sendt Succesfuldt!",
        message: "Tak for din interesse i at blive detailhandelspartner. Vi gennemgår din ansøgning og vender tilbage til dig inden for 48 timer.",
        button: "Send Endnu En Ansøgning"
      }
    }
  };

  const text = content[language];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Successful%20business%20partnership%20handshake%20in%20modern%20organic%20food%20store%2C%20professional%20retail%20collaboration%2C%20Nordic%20sustainable%20business%20environment%2C%20partnership%20agreement%20celebration%2C%20eco-friendly%20retail%20success%2C%20modern%20commercial%20relationship%20building&width=1200&height=800&seq=partnership-success&orientation=landscape')`
        }}
      >
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-12">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-check-line text-white text-3xl w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h2 className="text-3xl font-semibold mb-4">
              {text.success.title}
            </h2>
            <p className="text-xl mb-6">
              {text.success.message}
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  businessName: '',
                  contactName: '',
                  email: '',
                  phone: '',
                  address: '',
                  storeType: '',
                  currentProducts: '',
                  customerBase: '',
                  message: ''
                });
              }}
              className="bg-white text-gray-800 px-8 py-3 font-medium hover:bg-gray-100 transition-all duration-300 whitespace-nowrap"
            >
              {text.success.button}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Modern%20business%20meeting%20in%20sustainable%20food%20industry%20office%2C%20professional%20partnership%20discussion%2C%20Nordic%20commercial%20environment%2C%20organic%20food%20retail%20business%20collaboration%2C%20eco-friendly%20partnership%20development%2C%20sustainable%20business%20growth%20atmosphere&width=1200&height=800&seq=become-retailer-bg&orientation=landscape')`
      }}
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-light mb-6">{text.title}</h2>
            <div className="w-24 h-1 bg-white mb-8"></div>
            <p className="text-xl leading-relaxed mb-8">
              {text.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-award-line text-white w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{text.benefits.premium.title}</h3>
                  <p className="text-gray-200">
                    {text.benefits.premium.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-team-line text-white w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{text.benefits.marketing.title}</h3>
                  <p className="text-gray-200">
                    {text.benefits.marketing.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-leaf-line text-white w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{text.benefits.sustainable.title}</h3>
                  <p className="text-gray-200">
                    {text.benefits.sustainable.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-lg p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">{text.form.title}</h3>

            <form onSubmit={handleSubmit} className="space-y-4" id="retailer-application">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {text.form.businessName}
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
                    placeholder={text.placeholders.businessName}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {text.form.contactName}
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
                    placeholder={text.placeholders.contactName}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {text.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
                    placeholder={text.placeholders.email}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {text.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
                    placeholder={text.placeholders.phone}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {text.form.address}
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
                  placeholder={text.placeholders.address}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {text.form.storeType}
                </label>
                <select
                  name="storeType"
                  required
                  value={formData.storeType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm pr-8"
                >
                  <option value="">{text.storeTypes.select}</option>
                  <option value="organic-supermarket">{text.storeTypes.organic}</option>
                  <option value="health-food">{text.storeTypes.health}</option>
                  <option value="specialty-foods">{text.storeTypes.specialty}</option>
                  <option value="farmers-market">{text.storeTypes.farmers}</option>
                  <option value="restaurant">{text.storeTypes.restaurant}</option>
                  <option value="other">{text.storeTypes.other}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {text.form.currentProducts}
                </label>
                <input
                  type="text"
                  name="currentProducts"
                  value={formData.currentProducts}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
                  placeholder={text.placeholders.currentProducts}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {text.form.customerBase}
                </label>
                <select
                  name="customerBase"
                  value={formData.customerBase}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm pr-8"
                >
                  <option value="">{text.customerSizes.select}</option>
                  <option value="small">{text.customerSizes.small}</option>
                  <option value="medium">{text.customerSizes.medium}</option>
                  <option value="large">{text.customerSizes.large}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {text.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  maxLength={500}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm resize-none"
                  placeholder={text.placeholders.message}
                ></textarea>
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-800 text-white py-3 px-6 font-medium hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2 w-4 h-4 flex items-center justify-center"></i>
                    {text.form.submitting}
                  </span>
                ) : (
                  text.form.submit
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
