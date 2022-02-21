import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollVideoComponent } from './doll-video.component';

describe('DollVideoComponent', () => {
  let component: DollVideoComponent;
  let fixture: ComponentFixture<DollVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DollVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DollVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
