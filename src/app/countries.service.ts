import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, shareReplay } from 'rxjs';
import { Country } from './models/country';

const DATASET_URL = 'https://cdn.jsdelivr.net/gh/mledoze/countries@master/countries.json';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private countries$: Observable<Country[]>;

  constructor(private http: HttpClient) { }

  private mapCountry = (c: any): Country => ({
    name: c.name?.common,
    topLevelDomain: c.tld || [],
    alpha2Code: c.cca2,
    alpha3Code: c.cca3,
    callingCodes: c.idd?.root ? (c.idd.suffixes || ['']).map((s: string) => c.idd.root + s) : [],
    capital: c.capital ? c.capital.join(', ') : '',
    altSpellings: c.altSpellings || [],
    region: c.region,
    continent: c.region,
    latlng: c.latlng,
    demonym: c.demonyms?.eng?.m,
    area: c.area,
    borders: c.borders || [],
    nativeName: c.name?.native && Object.keys(c.name.native).length
      ? (Object.values(c.name.native)[0] as any).common
      : c.name?.common,
    numericCode: c.ccn3,
    currencies: c.currencies
      ? Object.entries(c.currencies).map(([code, v]: [string, any]) => ({ code, name: v.name, symbol: v.symbol }))
      : [],
    languages: c.languages
      ? Object.entries(c.languages).map(([code, name]: [string, any]) => ({ iso639_1: code, iso639_2: code, name, nativeName: name }))
      : [],
    translations: c.translations,
    flags: c.cca2
      ? { svg: `https://flagcdn.com/${c.cca2.toLowerCase()}.svg`, png: `https://flagcdn.com/w320/${c.cca2.toLowerCase()}.png` }
      : { svg: '', png: '' },
    regionalBlocs: [],
    cioc: c.cioc,
    independent: c.independent,
    subregion: c.subregion,
  });

  private getDataset(): Observable<Country[]> {
    if (!this.countries$) {
      this.countries$ = this.http.get<any[]>(DATASET_URL).pipe(
        map(data => data.map(this.mapCountry)),
        shareReplay(1)
      );
    }
    return this.countries$;
  }

  getAllCountries(): Observable<Country[]> {
    return this.getDataset();
  }

  getCountryByName(name: string): Observable<Country[]> {
    const term = name.trim().toLowerCase();
    return this.getDataset().pipe(
      map(countries => countries.filter(c => c.name.toLowerCase().includes(term))),
      catchError(() => of([]))
    );
  }

  getCountryByFullName(name: string): Observable<Country[]> {
    const term = name.trim().toLowerCase();
    return this.getDataset().pipe(
      map(countries => countries.filter(c => c.name.toLowerCase() === term)),
      catchError(() => of([]))
    );
  }

  getCountryByAlphaCode(code: string): Observable<Country[]> {
    const codes = code.split(',').map(c => c.trim().toUpperCase());
    return this.getDataset().pipe(
      map(countries => countries.filter(c => codes.includes(c.alpha3Code) || codes.includes(c.alpha2Code)))
    );
  }

  getCountriesByRegion(region): Observable<Country[]> {
    return this.getDataset().pipe(
      map(countries => countries.filter(c => c.region?.toLowerCase() === region?.toLowerCase()))
    );
  }
}
