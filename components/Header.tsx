import React, { useState } from 'react';
import { Menu, X, Send } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-200">
               <Send size={24} className="-ml-1 mt-1 transform -rotate-12" />
            </div>
            <div>
                <h1 className="text-xl font-black text-gray-800 leading-none">NUMZI</h1>
                <p className="text-xs text-brand-600 font-bold">خرید و فروش گروه</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-brand-600 font-medium transition-colors duration-200 text-sm lg:text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href="#contact" className="bg-brand-600 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-brand-700 transition-all shadow-md hover:shadow-lg">
              تماس با ما
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 text-right"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
                href="#contact"
                 className="block px-3 py-2 mt-4 text-center rounded-md text-base font-bold text-white bg-brand-600"
                 onClick={() => setIsOpen(false)}
            >
                تماس با ما
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;