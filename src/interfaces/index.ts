export interface Product {
  brand: Brand;
  gender: string;
  id: string;
  allCategoryIds: string[];
  image: string[];
  name: Name;
  priceByCountry: PriceByCountry[];
  seoKeyword: SeoKeyword;
  url: string;
  __typename: string;
}

export interface Brand {
  id: number;
  name: Name;
  seoKeyword: SeoKeyword;
  __typename: string;
}

export interface Name {
  en: string;
  zh: string;
  ja: string;
  fr: string;
  ko: string;
}

export interface SeoKeyword {
  en: string;
  zh: string;
  ja: string;
  fr: string;
  ko: string;
}

export interface PriceByCountry {
  currency: string;
  formattedLowest: FormattedLowest;
  formattedPrice: string;
  lowest: Lowest;
  regular: number;
  __typename: string;
}

export interface FormattedLowest {
  source: string;
  amount: string;
  isFinalSale: boolean;
}

export interface Lowest {
  source: string;
  amount: number;
  isFinalSale: boolean;
}
