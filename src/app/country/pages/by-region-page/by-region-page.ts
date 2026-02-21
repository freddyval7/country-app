import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { CountryService } from '../../services/country';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { Region } from '../../interfaces/region.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  activatedRoute = inject(ActivatedRoute);
  route = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic'];
  countryService = inject(CountryService);
  selectedRegion = linkedSignal<Region | null>(() => this.queryParam as Region);

  countryResource = rxResource({
    params: () => ({ region: this.selectedRegion() }),
    stream: ({ params }) => {
      if (!params.region) return of([]);

      this.route.navigate(['/country/by-region'], {
        queryParams: {
          query: params.region,
        },
      });

      return this.countryService.searchByRegion(params.region);
    },
  });
}
