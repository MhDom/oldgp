export interface PriceItem {
  id: string;
  yearLabel: string;
  price: number;
  priceLabel: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}