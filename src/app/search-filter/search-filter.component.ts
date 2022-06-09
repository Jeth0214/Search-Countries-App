import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, filter, map, Observable, retry, startWith, Subject, switchMap, tap } from 'rxjs';
import { CountriesService } from '../countries.service';
import { Country } from '../models/country';

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<string>();

  regions: string[] = REGIONS;
  countries$!: Observable<Country[]>;
  foundCountry: boolean = false;
  searchBox: FormControl = new FormControl('');

  private searcTerms = new Subject<string>();


  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.countries$ = this.searchBox.valueChanges.pipe(
      map(search => search.trim()),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.countryService.getCountryByName(term).pipe(
        retry(3),
        startWith([])
      )),
    )
  }

  onFilter(e) {
    let region = e.target.value;
    this.filter.emit(region);
  }

  onSearch(term: string): void {
    this.searcTerms.next(term.trim());
  }
}
