import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoll } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
  public dolls: Observable<IDoll[]>;
  public constructor(
    private dollsService: DollsService,
    ) {}

  public ngOnInit(): void {
    this.dolls = this.dollsService.getDollsPage();
  }

  public clickDoll(id: number) {
    console.log(id);
  }
}
