import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { CountriesService } from '../countries.service';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: Country[];
  // countries$!: Observable<Country[]>;
  private searchTerm = new Subject<string>();
  noCountryFound: boolean = false;

  constructor(private countriesService: CountriesService, private router: Router) {

  }

  ngOnInit(): void {
    //this.countries$ = this.countriesService.getAllCountries();
    this.getCountries();

  }

  getCountries() {
    this.countriesService.getAllCountries().subscribe(data => {
      this.countries = data;
    })
  }

  goToCountry(country: Country) {
    // console.log(country);
    this.router.navigate(['/countries', country.name]);
  }

  filterByRegion(region) {
    console.log(region);
    // /this.countries$ = this.countriesService.getCountriesByRegion(region);
    this.countriesService.getCountriesByRegion(region).subscribe(countries => {
      this.countries = countries
    },
    );
  }

}
