import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { IDoll } from 'src/app/models';
import { DollsService } from 'src/app/services/dolls.service';


@Component({
  selector: 'doll-rating',
  templateUrl: './doll-rating.component.html'
})
export class DollRatingComponent implements OnInit {
   @ Input () doll!:IDoll;

  hair: FormGroup;
  body: FormGroup;
  accessories: FormGroup;

  constructor(fb: FormBuilder, private dollService: DollsService,) {
    this.hair = fb.group({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    });

    this.body = fb.group({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    });
    this.accessories= fb.group({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    });
  }



  ngOnInit(): void {

  }
   async OnChange(){




}
}
