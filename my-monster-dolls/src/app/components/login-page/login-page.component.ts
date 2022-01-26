import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
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

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  public onSubmit() {
    const email = this.loginForm.value['email'];
    const password = this.loginForm.value['password'];

    this.result$ = this.usersService.loginUser(email, password).pipe(
      map((result) => result ? 'Success' : 'nope')
    );
  }

  public goToRegisterPage() {
    this.router.navigate(['/register']);
  }

  public goToUserPage() {
    this.router.navigate(['/user']);
  }

}
