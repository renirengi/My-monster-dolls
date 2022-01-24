import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { IUser} from 'src/app/models';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
})
export class UserPageComponent implements OnInit {
  public countries$: Observable<Object>;
  public showConfirmation = true;
  public passwordInput: string = '';
  public passwordConfirmInput: string = '';

  public userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(25),
    ]),
    password: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(16),
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(16),
    ]),
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

  });

  constructor(private usersService: UsersService, private http: HttpClient,) {
    this.countries$ = this.http.get('../../../assets/contries.json');
  }

  ngOnInit() {
  }

  public async onSubmit() {

    const email = this.userForm.value['email'];
    const name = this.userForm.value['name'];
    const password = this.userForm.value['password'];
    const personalData = { birthday: this.userForm.value['birthday'] };
    const avatar = this.userForm.value['avatar'];
    const phone = { phone: this.userForm.value['phone'] };
    const realName = { realName: this.userForm.value['realName'] };
    const about = { about: this.userForm.value['about'] };
    const user = { email, name, password, personalData, avatar };
  }
}
