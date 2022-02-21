import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'details-rating',
  templateUrl: './hair-rating.component.html'
})
export class DetailsRatingComponent {
  @Input() ratingName: string;
  @Input() rating: {[key: string]: boolean};
  @Output() update = new EventEmitter<any>();

  constructor() {

  }

  valueClick(key: string, value: boolean) {
    this.rating[key] = value;
    this.update.emit(this.rating);
  }

}
