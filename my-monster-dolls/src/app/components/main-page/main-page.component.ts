import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}
  title = 'routing-app';

  public goToSearchPage() {
    this.router.navigate(['/search-component']);
  }
  public goToAdvSearchPage() {
    this.router.navigate(['/adv-search-component']);
  }

}
