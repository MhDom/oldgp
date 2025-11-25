import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../LanguageContext';

const Stats: React.FC = () => {
  const { t, language } = useLanguage();
  const data = t.stats.chartData;

  return (
    <section className="py-20 bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Container */}
        <div className="border-4 border-brand-900/50 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-800/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-800/10 rounded-full blur-3xl"></div>

            {/* Section Header */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 animate-fade-in-up">{t.stats.title}</h2>
                <p className="text-gray-400 text-lg animate-fade-in-up animation-delay-200">{t.stats.subtitle}</p>
            </div>

            <div className={`flex flex-col-reverse ${language === 'fa' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 relative z-10`}>
                
                {/* Chart Area */}
                <div className="w-full lg:w-1/2 relative animate-fade-in-up animation-delay-400">
                    <div className="absolute inset-0 bg-brand-900/30 rounded-3xl transform rotate-3 scale-95 opacity-50"></div>
                    <div className="bg-gray-800 p-6 rounded-3xl shadow-none border border-gray-700 relative z-10 h-80 transition-colors duration-300 hover:border-brand-500/30">
                        <div className="flex justify-between items-center mb-6 px-2">
                             <h3 className="text-lg font-bold text-gray-200">{t.stats.chartTitle}</h3>
                             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                        <ResponsiveContainer width="100%" height="85%">
                            <AreaChart
                            data={data}
                            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                            >
                            <defs>
                                <linearGradient id="colorGroups" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" />
                            <XAxis 
                                dataKey="name" 
                                tick={{fontFamily: language === 'fa' ? 'Vazirmatn' : 'sans-serif', fontSize: 10, fill: '#9ca3af'}} 
                                stroke="#9ca3af" 
                                interval={0}
                                tickMargin={10}
                            />
                            <YAxis tick={{fontFamily: language === 'fa' ? 'Vazirmatn' : 'sans-serif', fontSize: 10, fill: '#9ca3af'}} stroke="#9ca3af" />
                            <Tooltip 
                                contentStyle={{
                                    borderRadius: '12px', 
                                    border: '1px solid #374151', 
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)', 
                                    fontFamily: language === 'fa' ? 'Vazirmatn' : 'sans-serif',
                                    backgroundColor: '#1f2937',
                                    color: '#f3f4f6'
                                }}
                            />
                            <Area type="monotone" dataKey="groups" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorGroups)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {t.stats.items.map((stat, index) => (
                        <div 
                            key={stat.label} 
                            className="bg-gray-800 rounded-[2rem] p-8 text-center border border-gray-700 hover:bg-gray-700 hover:border-brand-800 transition-all duration-500 group animate-fade-in-up hover:shadow-2xl hover:shadow-brand-900/20"
                            style={{ animationDelay: `${400 + index * 100}ms` }}
                        >
                            <div className="text-5xl font-black text-brand-400 mb-3 tracking-tight group-hover:scale-110 group-hover:text-brand-300 transition-transform duration-300 animate-float" style={{ animationDelay: `${index * 1000}ms` }}>
                            {language === 'fa' ? stat.value.toLocaleString('fa-IR') : stat.value}
                            </div>
                            <div className="text-gray-400 font-bold text-lg">{stat.label}</div>
                        </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;