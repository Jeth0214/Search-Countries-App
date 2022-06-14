import { Component, OnInit } from '@angular/core';

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  showDropLists: boolean = false;
  regions: string[] = REGIONS;
  region: string;

  constructor() { }

  ngOnInit(): void {
  }

  onDrop() {
    this.showDropLists = !this.showDropLists;
  }

  onBlurDrop() {
    setTimeout(() => {
      this.showDropLists = false;
    }, 500);
  }

  onFilter(region) {
    console.log(region);
    this.showDropLists = false;
  }

}
