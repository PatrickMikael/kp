import { TestBed } from '@angular/core/testing';

import { KueService } from './kue.service';

describe('KueService', () => {
  let service: KueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
