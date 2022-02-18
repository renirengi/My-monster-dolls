import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { IDoll} from 'src/app/models';
import { IUser } from 'src/app/models';
import { IFeedback } from 'src/app/models/feedback';
import { UsersService } from 'src/app/services/users.service';
import { FeedbackService } from 'src/app/services/feedback.service';
import { MatDialog } from '@angular/material/dialog';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';

@Component({
  selector: 'doll-comment',
  templateUrl: './doll-comment.component.html',
})
export class DollCommentComponent implements OnInit{
  private _doll: IDoll;
  public user$: Observable<IUser | null>;
  public feedback$: any;


  @Input() text?: any = '';
  @Input() doll: IDoll;
  @Output() update = new EventEmitter();

  constructor(private usersService: UsersService, public dialog: MatDialog, private feedbackService: FeedbackService ) {
    this.user$ = this.usersService.currentUser$;
  }

  ngOnInit(){
    this.feedback$ = this.feedbackService.getDollFeedback(this.doll.id);
    console.log(this.feedback$);
  }

  async showCommentModal(doll: IDoll) {

    const modalConfig = { width: '50vw', data: { doll } };
    const dialogRef = this.dialog.open(CommentModalComponent, modalConfig);
    const text = await firstValueFrom(dialogRef.afterClosed());
    this.update.emit(text);

  }
}
