import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToSearchPage() {
    this.router.navigate(['/search-component']);
  }

  public goToUserPage() {
    this.router.navigate(['/user-component']);
  }

}
