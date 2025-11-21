export type LanguageCode = 'fa' | 'en';
export type CurrencyCode = 'toman' | 'usd';

export interface PriceData {
  id: string;
  labels: Record<LanguageCode, string>;
  prices: Record<CurrencyCode, number>;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatData {
  label: string;
  value: number;
}

export interface ChartData {
  name: string;
  groups: number;
}

export interface Content {
  dir: 'rtl' | 'ltr';
  currencyLabel: string;
  nav: NavItem[];
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrice: string;
    ctaTips: string;
    formTitle: string;
    formYear: string;
    formYearPlaceholder: string;
    formLink: string;
    formLinkPlaceholder: string;
    formLinkHint: string;
    formDesc: string;
    formDescPlaceholder: string;
    formDescHint: string;
    formBuyPrice: string;
    formButton: string;
    formButtonLoading: string;
    submitSuccess: string;
    submitError: string;
    validationYear: string;
    validationLink: string;
    startFrom: string;
  };
  stats: {
    title: string;
    subtitle: string;
    chartTitle: string;
    items: StatData[];
    chartData: ChartData[];
  };
  features: {
    rightTitle: string;
    rightSubtitle: string;
    rightItems: string[];
    leftTitle: string;
    leftSubtitle: string;
    leftItems: string[];
  };
  priceList: {
    title: string;
    subtitle: string;
    lastUpdate: string;
    items: { id: string; label: string; price: string }[]; // Derived for display
  };
  footer: {
    brandDesc: string;
    servicesTitle: string;
    services: NavItem[];
    socialTitle: string;
    support: string;
    copyright: string;
  };
}