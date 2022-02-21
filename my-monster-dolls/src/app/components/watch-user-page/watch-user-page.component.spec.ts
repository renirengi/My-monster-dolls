import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchUserPageComponent } from './watch-user-page.component';

describe('WatchUserPageComponent', () => {
  let component: WatchUserPageComponent;
  let fixture: ComponentFixture<WatchUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
