import { TestBed, inject } from '@angular/core/testing';

import { ValuteService } from './valute.service';

describe('ValuteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValuteService]
    });
  });

  it('should be created', inject([ValuteService], (service: ValuteService) => {
    expect(service).toBeTruthy();
  }));
});
