import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, firstValueFrom, map, Observable, switchMap } from 'rxjs';
import { IDoll } from 'src/app/models';
import { IUser, IUserLotData } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';
import { UsersService } from 'src/app/services/users.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'watch-user-page',
  templateUrl: './watch-user-page.component.html'
})
export class WatchUserPageComponent implements OnInit {
  public user$: Observable<IUser | null>;
  public collectionDolls$: Observable<IDoll[] | null>;
  public wantedDolls$: Observable<IDoll[] | null>;
  public sellDolls$: Observable<IDoll[] | null>;
  public sellData: IUserLotData[] | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private dollsService: DollsService,
  ) {
    const userId$ = this.activatedRoute.params.pipe(map((params) => params['id']));
    this.user$ = userId$.pipe(switchMap((id) => this.usersService.getUser(id)));

  }

  ngOnInit() {

  }

  public async showCollection() {
    const user = await firstValueFrom(this.user$);
    if (user?.collection?.own) {
      this.collectionDolls$ = forkJoin(user.collection.own.map((id: number) => this.dollsService.getDollById(id))) as Observable<IDoll[]>;
    }
  }

  public async showWanted() {
    const user = await firstValueFrom(this.user$);
    if (user?.collection?.wanted) {
      this.wantedDolls$ = forkJoin(user.collection.wanted.map((id: number) => this.dollsService.getDollById(id))) as Observable<IDoll[]>;
    }
  }

  public async sellWanted() {
    const user = await firstValueFrom(this.user$);
    const sellNumber: number[] = []
    this.sellData = user!.collection!.sell;
    user?.collection?.sell?.forEach((elem) => sellNumber.push(elem.itemId));
    console.log(sellNumber);
    if (sellNumber) {
      this.sellDolls$ = forkJoin(sellNumber.map((id: number) => this.dollsService.getDollById(id))) as Observable<IDoll[]>;
    }
  }

}
