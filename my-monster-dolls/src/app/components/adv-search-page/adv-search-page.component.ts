import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDoll } from '../../models';
import { DollsService } from '../../services/dolls-service.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-adv-search-page',
  templateUrl: './adv-search-page.component.html'
})
export class AdvSearchPageComponent implements OnInit {

  public dolls!: IDoll[];
  public lastPage = 1;

  constructor(private dollsService: DollsService, private router: Router) { }


  async ngOnInit(): Promise<void> {
    this.dolls = await lastValueFrom(this.dollsService.getDollsPage(this.lastPage));
    const sortYears = document.querySelector('.sort-years') as HTMLSelectElement;
    sortYears.addEventListener('change', (e)=>this.getYear(Number(sortYears.value)));

  }

  public async getYear (year: number) {
    console.log(4545);
    const newDolls = await lastValueFrom(this.dollsService.getDollByYear(year));
   console.log (newDolls);
   
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
