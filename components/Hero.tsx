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
            <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-pink-200/40 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-pulse"></div>
            {/* Blue Blob */}
            <div className={`absolute top-[10%] ${language === 'fa' ? 'left-[-10%]' : 'right-[-10%]'} w-[500px] h-[500px] bg-brand-200/40 dark:bg-brand-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-60`}></div>
            {/* Purple Blob */}
            <div className={`absolute bottom-[10%] ${language === 'fa' ? 'right-[-10%]' : 'left-[-10%]'} w-[600px] h-[600px] bg-purple-200/40 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-60`}></div>
        </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className={`text-center ${language === 'fa' ? 'lg:text-right' : 'lg:text-left'} flex-1 z-10`}>
          <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-wider text-brand-700 dark:text-brand-300 uppercase bg-brand-100 dark:bg-brand-900/50 rounded-full border border-brand-200 dark:border-brand-700">
            {t.hero.badge}
          </span>
          <h1 className="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-6">
            {t.hero.titleStart}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600 dark:from-brand-400 dark:to-purple-400">
              {t.hero.titleHighlight}
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${language === 'fa' ? 'lg:justify-start' : 'lg:justify-start'}`}>
             <a href="#prices" className="px-8 py-4 bg-white dark:bg-gray-800 text-brand-600 dark:text-brand-300 border-2 border-brand-100 dark:border-gray-700 font-bold rounded-xl hover:border-brand-300 dark:hover:border-gray-500 hover:bg-brand-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
                {t.hero.ctaPrice}
             </a>
             <a href="#tips" className="px-8 py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200 dark:shadow-none flex items-center justify-center gap-2">
                <AlertCircle size={20} />
                {t.hero.ctaTips}
             </a>
          </div>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-2xl shadow-brand-100 dark:shadow-none border border-white/50 dark:border-gray-700 backdrop-blur-sm p-8 z-10 relative transform hover:-translate-y-1 transition-all duration-300">
            <div className={`absolute -top-6 ${language === 'fa' ? '-right-6' : '-left-6'} bg-yellow-400 text-gray-900 font-bold p-4 rounded-2xl shadow-lg ${language === 'fa' ? 'rotate-12' : '-rotate-12'} flex flex-col items-center justify-center w-24 h-24`}>
                <span className="text-xs">{t.hero.startFrom}</span>
                <span className="text-lg font-black">{language === 'fa' ? '1.2M' : '$24'}</span>
                <span className="text-[10px]">{language === 'fa' ? 'تومان' : 'USD'}</span>
            </div>

          {/* Header Centered Here */}
          <div className="flex items-center justify-center gap-2 mb-6 text-brand-700 dark:text-brand-400">
            <Calculator className="w-6 h-6" />
            <h3 className="text-xl font-bold">{t.hero.formTitle}</h3>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.hero.formYear} <span className="text-red-500 text-xs">*</span>
              </label>
              <div className="relative">
                <select
                  id="year"
                  value={selectedYear}
                  onChange={handleYearChange}
                  required
                  className="block w-full px-4 py-3 text-base border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent sm:text-sm rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                >
                  <option value="" disabled>{t.hero.formYearPlaceholder}</option>
                  {PRICE_DB.map((item) => (
                    <option key={item.id} value={item.id} className="text-gray-900 dark:text-white dark:bg-gray-800">
                      {item.labels[language]}
                    </option>
                  ))}
                </select>
              </div>
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">{t.hero.validationYear}</p>
            </div>

            <div>
              <label htmlFor="link" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                className={`block w-full px-4 py-3 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all ${language === 'fa' ? 'text-left placeholder:text-right' : 'text-left'}`}
              />
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">{t.hero.formLinkHint}</p>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.hero.formDesc}
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                className="block w-full px-4 py-3 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
              />
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">{t.hero.formDescHint}</p>
            </div>

            <div className="bg-brand-50 dark:bg-gray-700/50 rounded-xl p-4 border border-brand-100 dark:border-gray-600">
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300 font-medium">{t.hero.formBuyPrice}</span>
                    <span className="text-2xl font-black text-brand-700 dark:text-brand-400 tracking-tight">
                        {price > 0 ? formatPrice(price) : '0'} <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{t.currencyLabel}</span>
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
                    <Loader2 className="w-6 h-6 animate-spin mx-2" />
                    {t.hero.formButtonLoading}
                  </>
              ) : (
                  t.hero.formButton
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
                <div className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-4 rounded-xl flex items-center gap-2 text-sm font-bold animate-fade-in border border-green-100 dark:border-green-800">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    {t.hero.submitSuccess}
                </div>
            )}
            {submitStatus === 'error' && (
                <div className="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-4 rounded-xl flex items-center gap-2 text-sm font-bold animate-fade-in border border-red-100 dark:border-red-800">
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