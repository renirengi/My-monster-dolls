import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollsListComponent } from './dolls-list.component';

describe('DollsListComponent', () => {
  let component: DollsListComponent;
  let fixture: ComponentFixture<DollsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DollsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DollsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
