import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription, tap } from 'rxjs';
import { DollsService } from '../../services/dolls.service';

@Component({
  selector: 'catalog-filters',
  templateUrl: './catalog-filters.component.html',
})
export class CatalogFiltersComponent implements OnInit, OnDestroy {
  @Output() filtersChanged = new EventEmitter<{ [key: string]: string }>();

  private subscription: Subscription = new Subscription();

  public filtersForm = new FormGroup({
    character: new FormControl([]),
    year: new FormControl([]),
    type: new FormControl([]),
    series: new FormControl([]),
    exclusive: new FormControl([]),
    notReissue: new FormControl(false),
    q: new FormControl('')
  });

  public characters$: Observable<string[]>;

  public years$: Observable<string[]>;

  public types$: Observable<string[]>;

  public serieses$: Observable<string[]>;

  public exclusives$: Observable<string[]>;

  constructor(private dollsService: DollsService, private route: ActivatedRoute) {
    this.characters$ = this.dollsService.getAvailable('character');
    this.years$ = this.dollsService.getAvailable('year');
    this.types$ = this.dollsService.getAvailable('type');
    this.serieses$ = this.dollsService.getAvailable('series');
    this.exclusives$ = this.dollsService.getAvailable('exclusive')
  }

  public ngOnInit() {
    const searchString$ = this.route.queryParams.pipe(map(params => params['q'])).pipe(
      tap((q) => {
        this.filtersForm.patchValue({q});
        this.dollsService.dollsSearchString = q || '';
        this.onChange();
      })
    );

    this.subscription.add(searchString$.subscribe());
  }

  public ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  public onChange() {
    let filterParams: { [key: string]: string } = {};

    filterParams = Object.entries(this.filtersForm.value).reduce((acc, [key, value]) => {
      let keyString: string;
      let valueString: string;

      if (typeof value === 'string') {
        keyString = key;
        valueString = value;
        acc = {...acc, [keyString]: valueString};
      } else if (Array.isArray(value) && value.length > 0) {
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
