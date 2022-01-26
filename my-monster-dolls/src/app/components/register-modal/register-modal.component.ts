import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { UserRights } from 'src/app/models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'register-modal',
  templateUrl: './register-modal.component.html',
})
export class RegisterModalComponent implements OnInit {

  public showConfirmation = true;
  public passwordInput: string = '';
  public passwordConfirmInput: string = '';

  public registerForm = new FormGroup({
    birthday: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.minLength(3), Validators.maxLength(25)]),
    password: new FormControl('', [Validators.minLength(3), Validators.maxLength(16)]),
    passwordConfirmation: new FormControl('', [Validators.minLength(3), Validators.maxLength(16)]),
  });

  constructor(
    public dialogRef: MatDialogRef<RegisterModalComponent>,
    private usersService: UsersService
  ) {}

  ngOnInit() {}

  public async onSubmit() {
    const id = 0;
    const email = this.registerForm.value['email'];
    const name = this.registerForm.value['name'];
    const password = this.registerForm.value['password'];
    const personalData = {birthday: this.registerForm.value['birthday']};
    const rights = this.getRightsFromDate(personalData.birthday);
    const user = {id, email, name, password, rights, personalData};

    await firstValueFrom(this.usersService.addUser(user));
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private getRightsFromDate(date: Date): UserRights {
    let y18 = new Date((new Date()).setFullYear((new Date).getFullYear()-18));

    if (date < y18 ) {
      return UserRights.collector;
    } else {
      return UserRights.сhild;
    }
  }

}
