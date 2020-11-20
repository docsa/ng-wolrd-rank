import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountriesTableComponent } from './countries-table/countries-table.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { MatIconModule } from '@angular/material/icon';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { AppRoutingModule } from './app-routing-module';
import { CountryDetailComponent } from './country-detail/country-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesTableComponent,
    SearchInputComponent,
    CountriesListComponent,
    CountryDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
