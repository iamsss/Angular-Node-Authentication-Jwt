import { TestBed, inject } from '@angular/core/testing';

import { SpeciaService } from './specia.service';

describe('SpeciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeciaService]
    });
  });

  it('should be created', inject([SpeciaService], (service: SpeciaService) => {
    expect(service).toBeTruthy();
  }));
});
