import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { LanguageCode, Content, CurrencyCode } from './types';
import { TRANSLATIONS } from './constants';

interface LanguageContextType {
  language: LanguageCode;
  currency: CurrencyCode;
  setLanguage: (lang: LanguageCode) => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('fa');
  
  // Update HTML dir attribute when language changes
  useEffect(() => {
    document.documentElement.dir = TRANSLATIONS[language].dir;
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    currency: language === 'fa' ? 'toman' : 'usd' as CurrencyCode,
    setLanguage,
    t: TRANSLATIONS[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};