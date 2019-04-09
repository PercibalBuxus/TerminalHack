import { TestBed } from '@angular/core/testing';

import { CrackerService } from './cracker.service';

describe('CrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrackerService = TestBed.get(CrackerService);
    expect(service).toBeTruthy();
  });
});
