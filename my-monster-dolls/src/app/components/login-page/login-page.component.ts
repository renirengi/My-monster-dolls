import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  public result$?: Observable<string>;
  public showConfirmation = true;
  public passwordInput: string = '';
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(16),
    ]),
  });

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  public onSubmit() {
    const email = this.loginForm.value['email'];
    const password = this.loginForm.value['password'];

    this.result$ = this.usersService.loginUser(email, password).pipe(
      map((result) => result ? 'Success' : 'nope')
    );
  }
}
