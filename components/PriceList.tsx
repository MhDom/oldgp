import React from 'react';
import { PRICE_LIST } from '../constants';
import { Tag } from 'lucide-react';

const PriceList: React.FC = () => {
  return (
    <section id="prices" className="py-20 bg-gray-50 relative">
       {/* Section Divider Top */}
       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">لیست قیمت خرید گروه</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            خریدار گروه های قدیمی شما با بالاترین قیمت در بازار. قیمت ها به تومان می‌باشند.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRICE_LIST.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-600 transition-colors duration-300">
                <Tag className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.yearLabel}</h3>
              <div className="mt-auto">
                <span className="inline-block px-4 py-2 bg-brand-600 text-white rounded-full text-sm font-bold shadow-md shadow-brand-200">
                  {item.priceLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-lg bg-green-50 text-green-700 border border-green-200 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 ml-2 animate-pulse"></span>
            آخرین بروزرسانی: ۱۸ آبان ۱۴۰۴
          </span>
        </div>
      </div>
      
      {/* Section Divider Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default PriceList;