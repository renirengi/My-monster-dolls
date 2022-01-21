import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { IDoll } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';

@Component({
  selector: 'app-doll-page',
  templateUrl: './doll-page.component.html',
})
export class DollPageComponent {
  public doll$: Observable<IDoll>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dollsService: DollsService
  ) {
    const dollId$ = this.activatedRoute.params.pipe(
      map((params) => params['id'])
    );

    this.doll$ = dollId$.pipe(
      switchMap((id) => this.dollsService.getDollById(id))
    );
  }
}
