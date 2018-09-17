import { TestBed, inject } from '@angular/core/testing';

import { BankaService } from './banka.service';

describe('BankaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankaService]
    });
  });

  it('should be created', inject([BankaService], (service: BankaService) => {
    expect(service).toBeTruthy();
  }));
});
