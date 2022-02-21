import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVideoSliderComponent } from './main-video-slider.component';

describe('MainVideoSliderComponent', () => {
  let component: MainVideoSliderComponent;
  let fixture: ComponentFixture<MainVideoSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainVideoSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVideoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
