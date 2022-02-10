import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom, map, Observable, tap } from 'rxjs';
import { IDoll, IUserLotData } from 'src/app/models';
import { IUser } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';
import { UsersService } from 'src/app/services/users.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'sell',
  templateUrl: './sell.component.html',
})
export class SellComponent {
  private _user: IUser;

  @Input()
  get user(): IUser {
    return this._user;
  }

  set user(user: IUser) {
    this._user = user;
    this.loadDollsData(user.collection?.sell!)
  }

  constructor(
    private dollsService: DollsService,
    private usersService: UsersService,
    public dialog: MatDialog,
  ) {}

  public dollsData$: Observable<any>;

  async onDelete(id: number) {
    const { collection } = this.user;
    const sell = collection!.sell?.filter((elem) => elem.itemId !== id);

    await firstValueFrom(this.usersService.updateUser({ ...this._user, collection: { ...collection, sell } }));
  }

  async onRevert(id: number) {
    const { collection } = this.user;
    const sell = collection!.sell?.filter((elem) => elem.itemId !== id);
    collection!.own?.push(id);
    const own = collection!.own;

    await firstValueFrom(this.usersService.updateUser({ ...this._user, collection: { ...collection, own, sell } }));
  }

  private loadDollsData(items: IUserLotData[]) {
    const dollsDataObservables: Observable<IDoll>[] = items.map(({itemId}) => this.dollsService.getDollById(itemId));

    this.dollsData$ = forkJoin(dollsDataObservables).pipe(
      map((dolls: IDoll[]) => {
        return dolls.map((doll: IDoll, i: number) => {
          const {price, description, photos} = items[i];

          return {...doll, price, description, photos};
        });
      })
    );
  }
}
