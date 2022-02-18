import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDoll } from '../../models';

@Component({
  selector: 'dolls-list',
  templateUrl: './dolls-list.component.html'
})
export class DollsListComponent {
  @Input() dolls!: IDoll[];
  @Input() currentPage: number|null = null;
  @Input() showLoadMore: boolean = false;
  @Output() loadMore = new EventEmitter()

  constructor() { }

  public onLoadMore() {
    this.loadMore.emit();
  }

}
