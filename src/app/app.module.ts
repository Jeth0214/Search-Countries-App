import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { SearchFilterComponent } from './search-filter/search-filter.component'
import { DARK_MODE_OPTIONS } from 'angular-dark-mode';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from './components/components.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryDetailsComponent,
    SearchFilterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: DARK_MODE_OPTIONS,
      useValue: {
        storageKey: 'dark-mode'
      }
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
