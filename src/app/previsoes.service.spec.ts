import { TestBed } from '@angular/core/testing';

import { PrevisoesService } from './previsoes.service';

describe('PrevisoesService', () => {
  let service: PrevisoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrevisoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
