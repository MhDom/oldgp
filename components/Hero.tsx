import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { PRICE_LIST } from '../constants';

const Hero: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedYear(val);
    const item = PRICE_LIST.find((p) => p.id === val);
    setPrice(item ? item.price : 0);
  };

  const formatPrice = (p: number) => {
    return new Intl.NumberFormat('fa-IR').format(p);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedYear || !link) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // ⚠️ IMPORTANT: REPLACE THESE WITH YOUR ACTUAL BOT TOKEN AND CHAT ID
    // For security in production, you should route this through a backend server.
    const BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN'; 
    const CHAT_ID = 'YOUR_CHAT_ID'; 

    const yearLabel = PRICE_LIST.find(p => p.id === selectedYear)?.yearLabel || selectedYear;
    const formattedPrice = formatPrice(price);

    const message = `
🤖 *سفارش فروش جدید*

📅 *سال ساخت:* ${yearLabel}
💰 *قیمت برآوردی:* ${formattedPrice} تومان
🔗 *لینک گروه:* ${link}
📝 *توضیحات:* ${description || '---'}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setLink('');
        setDescription('');
        setSelectedYear('');
        setPrice(0);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="sell" className="relative bg-gradient-to-b from-brand-50/50 to-white pt-10 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Large Pink Blob - Central Top */}
            <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-pink-200/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse"></div>
            
            {/* Blue Blob - Left */}
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-60"></div>
            
            {/* Purple Blob - Right */}
            <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-60"></div>
        </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="text-center lg:text-right flex-1 z-10">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-wider text-brand-700 uppercase bg-brand-100 rounded-full border border-brand-200">
            افزایش قیمت ده درصدی ۲۰۲۲ به قبل
          </span>
          <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            فروش گروه تلگرام شما
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">
              به بهترین قیمت
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            بزرگترین تیم ارایه خدمات تلگرام با نزدیک به ده سال سابقه در خدمات تلگرام شامل ربات، لینکدونی، ممبر و غیره
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <a href="#prices" className="px-8 py-4 bg-white text-brand-600 border-2 border-brand-100 font-bold rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-colors shadow-sm">
                مشاهده لیست قیمت
             </a>
             <a href="#tips" className="px-8 py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200 flex items-center justify-center gap-2">
                <AlertCircle size={20} />
                نکات مهم
             </a>
          </div>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-brand-100 border border-white/50 backdrop-blur-sm p-8 z-10 relative transform hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute -top-6 -right-6 bg-yellow-400 text-gray-900 font-bold p-4 rounded-2xl shadow-lg rotate-12 flex flex-col items-center justify-center w-24 h-24">
                <span className="text-xs">شروع از</span>
                <span className="text-lg font-black">1.2M</span>
                <span className="text-[10px]">تومان</span>
            </div>

          <div className="flex items-center gap-2 mb-6 text-brand-700">
            <Calculator className="w-6 h-6" />
            <h3 className="text-xl font-bold">محاسبه قیمت و فروش</h3>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                سال ساخت گروه <span className="text-red-500 text-xs">(ضروری)</span>
              </label>
              <div className="relative">
                <select
                  id="year"
                  value={selectedYear}
                  onChange={handleYearChange}
                  required
                  className="block w-full pr-4 pl-10 py-3 text-base border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent sm:text-sm rounded-xl bg-gray-50 transition-all"
                >
                  <option value="" disabled>انتخاب سال ساخت...</option>
                  {PRICE_LIST.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.yearLabel}
                    </option>
                  ))}
                </select>
              </div>
              <p className="mt-1 text-xs text-gray-400">لطفا تاریخ درست وارد کنید</p>
            </div>

            <div>
              <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-2">
                لینک گروه <span className="text-red-500 text-xs">(ضروری)</span>
              </label>
              <input
                type="text"
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
                dir="ltr"
                placeholder="https://t.me/..."
                className="block w-full px-4 py-3 border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-left placeholder:text-right"
              />
              <p className="mt-1 text-xs text-gray-400">لینک عمومی (Public) گروه را وارد نمایید.</p>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                توضیحات اضافه <span className="text-gray-400 text-xs">(اختیاری)</span>
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                className="block w-full px-4 py-3 border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-right"
              />
              <p className="mt-1 text-xs text-gray-400">توضیح اضافه برای واسطه ها یا شرایط خاص</p>
            </div>

            <div className="bg-brand-50 rounded-xl p-4 border border-brand-100">
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">قیمت خرید ما:</span>
                    <span className="text-2xl font-black text-brand-700 tracking-tight">
                        {price > 0 ? formatPrice(price) : '0'} <span className="text-sm font-normal text-gray-500">تومان</span>
                    </span>
                </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin ml-2" />
                    در حال ارسال...
                  </>
              ) : (
                  'فروش گروه'
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-2 text-sm font-bold animate-fade-in border border-green-100">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    اطلاعات با موفقیت ارسال شد! به زودی با شما تماس می‌گیریم.
                </div>
            )}
            {submitStatus === 'error' && (
                <div className="bg-red-50 text-red-700 p-4 rounded-xl flex items-center gap-2 text-sm font-bold animate-fade-in border border-red-100">
                    <XCircle className="w-5 h-5 shrink-0" />
                    خطا در ارسال اطلاعات. لطفا دوباره تلاش کنید یا با پشتیبانی تماس بگیرید.
                </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;