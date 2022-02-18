import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserPageComponent } from '../user-page/user-page.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';

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

  public openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '50vh',
    });
  }
}
