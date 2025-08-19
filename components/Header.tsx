'use client';

import Link from 'next/link';
import { useState, createContext, useContext } from 'react';

const LanguageContext = createContext({
  language: 'en' as 'en' | 'da',
  setLanguage: (lang: 'en' | 'da') => {}
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'da'>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const message = {
    en: 'Minimum order products free 50€',
    da: 'Minimum bestilling produkter gratis 50€'
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'da' : 'en');
  };

  const navItems = {
    en: {
      tempeh: 'NORDIC TEMPEH',
      condiments: 'CONDIMENTS', 
      about: 'ABOUT',
      foodservice: 'FOODSERVICE',
      recipes: 'RECIPES',
      faq: 'FAQ-TEMPEH',
      shop: 'ESHOP',
      findUs: 'FIND US',
      reviews: 'REVIEWS',
      knowledge: 'KNOWLEDGE'
    },
    da: {
      tempeh: 'NORDISK TEMPEH',
      condiments: 'CONDIMENTS',
      about: 'OM OS', 
      foodservice: 'FOODSERVICE',
      recipes: 'OPSKRIFTER',
      faq: 'FAQ-TEMPEH',
      shop: 'ESHOP',
      findUs: 'FIND OS',
      reviews: 'OMTALE',
      knowledge: 'VIDEN'
    }
  };

  return (
    <>
      {/* Top Bar with Scrolling Ticker */}
      <div style={{ backgroundColor: 'rgba(169,185,172,0.8)' }} className="text-gray-800 text-sm py-2 overflow-hidden w-full">
        <div className="w-full">
          <div className="flex items-center px-4 sm:px-8 relative">
            {/* Empty left space */}
            <div className="w-0"></div>
            
            {/* Scrolling Ticker Container - Excluding right icons area */}
            <div className="flex-1 pr-16 sm:pr-20 overflow-hidden relative">
              <div className="whitespace-nowrap animate-scroll-slow inline-block">
                {/* First set of messages */}
                {Array(15).fill(null).map((_, index) => (
                  <span key={`first-${index}`} className="inline-block mx-4 sm:mx-8">
                    ★ {message[language]}
                  </span>
                ))}
                {/* Second set for seamless loop */}
                {Array(15).fill(null).map((_, index) => (
                  <span key={`second-${index}`} className="inline-block mx-4 sm:mx-8">
                    ★ {message[language]}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Right side icons - Fixed position */}
            <div className="flex items-center space-x-3 sm:space-x-4 mx-[20px]">
              <Link href="#" target="_blank" className="hover:opacity-70 transition-opacity">
                <i className="ri-instagram-line w-4 h-4 flex items-center justify-center"></i>
              </Link>
              <Link href="#" target="_blank" className="hover:opacity-70 transition-opacity">
                <i className="ri-linkedin-line w-4 h-4 flex items-center justify-center"></i>
              </Link>
            </div>
          </div>
        </div>
        
        {/* CSS Animation Styles */}
        <style jsx>{`
          @keyframes scroll-slow {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll-slow {
            animation: scroll-slow 60s linear infinite;
          }
        `}</style>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="w-full px-4 sm:px-8 py-4">
          <div className="flex justify-between items-center md:justify-center h-16 relative">
            {/* Mobile Menu Button - Left side on mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-800 hover:text-gray-500 transition-colors order-1"
            >
              <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line w-6 h-6 flex items-center justify-center`}></i>
            </button>

            {/* Center Logo */}
            <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity order-2 md:order-1">
              <div className="font-['Pacifico'] text-2xl sm:text-3xl text-gray-800 flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2 flex items-center justify-center" style={{ backgroundColor: 'rgba(169,185,172,0.8)' }}>
                  <i className="ri-leaf-line text-gray-800 text-sm sm:text-lg"></i>
                </div>
                logo
              </div>
            </Link>

            {/* Cart Icon - Right side on mobile */}
            <Link href="/shop" className="md:hidden p-2 text-gray-800 hover:text-gray-600 rounded-md transition-all order-3">
              <i className="ri-shopping-cart-line w-5 h-5 flex items-center justify-center"></i>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block mt-4 border-t border-gray-200 pt-4">
            <div className="flex justify-center">
              <div className="flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
                <Link href="/nordic-tempeh" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md transition-all whitespace-nowrap">
                  {navItems[language].tempeh}
                </Link>
                <Link href="/condiments" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md transition-all whitespace-nowrap">
                  {navItems[language].condiments}
                </Link>
                <Link href="/recipes" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md transition-all whitespace-nowrap">
                  {navItems[language].recipes}
                </Link>
                <Link href="/knowledge" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md transition-all whitespace-nowrap">
                  {navItems[language].knowledge}
                </Link>
                <Link href="/reviews" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md transition-all whitespace-nowrap">
                  {navItems[language].reviews}
                </Link>
                <Link href="/about" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md transition-all whitespace-nowrap">
                  {navItems[language].about}
                </Link>

                {/* Language Switcher */}
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-gray-600 transition-all whitespace-nowrap border border-gray-400 rounded-md hover:border-gray-600"
                >
                  {language.toUpperCase()} / {language === 'en' ? 'DA' : 'EN'}
                </button>

                {/* Cart Icon */}
                <Link href="/shop" className="p-2 text-gray-800 hover:text-gray-600 rounded-md transition-all">
                  <i className="ri-shopping-cart-line w-5 h-5 flex items-center justify-center"></i>
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-0 top-[120px] bg-white z-40 shadow-lg">
              <nav className="p-4 space-y-1">
                <Link 
                  href="/nordic-tempeh" 
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-md transition-all text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navItems[language].tempeh}
                </Link>
                <Link 
                  href="/condiments" 
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-md transition-all text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navItems[language].condiments}
                </Link>
                <Link 
                  href="/recipes" 
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-md transition-all text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navItems[language].recipes}
                </Link>
                <Link 
                  href="/knowledge" 
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-md transition-all text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navItems[language].knowledge}
                </Link>
                <Link 
                  href="/reviews" 
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-md transition-all text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navItems[language].reviews}
                </Link>
                <Link 
                  href="/about" 
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-md transition-all text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navItems[language].about}
                </Link>
                
                {/* Language Switcher for Mobile */}
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <button
                    onClick={() => {
                      toggleLanguage();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-md transition-all text-base font-medium"
                  >
                    <i className="ri-global-line w-5 h-5 inline-flex items-center justify-center mr-3"></i>
                    {language.toUpperCase()} / {language === 'en' ? 'DA' : 'EN'}
                  </button>
                </div>
              </nav>
            </div>
          )}

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div 
              className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-30"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </div>
      </header>
    </>
  );
}