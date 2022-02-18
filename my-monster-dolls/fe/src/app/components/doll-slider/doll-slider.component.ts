import { Component, Input } from '@angular/core';
import { IDoll } from 'src/app/models';

@Component({
  selector: 'doll-slider',
  templateUrl: './doll-slider.component.html',
})
export class DollSliderComponent {
  public imageObject: any[];

  @Input()
  set doll(d: IDoll) {
    const title = d.character;

    this.imageObject = d.galleryImagesLinks.map((image, i) => {
      return {
        image,
        thumbImage: image,
        title,
        alt: `${title} ${i}`
      };
    });

  }

  constructor() {}

}
