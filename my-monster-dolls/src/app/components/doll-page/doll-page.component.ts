import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, firstValueFrom, map, Observable, of, switchMap } from 'rxjs';
import { IDoll, ITextComment } from 'src/app/models';
import { IUser } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';

@Component({
  selector: 'app-doll-page',
  templateUrl: './doll-page.component.html',
})
export class DollPageComponent {
  public doll$: Observable<IDoll>;
  public user$: Observable<IUser | null>;

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

  public async onRatingUpdate(doll: IDoll, rating: number) {
    const user = await firstValueFrom(this.user$) as IUser;

    this.doll$ = this.dollsService.updateDollStartRating(doll, user.id.toString(), rating).pipe(first());
  }

  public async showCommentModal(doll: IDoll) {
    const modalConfig = { width: '50vw', data: { doll } };
    const dialogRef = this.dialog.open(CommentModalComponent, modalConfig);
    const result = await firstValueFrom(dialogRef.afterClosed());
    const { textFeedback } = result;
    const commentItem: ITextComment = { textFeedback };

    ///const text = [...(textComment?.textFeedback|| []), commentItem];

    ///await firstValueFrom(this.dollsService.updateDoll({ ...doll, commentFeedback: { ...commentFeedback, textComment, text } }));
  }

  public getStarRatingFromDoll(doll: IDoll): number {
    const starRating = doll.feedback?.starRating || {};
    const average = (arr: number[]) => arr.reduce((a,b) => a + b, 0) / arr.length;

    return Math.round(average(Object.values(starRating)));
  }
}
