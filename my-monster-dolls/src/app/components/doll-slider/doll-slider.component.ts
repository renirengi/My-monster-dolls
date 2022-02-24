import { Component, Input } from '@angular/core';
import { IDoll } from 'src/app/models';

@Component({
  selector: 'doll-slider',
  templateUrl: './doll-slider.component.html',
})
export class DollSliderComponent {
    @Input() doll!: IDoll;


  constructor() {}

}
