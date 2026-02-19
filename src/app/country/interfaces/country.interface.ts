export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  code: string;
  name: string;
}

export interface Country {
  cca2: string;
  flag: string;
  flagSvg: string;
  name: string;
  capital: string;
  population: number;
  currencies: Currency[];
  languages: Language[]; // Array de idiomas
  mainCurrency?: Currency;
  mainLanguage?: string; // Opcional: el primer idioma como string
}
