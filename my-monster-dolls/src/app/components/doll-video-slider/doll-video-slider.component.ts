import { Component, OnInit, Input } from '@angular/core';
import { IDoll } from 'src/app/models';

@Component({
  selector: 'doll-video-slider',
  templateUrl: './doll-video-slider.component.html'
})
export class DollVideoSliderComponent implements OnInit {
  @Input() doll: IDoll;
  public promo = "https://www.youtube.com/watch?v=nGawAhRjtoA";
  public video = "https://www.youtube.com/watch?v=iUNVDJ-B9dM";
  public videoObject: any;

  constructor() { }

  ngOnInit(): void {
   this.videoObject = [{
      video: this.doll.promo!,
      alt: 'youtube video'
  }, {
      video: this.doll.video!,
      alt: 'youtube video'
  },

  ]
  }
}

