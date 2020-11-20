import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})

export class CountryDetailComponent implements OnInit {

  country: any;
  borders: object [] = [];

  constructor(
    private route: ActivatedRoute,
    private countryService: CountriesService
  ) { }

  ngOnInit(): void {
    const countryCode = this.route.snapshot.paramMap.get('code');
    // building borders array
    this.borders = [];
    this.countryService.getCountry(countryCode).then((data: any) => {
      this.country = data;
      for (const border of this.country.borders) {
        this.countryService.getCountry(border).then((country: any) => {
            this.borders.push(country);
        });
      }
    });
  }

  // map is not possible inline in html : maos an array to whote-separated string
  displayArray(arr, value): string {
    if (arr) {
      const res =  arr.map((item: string[]) => item[value]).join(', ');
      return res;
    }
  }

}
