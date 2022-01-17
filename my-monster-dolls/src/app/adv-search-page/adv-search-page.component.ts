import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adv-search-page',
  templateUrl: './adv-search-page.component.html',
  styleUrls: ['./adv-search-page.component.scss']
})
export class AdvSearchPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  title = 'routing-app';

  public goToSearchPage() {
    this.router.navigate(['/search-component']);
  }
  public goToAdvSearchPage() {
    this.router.navigate(['/adv-search-component']);
  }


}
