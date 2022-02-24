import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnPageComponent } from './own-page.component';

describe('OwnPageComponent', () => {
  let component: OwnPageComponent;
  let fixture: ComponentFixture<OwnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
