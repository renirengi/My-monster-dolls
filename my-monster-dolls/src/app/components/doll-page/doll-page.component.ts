import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, firstValueFrom, map, Observable, switchMap } from 'rxjs';
import { IDoll } from 'src/app/models';
import { IUser } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';

const dollFeedbackRatingDefaut = {
  hair: {
    'poor stitching quality': false,
    'too many styling aids': false,
    'poor material quality': false,
    'oily hair': false,
    'none of the above': false,
  },
  body: {
    'poor plastic quality': false,
    'coating wear': false,
    'scuff marks': false,
    'paintwork defect': false,
    'none of the above': false,
  },
  accessories: {
    'poor fabric quality': false,
    'fabric fading': false,
    'worn off sequins': false,
    'low waist pants': false,
    'none of the above': false,
  },
};

@Component({
  selector: 'doll-page',
  templateUrl: './doll-page.component.html',
})
export class DollPageComponent {
  public doll$: Observable<IDoll>;
  public user$: Observable<IUser | null>;
  public textComment: any;

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

  public async onIHave(id: number, user: IUser) {
    const own = [...(user?.collection?.own || []), id];
    const collection = { ...(user?.collection || {}), own };
    const updatedUser = { ...user, collection };

    await firstValueFrom(this.usersService.updateUser(updatedUser));
  }

  public async onIWant(id: number, user: IUser) {
    const wanted = [...(user?.collection?.wanted || []), id];
    const collection = { ...(user?.collection || {}), wanted };
    const updatedUser = { ...user, collection };

    await firstValueFrom(this.usersService.updateUser(updatedUser));
  }

  public inOwnList(id: number, user: IUser): boolean {
    return !!user?.collection?.own?.includes(id);
  }

  public async onStarRatingUpdate(doll: IDoll, user: IUser, starRating: number) {
    this.doll$ = this.dollsService.updateDollFeedback(doll, user.id, { starRating }).pipe(first());
  }

  public async onRatingUpdate(
    doll: IDoll,
    user: IUser,
    type: 'hair' | 'body' | 'accessories',
    rating: { [key: string]: boolean }[]
  ) {
    this.doll$ = this.dollsService.updateDollFeedback(doll, user.id, { [type]: rating }).pipe(first());
  }

  public getUserRatingByType(
    doll: IDoll,
    user: IUser,
    type: 'hair' | 'body' | 'accessories'
  ): { [key: string]: boolean } {
    const feedback = doll.feedback?.find((fb) => fb.userId === user.id);
    const typedRating = (feedback && feedback[type]) || dollFeedbackRatingDefaut[type];

    return typedRating as { [key: string]: boolean };
  }

  public getStarRatingFromDoll(doll: IDoll): number {
    const starRating = doll.feedback?.map((feedback) => feedback.starRating).filter((val) => !!val) || [];
    const average = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;
    return Math.round(average(starRating as number[]));
  }

  public async onCommentUpdate(doll: IDoll, user: IUser, text: string) {
    this.doll$ = this.dollsService.updateDollFeedback(doll, user.id, { text }).pipe(first());
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
