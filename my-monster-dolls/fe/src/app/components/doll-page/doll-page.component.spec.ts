import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollPageComponent } from './doll-page.component';

describe('DollPageComponent', () => {
  let component: DollPageComponent;
  let fixture: ComponentFixture<DollPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DollPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DollPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
