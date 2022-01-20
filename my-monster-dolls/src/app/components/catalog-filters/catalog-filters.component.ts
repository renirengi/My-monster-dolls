import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DollsService } from '../../services/dolls-service.service';

@Component({
  selector: 'catalog-filters',
  templateUrl: './catalog-filters.component.html',
})
export class CatalogFiltersComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<{ [key: string]: string }>();

  public filtersForm = new FormGroup({
    character: new FormControl([]),
    year: new FormControl([]),
    type: new FormControl([]),
    series: new FormControl([]),
    exclusive: new FormControl([]),
    notReissue: new FormControl(false),
  });

  public characters$: Observable<string[]>;

  public years$: Observable<string[]>;

  public types$: Observable<string[]>;

  public serieses$: Observable<string[]>;

  public exclusives$: Observable<string[]>;

  constructor(private dollsService: DollsService) {
    this.characters$ = this.dollsService.getAvailable('character');
    this.years$ = this.dollsService.getAvailable('year');
    this.types$ = this.dollsService.getAvailable('type');
    this.serieses$ = this.dollsService.getAvailable('series');
    this.exclusives$ = this.dollsService.getAvailable('exclusive')
  }

  public ngOnInit(): void {}

  public onChange() {
    let filterParams: { [key: string]: string } = {};

    filterParams = Object.entries(this.filtersForm.value).reduce((acc, [key, value]) => {
      let keyString: string;
      let valueString: string;

      if (Array.isArray(value) && value.length > 0) {
        keyString = `${key}_like`;
        valueString = value.reduce((acc, val, i) => i === 0 ? `(${val})`: `${acc}|(${val})`, '');
        acc = {...acc, [keyString]: valueString};
      } else if (typeof value === 'boolean' && value === true) {
        [keyString, valueString] = this.booleanFilterGenerator(key);
        acc = {...acc, [keyString]: valueString};
      }

      return acc;
    }, {});

    this.filtersChanged.emit(filterParams);
  }

  private booleanFilterGenerator(key: string): string[] {
    const config: {[key: string]: () => string[]} = {
      notReissue: () => ['reissue', 'false'],
    };

    return config[key]();
  }

}
