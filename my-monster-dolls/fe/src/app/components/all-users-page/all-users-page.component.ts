import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from 'src/app/models';
import { firstValueFrom, lastValueFrom, map } from 'rxjs';

@Component({
  selector: 'all-users-page',
  templateUrl: './all-users-page.component.html'
})
export class AllUsersPageComponent implements OnInit {

  public users!: any;

  constructor(private usersService: UsersService ) { }

  async ngOnInit() {
   this.users = await firstValueFrom(this.usersService.getAllUsers())
    console.log (this.users)
  }

}
