import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollRatingComponent } from './doll-rating.component';

describe('DollRatingComponent', () => {
  let component: DollRatingComponent;
  let fixture: ComponentFixture<DollRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DollRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DollRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
