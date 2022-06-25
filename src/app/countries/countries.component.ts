import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { CountriesService } from '../countries.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
})
export class CountriesComponent implements OnInit {

  countries: Country[];
  showSpinner = false;

  constructor(private countriesService: CountriesService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.showSpinner = true;
    this.spinner.show();
    this.countriesService.getAllCountries().subscribe(data => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.countries = data;
      this.spinner.hide();
      this.showSpinner = false;
    })
  }

  goToCountry(country: Country) {
    this.router.navigate(['/countries', country.name]);
  }

  filterByRegion(region) {
    this.showSpinner = true;
    this.spinner.show();
    this.countriesService.getCountriesByRegion(region).subscribe(countries => {
      this.countries = countries;
      this.spinner.hide();
      this.showSpinner = false;
    },
    );
  }

}
