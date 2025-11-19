import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import PriceList from './components/PriceList';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans" dir="rtl">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Features />
        <PriceList />
      </main>
      <Footer />
    </div>
  );
};

export default App;