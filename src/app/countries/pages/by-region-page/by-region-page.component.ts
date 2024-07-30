import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent {
  public region: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchRegion(term: string): void {
    this.countriesService.searchByRegion(term).subscribe((region) => {
      this.region = region;
    });
  }
}
