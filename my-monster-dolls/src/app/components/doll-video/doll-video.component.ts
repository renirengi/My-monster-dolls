import { Component, Input } from '@angular/core';
import { IDoll } from 'src/app/models';

@Component({
  selector: 'doll-video',
  templateUrl: './doll-video.component.html'
})
export class DollVideoComponent {

  public videoObject = "https://www.youtube.com/watch?v=jK1n_57kNhM";

  @Input()
  set doll(d: IDoll) {
   this.videoObject = d.video!;
  }


  constructor() { }

}
