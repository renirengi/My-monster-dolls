import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvSearchPageComponent } from './adv-search-page.component';

describe('AdvSearchPageComponent', () => {
  let component: AdvSearchPageComponent;
  let fixture: ComponentFixture<AdvSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvSearchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
