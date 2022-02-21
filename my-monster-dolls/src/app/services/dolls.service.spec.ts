import { TestBed } from '@angular/core/testing';

import { DollsService } from './dolls.service';

describe('DollsService', () => {
  let service: DollsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DollsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
