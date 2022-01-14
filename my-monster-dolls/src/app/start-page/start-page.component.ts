import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  title = 'routing-app';
  public goToUserPage() {
    this.router.navigate(['/user-component']);
  }
  public goToMainPage(){
    this.router.navigate(['/main-component']);
  }
  public goToCatalogPage(){
    this.router.navigate(['/catalog-component']);
  }
  public goToSecondStartPage(){
    this.router.navigate(['/second-start-component']);
  }

}
