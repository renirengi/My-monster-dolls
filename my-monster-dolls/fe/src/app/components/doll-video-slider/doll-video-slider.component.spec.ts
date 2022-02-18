import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollVideoSliderComponent } from './doll-video-slider.component';

describe('DollVideoSliderComponent', () => {
  let component: DollVideoSliderComponent;
  let fixture: ComponentFixture<DollVideoSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DollVideoSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DollVideoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
