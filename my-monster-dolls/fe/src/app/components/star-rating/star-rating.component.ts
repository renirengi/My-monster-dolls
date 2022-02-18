import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
})
export class StarRatingComponent {
  @Input() rating?: number = 0;
  @Output() update = new EventEmitter<number>();

  public readonly values = [1,2,3,4,5];

  constructor() {}

  public apply(rating: number) {
    this.update.emit(rating);

  }

  public isActive(val: number): boolean {
    return val <= (this.rating || 0);
  }
}
