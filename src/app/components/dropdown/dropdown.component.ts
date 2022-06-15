import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() regions: string[];
  @Output() region = new EventEmitter<string>();

  showDropLists: boolean = false;
  dropDownTitle = 'Filter By Region'


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
    this.showDropLists = false;
    this.region.emit(region)
    this.dropDownTitle = region
  }

}
