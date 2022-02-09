import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom, Observable } from 'rxjs';
import { IDoll, IUserLotData } from 'src/app/models';
import { IUser } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';
import { UsersService } from 'src/app/services/users.service';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'sell',
  templateUrl: './sell.component.html'
})
export class SellComponent {
  private _user: IUser;
  public description: string;
  public price: string;
  public photo: string;


  @Input()
  get user(): IUser {
    return this._user;
  }

  set user(user: IUser) {
    this._user = user;
    const sellDollsIds = user.collection?.sell?.map(elem => elem.itemId);
    user.collection?.sell?.forEach(elem => {
      this.description=elem.description;
      this.price=elem.price;
      this.photo=elem.photos[0]}
      );
   if(sellDollsIds!==undefined){
     this.dolls$ = forkJoin(sellDollsIds.map((id: number) => this.dollsService.getDollById(id))) as Observable<IDoll[]>;
   }

  }

  constructor(private dollsService: DollsService, private usersService: UsersService, public dialog: MatDialog, private http: HttpClient,) { }

   public dolls$: Observable<IDoll[]>;

   async onDelete(id: number) {
    const { collection } = this.user;
    const sell = collection!.sell?.filter((elem) => elem.itemId !== id);

   await firstValueFrom(this.usersService.updateUser({ ...this._user, collection: { ...collection, sell } }));
  }

   async onRevert(id: number){
     const { collection } = this.user;
     const sell = collection!.sell?.filter((elem) => elem.itemId !== id);
     collection!.own?.push(id);
     const own = collection!.own;

     await firstValueFrom(this.usersService.updateUser({ ...this._user, collection: { ...collection, own, sell } }));
   }

}
