import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom, Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { IUser} from 'src/app/models';
import { lastValueFrom } from 'rxjs';



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
})
export class UserPageComponent implements OnInit {
  public user: IUser|null = null;
  private userID:number|string;
  public countries$: Observable<Object>;
  public showConfirmation = true;
  public passwordInput: string = '';
  public passwordConfirmInput: string = '';

  public userForm = new FormGroup({
   avatar: new FormControl(''),
    phone: new FormControl('',[Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{9}$/)]),
    realName: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(25),
    ]),
    about: new FormControl('', [
      Validators.minLength(25),
      Validators.maxLength(100),
    ]),
    country: new FormControl(''),

  });


  constructor(private usersService: UsersService, private http: HttpClient,) {
    this.countries$ = this.http.get('../../../assets/contries.json');
    this.userID = " ";
  }

  async ngOnInit() {
    this.user = await firstValueFrom(this.usersService.currentUser$);
    if(this.user!==null) {
      this.updateProfile();
      this.userID=this.user?.id;
    }
  }

  public updateProfile() {
    this.userForm.patchValue({
      realName: this.user?.personalData.realName,
      avatar: this.user?.avatar,
      phone: this.user?.personalData.phone,
      about: this.user?.personalData.about,
      country: this.user?.personalData.country,
    });
  }


  public onSubmit() {
    const country = { country: this.userForm.value['country']}
    const phone = { phone: this.userForm.value['phone'] };
    const realName = { realName: this.userForm.value['realName'] };
    const about = { about: this.userForm.value['about'] };
    const avatar = { avatar: this.userForm.value['avatar'] };
    console.log(country);
    this.http.patch(`http://localhost:3000/users/${this.userID}`,
    {
      "personalData":{
    "realName": realName.realName,
     "phone": phone.phone,
     "about": about.about,
     "country": country.country
      },

     "avatar": avatar.avatar,

    }).subscribe(
    data => {
    console.log("PUT Request is successful ", data);
    },
    error => {
    console.log("Error", error);
    }
    );
  }
}
