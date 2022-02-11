import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { IDoll } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
  public dolls: Observable<IDoll[]>;
  public counter: number = 0;
  public src = [
    "os1_jmyjr8s",
    "QCAD2LSECis",
    "1cR5r_-fqWM",
    "8O3q_qrIv-U",
    "xgFVFha0cbk",
    "y0Xuhvm0E-o",
    "giE8sN0XwKU",
  ];
  public videoUrl: string = 'https://www.youtube.com/embed/' + this.src[0];
  public rightVideo: any = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  public constructor(
    private dollsService: DollsService,
    private sanitizer: DomSanitizer,
  ) { }

  public ngOnInit(): void {

  }
  videoSwitchPrev() {
    if (this.counter < this.src.length && this.counter > 0) {
      this.counter--;
      this.rightVideo = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.src[this.counter]);
      console.log('%c%s', 'color: #00bf00', this.counter);
    }
  }
  videoSwitchNext() {
    if (this.counter < this.src.length - 1) {
      this.counter++;
      this.rightVideo = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.src[this.counter]);
    }
  }
}
