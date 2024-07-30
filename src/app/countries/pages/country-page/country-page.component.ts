import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, } from 'rxjs';


@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css',
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private countriesService: CountriesService,

  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.countriesService.searchCountryById(id)))

      .subscribe((country) => {
        console.log({country});
      });
  }
}
