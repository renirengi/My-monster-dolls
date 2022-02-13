import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { first, firstValueFrom, map, Observable, of, switchMap } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDoll } from 'src/app/models';
import { IUser } from 'src/app/models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html'
})
export class CommentModalComponent implements OnInit {
   public user$: Observable<IUser | null>;
   public doll: IDoll;

    public commentForm = new FormGroup({

    textComment: new FormControl('', [Validators.maxLength(500)]),
  });

  constructor(  
    public dialogRef: MatDialogRef<CommentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { doll: IDoll },
    private usersService: UsersService,

  ) {
     this.doll = data.doll;
     this.user$ = this.usersService.currentUser$;
  }

  ngOnInit(): void {
  }

}
