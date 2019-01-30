import { TestBed } from '@angular/core/testing';

import { PraFiveService } from './pra-five.service';

describe('PraFiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PraFiveService = TestBed.get(PraFiveService);
    expect(service).toBeTruthy();
  });
});
