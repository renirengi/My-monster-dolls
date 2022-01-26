import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, firstValueFrom, map } from 'rxjs';
import { IUser } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';
import { UsersService } from 'src/app/services/users.service';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { RegisterModalComponent } from '../register-modal/register-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {

  private readonly headerModalConfig = {width: '30vw', data: {}};

  public searchString: string = '';
  public currentUser$: BehaviorSubject<IUser|null>;
  public dollsSearchString$: BehaviorSubject<string>;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private dolls: DollsService,
    public dialog: MatDialog
  ) {
    this.currentUser$ = this.usersService.currentUser$;
    this.dollsSearchString$ =this.dolls.dollsSearchString$;
  }

  public onSearch({target}: Event) {
    const str = (target as HTMLInputElement).value;
    const q = str !== '' ? str : undefined;

    this.router.navigate(['/catalog'], { queryParams: { q } });

  }

  public onClean() {
    console.log('clean')
  }

  public onLogout() {
    this.usersService.logOutUser();
  }

  public showLoginModal() {
    this.dialog.open(LoginModalComponent, this.headerModalConfig);
  }

  public showRegisterModal() {
    this.dialog.open(RegisterModalComponent, this.headerModalConfig);
  }

}
