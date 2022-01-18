import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'catalog-filters',
  templateUrl: './catalog-filters.component.html',
})
export class CatalogFiltersComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<{[key: string]: string}>();

  private filterParams: {[key: string]: string} = {};

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onExclusiveClick(event: any) {
    if (event.checked) {
      this.filterParams['exclusive_like'] = '';
    } else {
      delete this.filterParams['exclusive_like'];
    }

    this.filtersChanged.emit(this.filterParams);
  }

}
