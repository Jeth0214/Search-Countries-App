import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from './models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseURL: string = 'https://restcountries.com/v2'

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseURL}/all`);
  }

  getCountryByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseURL}/name/${name}`).pipe(
      catchError(error => {
        console.log('Error', error)
        return of([])
      })
    );
  }

  getCountryByAlphaCode(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.baseURL}/alpha/${code}`);
  }

  getCountriesByRegion(region): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseURL}/region/${region}`);
  }
}
