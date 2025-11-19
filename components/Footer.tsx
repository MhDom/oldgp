import React from 'react';
import { Send, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t-4 border-brand-600" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-right">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-white flex items-center justify-center md:justify-start gap-2">
                <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                    <Send size={18} className="text-white -ml-0.5 mt-0.5" />
                </div>
                NUMZI
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              بزرگترین تیم ارایه خدمات تلگرام با نزدیک به ده سال سابقه در خدمات تلگرام شامل ربات، لینکدونی، ممبر و غیره
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
             <h4 className="text-lg font-bold text-white">خدمات ما</h4>
             <ul className="space-y-2 text-sm">
                <li><a href="https://numzi.ir/" className="hover:text-brand-400 transition-colors">فروش گروه</a></li>
                <li><a href="https://t.me/Link4you" className="hover:text-brand-400 transition-colors">بزرگترین لینکدونی</a></li>
                <li><a href="https://digianti.com/" className="hover:text-brand-400 transition-colors">ربات مدیریت گروه</a></li>
                <li><a href="https://t.me/DigiMusic1Bot" className="hover:text-brand-400 transition-colors">ربات موزیک</a></li>
                <li><a href="https://t.me/Numzibot" className="hover:text-brand-400 transition-colors">ربات نجوا</a></li>
             </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">شبکه‌های اجتماعی</h4>
            <div className="flex justify-center md:justify-start gap-4">
                <a href="https://t.me/GpBuy1" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                    <Send size={20} />
                </a>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl">
                <p className="text-xs text-gray-400 mb-1">پشتیبانی تلگرام:</p>
                <a href="https://t.me/hamidlu" target="_blank" rel="noreferrer" className="text-brand-400 font-mono font-bold hover:text-brand-300 transition-colors block" dir="ltr">@hamidlu</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>© ۲۰۲۵ تمامی حقوق محفوظ است. طراحی شده با ❤️ توسط تیم دیجی</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;