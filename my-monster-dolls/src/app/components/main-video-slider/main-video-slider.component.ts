import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-video-slider',
  templateUrl: './main-video-slider.component.html'
})
export class MainVideoSliderComponent implements OnInit {

   imageObject = [{
      video: 'https://www.youtube.com/watch?v=os1_jmyjr8s&list=PLpD50DbLddNAkCgXxPx0sRGAx_mqXgOVJ&index=11',
      alt: 'youtube video'
  }, {
      video: 'https://www.youtube.com/watch?v=QCAD2LSECis',
      alt: 'youtube video'
  }, 
  {
      video: 'https://www.youtube.com/watch?v=1cR5r_-fqWM&list=PLuvHbx9ArE4BQsEwWz-dshIUofV7ehJKY&index=5',
      alt: 'youtube video'
  }, 
  {
      video: 'https://www.youtube.com/watch?v=8O3q_qrIv-U&list=PLuvHbx9ArE4BQsEwWz-dshIUofV7ehJKY',
      alt: 'youtube video'
  }, 
  {
      video: 'https://www.youtube.com/watch?v=xgFVFha0cbk&list=PLx8SkoSVa_nhRMFrRT0umYHu2Pxx1ReT0&index=8',
      alt: 'youtube video'
  }, 
  {
      video: 'https://www.youtube.com/watch?v=y0Xuhvm0E-o',
      alt: 'youtube video'
  }, 
  {
      video: 'https://www.youtube.com/watch?v=giE8sN0XwKU',
      alt: 'youtube video'
  }, 
  {
       video: 'https://www.youtube.com/watch?v=W_o5ZbHbiIE&list=PL4J2vnP5zb7O1Gf0-BtTwBT3LaAhYPWc4',
      alt: 'youtube video'
  },
  {
       video: 'https://www.youtube.com/watch?v=v6rAx6cUlxc&t=2007s',
      alt: 'youtube video'
  },
  {
       video: 'https://www.youtube.com/watch?v=YYq5DkJouSk',
      alt: 'youtube video'
  },
  {
       video: 'https://www.youtube.com/watch?v=wLcxVg39vAY',
      alt: 'youtube video'
  },
   {
       video: 'https://www.youtube.com/watch?v=n6VSJS3cKn8',
      alt: 'youtube video'
  },
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
