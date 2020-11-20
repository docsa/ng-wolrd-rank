import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountriesListComponent } from './countries-list/countries-list.component'

const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: CountriesListComponent },
    { path: 'country/:code', component: CountryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
