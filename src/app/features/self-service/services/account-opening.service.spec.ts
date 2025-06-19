import { TestBed } from '@angular/core/testing';

import { AccountOpeningService } from './account-opening.service';

describe('AccountOpeningService', () => {
  let service: AccountOpeningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountOpeningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
