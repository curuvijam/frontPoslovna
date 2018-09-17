import { TestBed, inject } from '@angular/core/testing';

import { VrstePlacanjaService } from './vrste-placanja.service';

describe('VrstePlacanjaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VrstePlacanjaService]
    });
  });

  it('should be created', inject([VrstePlacanjaService], (service: VrstePlacanjaService) => {
    expect(service).toBeTruthy();
  }));
});
