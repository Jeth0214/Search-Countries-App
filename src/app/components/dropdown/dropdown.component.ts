import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  @Input() regions: Country['region'][];
  @Output() regionEmiiter = new EventEmitter<string>();
  region: Country['region']
  showDropLists: boolean = false;

  get dropDownTitle() {
    return this.region || 'Filter By Region';
  }


  onDrop() {
    this.showDropLists = !this.showDropLists;
  }

  onBlurDrop() {
    setTimeout(() => {
      this.showDropLists = false;
    }, 500);
  }

  onFilter(region: Country['region'] | null) {
    this.region = region
    this.showDropLists = false;
    this.regionEmiiter.emit(region)
  }

}
