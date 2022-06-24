import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, debounceTime, distinctUntilChanged, filter, map, Observable, retry, startWith, Subject, switchMap, tap } from 'rxjs';
import { CountriesService } from 'src/app/countries.service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit {


  countries$!: Observable<Country[]>;
  searchBox: FormControl = new FormControl('');
  showList: boolean = false;
  countries;

  constructor(private countryService: CountriesService, private router: Router) { }

  ngOnInit(): void {

    this.countries$ = this.searchBox.valueChanges.pipe(
      map(search => search.trim()),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((term: string) => this.countryService.getCountryByName(term).pipe(
        retry(3),
        startWith([])
      )),

    )
    this.countries$.subscribe(countries => {
      this.countries = countries
      this.showList = countries.length > 0 ? true : false;
    }
    )
  }

  goToCountryDetails(country) {
    this.router.navigate(['/countries', country]);
  }

}
