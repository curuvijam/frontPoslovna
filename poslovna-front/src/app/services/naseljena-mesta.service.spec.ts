import { TestBed, inject } from '@angular/core/testing';

import { NaseljenaMestaService } from './naseljena-mesta.service';

describe('NaseljenaMestaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaseljenaMestaService]
    });
  });

  it('should be created', inject([NaseljenaMestaService], (service: NaseljenaMestaService) => {
    expect(service).toBeTruthy();
  }));
});
