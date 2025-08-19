
'use client';

import Link from 'next/link';

interface ProductSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  href: string;
  imageLeft?: boolean;
}

export default function ProductSection({ 
  title, 
  subtitle, 
  description, 
  imageUrl, 
  href, 
  imageLeft = false 
}: ProductSectionProps) {
  const content = (
    <>
      <div className={`flex-1 ${imageLeft ? 'order-2' : 'order-1'} flex items-center`}>
        <div className="p-12 w-full">
          <Link href={href} className="group block">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 group-hover:text-gray-600 transition-colors duration-300">{title}</h2>
            <h3 className="text-xl font-medium text-gray-600 mb-6 tracking-wide group-hover:text-gray-500 transition-colors duration-300">
              {subtitle}
            </h3>
            <div className="w-20 h-0.5 bg-gray-300 mb-6 group-hover:bg-gray-500 transition-colors duration-300"></div>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
              {description}
            </p>
          </Link>
        </div>
      </div>
      <div className={`flex-1 ${imageLeft ? 'order-1' : 'order-2'} flex items-center justify-center`}>
        <Link href={href} className="w-full h-full flex items-center justify-center group">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>
    </>
  );

  return (
    <section>
      <div className="flex flex-col lg:flex-row min-h-[550px] items-center">
        {content}
      </div>
    </section>
  );
}
