import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, firstValueFrom, map, Observable, of, switchMap } from 'rxjs';
import { IDoll } from 'src/app/models';
import { IUser } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';
import { UsersService } from 'src/app/services/users.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'wanted',
  templateUrl: './wanted.component.html'
})
export class WantedComponent {
 private _user: IUser;

@Input()
get user(): IUser {
  return this._user;
}
set user(user: IUser) {
  this._user = user;
  const wantedDollsIds = user.collection?.wanted || [];

  this.dolls$ = forkJoin(wantedDollsIds.map((id: number) => this.dollsService.getDollById(id))) as Observable<IDoll[]>;
}

public dolls$: Observable<IDoll[]>;

constructor(private dollsService: DollsService, private usersService: UsersService) {}



async onDelete(id: number) {
  const { collection } = this.user;
  const wanted = collection!.wanted?.filter((elem) => elem !== id);

  await firstValueFrom(this.usersService.updateUser({ ...this._user, collection: { ...collection, wanted } }));
}

async onAddOnCollection(id: number) {
  const { collection } = this.user;
  const wanted = collection!.wanted?.filter((elem) => elem !== id);
  collection!.own?.push(id);
     const own = collection!.own;

  await firstValueFrom(this.usersService.updateUser({ ...this._user, collection: { ...collection, own, wanted } }));
}
}


