import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: 'countries/:name', component: CountryDetailsComponent },
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
