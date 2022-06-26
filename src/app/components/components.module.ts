import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DropdownComponent,
    ThemeSwitchComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DropdownComponent,
    ThemeSwitchComponent,
    SearchBoxComponent
  ]
})
export class ComponentsModule { }
