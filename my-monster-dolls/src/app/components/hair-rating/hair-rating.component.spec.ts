import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRatingComponent } from './hair-rating.component';

describe('HairRatingComponent', () => {
  let component: DetailsRatingComponent;
  let fixture: ComponentFixture<DetailsRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
