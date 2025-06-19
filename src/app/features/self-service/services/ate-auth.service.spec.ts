import { TestBed } from '@angular/core/testing';

import { AteAuthService } from './ate-auth.service';

describe('AteAuthService', () => {
  let service: AteAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AteAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
