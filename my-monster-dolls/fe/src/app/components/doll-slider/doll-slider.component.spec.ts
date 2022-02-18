import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollSliderComponent } from './doll-slider.component';

describe('DollSliderComponent', () => {
  let component: DollSliderComponent;
  let fixture: ComponentFixture<DollSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DollSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DollSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
