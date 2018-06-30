import { TestBed, inject } from '@angular/core/testing';

import { DrzaveService } from './drzave.service';

describe('DrzaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrzaveService]
    });
  });

  it('should be created', inject([DrzaveService], (service: DrzaveService) => {
    expect(service).toBeTruthy();
  }));
});
