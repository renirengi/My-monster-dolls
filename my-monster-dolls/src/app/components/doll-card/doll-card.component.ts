import { Component, Input, OnInit } from '@angular/core';
import { IDoll } from '../../models';

@Component({
  selector: 'doll-card',
  templateUrl: './doll-card.component.html'
})
export class DollCardComponent implements OnInit {
  @Input() doll!: IDoll;

  constructor() { }

  ngOnInit(): void {
  }

}
