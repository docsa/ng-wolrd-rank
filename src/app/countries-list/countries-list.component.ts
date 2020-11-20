import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  countries = [];
  filteredCountries = [];

  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.countryService.getCountries().then((data: any) => {
      this.countries = data;
      this.filteredCountries = this.countries;
    })
  }

  filterTable(keyword) {
    this.filteredCountries = this.countries.filter(
      (country) =>
        country.name.toLowerCase().includes(keyword) ||
        country.region.toLowerCase().includes(keyword) ||
        country.subregion.toLowerCase().includes(keyword)
    );
  }

  orderBy = (countries, value, direction) => {
    if (direction === "asc") {
      return countries.sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }

    if (direction === "desc") {
      return countries.sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }

    return countries;
  };

  sortTable(criteria: string) {
    const params = criteria.split("-")
    this.countries = this.orderBy(this.countries, params[0], params[1])
  }
}
