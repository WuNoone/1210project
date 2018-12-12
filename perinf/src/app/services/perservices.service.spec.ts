import { TestBed } from '@angular/core/testing';

import { PerservicesService } from './perservices.service';

describe('PerservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerservicesService = TestBed.get(PerservicesService);
    expect(service).toBeTruthy();
  });
});
