import React from 'react';
import { Zap, Headset, ShieldCheck, Wallet, Search } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="tips">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Tips Video Placeholder */}
        <div className="mb-24 bg-brand-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
           {/* Decorative Circles */}
           <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-800 opacity-50"></div>
           <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-brand-700 opacity-50"></div>

           <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
               <div className="lg:w-1/2 text-center lg:text-right">
                   <h2 className="text-3xl font-bold mb-4">نکات مهم قبل از فروش</h2>
                   <p className="text-brand-100 mb-6 text-lg leading-relaxed">
                       حتما قبل از ثبت گروه خود برای فروش، این ویدیو را مشاهده کنید تا با روند کار آشنا شوید و در سریع‌ترین زمان ممکن پول خود را دریافت کنید.
                   </p>
                   <button className="bg-white text-brand-900 px-6 py-3 rounded-xl font-bold hover:bg-brand-50 transition-colors">
                       مشاهده راهنما در ربات
                   </button>
               </div>
               <div className="lg:w-1/2 w-full">
                   <div className="aspect-video bg-gray-800 rounded-xl border-4 border-brand-700 shadow-xl flex items-center justify-center relative group cursor-pointer overflow-hidden">
                       <div className="absolute inset-0 bg-[url('https://picsum.photos/800/450')] bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
                       <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center z-10 group-hover:bg-brand-600 transition-colors">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                       </div>
                   </div>
               </div>
           </div>
        </div>

        {/* Bottom Section: Why Us */}
        <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">چرا گروه قدیمی بخریم؟</h2>
            <p className="text-gray-500">مزایای گروه‌های قدیمی تلگرام نسبت به گروه‌های جدید</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-14 h-14 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <Search className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2">نمایش در جستجو</h3>
                <p className="text-sm text-gray-500 leading-relaxed">نمایش بالاتر و بهتر در نتایج جستجوی گلوبال تلگرام.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-14 h-14 mx-auto bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                    <ShieldCheck className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2">امنیت بالا</h3>
                <p className="text-sm text-gray-500 leading-relaxed">احتمال بسیار پایین مسدود شدن یا ریپورت شدن توسط تلگرام.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-14 h-14 mx-auto bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                    <Zap className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2">سرعت بالا</h3>
                <p className="text-sm text-gray-500 leading-relaxed">فرآیند انتقال و فروش در کمتر از ۱۰ دقیقه انجام می‌شود.</p>
            </div>

             {/* Feature 4 */}
             <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-14 h-14 mx-auto bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                    <Wallet className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2">تسویه آنی</h3>
                <p className="text-sm text-gray-500 leading-relaxed">پرداخت وجه به صورت ریالی یا دلاری (تتر) بلافاصله پس از انتقال.</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Features;