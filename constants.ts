import { PriceItem, NavItem, StatItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'صفحه اصلی', href: '#' },
  { label: 'فروش گروه', href: '#sell' },
  { label: 'نکات قبل از فروش', href: '#tips' },
  { label: 'لیست قیمت', href: '#prices' },
  { label: 'مقالات', href: '#blog' },
];

export const PRICE_LIST: PriceItem[] = [
  { id: '2015', yearLabel: 'سال ۲۰۱۵', price: 1200000, priceLabel: '۱.۲۰۰ هزار تومان' },
  { id: '2016', yearLabel: 'سال ۲۰۱۶', price: 1000000, priceLabel: '۱ میلیون تومان' },
  { id: '2017', yearLabel: 'سال ۲۰۱۷', price: 950000, priceLabel: '۹۵۰ هزار تومان' },
  { id: '2018', yearLabel: 'سال ۲۰۱۸', price: 950000, priceLabel: '۹۵۰ هزار تومان' },
  { id: '2019', yearLabel: 'سال ۲۰۱۹', price: 950000, priceLabel: '۹۵۰ هزار تومان' },
  { id: '2020', yearLabel: 'سال ۲۰۲۰', price: 900000, priceLabel: '۹۰۰ هزار تومان' },
  { id: '2021', yearLabel: 'سال ۲۰۲۱', price: 900000, priceLabel: '۹۰۰ هزار تومان' },
  { id: '2022', yearLabel: 'سال ۲۰۲۲', price: 900000, priceLabel: '۹۰۰ هزار تومان' },
  { id: '2023', yearLabel: 'سال ۲۰۲۳', price: 700000, priceLabel: '۷۰۰ هزار تومان' },
  { id: '2024-1', yearLabel: '۲۰۲۴ (سه ماه اول)', price: 200000, priceLabel: '۲۰۰ هزار تومان' },
  { id: '2024-2', yearLabel: '۲۰۲۴ (ماه چهارم)', price: 150000, priceLabel: '۱۵۰ هزار تومان' },
  { id: '2024-3', yearLabel: '۲۰۲۴ (ماه پنجم)', price: 100000, priceLabel: '۱۰۰ هزار تومان' },
  { id: '2024-4', yearLabel: '۲۰۲۴ (باقی ماه‌ها)', price: 50000, priceLabel: '۵۰ هزار تومان' },
];

export const STATS: StatItem[] = [
  { label: 'امروز', value: 8 },
  { label: 'هفته', value: 25 },
  { label: 'ماه', value: 142 },
  { label: 'کل', value: 5341 },
];