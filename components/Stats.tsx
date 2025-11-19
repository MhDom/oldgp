import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { STATS } from '../constants';

const data = [
  { name: 'شنبه', groups: 12 },
  { name: 'یک‌شنبه', groups: 19 },
  { name: 'دوشنبه', groups: 15 },
  { name: 'سه‌شنبه', groups: 28 },
  { name: 'چهارشنبه', groups: 22 },
  { name: 'پنج‌شنبه', groups: 35 },
  { name: 'جمعه', groups: 45 },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-4">آمار گروه های ثبت شده</h2>
          <p className="text-gray-500">این آمار فقط مربوط به ثبت‌های موفق در سایت ما می‌باشد.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Counters Grid */}
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat, index) => (
              <div key={stat.label} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all group">
                <div className="text-4xl font-black text-brand-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value.toLocaleString('fa-IR')}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 h-80 w-full">
             <h3 className="text-lg font-bold text-gray-800 mb-4">روند ثبت گروه در هفته جاری</h3>
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorGroups" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis dataKey="name" tick={{fontFamily: 'Vazirmatn', fontSize: 12}} stroke="#9ca3af" />
                  <YAxis tick={{fontFamily: 'Vazirmatn', fontSize: 12}} stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}}
                    labelStyle={{fontFamily: 'Vazirmatn', fontWeight: 'bold'}}
                  />
                  <Area type="monotone" dataKey="groups" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorGroups)" />
                </AreaChart>
             </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;