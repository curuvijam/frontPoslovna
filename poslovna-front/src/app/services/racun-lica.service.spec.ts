import { TestBed, inject } from '@angular/core/testing';

import { RacunLicaService } from './racun-lica.service';

describe('RacunLicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RacunLicaService]
    });
  });

  it('should be created', inject([RacunLicaService], (service: RacunLicaService) => {
    expect(service).toBeTruthy();
  }));
});
