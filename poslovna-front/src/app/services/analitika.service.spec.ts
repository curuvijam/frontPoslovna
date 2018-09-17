import { TestBed, inject } from '@angular/core/testing';

import { AnalitikaService } from './analitika.service';

describe('AnalitikaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnalitikaService]
    });
  });

  it('should be created', inject([AnalitikaService], (service: AnalitikaService) => {
    expect(service).toBeTruthy();
  }));
});
