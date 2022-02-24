import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { map, Observable, tap } from "rxjs";
import { UsersService } from "src/app/services/users.service";

const userLoggedIn = 'You are logged in!';
const loginFailed = 'Wrong email or password!'

@Component({
  selector: 'login-modal',
  templateUrl: 'login-modal.component.html',
})
export class LoginModalComponent {
  constructor(
    public dialogRef: MatDialogRef<LoginModalComponent>,
    private usersService: UsersService,
  ) {}

  public result$?: Observable<string>;
  public showConfirmation = true;
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(16),
    ]),
  });

  public onSubmit() {
    const email = this.loginForm.value['email'];
    const password = this.loginForm.value['password'];

    this.result$ = this.usersService.loginUser(email, password).pipe(
      map((result) => result ? userLoggedIn : loginFailed),
      tap((result) => result && this.dialogRef.close())
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
