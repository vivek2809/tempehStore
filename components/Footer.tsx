"use client";

import Link from "next/link";
import { useLanguage } from "@/components/Header";

export default function Footer() {
  const { language } = useLanguage();

  const content = {
    en: {
      here: "Here for",
      contact: "Terms and Conditions",
      pressKit: "Privacy Policy",
      news: "Impressum",
    },
    da: {
      here: "Her for",
      contact: "Terms and Conditions",
      pressKit: "Privacy Policy",
      news: "Impressum",
    },
  };

  const text = content[language];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Link
              href="https://contempehrary.com"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              {text.here}
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-400 font-medium transition-colors duration-300"
            >
              {text.contact}
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-400 font-medium transition-colors duration-300"
            >
              {text.pressKit}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-400 font-medium transition-colors duration-300"
            >
              {text.news}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
