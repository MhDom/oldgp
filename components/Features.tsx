import React from 'react';
import { useLanguage } from '../LanguageContext';

const Features: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-gray-900 transition-colors duration-300" id="tips">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="bg-brand-900 rounded-3xl overflow-hidden shadow-2xl relative transform hover:scale-[1.01] transition-transform duration-700">
            
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-brand-600/30 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-brand-800/40 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 p-8 lg:p-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* First Column (Right in RTL, Left in LTR) */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="relative">
                            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 relative z-10 leading-tight">
                                {t.features.rightTitle}
                                <svg className={`absolute -bottom-4 ${language === 'fa' ? 'right-0' : 'left-0'} w-48 h-4 text-brand-400 opacity-80`} viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.00026 6.99996C2.00026 6.99996 74.5 0.5 113.5 0.99996C152.5 1.49996 196.5 6.99996 196.5 6.99996" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </h2>
                            <p className="text-brand-100 text-lg leading-relaxed font-medium">
                                {t.features.rightSubtitle}
                            </p>
                        </div>
                        
                        <ul className="space-y-6">
                            {t.features.rightItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-4 text-white text-lg transition-transform hover:translate-x-2 duration-300">
                                    <div className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.5)] animate-pulse"></div>
                                    <span className="font-bold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Second Column (Left in RTL, Right in LTR) */}
                    <div className="space-y-8 relative animate-fade-in-up animation-delay-200">
                        
                        {/* Divider */}
                        <div className={`hidden md:block absolute ${language === 'fa' ? 'right-[-3rem] lg:right-[-6rem]' : 'left-[-3rem] lg:left-[-6rem]'} top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-brand-700 to-transparent`}></div>

                        <div className="relative">
                            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 relative z-10 leading-tight">
                                {t.features.leftTitle}
                                <svg className={`absolute -bottom-4 ${language === 'fa' ? 'right-0' : 'left-0'} w-48 h-4 text-brand-400 opacity-80`} viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.00026 6.99996C2.00026 6.99996 74.5 0.5 113.5 0.99996C152.5 1.49996 196.5 6.99996 196.5 6.99996" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </h2>
                            <p className="text-brand-100 text-lg leading-relaxed font-medium">
                                {t.features.leftSubtitle}
                            </p>
                        </div>

                        <ul className="space-y-6">
                            {t.features.leftItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-4 text-white text-lg transition-transform hover:translate-x-2 duration-300">
                                    <div className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.5)] animate-pulse"></div>
                                    <span className="font-bold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;