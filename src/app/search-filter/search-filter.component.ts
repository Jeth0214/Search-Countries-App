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
  foundCountry: boolean = false;
  countries$!: Observable<Country[]>;
  searchBox: FormControl = new FormControl('');
  showList: boolean = false;
  results;

  private searcTerms = new Subject<string>();

  constructor(private countryService: CountriesService) { }

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
    this.countries$.subscribe(results => {
      this.results = results
      this.showList = results.length > 0 ? true : false;
      console.log(this.showList)
    }
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
