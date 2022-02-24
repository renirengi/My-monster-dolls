import { Component, OnInit, Input } from '@angular/core';
import { IDoll } from 'src/app/models';

@Component({
  selector: 'doll-video-slider',
  templateUrl: './doll-video-slider.component.html'
})
export class DollVideoSliderComponent implements OnInit {
  public promo = "https://www.youtube.com/watch?v=nGawAhRjtoA";
  public video = "https://www.youtube.com/watch?v=iUNVDJ-B9dM";
  public videoObject: any;

  @Input()
  set doll(d: IDoll) {

   this.videoObject = d.video!
  }

  constructor() { }

  ngOnInit(): void {
   this.videoObject = [{
      video: this.video,
      alt: 'youtube video'
  }, {
      video: this.promo,
      alt: 'youtube video'
  },

  ]

  }
}

