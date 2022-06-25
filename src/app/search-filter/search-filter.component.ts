import { Component, EventEmitter, OnInit, Output } from '@angular/core';

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html'
})
export class SearchFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<string>();

  regions: string[] = REGIONS;
  constructor() { }

  ngOnInit(): void {

  }

  onFilter(region) {
    this.filter.emit(region);
  }

}
