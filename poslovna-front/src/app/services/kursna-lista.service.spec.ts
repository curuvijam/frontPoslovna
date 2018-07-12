import { TestBed, inject } from '@angular/core/testing';

import { KursnaListaService } from './kursna-lista.service';

describe('KursnaListaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KursnaListaService]
    });
  });

  it('should be created', inject([KursnaListaService], (service: KursnaListaService) => {
    expect(service).toBeTruthy();
  }));
});
