import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  public passwordInput: string = '';
  public passwordConfirmInput: string = '';
  constructor() {}

  ngOnInit() {}
  public getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  public checkingFunc() {
    if (
      this.passwordInput === this.passwordConfirmInput &&
      this.passwordInput !== '' &&
      this.passwordConfirmInput !== ''
    ) {
      console.log('done');
    } else {
      console.log('error');
    }
  }
}
