import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, firstValueFrom, map, Observable, switchMap } from 'rxjs';
import { IDoll} from 'src/app/models';
import { IUser } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-doll-page',
  templateUrl: './doll-page.component.html',
})
export class DollPageComponent {
  public doll$: Observable<IDoll>;
  public user$: Observable<IUser | null>;
  public textComment: any;

  public dollHairRatingMock = {
    'poor stitching quality': false,
    'too many styling aids': false,
    'poor material quality': false,
    'oily hair': false,
    'none of the above': false
  };

  public dollBodyRatingMock = {
    'poor plastic quality': false,
    'coating wear': false,
    'scuff marks': false,
    'paintwork defect': false,
    'none of the above': false
  };

  public dollAccessoriesRatingMock = {
    'poor fabric quality': false,
    'fabric fading': false,
    'worn off sequins': false,
    'low waist pants': false,
    'none of the above': false
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private dollsService: DollsService,
    private usersService: UsersService,
    public dialog: MatDialog
  ) {
    const dollId$ = this.activatedRoute.params.pipe(map((params) => params['id']));

    this.doll$ = dollId$.pipe(switchMap((id) => this.dollsService.getDollById(id)));
    this.user$ = this.usersService.currentUser$;
  }

  public async onIHave(id: number) {
    const operation$ = this.user$.pipe(
      first(),
      map((user) => {
        const own = [...(user?.collection?.own || []), id];
        const collection = { ...(user?.collection || {}), own };
        return { ...user, collection } as IUser;
      }),
      switchMap((user) => this.usersService.updateUser(user))
    );

    await firstValueFrom(operation$);
  }

  public async onIWant(id: number) {
    const operation$ = this.user$.pipe(
      first(),
      map((user) => {
        const wanted = [...(user?.collection?.wanted || []), id];
        const collection = { ...(user?.collection || {}), wanted };
        return { ...user, collection } as IUser;
      }),
      switchMap((user) => this.usersService.updateUser(user))
    );
    await firstValueFrom(operation$);
  }

  public async onIWantToSell(id: number) {
    const operation$ = this.user$.pipe(
      first(),
      map((user) => {
        const sell = [...(user?.collection?.sell || []), id];
        const collection = { ...(user?.collection || {}), sell };
        return { ...user, collection } as IUser;
      }),
      switchMap((user) => this.usersService.updateUser(user))
    );
    await firstValueFrom(operation$);
  }

  public inOwnList$(id: number): Observable<boolean> {
    return this.user$.pipe(
      first(),
      map((user) => !!user?.collection?.own?.includes(id))
    );
  }

  public async onRatingUpdate(doll: IDoll, starRating: number) {
    const user = (await firstValueFrom(this.user$)) as IUser;

    this.doll$ = this.dollsService.updateDollFeedback(doll, user.id, {starRating}).pipe(first());
  }

  public async onHairRatingUpdate(doll: IDoll, rating: {[key: string]: boolean}) {
    const user = (await firstValueFrom(this.user$)) as IUser;
    const hair = rating;
    this.doll$ = this.dollsService.updateDollFeedback(doll, user.id, hair).pipe(first());
  }

  public async onBodyRatingUpdate(doll: IDoll, rating: {[key: string]: boolean}) {
    const user = (await firstValueFrom(this.user$)) as IUser;
    const body = rating;
    this.doll$ = this.dollsService.updateDollFeedback(doll, user.id, body).pipe(first());
  }

  public async onAccessoriesRatingUpdate(doll: IDoll, rating: {[key: string]: boolean}) {
    const user = (await firstValueFrom(this.user$)) as IUser;
    const accessories = rating;
    this.doll$ = this.dollsService.updateDollFeedback(doll, user.id, accessories).pipe(first());
  }

  public getStarRatingFromDoll(doll: IDoll): number {
    const starRating = doll.feedback?.map((feedback) => feedback.starRating).filter((val) => !!val) || [];
    const average = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;
    return Math.round(average(starRating as number[]));
  }

  public getHairRatingFromDoll(doll: IDoll) {
    const hairRating = doll.feedback?.map((feedback) => feedback.text).filter((val) => !!val) || [];
    return hairRating;
  }

   public async onCommentUpdate(doll: IDoll, text: string) {
    const user = (await firstValueFrom(this.user$)) as IUser;
    this.doll$ = this.dollsService.updateDollFeedback(doll, user.id, {text}).pipe(first());
  }

   public getDollTextComment(doll: IDoll): Observable<string> {
    return this.user$.pipe(
      map((user) => {
        const userFeedback = doll.feedback?.find((fb) => (user as IUser).id === fb.userId);

        return userFeedback ? userFeedback.text || '' : '';
      })
    );
  }
}
