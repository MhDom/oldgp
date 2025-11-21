import { PriceData, Content, LanguageCode } from './types';

export const LANGUAGES: { code: LanguageCode; label: string; flag: string }[] = [
  { code: 'fa', label: 'فارسی', flag: '🇮🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
];

export const PRICE_DB: PriceData[] = [
  { id: '2015', labels: { fa: 'سال ۲۰۱۵', en: '2015' }, prices: { toman: 1200000, usd: 24 } },
  { id: '2016', labels: { fa: 'سال ۲۰۱۶', en: '2016' }, prices: { toman: 1000000, usd: 20 } },
  { id: '2017', labels: { fa: 'سال ۲۰۱۷', en: '2017' }, prices: { toman: 950000, usd: 19 } },
  { id: '2018', labels: { fa: 'سال ۲۰۱۸', en: '2018' }, prices: { toman: 950000, usd: 19 } },
  { id: '2019', labels: { fa: 'سال ۲۰۱۹', en: '2019' }, prices: { toman: 950000, usd: 19 } },
  { id: '2020', labels: { fa: 'سال ۲۰۲۰', en: '2020' }, prices: { toman: 900000, usd: 18 } },
  { id: '2021', labels: { fa: 'سال ۲۰۲۱', en: '2021' }, prices: { toman: 900000, usd: 18 } },
  { id: '2022', labels: { fa: 'سال ۲۰۲۲', en: '2022' }, prices: { toman: 900000, usd: 18 } },
  { id: '2023', labels: { fa: 'سال ۲۰۲۳', en: '2023' }, prices: { toman: 700000, usd: 14 } },
  { id: '2024-1', labels: { fa: '۲۰۲۴ (سه ماه اول)', en: '2024 (Q1)' }, prices: { toman: 200000, usd: 4 } },
  { id: '2024-2', labels: { fa: '۲۰۲۴ (ماه چهارم)', en: '2024 (Month 4)' }, prices: { toman: 150000, usd: 3 } },
  { id: '2024-3', labels: { fa: '۲۰۲۴ (ماه پنجم)', en: '2024 (Month 5)' }, prices: { toman: 100000, usd: 2 } },
  { id: '2024-4', labels: { fa: '۲۰۲۴ (باقی ماه‌ها)', en: '2024 (Rest)' }, prices: { toman: 50000, usd: 1 } },
];

export const TRANSLATIONS: Record<LanguageCode, Content> = {
  fa: {
    dir: 'rtl',
    currencyLabel: 'تومان',
    nav: [
      { label: 'فروش گروه', href: '#sell' },
      { label: 'نکات قبل از فروش', href: '#tips' },
      { label: 'لیست قیمت', href: '#prices' },
    ],
    hero: {
      badge: 'افزایش قیمت ده درصدی ۲۰۲۲ به قبل',
      titleStart: 'فروش گروه تلگرام شما',
      titleHighlight: 'به بهترین قیمت',
      subtitle: 'بزرگترین تیم ارایه خدمات تلگرام با نزدیک به ده سال سابقه در خدمات تلگرام شامل ربات، لینکدونی، ممبر و غیره',
      ctaPrice: 'مشاهده لیست قیمت',
      ctaTips: 'نکات مهم',
      formTitle: 'محاسبه قیمت و فروش',
      formYear: 'سال ساخت گروه',
      formYearPlaceholder: 'انتخاب سال ساخت...',
      formLink: 'لینک گروه',
      formLinkPlaceholder: 'https://t.me/...',
      formLinkHint: 'لینک عمومی (Public) گروه را وارد نمایید.',
      formDesc: 'توضیحات اضافه',
      formDescPlaceholder: '',
      formDescHint: 'توضیح اضافه برای واسطه ها یا شرایط خاص',
      formBuyPrice: 'قیمت خرید ما:',
      formButton: 'فروش گروه',
      formButtonLoading: 'در حال ارسال...',
      submitSuccess: 'اطلاعات با موفقیت ارسال شد! به زودی با شما تماس می‌گیریم.',
      submitError: 'خطا در ارسال اطلاعات. لطفا دوباره تلاش کنید.',
      validationYear: 'لطفا تاریخ درست وارد کنید',
      validationLink: 'لینک گروه ضروری است',
      startFrom: 'شروع از',
    },
    stats: {
      title: 'آمار گروه های ثبت شده',
      subtitle: 'این آمار فقط مربوط به ثبت‌های موفق در سایت ما می‌باشد.',
      chartTitle: 'روند ثبت گروه در هفته جاری',
      items: [
        { label: 'ماه', value: 142 },
        { label: 'کل', value: 5341 },
      ],
      chartData: [
        { name: 'شنبه', groups: 12 },
        { name: 'یک‌شنبه', groups: 19 },
        { name: 'دوشنبه', groups: 15 },
        { name: 'سه‌شنبه', groups: 28 },
        { name: 'چهارشنبه', groups: 22 },
        { name: 'پنج‌شنبه', groups: 35 },
        { name: 'جمعه', groups: 45 },
      ]
    },
    features: {
      rightTitle: 'چرا گروه قدیمی تلگرام میخریم؟',
      rightSubtitle: 'گروه های قدیمی چند مزیت دارند و همین مزیت ها باعث ارزش آنها میشود',
      rightItems: [
        'نمایش بالاتر در هنگام جستجو تلگرام',
        'امنیت بیشتر',
        'احتمال پایین تر ریپورت شدن',
        'مناسب کسب و کار ها و شرکت ها'
      ],
      leftTitle: 'چه گروه های خریداری میشوند؟',
      leftSubtitle: 'گروه شما حتما باید یک سری شرایط ساده را داشته باشد',
      leftItems: [
        'حتما سال و تاریخ ساخت گروه باید معلوم باشد',
        'تعداد اعضا اصلا مهم نیست',
        'در صورت کمتر بودن پیام ها از ده پیام گروه ارزان تر خریداری میشود',
        'در صورت نمایش ندادن تاریخ گروه ، آن گروه ارزشی ندارد'
      ]
    },
    priceList: {
      title: 'لیست قیمت خرید گروه',
      subtitle: 'خریدار گروه های قدیمی شما با بالاترین قیمت در بازار.',
      lastUpdate: 'آخرین بروزرسانی: ۱۸ آبان ۱۴۰۴',
      items: [] // Will be generated dynamically
    },
    footer: {
      brandDesc: 'بزرگترین تیم ارایه خدمات تلگرام با نزدیک به ده سال سابقه در خدمات تلگرام شامل ربات، لینکدونی، ممبر و غیره',
      servicesTitle: 'خدمات ما',
      services: [
        { label: 'فروش گروه', href: 'https://numzi.ir/' },
        { label: 'بزرگترین لینکدونی', href: 'https://t.me/Link4you' },
        { label: 'ربات مدیریت گروه', href: 'https://digianti.com/' },
        { label: 'ربات موزیک', href: 'https://t.me/DigiMusic1Bot' },
        { label: 'ربات نجوا', href: 'https://t.me/Numzibot' },
      ],
      socialTitle: 'شبکه‌های اجتماعی',
      support: 'پشتیبانی تلگرام:',
      copyright: '© ۲۰۲۵ تمامی حقوق محفوظ است. طراحی شده با ❤️ توسط تیم دیجی'
    }
  },
  en: {
    dir: 'ltr',
    currencyLabel: 'USD',
    nav: [
      { label: 'Sell Group', href: '#sell' },
      { label: 'Important Tips', href: '#tips' },
      { label: 'Price List', href: '#prices' },
    ],
    hero: {
      badge: '10% Price Increase for 2022 & Older',
      titleStart: 'Sell Your Telegram Group',
      titleHighlight: 'At The Best Price',
      subtitle: 'Largest team providing Telegram services with nearly 10 years of experience including bots, channels, members, and more.',
      ctaPrice: 'View Prices',
      ctaTips: 'Important Tips',
      formTitle: 'Calculate Price & Sell',
      formYear: 'Group Creation Year',
      formYearPlaceholder: 'Select Year...',
      formLink: 'Group Link',
      formLinkPlaceholder: 'https://t.me/...',
      formLinkHint: 'Please enter the public link of the group.',
      formDesc: 'Additional Notes',
      formDescPlaceholder: '',
      formDescHint: 'Extra details for middlemen or special conditions',
      formBuyPrice: 'Our Buying Price:',
      formButton: 'Sell Group',
      formButtonLoading: 'Sending...',
      submitSuccess: 'Information sent successfully! We will contact you soon.',
      submitError: 'Error sending information. Please try again.',
      validationYear: 'Please select a valid year',
      validationLink: 'Group link is required',
      startFrom: 'Starts at',
    },
    stats: {
      title: 'Registered Groups Stats',
      subtitle: 'These statistics only relate to successful registrations on our site.',
      chartTitle: 'Groups Registered This Week',
      items: [
        { label: 'This Month', value: 142 },
        { label: 'Total', value: 5341 },
      ],
      chartData: [
        { name: 'Sat', groups: 12 },
        { name: 'Sun', groups: 19 },
        { name: 'Mon', groups: 15 },
        { name: 'Tue', groups: 28 },
        { name: 'Wed', groups: 22 },
        { name: 'Thu', groups: 35 },
        { name: 'Fri', groups: 45 },
      ]
    },
    features: {
      rightTitle: 'Why We Buy Old Groups?',
      rightSubtitle: 'Old groups have several advantages that make them valuable',
      rightItems: [
        'Higher ranking in Telegram search results',
        'Better security and trust',
        'Lower probability of being reported',
        'Suitable for businesses and companies'
      ],
      leftTitle: 'What Groups Are Bought?',
      leftSubtitle: 'Your group must meet a few simple conditions',
      leftItems: [
        'Creation year/date must be visible',
        'Member count does not matter at all',
        'Groups with less than 10 messages are bought cheaper',
        'If date is not visible, the group has no value'
      ]
    },
    priceList: {
      title: 'Group Purchase Price List',
      subtitle: 'Buyer of your old groups at the highest market price.',
      lastUpdate: 'Last Update: Nov 8, 2024',
      items: [] // Will be generated dynamically
    },
    footer: {
      brandDesc: 'Largest team providing Telegram services with nearly 10 years of experience including bots, channels, members, and more.',
      servicesTitle: 'Our Services',
      services: [
        { label: 'Sell Group', href: 'https://numzi.ir/' },
        { label: 'Link Directory', href: 'https://t.me/Link4you' },
        { label: 'Group Management Bot', href: 'https://digianti.com/' },
        { label: 'Music Bot', href: 'https://t.me/DigiMusic1Bot' },
        { label: 'Najva Bot', href: 'https://t.me/Numzibot' },
      ],
      socialTitle: 'Social Media',
      support: 'Telegram Support:',
      copyright: '© 2025 All rights reserved. Designed with ❤️ by Digi Team'
    }
  }
};