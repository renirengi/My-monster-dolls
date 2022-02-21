import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-about',
  templateUrl: './user-about.component.html',
})
export class UserAboutComponent {
  public countries$: Observable<Object>;

  public userForm = new FormGroup({
    avatar: new FormControl(''),
    phone: new FormControl('', [Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{9}$/)]),
    realName: new FormControl('', [Validators.minLength(3), Validators.maxLength(25)]),
    about: new FormControl('', [Validators.maxLength(1000)]),
    country: new FormControl(''),
  });

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<UserAboutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: IUser }
  ) {
    this.countries$ = this.http.get('../../../assets/countries.json');
    this.applyFormValues(data.user);
  }

  private applyFormValues(user: IUser): void {
    this.userForm.patchValue({
      avatar: user.avatar,
      phone: user.personalData.phone,
      realName: user.personalData.realName,
      about: user.personalData.about,
      country: user.personalData.country,
    });
  }
}
