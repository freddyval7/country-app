import type { Country, Currency, Language } from '../interfaces/country.interface';
import type { RESTCountry } from '../interfaces/rest-countries.interfaces';

export class CountryMapper {
  static mapRESTCountryToCountry(item: RESTCountry): Country {
    // Mapear monedas
    const currencies: Currency[] = Object.entries(item.currencies || {}).map(
      ([code, currency]) => ({
        code,
        name: currency.name,
        symbol: currency.symbol,
      }),
    );

    // Mapear idiomas
    const languages: Language[] = Object.entries(item.languages || {}).map(([code, name]) => ({
      code,
      name,
    }));

    return {
      cca2: item.cca2,
      flag: item.flag,
      flagSvg: item.flags.svg,
      name: item.translations['spa'].common ?? 'No Spanish Name',
      capital: item.capital.join(', '),
      population: item.population,
      currencies: currencies,
      languages: languages,
      mainCurrency: currencies[0], // Asignar la primera moneda como principal
      mainLanguage: languages[0]?.name, // Asignar el primer idioma como principal
    };
  }

  static mapRESTCountryToCountryArray(items: RESTCountry[]): Country[] {
    return items.map(this.mapRESTCountryToCountry);
  }
}
