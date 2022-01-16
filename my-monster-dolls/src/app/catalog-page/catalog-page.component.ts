import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoll } from '../models';
import { DollsService } from '../services/dolls-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  public doll1$!: Observable<IDoll>;

  constructor(private dollsService: DollsService, private router: Router) { }

  ngOnInit(): void {
    this.doll1$ = this.dollsService.getDollById(199);

  }

  title = 'routing-app';

  public goToSearchPage() {
    this.router.navigate(['/search-component']);
  }
  public goToAdvSearchPage() {
    this.router.navigate(['/adv-search-component']);
  }

}
