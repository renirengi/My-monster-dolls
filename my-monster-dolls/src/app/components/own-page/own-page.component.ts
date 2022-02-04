import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, firstValueFrom, map, Observable, of, switchMap } from 'rxjs';
import { IDoll } from 'src/app/models';
import { IUser } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';
import { UsersService } from 'src/app/services/users.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'own-page',
  templateUrl: './own-page.component.html'
})
export class OwnPageComponent implements OnInit {
  public dolls$: Observable<IDoll[]> ;
  public user: IUser|null = null;
  public userCollection: any;
  public dolls: Array<IDoll>;
  ///public images:string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dollsService: DollsService,
    private usersService: UsersService,

  ) {

}

async ngOnInit(){
  this.user = await firstValueFrom(this.usersService.currentUser$);
  this.userCollection = this.user?.collection?.own;

  this.dolls$ = forkJoin(this.userCollection.map((id:number) => this.dollsService.getDollById(id))) as Observable<IDoll[]>;
 }
}
