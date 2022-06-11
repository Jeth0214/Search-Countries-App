import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { SearchFilterComponent } from './search-filter/search-filter.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { DARK_MODE_OPTIONS } from 'angular-dark-mode';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryDetailsComponent,
    SearchFilterComponent,
    ThemeSwitchComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: DARK_MODE_OPTIONS,
      useValue: {
        storageKey: 'dark-mode'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
