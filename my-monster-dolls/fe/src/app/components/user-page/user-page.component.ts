import { Component } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from 'src/app/models';
import { MatDialog } from '@angular/material/dialog';
import { UserAboutComponent } from '../user-about/user-about.component';

interface UserFormData {
  avatar: string;
  realName: string;
  country: string;
  phone: string;
  about: string;
}

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
})
export class UserPageComponent {
  public user$: Observable<IUser | null>;

   constructor(private usersService: UsersService, public dialog: MatDialog) {
    this.user$ = this.usersService.currentUser$;
  }

  public async showUserAbout(user: IUser) {
    const modalConfig = { width: '30vw', data: { user } };
    const dialogRef = this.dialog.open(UserAboutComponent, modalConfig);
    const result = (await firstValueFrom(dialogRef.afterClosed())) as UserFormData;

    await firstValueFrom(this.usersService.updateUser(this.getUpdatedUser(user, result)));
  }

  public getUpdatedUser(user: IUser, userFormValues: UserFormData): IUser {
    const { avatar, realName, country, phone, about } = userFormValues;
    const personalData = { ...user.personalData, realName, country, phone, about };

    return { ...user, personalData, avatar };
  }
}
