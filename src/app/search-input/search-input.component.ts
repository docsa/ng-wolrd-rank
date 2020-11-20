import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent  {

  constructor() { }

  @Output()
  filter: EventEmitter<string> = new EventEmitter<string>();

  filterList($event) {
    this.filter.emit($event.target.value)
  }

}
