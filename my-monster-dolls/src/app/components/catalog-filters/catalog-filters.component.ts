import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';




@Component({
  selector: 'catalog-filters',
  templateUrl: './catalog-filters.component.html',
})


export class CatalogFiltersComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<{[key: string]: string}>();

  private filterParams: {[key: string]: string} = {};

  yearControl = new FormControl();

  years = [
    {value: '2010', name: '2010'},
    {value: '2011', name: '2011'},
    {value: '2012', name: '2012'},
    {value: '2013', name: '2013'},
    {value: '2014', name: '2014'},
    {value: '2015', name: '2015'},
    {value: '2016', name: '2016'},
    {value: '2017', name: '2017'},
    {value: '2018', name: '2018'},
    {value: '2019', name: '2019'},
    {value: '2020', name: '2020'},
    {value: '2021', name: '2021'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onYearClick(event: any) {
    let array = this.yearControl.value;
    let arrayYears:string[]=[];
    array.forEach((elem:any) => arrayYears.push(`(${elem.name})`));
    let string = arrayYears.join('|');
    this.filterParams['year_like'] = string;
    this.filtersChanged.emit(this.filterParams);
  }


  onExclusiveClick(event: any) {
    if (event.checked) {
      this.filterParams['exclusive_like'] = '';
    } else {
      delete this.filterParams['exclusive_like'];
    }

    this.filtersChanged.emit(this.filterParams);
  }

  onComicConClick(event: any) {
    if (event.checked) {
      this.filterParams['exclusive_like'] = 'Comic Con';
    } else {
      delete this.filterParams['exclusive_like'];
    }

    this.filtersChanged.emit(this.filterParams);
  }
  onSkullectorClick(event: any) {
    if (event.checked) {
      this.filterParams['series_like'] = 'Skullector';
    } else {
      delete this.filterParams['series_like'];
    }

    this.filtersChanged.emit(this.filterParams);
  }

  onReissueClick(event: any) {
    if (event.checked) {
      this.filterParams['reissue_like'];
    } else {
      delete this.filterParams['reissue_like'];
    }

    this.filtersChanged.emit(this.filterParams);
  }




}
