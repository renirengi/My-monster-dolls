import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollCommentComponent } from './doll-comment.component';

describe('DollCommentComponent', () => {
  let component: DollCommentComponent;
  let fixture: ComponentFixture<DollCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DollCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DollCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
