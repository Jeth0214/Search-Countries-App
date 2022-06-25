import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { CountriesService } from '../countries.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
})
export class CountryDetailsComponent implements OnInit {

  country: Country[];
  borders;
  countryToBeLoad;

  constructor(private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService, private router: Router,
    private location: Location,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      let countryName = params.get('name');
      this.countryToBeLoad = countryName;
      this.spinner.show();
      this.countriesService.getCountryByFullName(countryName).subscribe(data => {
        if (data) {
          this.spinner.hide()
          this.country = data ? data : [];
          if (this.country[0].borders) {

            let bordersFromCounty = this.country[0].borders.join(',');
            this.countriesService.getCountryByAlphaCode(bordersFromCounty).subscribe(borderCountries => {
              this.borders = borderCountries ? borderCountries : [];
              //console.log(this.borders)
            })
          }
        }
        // console.log(this.country);
      });
    })
  }

  goBack() {
    this.location.back();
  }

  goToBorderCountry(borderCountry) {
    console.log(borderCountry)
    this.countriesService.getCountryByAlphaCode(borderCountry).subscribe(country => {
      console.log(country);
      this.router.navigate(['/countries', country.name]);
    })
  }

}
