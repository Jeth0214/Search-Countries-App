import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements OnInit {
  @Input() regions: string[];
  @Output() region = new EventEmitter<string>();

  showDropLists: boolean = false;
  dropDownTitle = 'Filter By Region'


  constructor(private router: Router) { }

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
    if (region === 'All Countries') {
      this.regions.pop();
      this.dropDownTitle = 'Filter By Region';
    }
    else {
      if (this.regions.indexOf('All Countries') === -1) {

        this.regions.push('All Countries');
        this.dropDownTitle = region
      }
    }
    this.showDropLists = false;
    this.region.emit(region)


  }

}
