import { TestBed, inject } from '@angular/core/testing';

import { KlijentService } from './klijent.service';

describe('KlijentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KlijentService]
    });
  });

  it('should be created', inject([KlijentService], (service: KlijentService) => {
    expect(service).toBeTruthy();
  }));
});
