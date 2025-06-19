import { TestBed } from '@angular/core/testing';

import { AntiSpoofingService } from './anti-spoofing.service';

describe('AntiSpoofingService', () => {
  let service: AntiSpoofingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntiSpoofingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
