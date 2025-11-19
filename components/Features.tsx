import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="tips">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container - Dark Blue Aesthetic */}
        <div className="bg-brand-900 rounded-3xl overflow-hidden shadow-2xl relative">
            
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-brand-600/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-brand-800/40 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 p-8 lg:p-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* Right Column (RTL): Why we buy? */}
                    <div className="space-y-8">
                        <div className="relative">
                            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 relative z-10 leading-tight">
                                چرا گروه قدیمی تلگرام میخریم؟
                                <svg className="absolute -bottom-4 right-0 w-48 h-4 text-brand-400 opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.00026 6.99996C2.00026 6.99996 74.5 0.5 113.5 0.99996C152.5 1.49996 196.5 6.99996 196.5 6.99996" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </h2>
                            <p className="text-brand-100 text-lg leading-relaxed font-medium">
                                گروه های قدیمی چند مزیت دارند و همین مزیت ها باعث ارزش آنها میشود
                            </p>
                        </div>
                        
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-white text-lg">
                                <div className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                                <span className="font-bold">نمایش بالاتر در هنگام جستجو تلگرام</span>
                            </li>
                            <li className="flex items-start gap-4 text-white text-lg">
                                <div className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                                <span className="font-bold">امنیت بیشتر</span>
                            </li>
                            <li className="flex items-start gap-4 text-white text-lg">
                                <div className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                                <span className="font-bold">احتمال پایین تر ریپورت شدن</span>
                            </li>
                            <li className="flex items-start gap-4 text-white text-lg">
                                <div className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                                <span className="font-bold">مناسب کسب و کار ها و شرکت ها</span>
                            </li>
                        </ul>
                    </div>

                    {/* Left Column (RTL): What groups are bought? */}
                    <div className="space-y-8 relative">
                        
                        {/* Divider for desktop */}
                        <div className="hidden md:block absolute right-[-3rem] lg:right-[-6rem] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-brand-700 to-transparent"></div>

                        <div className="relative">
                            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 relative z-10 leading-tight">
                                چه گروه های خریداری میشوند؟
                                <svg className="absolute -bottom-4 right-0 w-48 h-4 text-brand-400 opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.00026 6.99996C2.00026 6.99996 74.5 0.5 113.5 0.99996C152.5 1.49996 196.5 6.99996 196.5 6.99996" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </h2>
                            <p className="text-brand-100 text-lg leading-relaxed font-medium">
                                گروه شما حتما باید یک سری شرایط ساده را داشته باشد
                            </p>
                        </div>

                        <ul className="space-y-6">
                             <li className="flex items-start gap-4 text-white text-lg">
                                <div className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                                <span className="font-bold">حتما سال و تاریخ ساخت گروه باید معلوم باشد</span>
                            </li>
                            <li className="flex items-start gap-4 text-white text-lg">
                                <div className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                                <span className="font-bold">تعداد اعضا اصلا مهم نیست</span>
                            </li>
                            <li className="flex items-start gap-4 text-white text-lg">
                                <div className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                                <span className="font-bold">در صورت کمتر بودن پیام ها از ده پیام گروه ارزان تر خریداری میشود</span>
                            </li>
                            <li className="flex items-start gap-4 text-white text-lg">
                                <div className="w-2 h-2 rounded-full bg-brand-400 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                                <span className="font-bold">در صورت نمایش ندادن تاریخ گروه ، آن گروه ارزشی ندارد</span>
                            </li>
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