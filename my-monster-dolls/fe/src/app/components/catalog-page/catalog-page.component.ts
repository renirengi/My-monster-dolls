import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, lastValueFrom, map } from 'rxjs';
import { IDoll } from '../../models';
import { DollsService } from '../../services/dolls.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html'
})
export class CatalogPageComponent implements OnInit {

  public dolls!: IDoll[];
  private lastPage: number = 1;
  public displayedPage: number|null = 1;
  public showLoadMore: boolean = true;
  public appliedFilters?: {[key: string]: string};

  constructor(private dollsService: DollsService) { }

  async ngOnInit(): Promise<void> {
    this.dolls = await lastValueFrom(this.dollsService.getDollsPage(this.lastPage));
  }

  public async onLoadMore() {
    const newDolls = await lastValueFrom(this.dollsService.getDollsPage(this.lastPage + 1));

    this.dolls = [...this.dolls, ...newDolls];
    this.lastPage += 1;
    this.displayedPage = this.lastPage;
  }

  public async applyFilters(params: {[key: string]: string}) {
    this.dolls = await lastValueFrom(this.dollsService.findDollsByParams(params));
    this.displayedPage = null;
    this.showLoadMore = false;
  }

}
