import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import PriceList from './components/PriceList';
import Features from './components/Features';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Stats />
          <Features />
          <PriceList />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;