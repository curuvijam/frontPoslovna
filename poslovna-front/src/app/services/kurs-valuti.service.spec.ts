import { TestBed, inject } from '@angular/core/testing';

import { KursValutiService } from './kurs-valuti.service';

describe('KursValutiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KursValutiService]
    });
  });

  it('should be created', inject([KursValutiService], (service: KursValutiService) => {
    expect(service).toBeTruthy();
  }));
});
