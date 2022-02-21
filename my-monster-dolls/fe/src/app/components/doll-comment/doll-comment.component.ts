import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom, Observable } from 'rxjs';
import { IDoll } from 'src/app/models';
import { IUser } from 'src/app/models';
import { IFeedback } from 'src/app/models/feedback';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'doll-comment',
  templateUrl: './doll-comment.component.html',
})
export class DollCommentComponent {
  @Input()
  get doll(): IDoll {
    return this._doll;
  }
  set doll(val: IDoll) {
    this._doll = val;
    this._textfeedbackList = this.getFeedbackList(this._doll.feedback);
  }
  @Output() update = new EventEmitter();
  public user$: Observable<IUser | null>;
  private _doll: IDoll;
  public comment:string = '';
  public _textfeedbackList: Promise<{name: string, text: string, id: number, avatar?: string}[]>;

  constructor(private usersService: UsersService, public dialog: MatDialog) {
    this.user$ = this.usersService.currentUser$;
  }

  private async getFeedbackList(feedback?: IFeedback[]) {
    if (feedback) {
      const feedbackWithText = feedback.filter(fb => !!fb.text);

      if (feedbackWithText.length > 0) {
        const userIds = feedbackWithText.map((fb => fb.userId));
        const users = await firstValueFrom(this.usersService.getUsers(userIds));

        return feedbackWithText.map((fb, index) => ({...users[index], text: fb.text!}));
      }
    }

    return Promise.resolve([]);
  }

  public onClick () {
    this.update.emit(this.comment);
  }


}
