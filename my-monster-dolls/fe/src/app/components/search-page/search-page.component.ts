import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html'
})
export class SearchPageComponent implements OnInit {

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
