import React, { useState } from 'react';
import { Menu, X, Send, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { LANGUAGES } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'fa' ? 'en' : 'fa';
    setLanguage(newLang);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Right Side (RTL Start): Logo & Navigation */}
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-none">
                <Send size={24} className="-ml-1 mt-1 transform -rotate-12" />
                </div>
                <div>
                    <h1 className="text-xl font-black text-white leading-none">NUMZI</h1>
                    <p className="text-xs text-brand-400 font-bold">
                        {language === 'fa' ? 'خرید و فروش گروه' : 'Group Market'}
                    </p>
                </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                {t.nav.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:text-brand-400 font-medium transition-colors duration-200 text-sm lg:text-base"
                >
                    {item.label}
                </a>
                ))}
            </nav>
          </div>

          {/* Left Side (RTL End): Actions */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Language Toggle */}
            <button
                onClick={toggleLanguage}
                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-brand-400 hover:bg-gray-800 transition-all"
                title="Switch Language"
            >
                <span className="text-lg leading-none pt-1">{LANGUAGES.find(l => l.code !== language)?.flag}</span>
            </button>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
                <a href="#contact" className="bg-brand-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                    {language === 'fa' ? 'تماس با ما' : 'Contact Us'}
                </a>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-gray-200 focus:outline-none p-2"
                >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 absolute w-full shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-200 hover:text-brand-400 hover:bg-gray-800 transition-colors text-start"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
                href="#contact"
                 className="block px-4 py-3 mt-4 text-center rounded-xl text-base font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-md"
                 onClick={() => setIsOpen(false)}
            >
                {language === 'fa' ? 'تماس با ما' : 'Contact Us'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;