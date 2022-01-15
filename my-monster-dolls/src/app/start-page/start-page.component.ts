import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}
  title = 'routing-app';

  public goToMainPage() {
    this.router.navigate(['/main-component']);
  }
  public goToCatalogPage() {
    this.router.navigate(['/catalog-component']);
  }

  public openDialog(): void {}
}
