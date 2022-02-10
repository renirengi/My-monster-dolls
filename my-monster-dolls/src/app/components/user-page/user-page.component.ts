import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, firstValueFrom, } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { IUser, IUserPersonalData } from 'src/app/models';
import { MatDialog } from '@angular/material/dialog';
import { UserAboutComponent } from '../user-about/user-about.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
})
export class UserPageComponent {
  public user$: Observable<IUser | null>;

  constructor(private usersService: UsersService, private http: HttpClient, public dialog: MatDialog) {
    this.user$ = this.usersService.currentUser$;
  }

  async showUserAbout(user: IUser) {
    const modalConfig = { width: '50vw', data: { user } };
    this.dialog.open(UserAboutComponent, modalConfig);

    const dialogRef = this.dialog.open(UserAboutComponent, modalConfig);

    const result: {avatar: string, realName: string, country: string, phone: string, about:string} = await firstValueFrom(dialogRef.afterClosed());
    const newValue: IUser = {
      avatar: result.avatar,
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password,
      rights: user.rights,
      personalData: {
        realName: result.realName,
        country: result.country,
        about: result.about,
        phone: result.phone,
        birthday: user.personalData.birthday,
      }
    }
    
  }
}
