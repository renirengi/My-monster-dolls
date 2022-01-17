import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IDoll } from '../../models';
import { DollsService } from '../../services/dolls-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html'
})
export class CatalogPageComponent implements OnInit {

  public dolls!: IDoll[];
  public lastPage = 1;

  constructor(private dollsService: DollsService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.dolls = await lastValueFrom(this.dollsService.getDollsPage(this.lastPage));
  }

  public goToSearchPage() {
    this.router.navigate(['/search-component']);
  }

  public goToAdvSearchPage() {
    this.router.navigate(['/adv-search-component']);
  }

  public async onLoadMore() {
    const newDolls = await lastValueFrom(this.dollsService.getDollsPage(this.lastPage + 1));

    this.dolls = [...this.dolls, ...newDolls];
    this.lastPage += 1;
  }

}
