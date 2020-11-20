import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://restcountries.eu/rest/v2';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: ban-types
  async getCountries(): Promise<Object> {
     return this.http.get(`${API_URL}/all`).toPromise();
  }

  // tslint:disable-next-line: ban-types
  async getCountry(code: string): Promise<Object> {
    return this.http.get(`${API_URL}/alpha/${code}`).toPromise();
  }
}
