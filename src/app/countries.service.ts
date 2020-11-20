import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://restcountries.eu/rest/v2';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  async getCountries() {
     return this.http.get(`${API_URL}/all`).toPromise();
  }

  async getCountry(code: string) {
    return this.http.get(`${API_URL}/alpha/${code}`).toPromise();
  }
}
