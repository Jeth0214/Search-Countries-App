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
    this.countriesService.getAllCountries().subscribe(data => {
      //console.log(data)
      this.countries = data
    })
  }

  goToCountry(country: Country) {
    console.log(country);
    this.router.navigate(['/countries', country.name]);
  }

}
