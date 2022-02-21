import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom, Observable } from 'rxjs';
import { IDoll, IUserLotData } from 'src/app/models';
import { IUser } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';
import { UsersService } from 'src/app/services/users.service';
import { SellModalComponent } from '../sell-modal/sell-modal.component';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'own',
  templateUrl: './own-page.component.html',
})
export class OwnPageComponent {
  private _user: IUser;

  @Input()
  get user(): IUser {
    return this._user;
  }
  set user(user: IUser) {
    this._user = user;
    const ownedDollsIds = user.collection?.own || [];

    this.dolls$ = forkJoin(ownedDollsIds.map((id: number) => this.dollsService.getDollById(id))) as Observable<IDoll[]>;
  }

  public dolls$: Observable<IDoll[]>;

  constructor(private dollsService: DollsService, private usersService: UsersService, public dialog: MatDialog, private http: HttpClient,) {}

  async showSellModal(doll: IDoll) {
    const { collection } = this.user;
    const modalConfig = { width: '30vw', data: { doll } };
    const dialogRef = this.dialog.open(SellModalComponent, modalConfig);
    const result: {description: string, price: string, photo1: string} = await firstValueFrom(dialogRef.afterClosed());
    const {price, description, photo1} = result;
    const sellItem: IUserLotData = { itemId: doll.id, price, description, photos: [photo1] };
    const own = collection!.own?.filter((elem) => elem !== doll.id);
    const sell = [...(collection!.sell || []), sellItem];

    await firstValueFrom(this.usersService.updateUser({ ...this._user, collection: { ...collection, own, sell } }));
  }

  async onDelete(id: number) {
    const { collection } = this.user;
    const own = collection!.own?.filter((elem) => elem !== id);

    await firstValueFrom(this.usersService.updateUser({ ...this._user, collection: { ...collection, own } }));
  }
}
