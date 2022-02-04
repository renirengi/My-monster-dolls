import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, firstValueFrom, map, Observable, of, switchMap } from 'rxjs';
import { IDoll } from 'src/app/models';
import { IUser } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-doll-page',
  templateUrl: './doll-page.component.html',
})
export class DollPageComponent {
  public doll$: Observable<IDoll>;
  public user$: Observable<IUser|null>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dollsService: DollsService,
    private usersService: UsersService,
  ) {
    const dollId$ = this.activatedRoute.params.pipe(
      map((params) => params['id'])
    );

    this.doll$ = dollId$.pipe(
      switchMap((id) => this.dollsService.getDollById(id))
    );

    this.user$ = this.usersService.currentUser$;
  }

  public async onIHave(id:number){
    const operation$ = this.user$.pipe(
      first(),
      map((user) => {
        const own = [...(user?.collection?.own || []), id];
        const collection = {...(user?.collection || {}), own};
        return {...user, collection} as IUser;
      }),
      switchMap((user) => this.usersService.updateUser(user))
    );

    await firstValueFrom(operation$);
  }

  public async onIWant(id:number){
    const operation$ = this.user$.pipe(
      first(),
      map((user) => {
        const wanted = [...(user?.collection?.wanted || []), id];
        const collection = {...(user?.collection || {}), wanted};
        return {...user, collection} as IUser;
      }),
      switchMap((user) => this.usersService.updateUser(user))
    );
    await firstValueFrom(operation$);
  }

  public async onIWantToSell(id:number){
    const operation$ = this.user$.pipe(
      first(),
      map((user) => {
        const sell = [...(user?.collection?.sell || []), id];
        const collection = {...(user?.collection || {}), sell};
        return {...user, collection} as IUser;
      }),
      switchMap((user) => this.usersService.updateUser(user))
    );
    await firstValueFrom(operation$);
  }

  public inOwnList$(id: number): Observable<boolean> {
    return this.user$.pipe(
      first(),
      map(user => !!user?.collection?.own?.includes(id))
    );
  }

}
