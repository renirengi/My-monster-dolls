import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, firstValueFrom, map, Observable, of, switchMap } from 'rxjs';
import { IDoll, ITextComment } from 'src/app/models';
import { IUser } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';

@Component({
  selector: 'doll-comment',
  templateUrl: './doll-comment.component.html'
})
export class DollCommentComponent {
  private _doll: IDoll;
  public user$: Observable<IUser | null>;

  @Input() 
  get doll(): IDoll {

    return this._doll;
  }
  set doll(doll: IDoll) {
    this._doll = doll;
}
  

  constructor(
     private activatedRoute: ActivatedRoute,
    private dollsService: DollsService,
    private usersService: UsersService,
    public dialog: MatDialog,
  ) {
   
    this.user$ = this.usersService.currentUser$;
    
   }

  

   async showCommentModal(doll: IDoll){
      
       const modalConfig = { width: '50vw', data: { doll } };
       const dialogRef = this.dialog.open(CommentModalComponent, modalConfig);
       const result = await firstValueFrom(dialogRef.afterClosed());
       const {textFeedback} = result;
       const commentItem: ITextComment = { textFeedback };
       //const text = [...(textComment?.textFeedback|| []), commentItem];
   
   ///await firstValueFrom(this.dollsService.updateDoll({ ...doll, commentFeedback: { ...commentFeedback, textComment, text } }));

}
}
