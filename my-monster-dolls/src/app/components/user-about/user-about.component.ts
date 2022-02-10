import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Observable, Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from 'src/app/models';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-user-about',
  templateUrl: './user-about.component.html'
})
export class UserAboutComponent {
  public currentUser: IUser;
   public user$: Observable<IUser | null>;
  
  public countries$: Observable<Object>;
 
  public userForm = new FormGroup({
    avatar: new FormControl(''),
    phone: new FormControl('', [Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{9}$/)]),
    realName: new FormControl('', [Validators.minLength(3), Validators.maxLength(25)]),
    about: new FormControl('', [Validators.minLength(25), Validators.maxLength(100)]),
    country: new FormControl(''),
  });

  constructor(private usersService: UsersService, private http: HttpClient, public dialogRef: MatDialogRef<UserAboutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user:IUser}, ) {
    this.countries$ = this.http.get('../../../assets/countries.json');
    this.user$ = this.usersService.currentUser$;
    this.currentUser = data.user;
   }

  
}
