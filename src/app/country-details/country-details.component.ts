import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CountriesService } from '../countries.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  country: Country[];
  borders;

  constructor(private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService, private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let countryName = params.get('name');
      this.countriesService.getCountryByFullName(countryName).subscribe(data => {
        this.country = data ? data : [];
        let bordersFromCounty = this.country[0].borders.join(',');
        this.countriesService.getCountryByAlphaCode(bordersFromCounty).subscribe(borderCountries => {
          this.borders = borderCountries ? borderCountries : [];
          //console.log(this.borders)
        })
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
