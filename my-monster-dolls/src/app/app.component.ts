import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public constructor(private router: Router) {}
  title = 'routing-app';
  public goToStartPage() {
    this.router.navigate(['/start-component']);
  }
}
