import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-countries.interfaces';

export class CountryMapper {
  static mapRESTCountryToCountry(item: RESTCountry): Country {
    return {
      cca2: item.cca2,
      flag: item.flag,
      flagSvg: item.flags.svg,
      name: item.name.common,
      capital: item.capital[0],
      population: item.population,
    };
  }

  static mapRESTCountryToCountryArray(items: RESTCountry[]): Country[] {
    return items.map(this.mapRESTCountryToCountry);
  }
}
