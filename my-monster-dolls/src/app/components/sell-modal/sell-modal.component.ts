import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDoll } from 'src/app/models';

@Component({
  selector: 'sell-modal',
  templateUrl: 'sell-modal.component.html',
})
export class SellModalComponent {
  public doll: IDoll;
  public sellForm = new FormGroup({
    description: new FormControl('', [Validators.maxLength(500)]),
    price: new FormControl(''),
    photo1: new FormControl(''),

  });

  constructor(
    public dialogRef: MatDialogRef<SellModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { doll: IDoll },
  ) {
    this.doll = data.doll;
  }

}

