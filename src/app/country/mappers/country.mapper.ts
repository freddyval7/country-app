import type { Country } from '../interfaces/country.interface';
import type { RESTCountry } from '../interfaces/rest-countries.interfaces';

export class CountryMapper {
  static mapRESTCountryToCountry(item: RESTCountry): Country {
    return {
      cca2: item.cca2,
      flag: item.flag,
      flagSvg: item.flags.svg,
      name: item.translations['spa'].common ?? 'No Spanish Name',
      capital: item.capital.join(', '),
      population: item.population,
    };
  }

  static mapRESTCountryToCountryArray(items: RESTCountry[]): Country[] {
    return items.map(this.mapRESTCountryToCountry);
  }
}
