/* eslint-disable import/prefer-default-export */
import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css'],
})
export class CountriesListComponent implements OnInit {
  countries = [];

  filteredCountries = [];

  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.countryService.getCountries().then((data: any) => {
      this.countries = data;
      this.filteredCountries = this.countries;
    });
  }

  filterTable(keyword: string): void {
    this.filteredCountries = this.countries.filter(
      (country) => country.name.toLowerCase().includes(keyword)
        || country.region.toLowerCase().includes(keyword)
        || country.subregion.toLowerCase().includes(keyword),
    );
  }

  orderBy = (countries: any[], value: string, direction: string) => {
    if (direction === 'asc') {
      return countries.sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }

    if (direction === 'desc') {
      return countries.sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }

    return countries;
  }

  sortTable(criteria: string): void {
    const params = criteria.split('-');
    this.countries = this.orderBy(this.countries, params[0], params[1]);
  }
}
