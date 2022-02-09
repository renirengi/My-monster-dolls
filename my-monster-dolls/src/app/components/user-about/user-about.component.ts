import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Observable, Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from 'src/app/models';



@Component({
  selector: 'app-user-about',
  templateUrl: './user-about.component.html'
})
export class UserAboutComponent implements OnInit, OnDestroy {
  public user$: Observable<IUser | null>;

  private subscription: Subscription = new Subscription();

  public countries$: Observable<Object>;
  public showConfirmation = true;
  public passwordInput: string = '';
  public passwordConfirmInput: string = '';

  public userForm = new FormGroup({
    avatar: new FormControl(''),
    phone: new FormControl('', [Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{9}$/)]),
    realName: new FormControl('', [Validators.minLength(3), Validators.maxLength(25)]),
    about: new FormControl('', [Validators.minLength(25), Validators.maxLength(100)]),
    country: new FormControl(''),
  });

  constructor(private usersService: UsersService, private http: HttpClient, ) {
    this.countries$ = this.http.get('../../../assets/countries.json');
    this.user$ = this.usersService.currentUser$;
    
    this.subscription.add(this.user$.subscribe((user) => this.updateProfile(user)));
  }

  async ngOnInit() {}

  public updateProfile(user: IUser | null) {
    if (user) {
      this.userForm.patchValue({
        realName: user.personalData.realName,
        avatar: user.avatar,
        phone: user.personalData.phone,
        about: user.personalData.about,
        country: user.personalData.country,
      });
    }
  }

  public onSubmit(user: IUser) {
    const country = { country: this.userForm.value['country'] };
    const phone = { phone: this.userForm.value['phone'] };
    const realName = { realName: this.userForm.value['realName'] };
    const about = { about: this.userForm.value['about'] };
    const avatar = { avatar: this.userForm.value['avatar'] };

    this.http
      .patch(`http://localhost:3000/users/${user.id}`, {
        personalData: {
          realName: realName.realName,
          phone: phone.phone,
          about: about.about,
          country: country.country,
        },

        avatar: avatar.avatar,
      })
      .subscribe(
        (data) => {
          console.log('PUT Request is successful ', data);
        },
        (error) => {
          console.log('Error', error);
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
