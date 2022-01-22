import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserPageComponent } from '../user-page/user-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
})
export class StartPageComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}
  title = 'routing-app';

  public goToMainPage() {
    this.router.navigate(['/main']);
  }
  public goToCatalogPage() {
    this.router.navigate(['/catalog']);
  }

  public openSignupDialog(): void {
    const dialogRef = this.dialog.open(UserPageComponent, {
      width: '50vh',
    });
  }
  public openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginPageComponent, {
      width: '50vh',
    });
  }
}
