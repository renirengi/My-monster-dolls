import { Component, Input } from '@angular/core';
import { IDoll } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'doll-card',
  templateUrl: './doll-card.component.html',
})
export class DollCardComponent {
  @Input() doll!: IDoll;

  constructor(private router: Router) {}

  public goToDollPage(doll: IDoll) {
    this.router.navigate([`/catalog/${doll.id}`]);
  }
}
