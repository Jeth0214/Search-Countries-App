import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { CountriesService } from '../countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: Country[];

  constructor(private countriesService: CountriesService, private router: Router) { }

  ngOnInit(): void {
    this.getCountries();

  }

  getCountries() {
    this.countriesService.getAllCountries().subscribe(data => {
      this.countries = data;
    })
  }

  goToCountry(country: Country) {
    this.router.navigate(['/countries', country.name]);
  }

  filterByRegion(region) {
    this.countriesService.getCountriesByRegion(region).subscribe(countries => {
      this.countries = countries
    },
    );
  }

}
