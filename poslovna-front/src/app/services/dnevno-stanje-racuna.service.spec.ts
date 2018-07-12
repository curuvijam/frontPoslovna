import { TestBed, inject } from '@angular/core/testing';

import { DnevnoStanjeRacunaService } from './dnevno-stanje-racuna.service';

describe('DnevnoStanjeRacunaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DnevnoStanjeRacunaService]
    });
  });

  it('should be created', inject([DnevnoStanjeRacunaService], (service: DnevnoStanjeRacunaService) => {
    expect(service).toBeTruthy();
  }));
});
