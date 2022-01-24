import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToSearchPage() {
    this.router.navigate(['/search']);
  }

  public goToUserPage() {
    this.router.navigate(['/user']);
  }
  public goToRegisterPage() {
    this.router.navigate(['/register']);
  }
  public goToLoginPage() {
    this.router.navigate(['/login']);
  }

}
