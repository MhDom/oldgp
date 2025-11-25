import React, { useState, useEffect } from 'react';
import { Calculator, AlertCircle, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { PRICE_DB } from '../constants';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t, language, currency } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedYear(val);
    const item = PRICE_DB.find((p) => p.id === val);
    setPrice(item ? item.prices[currency] : 0);
  };

  // Reset price if currency changes while a year is selected
  useEffect(() => {
    if (selectedYear) {
        const item = PRICE_DB.find((p) => p.id === selectedYear);
        setPrice(item ? item.prices[currency] : 0);
    }
  }, [currency, selectedYear]);

  const formatPrice = (p: number) => {
    if (currency === 'usd') {
        return `$${p.toLocaleString('en-US')}`;
    }
    return new Intl.NumberFormat('fa-IR').format(p);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedYear || !link) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // ⚠️ IMPORTANT: REPLACE THESE WITH YOUR ACTUAL BOT TOKEN AND CHAT ID
    const BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN'; 
    const CHAT_ID = 'YOUR_CHAT_ID'; 

    const yearItem = PRICE_DB.find(p => p.id === selectedYear);
    const yearLabel = yearItem ? yearItem.labels[language] : selectedYear;
    
    // We send both currencies in the message for admin clarity
    const priceToman = yearItem ? new Intl.NumberFormat('fa-IR').format(yearItem.prices.toman) : '0';
    const priceUSD = yearItem ? `$${yearItem.prices.usd}` : '$0';

    const message = `
🤖 *New Sell Request (${language.toUpperCase()})*

📅 *Year:* ${yearLabel}
💰 *Est. Price:* ${priceToman} Toman / ${priceUSD}
🔗 *Link:* ${link}
📝 *Desc:* ${description || '---'}
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
    <section id="sell" className="relative bg-gradient-to-b from-brand-50/50 to-white dark:from-brand-950/30 dark:to-gray-900 pt-10 pb-24 lg:pt-20 lg:pb-32 overflow-hidden transition-colors duration-300">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Large Pink Blob */}
            <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-pink-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
            {/* Blue Blob */}
            <div className={`absolute top-[10%] ${language === 'fa' ? 'left-[-10%]' : 'right-[-10%]'} w-[500px] h-[500px] bg-brand-500/20 rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-blob animation-delay-2000`}></div>
            {/* Purple Blob */}
            <div className={`absolute bottom-[10%] ${language === 'fa' ? 'right-[-10%]' : 'left-[-10%]'} w-[600px] h-[600px] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-blob animation-delay-4000`}></div>
        </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className={`text-center ${language === 'fa' ? 'lg:text-right' : 'lg:text-left'} flex-1 z-10`}>
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-wider text-brand-300 uppercase bg-brand-900/50 rounded-full border border-brand-700 backdrop-blur-sm">
                {t.hero.badge}
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-in-up animation-delay-200">
            {t.hero.titleStart}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">
              {t.hero.titleHighlight}
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-400">
            {t.hero.subtitle}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${language === 'fa' ? 'lg:justify-start' : 'lg:justify-start'} animate-fade-in-up animation-delay-600`}>
             <a href="#prices" className="px-8 py-4 bg-gray-800 text-brand-300 border-2 border-gray-700 font-bold rounded-xl hover:border-gray-500 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-brand-900/20 transform hover:-translate-y-1">
                {t.hero.ctaPrice}
             </a>
             <a href="#tips" className="px-8 py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-all duration-300 shadow-lg shadow-brand-900/50 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                <AlertCircle size={20} />
                {t.hero.ctaTips}
             </a>
          </div>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-md bg-gray-800 rounded-3xl shadow-2xl shadow-brand-900/50 border border-gray-700 backdrop-blur-xl p-8 z-10 relative transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up animation-delay-600">
            <div className={`absolute -top-6 ${language === 'fa' ? '-right-6' : '-left-6'} bg-yellow-400 text-gray-900 font-bold p-4 rounded-2xl shadow-lg ${language === 'fa' ? 'rotate-12' : '-rotate-12'} flex flex-col items-center justify-center w-24 h-24 animate-float`}>
                <span className="text-xs">{t.hero.startFrom}</span>
                <span className="text-lg font-black">{language === 'fa' ? '1.2M' : '$24'}</span>
                <span className="text-[10px]">{language === 'fa' ? 'تومان' : 'USD'}</span>
            </div>

          {/* Header Centered Here */}
          <div className="flex items-center justify-center gap-2 mb-6 text-brand-400">
            <Calculator className="w-6 h-6 animate-pulse-slow" />
            <h3 className="text-xl font-bold">{t.hero.formTitle}</h3>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="group">
              <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-brand-300">
                {t.hero.formYear} <span className="text-red-500 text-xs">*</span>
              </label>
              <div className="relative">
                <select
                  id="year"
                  value={selectedYear}
                  onChange={handleYearChange}
                  required
                  className="block w-full px-4 py-3 text-base border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent sm:text-sm rounded-xl bg-gray-700 text-white transition-all hover:bg-gray-600"
                >
                  <option value="" disabled>{t.hero.formYearPlaceholder}</option>
                  {PRICE_DB.map((item) => (
                    <option key={item.id} value={item.id} className="text-white bg-gray-800">
                      {item.labels[language]}
                    </option>
                  ))}
                </select>
              </div>
              <p className="mt-1 text-xs text-gray-500">{t.hero.validationYear}</p>
            </div>

            <div className="group">
              <label htmlFor="link" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-brand-300">
                {t.hero.formLink} <span className="text-red-500 text-xs">*</span>
              </label>
              <input
                type="text"
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
                dir="ltr"
                placeholder={t.hero.formLinkPlaceholder}
                className={`block w-full px-4 py-3 border-gray-600 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all hover:bg-gray-600 ${language === 'fa' ? 'text-left placeholder:text-right' : 'text-left'}`}
              />
              <p className="mt-1 text-xs text-gray-500">{t.hero.formLinkHint}</p>
            </div>

            <div className="group">
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-brand-300">
                {t.hero.formDesc}
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                className="block w-full px-4 py-3 border-gray-600 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all hover:bg-gray-600"
              />
              <p className="mt-1 text-xs text-gray-500">{t.hero.formDescHint}</p>
            </div>

            <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600 transition-all hover:bg-gray-700 hover:border-brand-500/30">
                <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{t.hero.formBuyPrice}</span>
                    <span className="text-2xl font-black text-brand-400 tracking-tight">
                        {price > 0 ? formatPrice(price) : '0'} <span className="text-sm font-normal text-gray-400">{t.currencyLabel}</span>
                    </span>
                </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg shadow-brand-900/20 text-lg font-bold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all duration-300 transform active:scale-95 hover:shadow-brand-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin mx-2" />
                    {t.hero.formButtonLoading}
                  </>
              ) : (
                  t.hero.formButton
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
                <div className="bg-green-900/30 text-green-400 p-4 rounded-xl flex items-center gap-2 text-sm font-bold animate-fade-in border border-green-800">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    {t.hero.submitSuccess}
                </div>
            )}
            {submitStatus === 'error' && (
                <div className="bg-red-900/30 text-red-400 p-4 rounded-xl flex items-center gap-2 text-sm font-bold animate-fade-in border border-red-800">
                    <XCircle className="w-5 h-5 shrink-0" />
                    {t.hero.submitError}
                </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;