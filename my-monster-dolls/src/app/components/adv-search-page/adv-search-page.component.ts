import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IDoll } from '../../models';
import { DollsService } from '../../services/dolls-service.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-adv-search-page',
  templateUrl: './adv-search-page.component.html',
})
export class AdvSearchPageComponent implements OnInit {
  public dolls!: IDoll[];
  public lastPage = 1;
  public type = new FormControl();
  public character = new FormControl();
  public series = new FormControl();
  public typeList: string[] = [
    'Doll',
    'Playset',
    'Multipack',
    'Plush',
    'Budget',
    'Create-A-Monster',
    'Electrocuties',
    'Fashion Packs',
    'Fash’ems',
    'Fright-Mares',
    'Funko Pop!',
    'Apptivity – Finders Creepers',
    'Inner Monstert',
    'Mega Bloks',
    'Minis',
    'Monster Cross',
    'Monster Pen',
    'Ornaments',
    'Rock Candy',
    'Scary Cute Figures',
    'Secret Creepers',
    'Vinyl',
  ];
  public characterList: string[] = [
    'something here'
  ]
  public seriesList: string[] = [
    'something here'
  ]
  public typesOfShoes: string[] = [
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
  ];
  constructor(private dollsService: DollsService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.dolls = await lastValueFrom(
      this.dollsService.getDollsPage(this.lastPage)
    );
  }

  public goToSearchPage() {
    this.router.navigate(['/search-component']);
  }

  public async onLoadMore() {
    const newDolls = await lastValueFrom(
      this.dollsService.getDollsPage(this.lastPage + 1)
    );

    this.dolls = [...this.dolls, ...newDolls];
    this.lastPage += 1;
  }

}
